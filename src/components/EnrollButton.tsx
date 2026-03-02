"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/src/lib/supabase/client";
import { Loader2, PlayCircle, LogIn } from "lucide-react";

interface EnrollButtonProps {
  courseSlug: string;
}

export function EnrollButton({ courseSlug }: EnrollButtonProps) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleEnroll = async () => {
    if (!user) {
      router.push("/login");
      return;
    }
    setEnrolling(true);
    // Navigate directly to the learn page — enrollment is handled there
    router.push(`/courses/${courseSlug}/learn`);
  };

  if (loading) {
    return (
      <button
        disabled
        className="w-full inline-flex items-center justify-center rounded-md bg-primary/60 text-primary-foreground h-10 px-6 text-sm font-medium"
      >
        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
        Loading...
      </button>
    );
  }

  if (!user) {
    return (
      <>
        <button
          onClick={() => router.push("/login")}
          className="w-full inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-10 px-6 text-sm font-medium shadow hover:bg-primary/90 transition-colors"
        >
          <LogIn className="h-4 w-4 mr-2" />
          Sign In to Start
        </button>
        <p className="text-xs text-muted-foreground mt-3 text-center">
          Free account required to access course content
        </p>
      </>
    );
  }

  return (
    <>
      <button
        onClick={handleEnroll}
        disabled={enrolling}
        className="w-full inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-10 px-6 text-sm font-medium shadow hover:bg-primary/90 transition-colors disabled:opacity-60"
      >
        {enrolling ? (
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
        ) : (
          <PlayCircle className="h-4 w-4 mr-2" />
        )}
        {enrolling ? "Opening..." : "Start Course"}
      </button>
      <p className="text-xs text-muted-foreground mt-3 text-center">
        Jump straight into the course content
      </p>
    </>
  );
}
