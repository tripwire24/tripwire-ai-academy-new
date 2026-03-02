import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/src/components/layout/Nav";
import { Footer } from "@/src/components/layout/Footer";
import { Breadcrumbs } from "@/src/components/layout/Breadcrumbs";
import { courses, getCourseBySlug } from "@/src/data/courses";
import {
  Brain,
  Shield,
  Building2,
  MessageSquareCode,
  Terminal,
  Sparkles,
  Image,
  Workflow,
  Lock,
  Clock,
  Users,
  Target,
  BookOpen,
  FileText,
  ChevronRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain, Shield, Building2, MessageSquareCode, Terminal, Sparkles, Image, Workflow, Lock,
};

// Generate static params for all courses
export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

// Dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: `${course.code}: ${course.shortTitle} | Tripwire AI Academy`,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const Icon = iconMap[course.icon] ?? Brain;

  // Find next course for navigation
  const currentIndex = courses.findIndex((c) => c.slug === slug);
  const nextCourse = currentIndex < courses.length - 1 ? courses[currentIndex + 1] : null;
  const prevCourse = currentIndex > 0 ? courses[currentIndex - 1] : null;

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />

      <main className="flex-1">
        {/* Hero banner */}
        <section className="w-full border-b border-border bg-secondary py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Courses", href: "/courses" },
                { label: `${course.code}: ${course.shortTitle}` },
              ]}
            />
            <div className="flex flex-col md:flex-row md:items-start md:gap-6 mt-4">
              <div className="inline-flex items-center justify-center rounded-xl p-3 bg-background border border-border shadow-sm mb-4 md:mb-0">
                <Icon className="h-8 w-8 text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center rounded-full bg-accent/10 text-accent px-2.5 py-0.5 text-xs font-medium">
                    {course.tier === "foundational" ? "Tier 1: Foundational" : "Tier 2: Implementation"}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {course.code}
                  </span>
                </div>
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-3">
                  {course.title}
                </h1>
                <p className="text-muted-foreground md:text-lg max-w-[700px]">
                  {course.description}
                </p>

                {/* Quick stats */}
                <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    {course.audience.join(", ")}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4" />
                    {course.format}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            {/* Main content */}
            <div className="space-y-12">
              {/* Learning Objectives */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Target className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-bold">What You&apos;ll Learn</h2>
                </div>
                <ul className="space-y-3">
                  {course.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-sm">{obj}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Course Outline */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-bold">Course Outline</h2>
                </div>
                <div className="space-y-4">
                  {course.sections.map((section, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border bg-background p-5 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">
                          <span className="text-muted-foreground font-mono text-sm mr-2">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {section.title}
                        </h3>
                        <span className="text-xs text-muted-foreground bg-secondary rounded-full px-2.5 py-0.5">
                          {section.duration}
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {section.topics.map((topic, j) => (
                          <li
                            key={j}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <ChevronRight className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Handouts */}
              {course.handouts.length > 0 && (
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="h-5 w-5 text-accent" />
                    <h2 className="text-xl font-bold">Included Materials</h2>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {course.handouts.map((handout, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-lg border border-border bg-background p-4"
                      >
                        <FileText className="h-5 w-5 text-muted-foreground shrink-0" />
                        <span className="text-sm font-medium">{handout}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Enroll card */}
              <div className="rounded-xl border border-border bg-background p-6 shadow-sm sticky top-20">
                <h3 className="font-semibold mb-4">Ready to begin?</h3>
                <Link
                  href="/login"
                  className="w-full inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-10 px-6 text-sm font-medium shadow hover:bg-primary/90 transition-colors"
                >
                  Sign Up &amp; Enroll
                </Link>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Free account required to track progress
                </p>

                <hr className="my-5 border-border" />

                {/* Prerequisites */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Prerequisites</h4>
                  <ul className="space-y-1">
                    {course.prerequisites.map((p, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted-foreground flex items-start gap-1.5"
                      >
                        <ChevronRight className="h-3 w-3 mt-0.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="my-5 border-border" />

                {/* Quick facts */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Sections</span>
                    <span className="font-medium">{course.sections.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Handouts</span>
                    <span className="font-medium">{course.handouts.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Format</span>
                    <span className="font-medium text-right text-xs max-w-[160px]">{course.format}</span>
                  </div>
                </div>
              </div>

              {/* Navigation to other courses */}
              <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
                <h4 className="text-sm font-medium mb-3">Course Navigation</h4>
                <div className="space-y-2">
                  {prevCourse && (
                    <Link
                      href={`/courses/${prevCourse.slug}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ChevronRight className="h-3.5 w-3.5 rotate-180" />
                      <span className="font-mono text-xs">{prevCourse.code}</span> {prevCourse.shortTitle}
                    </Link>
                  )}
                  {nextCourse && (
                    <Link
                      href={`/courses/${nextCourse.slug}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ChevronRight className="h-3.5 w-3.5" />
                      <span className="font-mono text-xs">{nextCourse.code}</span> {nextCourse.shortTitle}
                    </Link>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
