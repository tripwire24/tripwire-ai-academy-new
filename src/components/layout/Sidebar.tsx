import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="fixed top-16 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block md:w-64 border-r border-border">
      <div className="h-full py-6 pr-6 lg:py-8">
        <div className="w-full">
          <div className="pb-4">
            <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Modules</h4>
            <div className="grid grid-flow-row auto-rows-max text-sm">
              {/* TODO: Map through actual modules */}
              <Link href="#" className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">
                Module 1: Introduction
              </Link>
              <Link href="#" className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">
                Module 2: AI Fundamentals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
