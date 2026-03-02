import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold sm:inline-block">Tripwire AI Academy</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/courses" className="transition-colors hover:text-foreground/80 text-foreground/60">Courses</Link>
            <Link href="/dashboard" className="transition-colors hover:text-foreground/80 text-foreground/60">Dashboard</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* TODO: Add User Profile Dropdown */}
        </div>
      </div>
    </header>
  );
}
