'use client'

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";
import { createClient } from "@/src/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export function Nav() {
  const [user, setUser] = useState<User | null>(null);
  const [supabase, setSupabase] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const sb = createClient();
    setSupabase(sb);

    const { data: { subscription } } = sb.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    sb.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    if (supabase) {
      await supabase.auth.signOut();
      router.push('/');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold sm:inline-block">Tripwire AI Academy</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/courses" className="transition-colors hover:text-foreground/80 text-foreground/60">Courses</Link>
            {user && (
              <Link href="/dashboard" className="transition-colors hover:text-foreground/80 text-foreground/60">Dashboard</Link>
            )}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {user ? (
            <button onClick={handleSignOut} className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Sign Out
            </button>
          ) : (
            <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
