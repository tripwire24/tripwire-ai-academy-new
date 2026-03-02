import { courses, getCourseBySlug } from "@/src/data/courses";
import { Suspense } from "react";
import LearnView from "@/src/components/LearnView";

// Generate static params for all courses
export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

// Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: `Learn: ${course.code} ${course.shortTitle} | Tripwire AI Academy`,
    description: `Interactive learning content for ${course.title}`,
  };
}

export default async function LearnPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading course...</div>
        </div>
      }
    >
      <LearnView />
    </Suspense>
  );
}
