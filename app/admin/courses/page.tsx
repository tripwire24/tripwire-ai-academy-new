import Link from "next/link";
import { courses, getCoursesByTier } from "@/src/data/courses";
import {
  Brain, Shield, Building2, MessageSquareCode, Terminal,
  Sparkles, Image, Workflow, Lock, Edit, Eye,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain, Shield, Building2, MessageSquareCode, Terminal, Sparkles, Image, Workflow, Lock,
};

export const metadata = {
  title: "Manage Courses | Tripwire AI Academy Admin",
};

export default function AdminCoursesPage() {
  const foundational = getCoursesByTier("foundational");
  const implementation = getCoursesByTier("implementation");

  const CourseRow = ({ course }: { course: (typeof courses)[0] }) => {
    const Icon = iconMap[course.icon] ?? Brain;
    return (
      <div className="flex items-center justify-between rounded-lg border border-border bg-background p-4 hover:shadow-sm transition-shadow">
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-accent/10 p-2">
            <Icon className="h-5 w-5 text-accent" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">
                {course.code}
              </span>
              <h3 className="font-semibold text-sm">{course.shortTitle}</h3>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              {course.sections.length} sections • {course.duration} •{" "}
              {course.handouts.length} handouts
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={`/courses/${course.slug}/learn`}
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium hover:bg-secondary transition-colors"
          >
            <Eye className="h-3 w-3" />
            Preview
          </Link>
          <Link
            href={`/admin/courses/${course.slug}`}
            className="inline-flex items-center gap-1.5 rounded-md bg-primary text-primary-foreground px-3 py-1.5 text-xs font-medium hover:bg-primary/90 transition-colors"
          >
            <Edit className="h-3 w-3" />
            Edit
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Manage Courses</h1>
        <p className="text-muted-foreground mt-1">
          Edit course content, sections, and materials. Changes are saved to{" "}
          <code className="bg-secondary px-1.5 py-0.5 rounded text-xs">
            src/data/courses.ts
          </code>{" "}
          and{" "}
          <code className="bg-secondary px-1.5 py-0.5 rounded text-xs">
            src/data/lessonContent.ts
          </code>
        </p>
      </div>

      {/* Tier 1 */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-blue-500/10 text-blue-600 px-2.5 py-0.5 text-xs font-medium">
            Tier 1
          </span>
          Foundational
        </h2>
        <div className="space-y-3">
          {foundational.map((course) => (
            <CourseRow key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Tier 2 */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-violet-500/10 text-violet-600 px-2.5 py-0.5 text-xs font-medium">
            Tier 2
          </span>
          Implementation
        </h2>
        <div className="space-y-3">
          {implementation.map((course) => (
            <CourseRow key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Help text */}
      <div className="rounded-xl border border-border bg-secondary/50 p-6">
        <h3 className="font-semibold mb-2">How Content Management Works</h3>
        <div className="text-sm text-muted-foreground space-y-2">
          <p>
            Course structure (titles, descriptions, sections, objectives) is defined in{" "}
            <strong>src/data/courses.ts</strong>. Lesson content (the actual teaching material rendered
            in the learn view) is in <strong>src/data/lessonContent.ts</strong>.
          </p>
          <p>
            To add or edit content: click <strong>Edit</strong> on any course to see the current content
            and section structure. You can preview how it looks to learners by clicking <strong>Preview</strong>.
          </p>
          <p>
            For bulk content updates, edit the source files directly in your code editor or use the
            agentic workspace to make changes and push to GitHub. Vercel auto-deploys on every push.
          </p>
        </div>
      </div>
    </div>
  );
}
