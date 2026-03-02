"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getCourseBySlug, courses } from "@/src/data/courses";
import { getLessonContent } from "@/src/data/lessonContent";
import { createClient } from "@/src/lib/supabase/client";
import {
  Brain, Shield, Building2, MessageSquareCode, Terminal,
  Sparkles, Image, Workflow, Lock, ChevronLeft, ChevronRight,
  CheckCircle2, Circle, BookOpen, GraduationCap, Home, Menu, X,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain, Shield, Building2, MessageSquareCode, Terminal, Sparkles, Image, Workflow, Lock,
};

export default function LearnPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const slug = params.slug as string;
  const sectionParam = searchParams.get("section");
  const course = getCourseBySlug(slug);

  const [currentSection, setCurrentSection] = useState(
    sectionParam ? parseInt(sectionParam, 10) : 0
  );
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const [user, setUser] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Auth check
  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        router.push("/login");
        return;
      }
      setUser(session.user);
    });
  }, [router]);

  // Load progress from localStorage
  useEffect(() => {
    if (!slug) return;
    const saved = localStorage.getItem(`progress:${slug}`);
    if (saved) {
      try {
        setCompletedSections(JSON.parse(saved));
      } catch {
        // ignore
      }
    }
  }, [slug]);

  // Update URL when section changes
  useEffect(() => {
    if (sectionParam !== null && parseInt(sectionParam, 10) !== currentSection) {
      // Only update if different
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentSection, sectionParam]);

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Link href="/courses" className="text-accent hover:underline">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[course.icon] ?? Brain;
  const totalSections = course.sections.length;
  const section = course.sections[currentSection];
  const content = getLessonContent(slug, currentSection);
  const progress = Math.round((completedSections.length / totalSections) * 100);
  const isComplete = completedSections.includes(currentSection);
  const allComplete = completedSections.length === totalSections;

  const markComplete = () => {
    if (!completedSections.includes(currentSection)) {
      const updated = [...completedSections, currentSection];
      setCompletedSections(updated);
      localStorage.setItem(`progress:${slug}`, JSON.stringify(updated));
    }
  };

  const goToSection = (index: number) => {
    setCurrentSection(index);
    setSidebarOpen(false);
  };

  const goNext = () => {
    if (currentSection < totalSections - 1) {
      markComplete();
      setCurrentSection(currentSection + 1);
    }
  };

  const goPrev = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  // Find next/prev course
  const courseIndex = courses.findIndex((c) => c.slug === slug);
  const nextCourse = courseIndex < courses.length - 1 ? courses[courseIndex + 1] : null;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 rounded-md hover:bg-secondary"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <Link
              href={`/courses/${slug}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back to course</span>
            </Link>
            <span className="text-muted-foreground/40">|</span>
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium hidden sm:inline">{course.code}: {course.shortTitle}</span>
              <span className="text-sm font-medium sm:hidden">{course.code}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <span>{completedSections.length}/{totalSections} sections</span>
              <div className="w-24 h-1.5 rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-accent transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <Link
              href="/dashboard"
              className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground"
            >
              <Home className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-40 w-72 border-r border-border bg-background pt-14 transform transition-transform lg:relative lg:translate-x-0 lg:pt-0
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="h-full overflow-y-auto p-4">
            {/* Course info */}
            <div className="mb-4 pb-4 border-b border-border">
              <h3 className="font-semibold text-sm mb-1">{course.shortTitle}</h3>
              <p className="text-xs text-muted-foreground">{course.duration} • {totalSections} sections</p>
              {/* Progress bar */}
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{progress}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-accent transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Section list */}
            <nav className="space-y-1">
              {course.sections.map((sec, i) => {
                const isCurrent = i === currentSection;
                const isDone = completedSections.includes(i);
                return (
                  <button
                    key={i}
                    onClick={() => goToSection(i)}
                    className={`
                      w-full flex items-start gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors
                      ${isCurrent ? "bg-accent/10 text-accent font-medium" : "hover:bg-secondary text-muted-foreground hover:text-foreground"}
                    `}
                  >
                    <span className="mt-0.5 shrink-0">
                      {isDone ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      ) : isCurrent ? (
                        <BookOpen className="h-4 w-4 text-accent" />
                      ) : (
                        <Circle className="h-4 w-4 text-muted-foreground/40" />
                      )}
                    </span>
                    <div>
                      <span className="font-mono text-xs text-muted-foreground/60 mr-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {sec.title}
                      <p className="text-xs text-muted-foreground/60 mt-0.5">{sec.duration}</p>
                    </div>
                  </button>
                );
              })}
            </nav>

            {/* Handouts */}
            {course.handouts.length > 0 && (
              <div className="mt-6 pt-4 border-t border-border">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Materials
                </h4>
                <div className="space-y-1">
                  {course.handouts.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-md px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      <BookOpen className="h-3 w-3 shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            {/* Section header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span className="font-mono">{course.code}</span>
                <span>•</span>
                <span>Section {currentSection + 1} of {totalSections}</span>
                <span>•</span>
                <span>{section.duration}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                {section.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {section.topics.map((topic, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Lesson content (markdown) */}
            <article className="lesson-content mb-12">
              <ReactMarkdown>{content}</ReactMarkdown>
            </article>

            {/* Mark complete + navigation */}
            <div className="border-t border-border pt-8 space-y-6">
              {/* Mark complete button */}
              {!isComplete ? (
                <button
                  onClick={markComplete}
                  className="w-full inline-flex items-center justify-center rounded-lg bg-emerald-600 text-white h-12 px-6 text-sm font-medium shadow hover:bg-emerald-700 transition-colors"
                >
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Mark Section as Complete
                </button>
              ) : (
                <div className="flex items-center justify-center gap-2 text-emerald-600 font-medium text-sm py-3">
                  <CheckCircle2 className="h-5 w-5" />
                  Section Completed
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex items-center justify-between">
                <button
                  onClick={goPrev}
                  disabled={currentSection === 0}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>

                {currentSection < totalSections - 1 ? (
                  <button
                    onClick={goNext}
                    className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow hover:bg-primary/90 transition-colors"
                  >
                    Next Section
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ) : allComplete ? (
                  <div className="text-center">
                    <div className="flex items-center gap-2 mb-2 text-accent font-semibold">
                      <GraduationCap className="h-5 w-5" />
                      Course Complete!
                    </div>
                    {nextCourse && (
                      <Link
                        href={`/courses/${nextCourse.slug}`}
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                      >
                        Next: {nextCourse.code} — {nextCourse.shortTitle}
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={markComplete}
                    className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow hover:bg-primary/90 transition-colors"
                  >
                    Complete & Finish
                    <CheckCircle2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
