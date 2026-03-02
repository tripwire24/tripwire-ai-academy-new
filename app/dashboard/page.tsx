import { createClient } from '@/src/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Nav } from '@/src/components/layout/Nav'
import { Footer } from '@/src/components/layout/Footer'
import { Sidebar } from '@/src/components/layout/Sidebar'
import { courses } from '@/src/data/courses'
import Link from 'next/link'
import {
  Brain, Shield, Building2, MessageSquareCode, Terminal,
  Sparkles, Image, Workflow, Lock, Clock, ArrowRight,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Brain, Shield, Building2, MessageSquareCode, Terminal, Sparkles, Image, Workflow, Lock,
};

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const supabase = await createClient()
  
  const { data: { user }, error } = await supabase.auth.getUser()
  
  if (error || !user) {
    redirect('/login')
  }

  // Fetch user profile to get role and name
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <div className="container mx-auto flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 px-4">
        <Sidebar />
        <main className="relative py-6 lg:py-8">
          <div className="mx-auto w-full min-w-0">
            <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
              <div className="overflow-hidden text-ellipsis whitespace-nowrap">Dashboard</div>
            </div>
            <div className="space-y-2">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                Welcome, {profile?.full_name || user.email}
              </h1>
              <p className="text-lg text-muted-foreground">
                Pick up where you left off or explore new modules.
              </p>
            </div>

            {/* Quick stats */}
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-background p-4 shadow-sm">
                <p className="text-sm text-muted-foreground">Courses Available</p>
                <p className="text-2xl font-bold">{courses.length}</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4 shadow-sm">
                <p className="text-sm text-muted-foreground">Your Role</p>
                <p className="text-2xl font-bold capitalize">{profile?.role || 'Learner'}</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4 shadow-sm">
                <p className="text-sm text-muted-foreground">Total Hours</p>
                <p className="text-2xl font-bold">25+</p>
              </div>
            </div>
            
            {/* Course grid */}
            <h2 className="mt-10 mb-4 text-xl font-bold">All Courses</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => {
                const Icon = iconMap[course.icon] ?? Brain;
                return (
                  <Link key={course.id} href={`/courses/${course.slug}`} className="group block">
                    <div className="rounded-xl border border-border bg-background p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="inline-flex items-center justify-center rounded-lg bg-accent/10 p-2">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                        <span className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
                          {course.code}
                        </span>
                      </div>
                      <h3 className="font-semibold leading-tight mb-1 group-hover:text-accent transition-colors">
                        {course.shortTitle}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {course.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          {course.duration}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                          Start <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
