import { Nav } from "@/src/components/layout/Nav";
import { Footer } from "@/src/components/layout/Footer";
import { CourseCard } from "@/src/components/CourseCard";
import { getFoundationalCourses, getImplementationCourses } from "@/src/data/courses";
import Link from "next/link";
import {
  GraduationCap,
  Rocket,
  Shield,
  Brain,
  Target,
  Zap,
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  BookOpen,
  Clock,
} from "lucide-react";

export default function Page() {
  const foundational = getFoundationalCourses();
  const implementation = getImplementationCourses();

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />

      <main className="flex-1">
        {/* ── HERO ── */}
        <section className="relative w-full overflow-hidden bg-secondary py-20 md:py-32 lg:py-40">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
          <div className="container relative mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
                <Zap className="h-3.5 w-3.5 mr-1.5 text-accent" />
                Executive AI Training by Tripwire Digital
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Tripwire AI Academy
                </h1>
                <p className="mx-auto max-w-[720px] text-muted-foreground text-lg md:text-xl">
                  Practical AI training for executives and practitioners. From strategic literacy to operational mastery — everything your organization needs to deploy AI with confidence.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Link
                  href="/courses"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Explore Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/login"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section className="w-full border-b border-border bg-background py-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { icon: BookOpen, value: "9", label: "Modules" },
                { icon: Clock, value: "25+", label: "Hours of Content" },
                { icon: Users, value: "35+", label: "Handouts & Templates" },
                { icon: Building2, value: "4", label: "Delivery Formats" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center">
                  <stat.icon className="h-5 w-5 text-accent mb-2" />
                  <span className="text-2xl font-bold">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY THIS TRAINING ── */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3">
                Why Tripwire AI Academy?
              </h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Built by practitioners for practitioners. No hype, no fluff — just the skills your team needs to use AI effectively.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: Brain,
                  title: "Strategic Literacy",
                  description:
                    "Give leaders the mental models to make informed AI decisions — without needing a CS degree.",
                },
                {
                  icon: Target,
                  title: "Practical, Not Theoretical",
                  description:
                    "Every module includes hands-on exercises, real templates, and actionable frameworks your team uses on day one.",
                },
                {
                  icon: Shield,
                  title: "Risk-Aware by Design",
                  description:
                    "Governance, security, and ethical guardrails are woven into every module — not bolted on as an afterthought.",
                },
              ].map((feature) => (
                <div key={feature.title} className="flex flex-col items-center text-center p-6">
                  <div className="inline-flex items-center justify-center rounded-xl bg-accent/10 p-3 mb-4">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LEARNING PATH ── */}
        <section className="w-full py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3">
                Your Learning Path
              </h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Two tiers designed to take your organization from AI-aware to AI-operational.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {/* Tier 1 */}
              <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/30 p-2">
                    <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Tier 1: Foundational</h3>
                    <p className="text-xs text-muted-foreground">Required — 3 modules, 5 hours</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Strategic AI literacy for leaders. Understand what AI is, manage the risks, and build your adoption roadmap.
                </p>
                <ul className="space-y-2 mb-6">
                  {foundational.map((c) => (
                    <li key={c.id} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span className="font-mono text-xs text-muted-foreground mr-1">{c.code}</span>
                      {c.shortTitle}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/courses#foundational"
                  className="inline-flex items-center text-sm font-medium text-accent hover:underline"
                >
                  View Foundational Courses
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Tier 2 */}
              <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center rounded-lg bg-violet-50 dark:bg-violet-950/30 p-2">
                    <Rocket className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Tier 2: Implementation</h3>
                    <p className="text-xs text-muted-foreground">Hands-on — 6 modules, 19 hours</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Practical skills for practitioners. Prompt engineering, agentic workspaces, automation, security, and more.
                </p>
                <ul className="space-y-2 mb-6">
                  {implementation.map((c) => (
                    <li key={c.id} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span className="font-mono text-xs text-muted-foreground mr-1">{c.code}</span>
                      {c.shortTitle}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/courses#implementation"
                  className="inline-flex items-center text-sm font-medium text-accent hover:underline"
                >
                  View Implementation Courses
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED COURSES (top 3) ── */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-1">
                  Featured Courses
                </h2>
                <p className="text-muted-foreground text-sm">
                  Start with these — the foundation every organization needs.
                </p>
              </div>
              <Link
                href="/courses"
                className="hidden sm:inline-flex items-center text-sm font-medium text-accent hover:underline"
              >
                View All
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {foundational.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            <div className="sm:hidden text-center mt-6">
              <Link
                href="/courses"
                className="inline-flex items-center text-sm font-medium text-accent hover:underline"
              >
                View All Courses
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHO IT'S FOR ── */}
        <section className="w-full py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3">
                Who Is This For?
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {[
                { title: "C-Suite & Board", description: "Strategic AI literacy to guide investment and governance decisions." },
                { title: "Department Heads", description: "Understand AI capabilities to identify and champion opportunities in your teams." },
                { title: "Practitioners", description: "Build hands-on skills with prompts, agents, tools, and workflow automation." },
                { title: "IT & Security", description: "Implement controls, manage risk, and govern AI systems across the enterprise." },
              ].map((persona) => (
                <div
                  key={persona.title}
                  className="rounded-xl border border-border bg-background p-6 shadow-sm text-center"
                >
                  <h3 className="font-semibold mb-2">{persona.title}</h3>
                  <p className="text-sm text-muted-foreground">{persona.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="w-full py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
              Start Your AI Journey Today
            </h2>
            <p className="text-muted-foreground mb-8 max-w-[500px] mx-auto">
              Create a free account to explore the full curriculum, track your progress, and access all handouts and templates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/login"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Create Free Account
              </Link>
              <Link
                href="/courses"
                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
