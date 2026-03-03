import { createClient } from "@/src/lib/supabase/server";
import Link from "next/link";
import {
  BookOpen,
  Users,
  GraduationCap,
  BarChart3,
  Settings,
  ArrowRight,
} from "lucide-react";
import { courses } from "@/src/data/courses";
import SeedDatabaseButton from "@/src/components/admin/SeedDatabaseButton";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Dashboard | Tripwire AI Academy",
};

export default async function AdminDashboard() {
  const supabase = await createClient();

  // Fetch real counts from DB where possible, fall back to static data
  const { count: enrollmentCount } = await supabase
    .from("enrollments")
    .select("*", { count: "exact", head: true });

  const { count: userCount } = await supabase
    .from("profiles")
    .select("*", { count: "exact", head: true });

  const { count: dbCourseCount } = await supabase
    .from("courses")
    .select("*", { count: "exact", head: true });

  // Recent enrollments
  const { data: recentEnrollments } = await supabase
    .from("enrollments")
    .select("*, profiles(full_name, email), courses(title)")
    .order("enrolled_at", { ascending: false })
    .limit(5);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Manage courses, content, and users for Tripwire AI Academy.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="rounded-lg bg-accent/10 p-2">
              <BookOpen className="h-5 w-5 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Total Courses</span>
          </div>
          <p className="text-3xl font-bold">{courses.length}</p>
          <p className="text-xs text-muted-foreground mt-1">
            {dbCourseCount || 0} synced to database
          </p>
        </div>

        <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="rounded-lg bg-emerald-500/10 p-2">
              <Users className="h-5 w-5 text-emerald-500" />
            </div>
            <span className="text-sm text-muted-foreground">Total Users</span>
          </div>
          <p className="text-3xl font-bold">{userCount || 0}</p>
        </div>

        <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="rounded-lg bg-violet-500/10 p-2">
              <GraduationCap className="h-5 w-5 text-violet-500" />
            </div>
            <span className="text-sm text-muted-foreground">Enrollments</span>
          </div>
          <p className="text-3xl font-bold">{enrollmentCount || 0}</p>
        </div>

        <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="rounded-lg bg-amber-500/10 p-2">
              <BarChart3 className="h-5 w-5 text-amber-500" />
            </div>
            <span className="text-sm text-muted-foreground">Completion Rate</span>
          </div>
          <p className="text-3xl font-bold">—</p>
          <p className="text-xs text-muted-foreground mt-1">Tracking enabled</p>
        </div>
      </div>

      {/* Quick actions + recent activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Quick actions */}
        <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
          <h2 className="font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              href="/admin/courses"
              className="flex items-center justify-between rounded-lg border border-border p-4 hover:bg-secondary transition-colors"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium text-sm">Manage Courses</p>
                  <p className="text-xs text-muted-foreground">
                    Edit content, sections, and handouts
                  </p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Link>

            <Link
              href="/courses"
              className="flex items-center justify-between rounded-lg border border-border p-4 hover:bg-secondary transition-colors"
            >
              <div className="flex items-center gap-3">
                <BarChart3 className="h-5 w-5 text-emerald-500" />
                <div>
                  <p className="font-medium text-sm">View Public Catalog</p>
                  <p className="text-xs text-muted-foreground">
                    See what learners see
                  </p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Link>

            <Link
              href="/dashboard"
              className="flex items-center justify-between rounded-lg border border-border p-4 hover:bg-secondary transition-colors"
            >
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-violet-500" />
                <div>
                  <p className="font-medium text-sm">Learner Dashboard</p>
                  <p className="text-xs text-muted-foreground">
                    View the learner experience
                  </p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Link>

            <SeedDatabaseButton />
          </div>
        </div>

        {/* Recent enrollments */}
        <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
          <h2 className="font-semibold mb-4">Recent Enrollments</h2>
          {recentEnrollments && recentEnrollments.length > 0 ? (
            <div className="space-y-3">
              {recentEnrollments.map((enrollment: any) => (
                <div
                  key={enrollment.id}
                  className="flex items-center justify-between rounded-lg border border-border p-3"
                >
                  <div>
                    <p className="text-sm font-medium">
                      {enrollment.profiles?.full_name ||
                        enrollment.profiles?.email ||
                        "Unknown User"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {enrollment.courses?.title || "Unknown Course"}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date(enrollment.enrolled_at).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground text-sm">
              <Users className="h-8 w-8 mx-auto mb-2 opacity-40" />
              No enrollments yet. They&apos;ll appear here as learners join.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
