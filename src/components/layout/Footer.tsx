import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-2">Tripwire AI Academy</h3>
            <p className="text-sm text-muted-foreground">
              Practical AI training for executives and practitioners.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Foundational</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/courses/ai-demystified" className="hover:text-foreground transition-colors">F1: AI Demystified</Link></li>
              <li><Link href="/courses/ai-risk-governance" className="hover:text-foreground transition-colors">F2: Risk & Governance</Link></li>
              <li><Link href="/courses/ai-ready-organization" className="hover:text-foreground transition-colors">F3: AI-Ready Organization</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Implementation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/courses/prompt-engineering" className="hover:text-foreground transition-colors">I1: Prompt Engineering</Link></li>
              <li><Link href="/courses/agentic-workspaces" className="hover:text-foreground transition-colors">I2: Agentic Workspaces</Link></li>
              <li><Link href="/courses/genai-tools" className="hover:text-foreground transition-colors">I3: GenAI Tools</Link></li>
              <li><Link href="/courses/ai-operations" className="hover:text-foreground transition-colors">I5: AI Operations</Link></li>
              <li><Link href="/courses/ai-security" className="hover:text-foreground transition-colors">I6: AI Security</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/courses" className="hover:text-foreground transition-colors">All Courses</Link></li>
              <li><Link href="/login" className="hover:text-foreground transition-colors">Sign In</Link></li>
              <li><Link href="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Tripwire Digital Ltd. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Version 2.0 &middot; February 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
