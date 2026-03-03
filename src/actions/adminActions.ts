"use server";

import { createClient } from "@/src/lib/supabase/server";
import { revalidatePath } from "next/cache";

// Helper to check admin role
async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Not authenticated");

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "admin") throw new Error("Not authorized");

  return { supabase, user };
}

// Get all courses from database
export async function getCoursesFromDB() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("code");

  if (error) throw error;
  return data;
}

// Get single course with sections
export async function getCourseWithSections(slug: string) {
  const supabase = await createClient();

  const { data: course, error: courseError } = await supabase
    .from("courses")
    .select("*")
    .eq("slug", slug)
    .single();

  if (courseError) return null;

  const { data: sections, error: sectionsError } = await supabase
    .from("sections")
    .select("*")
    .eq("course_id", course.id)
    .order("order_index");

  if (sectionsError) throw sectionsError;

  return { ...course, sections: sections || [] };
}

// Update course metadata
export async function updateCourse(
  courseId: string,
  data: {
    title?: string;
    description?: string;
    duration?: string;
    is_published?: boolean;
  }
) {
  const { supabase } = await requireAdmin();

  const { error } = await supabase
    .from("courses")
    .update({ ...data, updated_at: new Date().toISOString() })
    .eq("id", courseId);

  if (error) throw error;

  revalidatePath("/admin/courses");
  return { success: true };
}

// Update section content
export async function updateSection(
  sectionId: string,
  data: {
    title?: string;
    content?: string;
  }
) {
  const { supabase } = await requireAdmin();

  const { error } = await supabase
    .from("sections")
    .update({ ...data, updated_at: new Date().toISOString() })
    .eq("id", sectionId);

  if (error) throw error;

  revalidatePath("/admin/courses");
  return { success: true };
}

// Add new section to course
export async function addSection(courseId: string, title: string) {
  const { supabase } = await requireAdmin();

  // Get max order_index
  const { data: existing } = await supabase
    .from("sections")
    .select("order_index")
    .eq("course_id", courseId)
    .order("order_index", { ascending: false })
    .limit(1);

  const nextIndex = existing && existing.length > 0 ? existing[0].order_index + 1 : 0;

  const { data, error } = await supabase
    .from("sections")
    .insert({
      course_id: courseId,
      title,
      content: "# " + title + "\n\nAdd your content here...",
      order_index: nextIndex,
    })
    .select()
    .single();

  if (error) throw error;

  revalidatePath("/admin/courses");
  return data;
}

// Delete section
export async function deleteSection(sectionId: string) {
  const { supabase } = await requireAdmin();

  const { error } = await supabase
    .from("sections")
    .delete()
    .eq("id", sectionId);

  if (error) throw error;

  revalidatePath("/admin/courses");
  return { success: true };
}

// Reorder sections
export async function reorderSections(
  sectionIds: string[],
  newOrder: number[]
) {
  const { supabase } = await requireAdmin();

  for (let i = 0; i < sectionIds.length; i++) {
    await supabase
      .from("sections")
      .update({ order_index: newOrder[i] })
      .eq("id", sectionIds[i]);
  }

  revalidatePath("/admin/courses");
  return { success: true };
}
