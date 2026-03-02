import { createClient } from '@/src/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Nav } from '@/src/components/layout/Nav'
import { Footer } from '@/src/components/layout/Footer'
import { Sidebar } from '@/src/components/layout/Sidebar'

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
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
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
            
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* Placeholder for Course Cards */}
              <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="font-semibold leading-none tracking-tight mb-2">AI Fundamentals</h3>
                <p className="text-sm text-muted-foreground mb-4">Master the basics of generative AI and LLMs.</p>
                <div className="w-full bg-secondary rounded-full h-2.5 mb-4">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <button className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
