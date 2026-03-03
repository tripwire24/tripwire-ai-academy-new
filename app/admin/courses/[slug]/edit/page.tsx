import { notFound } from "next/navigation";
import Link from "next/link";
import { getCourseWithSections } from "@/src/actions/adminActions";
import CourseEditForm from "@/src/components/admin/CourseEditForm";
import SectionEditor from "@/src/components/admin/SectionEditor";
import AddSectionForm from "@/src/components/admin/AddSectionForm";
import {
  Brain, Shield, Building2, MessageSquareCode, Terminal,
  Sparkles, Image, Workflow, Lock, Eye, ChevronLeft, BookOpen,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain, Shield, Building2, MessageSquareCode, Terminal, Sparkles, Image, Workflow, Lock,
};

export default async function AdminCourseEditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await getCourseWithSections(slug);
  
  if (!course) {
    notFound();
  }

  const Icon = iconMap[course.icon] ?? Brain;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Back link */}
      <Link
        href="/admin/courses"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ChevronLeft className="h-4 w-4" />
        All Courses
      </Link>

      {/* Course header */}
      <div className="flex items-start gap-4 mb-8">
        <div className="rounded-xl bg-accent/10 p-3">
          <Icon className="h-6 w-6 text-accent" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs text-muted-foreground bg-secondary rounded px-1.5 py-0.5">
              {course.code}
            </span>
            <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
              course.is_published 
                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
            }`}>
              {course.is_published ? "Published" : "Draft"}
            </span>
          </div>
          <h1 className="text-2xl font-bold">{course.title}</h1>
        </div>
        <Link
          href={`/courses/${course.slug}/learn`}
          className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm hover:bg-secondary transition-colors"
        >
          <Eye className="h-4 w-4" />
          Preview
        </Link>
      </div>

      {/* Course details form */}
      <div className="mb-8">
        <CourseEditForm course={course} />
      </div>

      {/* Sections */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold">
            Sections ({course.sections.length})
          </h2>
        </div>

        {course.sections.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border p-8 text-center text-muted-foreground">
            <p className="mb-4">No sections yet. Add your first section to get started.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {course.sections.map((section: { id: string; title: string; content: string | null; order_index: number }, index: number) => (
              <SectionEditor
                key={section.id}
                section={section}
                index={index}
              />
            ))}
          </div>
        )}

        <AddSectionForm courseId={course.id} />
      </div>
    </div>
  );
}
