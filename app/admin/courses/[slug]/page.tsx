import { notFound } from "next/navigation";
import Link from "next/link";
import { courses, getCourseBySlug } from "@/src/data/courses";
import { getLessonContent } from "@/src/data/lessonContent";
import ReactMarkdown from "react-markdown";
import {
  Brain, Shield, Building2, MessageSquareCode, Terminal,
  Sparkles, Image, Workflow, Lock, Eye, ChevronLeft,
  BookOpen, FileText, Clock, Users, Target, CheckCircle2,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain, Shield, Building2, MessageSquareCode, Terminal, Sparkles, Image, Workflow, Lock,
};

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: `Edit: ${course.code} ${course.shortTitle} | Admin`,
  };
}

export default async function AdminCourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const Icon = iconMap[course.icon] ?? Brain;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back link */}
      <Link
        href="/admin/courses"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ChevronLeft className="h-4 w-4" />
        All Courses
      </Link>

      {/* Course header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-accent/10 p-3">
            <Icon className="h-6 w-6 text-accent" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-muted-foreground bg-secondary rounded px-1.5 py-0.5">
                {course.code}
              </span>
              <span className="inline-flex items-center rounded-full bg-accent/10 text-accent px-2 py-0.5 text-xs font-medium">
                {course.tier === "foundational" ? "Tier 1" : "Tier 2"}
              </span>
            </div>
            <h1 className="text-2xl font-bold">{course.title}</h1>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              {course.description}
            </p>
          </div>
        </div>
        <Link
          href={`/courses/${course.slug}/learn`}
          className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors shrink-0"
        >
          <Eye className="h-4 w-4" />
          Preview as Learner
        </Link>
      </div>

      {/* Course metadata grid */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <div className="rounded-lg border border-border p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <Clock className="h-4 w-4" />
            Duration
          </div>
          <p className="font-semibold">{course.duration}</p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <BookOpen className="h-4 w-4" />
            Sections
          </div>
          <p className="font-semibold">{course.sections.length}</p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <FileText className="h-4 w-4" />
            Handouts
          </div>
          <p className="font-semibold">{course.handouts.length}</p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <Users className="h-4 w-4" />
            Audience
          </div>
          <p className="font-semibold text-sm">{course.audience.join(", ")}</p>
        </div>
      </div>

      {/* Learning Objectives */}
      <div className="rounded-xl border border-border bg-background p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Target className="h-5 w-5 text-accent" />
          <h2 className="text-lg font-bold">Learning Objectives</h2>
        </div>
        <ul className="space-y-2">
          {course.objectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
              {obj}
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground mt-4">
          Edit in <code className="bg-secondary px-1 rounded">src/data/courses.ts</code> → objectives array
        </p>
      </div>

      {/* Sections + Content Preview */}
      <h2 className="text-lg font-bold mb-4">Sections & Content</h2>
      <div className="space-y-6 mb-8">
        {course.sections.map((section, i) => {
          const content = getLessonContent(slug, i);
          const hasContent = !content.includes("Content Coming Soon");

          return (
            <div
              key={i}
              className="rounded-xl border border-border bg-background shadow-sm overflow-hidden"
            >
              {/* Section header */}
              <div className="flex items-center justify-between p-5 border-b border-border bg-secondary/30">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-muted-foreground">
                      Section {i + 1}
                    </span>
                    <span className="text-xs text-muted-foreground bg-secondary rounded-full px-2 py-0.5">
                      {section.duration}
                    </span>
                    {hasContent ? (
                      <span className="inline-flex items-center rounded-full bg-emerald-500/10 text-emerald-600 px-2 py-0.5 text-xs font-medium">
                        Content Ready
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-amber-500/10 text-amber-600 px-2 py-0.5 text-xs font-medium">
                        Needs Content
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold">{section.title}</h3>
                </div>
              </div>

              {/* Topics */}
              <div className="p-5 border-b border-border">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Topics Covered
                </h4>
                <ul className="grid gap-1 sm:grid-cols-2">
                  {section.topics.map((topic, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted-foreground flex items-start gap-1.5"
                    >
                      <span className="text-accent mt-1">•</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Content preview */}
              <div className="p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Content Preview
                </h4>
                <div className="prose prose-zinc dark:prose-invert prose-sm max-w-none max-h-64 overflow-y-auto rounded-lg border border-border bg-secondary/20 p-4
                  prose-h2:text-base prose-h3:text-sm prose-p:text-sm
                  prose-table:text-xs prose-th:bg-secondary/50 prose-th:px-3 prose-th:py-1.5
                  prose-td:px-3 prose-td:py-1.5 prose-td:border-b prose-td:border-border
                ">
                  <ReactMarkdown>{content}</ReactMarkdown>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Edit in{" "}
                  <code className="bg-secondary px-1 rounded">
                    src/data/lessonContent.ts
                  </code>{" "}
                  → key: <code className="bg-secondary px-1 rounded">&quot;{slug}:{i}&quot;</code>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Handouts */}
      {course.handouts.length > 0 && (
        <div className="rounded-xl border border-border bg-background p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-5 w-5 text-accent" />
            <h2 className="text-lg font-bold">Handouts & Materials</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {course.handouts.map((handout, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border border-border p-3"
              >
                <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                <span className="text-sm">{handout}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Edit in <code className="bg-secondary px-1 rounded">src/data/courses.ts</code> → handouts array
          </p>
        </div>
      )}

      {/* Edit guide */}
      <div className="rounded-xl border border-border bg-secondary/50 p-6">
        <h3 className="font-semibold mb-2">How to Edit This Course</h3>
        <div className="text-sm text-muted-foreground space-y-2">
          <p>
            <strong>Course structure</strong> (title, description, objectives, sections, handouts):
            Edit <code className="bg-secondary px-1 rounded">src/data/courses.ts</code> — find the
            course with slug <code className="bg-secondary px-1 rounded">&quot;{slug}&quot;</code>.
          </p>
          <p>
            <strong>Lesson content</strong> (the teaching material learners read):
            Edit <code className="bg-secondary px-1 rounded">src/data/lessonContent.ts</code> — each
            section maps to key <code className="bg-secondary px-1 rounded">&quot;{slug}:0&quot;</code>,{" "}
            <code className="bg-secondary px-1 rounded">&quot;{slug}:1&quot;</code>, etc.
          </p>
          <p>
            After editing, push to GitHub and Vercel auto-deploys within ~60 seconds.
          </p>
        </div>
      </div>
    </div>
  );
}
