"use server";

import { createClient } from "@/src/lib/supabase/server";
import { NextResponse } from "next/server";
import { courses } from "@/src/data/courses";
import { getLessonContent } from "@/src/data/lessonContent";

export async function POST() {
  const supabase = await createClient();

  // Check if user is admin
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "admin") {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  const results = { courses: 0, sections: 0, errors: [] as string[] };

  // Seed each course
  for (const course of courses) {
    // Check if course already exists
    const { data: existing } = await supabase
      .from("courses")
      .select("id")
      .eq("slug", course.slug)
      .single();

    let courseId: string;

    if (existing) {
      courseId = existing.id;
    } else {
      // Insert course
      const { data: newCourse, error: courseError } = await supabase
        .from("courses")
        .insert({
          title: course.title,
          slug: course.slug,
          code: course.code,
          short_title: course.shortTitle,
          description: course.description,
          duration: course.duration,
          tier: course.tier,
          icon: course.icon,
          is_published: true,
        })
        .select("id")
        .single();

      if (courseError) {
        results.errors.push(`Course ${course.slug}: ${courseError.message}`);
        continue;
      }
      courseId = newCourse.id;
      results.courses++;
    }

    // Seed sections for this course
    for (let i = 0; i < course.sections.length; i++) {
      const section = course.sections[i];
      const content = getLessonContent(course.slug, i);

      // Check if section exists
      const { data: existingSection } = await supabase
        .from("sections")
        .select("id")
        .eq("course_id", courseId)
        .eq("order_index", i)
        .single();

      if (!existingSection) {
        const { error: sectionError } = await supabase.from("sections").insert({
          course_id: courseId,
          title: section,
          content: content,
          order_index: i,
        });

        if (sectionError) {
          results.errors.push(
            `Section ${course.slug}/${i}: ${sectionError.message}`
          );
        } else {
          results.sections++;
        }
      }
    }
  }

  return NextResponse.json({
    success: true,
    message: `Seeded ${results.courses} courses and ${results.sections} sections`,
    errors: results.errors,
  });
}
