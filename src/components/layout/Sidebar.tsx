import Link from "next/link";
import { courses } from "@/src/data/courses";

export function Sidebar() {
  const foundational = courses.filter((c) => c.tier === "foundational");
  const implementation = courses.filter((c) => c.tier === "implementation");

  return (
    <aside className="fixed top-16 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto md:sticky md:block md:w-64 border-r border-border">
      <div className="h-full py-6 pr-6 lg:py-8">
        <div className="w-full space-y-6">
          {/* Foundational */}
          <div>
            <h4 className="mb-2 rounded-md px-2 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Foundational
            </h4>
            <div className="grid grid-flow-row auto-rows-max text-sm">
              {foundational.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.slug}`}
                  className="group flex w-full items-center rounded-md px-2 py-1.5 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="font-mono text-xs mr-2 text-muted-foreground/60">{course.code}</span>
                  {course.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          {/* Implementation */}
          <div>
            <h4 className="mb-2 rounded-md px-2 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Implementation
            </h4>
            <div className="grid grid-flow-row auto-rows-max text-sm">
              {implementation.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.slug}`}
                  className="group flex w-full items-center rounded-md px-2 py-1.5 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="font-mono text-xs mr-2 text-muted-foreground/60">{course.code}</span>
                  {course.shortTitle}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
