import { Nav } from "@/src/components/layout/Nav";
import { Footer } from "@/src/components/layout/Footer";
import { CourseCard } from "@/src/components/CourseCard";
import {
  courses,
  getFoundationalCourses,
  getImplementationCourses,
  tierDescriptions,
  deliveryFormats,
} from "@/src/data/courses";
import { GraduationCap, Rocket, Clock, Users, BookOpen } from "lucide-react";

export const metadata = {
  title: "Courses | Tripwire AI Academy",
  description:
    "Executive AI training modules — from strategic literacy to hands-on implementation.",
};

export default function CoursesPage() {
  const foundational = getFoundationalCourses();
  const implementation = getImplementationCourses();

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="w-full border-b border-border bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
              <BookOpen className="h-3.5 w-3.5 mr-1.5" />
              9 modules &middot; 25+ hours &middot; 35+ handouts
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
              Course Catalog
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Practical AI training for executives and practitioners. From strategic
              literacy to operational mastery — everything your organization needs to
              deploy AI with confidence.
            </p>
          </div>
        </section>

        {/* Tier 1: Foundational */}
        <section className="w-full py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Tier 1: Foundational
              </h2>
            </div>
            <p className="text-muted-foreground mb-8 max-w-[600px]">
              {tierDescriptions.foundational}
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {foundational.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* Tier 2: Implementation */}
        <section className="w-full py-16 md:py-20 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-2">
              <Rocket className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Tier 2: Implementation
              </h2>
            </div>
            <p className="text-muted-foreground mb-8 max-w-[600px]">
              {tierDescriptions.implementation}
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {implementation.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Formats */}
        <section className="w-full py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">
              Delivery Formats
            </h2>
            <p className="text-muted-foreground mb-8 max-w-[600px]">
              Flexible delivery options from a 90-minute executive briefing to a
              full 5-day transformation program.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {deliveryFormats.map((fmt) => (
                <div
                  key={fmt.name}
                  className="rounded-xl border border-border bg-background p-6 shadow-sm"
                >
                  <h3 className="font-semibold mb-1">{fmt.name}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {fmt.duration}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {fmt.audience}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Modules: {fmt.modules}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-[500px] mx-auto">
              Sign up for free to track your progress, take notes, and earn
              completion certificates.
            </p>
            <a
              href="/login"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Create Free Account
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
