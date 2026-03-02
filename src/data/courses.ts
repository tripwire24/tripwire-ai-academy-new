// All course data derived from the Tripwire AI Academy curriculum
// This serves as the single source of truth for course catalog rendering

export type Tier = "foundational" | "implementation";

export interface Section {
  title: string;
  duration: string;
  topics: string[];
}

export interface Course {
  id: string;
  slug: string;
  code: string;
  title: string;
  shortTitle: string;
  tier: Tier;
  description: string;
  duration: string;
  audience: string[];
  format: string;
  prerequisites: string[];
  objectives: string[];
  sections: Section[];
  handouts: string[];
  icon: string; // Lucide icon name
  color: string; // Accent color class
}

export const courses: Course[] = [
  // ──────────────────────────── TIER 1: FOUNDATIONAL ────────────────────────────
  {
    id: "f1",
    slug: "ai-demystified",
    code: "F1",
    title: "AI Demystified — The Executive Mental Model",
    shortTitle: "AI Demystified",
    tier: "foundational",
    description:
      "Gives executives a working mental model for AI — enough to make informed decisions, ask good questions, and avoid common pitfalls. Strategic literacy, not a technical deep-dive.",
    duration: "2 hours",
    audience: ["C-suite", "Senior leadership", "Decision-makers"],
    format: "Presentation + discussion + hands-on exploration",
    prerequisites: ["None"],
    objectives: [
      "Understand what AI actually is (and isn't) in plain language",
      "Know the four types of AI you'll encounter in business",
      "Understand why AI 'hallucinates' and how to mitigate it",
      "Identify where AI creates genuine business value",
      "Have a decision framework for 'Should this be AI-assisted?'",
    ],
    sections: [
      {
        title: "What AI Actually Is (and Isn't)",
        duration: "25 min",
        topics: [
          "The AI Family Tree: ML → Deep Learning → LLMs → GenAI",
          "Four types of AI in business: Predictive, Generative, Conversational, Agentic",
          "What AI can and can't do today",
        ],
      },
      {
        title: "How Large Language Models Work",
        duration: "20 min",
        topics: [
          "Token prediction explained simply",
          "The Context Window and Context Quality Principle",
          "Why bigger isn't always better",
        ],
      },
      {
        title: "Hallucination & Mitigation",
        duration: "20 min",
        topics: [
          "Why hallucination happens (statistical confidence, not truth)",
          "Mitigation strategies: grounding, retrieval, verification",
          "When to trust vs. verify AI output",
        ],
      },
      {
        title: "AI Decision Framework",
        duration: "35 min",
        topics: [
          "Where AI creates genuine business value",
          "The 'Should this be AI-assisted?' framework",
          "Common adoption mistakes to avoid",
          "Interactive exercise: Apply the framework",
        ],
      },
    ],
    handouts: ["AI Terminology Cheat Sheet", "AI Decision Framework"],
    icon: "Brain",
    color: "blue",
  },
  {
    id: "f2",
    slug: "ai-risk-governance",
    code: "F2",
    title: "AI Risk & Governance Essentials",
    shortTitle: "Risk & Governance",
    tier: "foundational",
    description:
      "Equips decision-makers to understand AI risks and make informed governance decisions — without requiring deep technical expertise. Focus on practical policy decisions, not theoretical frameworks.",
    duration: "1.5 hours",
    audience: ["Executives", "Legal", "Compliance", "IT leadership"],
    format: "Presentation + policy workshop",
    prerequisites: ["F1 recommended (or equivalent AI literacy)"],
    objectives: [
      "Understand the real risks of AI in business (ranked by impact)",
      "Know the key governance decisions organizations must make",
      "Have templates for acceptable use policies",
      "Understand data classification requirements for AI",
      "Be able to evaluate AI vendors against security criteria",
    ],
    sections: [
      {
        title: "The Real Risks",
        duration: "25 min",
        topics: [
          "Risk #1: Data Leakage",
          "Risk #2: Hallucination & Accuracy",
          "Risk #3: Intellectual Property",
          "Risk #4: Bias and Fairness",
          "Risk #5: Vendor & Supply Chain",
          "Risk #6: Prompt Injection (Emerging)",
          "Risk Priority Matrix",
        ],
      },
      {
        title: "Governance Gap Assessment",
        duration: "25 min",
        topics: [
          "Key governance decisions every organization must make",
          "Data classification requirements for AI",
          "Vendor evaluation criteria",
        ],
      },
      {
        title: "Acceptable Use Policy Workshop",
        duration: "40 min",
        topics: [
          "Template walkthrough",
          "Customization for your organization",
          "Rollout and enforcement strategies",
        ],
      },
    ],
    handouts: [
      "AI Risk Register Template",
      "AI Acceptable Use Policy Template",
      "AI Vendor Evaluation Checklist",
    ],
    icon: "Shield",
    color: "red",
  },
  {
    id: "f3",
    slug: "ai-ready-organization",
    code: "F3",
    title: "The AI-Ready Organization",
    shortTitle: "AI-Ready Organization",
    tier: "foundational",
    description:
      "Assess organizational readiness for AI adoption and build a realistic roadmap. Moves from 'should we do AI?' to 'how do we get started effectively?'",
    duration: "1.5 hours",
    audience: [
      "Leadership teams",
      "Transformation leads",
      "Department heads",
    ],
    format: "Assessment + planning workshop",
    prerequisites: ["F1 recommended (or equivalent AI literacy)"],
    objectives: [
      "Assess your organization's AI readiness across four dimensions",
      "Identify adoption patterns that work (and anti-patterns to avoid)",
      "Build a business case framework for AI initiatives",
      "Create a 90-day adoption roadmap",
      "Know how to design and run an effective AI pilot",
    ],
    sections: [
      {
        title: "The Readiness Question",
        duration: "15 min",
        topics: [
          "AI Adoption Curve: Aware → Exploring → Piloting → Scaling",
          "Where most organizations actually are",
        ],
      },
      {
        title: "Readiness Assessment",
        duration: "25 min",
        topics: [
          "Four Dimensions: Data, Process, People, Technical Capability",
          "Scored self-assessment (1–5 per dimension, 4 criteria each)",
          "Interpreting your results",
        ],
      },
      {
        title: "90-Day Roadmap Planning",
        duration: "30 min",
        topics: [
          "Business case framework for AI initiatives",
          "Designing an effective AI pilot",
          "Avoiding common anti-patterns",
        ],
      },
    ],
    handouts: [
      "AI Readiness Assessment Scorecard",
      "AI Pilot Planning Template",
      "AI ROI Calculator Framework",
    ],
    icon: "Building2",
    color: "emerald",
  },

  // ──────────────────────────── TIER 2: IMPLEMENTATION ────────────────────────────
  {
    id: "i1",
    slug: "prompt-engineering",
    code: "I1",
    title: "Prompt Engineering for Business Impact",
    shortTitle: "Prompt Engineering",
    tier: "implementation",
    description:
      "Transforms participants from casual AI users into skilled prompt engineers who can reliably extract high-quality outputs, build reusable prompt templates, and troubleshoot when AI doesn't deliver.",
    duration: "3 hours",
    audience: [
      "Practitioners",
      "Analysts",
      "Managers using AI tools daily",
    ],
    format: "Presentation + hands-on exercises",
    prerequisites: ["F1 (AI Demystified) or equivalent AI literacy"],
    objectives: [
      "Structure prompts using proven frameworks (CRAFT, Chain-of-Thought, Few-Shot)",
      "Diagnose why prompts fail and apply systematic fixes",
      "Build a personal library of reusable prompt templates",
      "Extract consistent outputs for business-critical tasks",
      "Adapt prompts across different AI models and use cases",
    ],
    sections: [
      {
        title: "Foundations — Why Prompts Fail",
        duration: "60 min",
        topics: [
          "The Five Prompt Killers: Vagueness, Missing Context, Ambiguous Format, No Examples, Kitchen Sink",
          "The CRAFT Framework: Context / Role / Action / Format / Tone",
          "The Specificity Lever",
          "Exercise: Fix broken prompts",
        ],
      },
      {
        title: "Advanced Techniques",
        duration: "60 min",
        topics: [
          "Chain-of-Thought reasoning",
          "Few-Shot learning with examples",
          "System prompts and personas",
          "Multi-step prompt chains",
        ],
      },
      {
        title: "Practical Mastery",
        duration: "60 min",
        topics: [
          "Troubleshooting toolkit",
          "Building your template library",
          "Exercise: Create your own templates for real tasks",
        ],
      },
    ],
    handouts: [
      "CRAFT Framework Template",
      "Prompt Template Library Starter Pack",
    ],
    icon: "MessageSquareCode",
    color: "violet",
  },
  {
    id: "i2",
    slug: "agentic-workspaces",
    code: "I2",
    title: "Agentic Workspaces — Hands-On Setup and Operation",
    shortTitle: "Agentic Workspaces",
    tier: "implementation",
    description:
      "Transforms participants from passive AI chatters into productive agentic workspace operators who can set up, configure, and effectively use VS Code-based AI assistants for real work output.",
    duration: "4 hours",
    audience: [
      "Practitioners",
      "Analysts",
      "Developers who will use agentic AI daily",
    ],
    format: "Presentation + hands-on setup + exercises",
    prerequisites: ["F1 (AI Demystified)", "I1 (Prompt Engineering) recommended"],
    objectives: [
      "Explain the difference between browser AI and agentic workspaces",
      "Set up VS Code with GitHub Copilot (or equivalent) from scratch",
      "Create and organize an effective workspace structure",
      "Use agent capabilities: file creation, editing, search, terminal commands",
      "Maintain context across sessions using briefs and plans",
      "Apply operational guardrails for safe agent operation",
    ],
    sections: [
      {
        title: "Setup",
        duration: "60 min",
        topics: [
          "Browser AI vs. Desktop Agent comparison",
          "Install VS Code, configure Copilot/Cursor",
          "Verify environment, first agent conversation",
        ],
      },
      {
        title: "Core Operations",
        duration: "60 min",
        topics: [
          "File operations: create, edit, search",
          "Terminal commands via agent",
          "Multi-step workflows",
        ],
      },
      {
        title: "Context & Structure",
        duration: "60 min",
        topics: [
          "Workspace organization patterns",
          "Context management: briefs, plans, AGENTS.md",
          "Persistent instructions for consistency",
        ],
      },
      {
        title: "Operational Mastery",
        duration: "60 min",
        topics: [
          "Guardrails and safety protocols",
          "Daily workflow patterns",
          "Troubleshooting common issues",
          "Complete a real task end-to-end",
        ],
      },
    ],
    handouts: [
      "AGENTS.md Starter Template",
      "Agentic Workspace Setup Checklist",
    ],
    icon: "Terminal",
    color: "cyan",
  },
  {
    id: "i3",
    slug: "genai-tools",
    code: "I3",
    title: "Generative AI Tools for Content & Analysis",
    shortTitle: "GenAI Tools",
    tier: "implementation",
    description:
      "Equips participants with practical skills across the generative AI tool landscape — knowing which tool to use for which task, how to maximize output quality, and how to integrate AI tools into existing workflows.",
    duration: "3 hours",
    audience: [
      "Content creators",
      "Analysts",
      "Marketers",
      "Knowledge workers",
    ],
    format: "Presentation + hands-on tool exercises",
    prerequisites: ["F1 (AI Demystified)", "I1 (Prompt Engineering) recommended"],
    objectives: [
      "Navigate the GenAI tool landscape and select appropriate tools for specific tasks",
      "Use AI effectively for writing, editing, and content transformation",
      "Apply AI to data analysis, summarization, and insight extraction",
      "Build repeatable workflows combining multiple AI tools",
      "Evaluate AI tool options based on cost, quality, and use case fit",
    ],
    sections: [
      {
        title: "Content Creation",
        duration: "60 min",
        topics: [
          "Writing workflows with AI",
          "Editing and content transformation",
          "Brand voice consistency: Few-Shot, Style Guide, Revision Loop",
          "Content pipeline exercise",
        ],
      },
      {
        title: "Analysis & Research",
        duration: "60 min",
        topics: [
          "Document analysis techniques",
          "Data summarization patterns",
          "Research workflows with AI",
        ],
      },
      {
        title: "Integration & Workflows",
        duration: "60 min",
        topics: [
          "Combining tools effectively",
          "Building repeatable processes",
          "Cost optimization strategies",
          "Model comparison: GPT-4, Claude, Gemini",
        ],
      },
    ],
    handouts: [
      "GenAI Tool Selection Matrix",
      "Multi-Tool Workflow Template",
    ],
    icon: "Sparkles",
    color: "amber",
  },
  {
    id: "i4",
    slug: "synthetic-media",
    code: "I4",
    title: "Synthetic Media — AI-Generated Images, Video & Audio",
    shortTitle: "Synthetic Media",
    tier: "implementation",
    description:
      "Enables participants to effectively use AI-generated images, video, and audio for legitimate business purposes while understanding the ethical, legal, and brand risks involved.",
    duration: "3 hours",
    audience: [
      "Marketing",
      "Communications",
      "Content creators",
      "Designers",
    ],
    format: "Presentation + hands-on generation + ethics workshop",
    prerequisites: [
      "F1 (AI Demystified)",
      "F2 (AI Risk & Governance) strongly recommended",
    ],
    objectives: [
      "Generate effective images using text-to-image tools (DALL-E, Midjourney, Stable Diffusion)",
      "Create AI-generated video content for appropriate business use cases",
      "Use AI voice and audio tools for narration, translation, and accessibility",
      "Apply ethical guidelines and disclosure requirements for synthetic media",
      "Identify and mitigate legal, brand, and reputational risks",
    ],
    sections: [
      {
        title: "Images",
        duration: "60 min",
        topics: [
          "Text-to-image fundamentals",
          "Effective visual prompting: Subject + Action + Setting + Style + Mood + Technical",
          "Editing and refinement workflows",
          "Exercise: Create marketing visuals",
        ],
      },
      {
        title: "Video & Audio",
        duration: "60 min",
        topics: [
          "AI avatars and video synthesis",
          "Voice generation and cloning",
          "Audio applications for business",
        ],
      },
      {
        title: "Ethics & Governance",
        duration: "60 min",
        topics: [
          "Disclosure requirements",
          "Legal considerations for AI-generated media",
          "Brand and reputation risk mitigation",
          "Exercise: Develop organizational guidelines",
        ],
      },
    ],
    handouts: [
      "AI Media Ethics Decision Tree",
      "AI Media Disclosure Guidelines",
    ],
    icon: "Image",
    color: "pink",
  },
  {
    id: "i5",
    slug: "ai-operations",
    code: "I5",
    title: "AI Operations — Workflow Automation & Orchestration",
    shortTitle: "AI Operations",
    tier: "implementation",
    description:
      "Enables participants to design, build, and maintain automated AI workflows that run reliably at scale — moving from manual AI interactions to systematic AI operations.",
    duration: "4 hours",
    audience: [
      "Operations managers",
      "Analysts",
      "Developers building AI-powered workflows",
    ],
    format: "Presentation + workflow building exercises",
    prerequisites: [
      "F1 (AI Demystified)",
      "I1 (Prompt Engineering)",
      "I2 (Agentic Workspaces) recommended",
    ],
    objectives: [
      "Design AI workflows that run unattended (or with appropriate human checkpoints)",
      "Connect AI to business systems via APIs and integrations",
      "Build error-handling and quality controls into automated processes",
      "Choose appropriate orchestration tools for different complexity levels",
      "Monitor, maintain, and improve AI workflows over time",
    ],
    sections: [
      {
        title: "Foundations — Workflow Design",
        duration: "60 min",
        topics: [
          "7 workflow design principles",
          "Anatomy of an AI workflow: Trigger → Process → Validate → Action",
          "Tool landscape: Zapier, Make, n8n, LangChain, Temporal",
          "Design exercise",
        ],
      },
      {
        title: "Building Blocks",
        duration: "60 min",
        topics: [
          "Triggers and inputs (event-based, schedule-based)",
          "AI processing steps",
          "Outputs and actions",
          "Exercise: Build a simple workflow",
        ],
      },
      {
        title: "Reliability & Quality",
        duration: "60 min",
        topics: [
          "Error handling patterns",
          "Validation and quality gates",
          "Logging and monitoring",
        ],
      },
      {
        title: "Production & Scale",
        duration: "60 min",
        topics: [
          "Deployment patterns",
          "Maintenance and improvement cycles",
          "Scaling considerations",
          "Production readiness checklist",
        ],
      },
    ],
    handouts: [
      "AI Workflow Design Canvas",
      "Production Readiness Checklist",
    ],
    icon: "Workflow",
    color: "orange",
  },
  {
    id: "i6",
    slug: "ai-security",
    code: "I6",
    title: "AI Security — Practical Controls for Agentic Systems",
    shortTitle: "AI Security",
    tier: "implementation",
    description:
      "Equips participants with practical security controls for AI systems — from individual agentic workspaces to enterprise AI deployments — with emphasis on implementable defenses rather than theoretical risks.",
    duration: "2 hours",
    audience: [
      "IT",
      "Security",
      "Operations",
      "Anyone managing AI-enabled environments",
    ],
    format: "Presentation + security exercises",
    prerequisites: [
      "F2 (AI Risk & Governance)",
      "I2 (Agentic Workspaces) recommended",
    ],
    objectives: [
      "Explain the unique attack surface of agentic AI systems",
      "Implement layered defenses appropriate to risk level",
      "Configure credential isolation and workspace security",
      "Recognize and mitigate prompt injection attacks",
      "Choose appropriate operational profiles for different use cases",
      "Create security checklists for AI deployment",
    ],
    sections: [
      {
        title: "Understanding & Defense",
        duration: "60 min",
        topics: [
          "Core mental model: agent = software running with your permissions",
          "Attack surface mapping: terminal, files, web/MCP, browser, context window",
          "Five real risks ranked: Prompt Injection, Data Exfiltration, Credential Exposure, Destructive Commands, File Injection",
          "Seven Defense Layers (No Docker required, <90 min to implement, ~80% coverage)",
          "Exercise: Apply foundational controls",
        ],
      },
      {
        title: "Operational Profiles & Enterprise",
        duration: "60 min",
        topics: [
          "Three profiles for three risk levels",
          "MCP and tool governance",
          "Enterprise security considerations",
          "Exercise: Create security checklist for your environment",
        ],
      },
    ],
    handouts: [
      "AI Security Checklist Template",
      "Operational Profile Matrix",
      "Defense Layer Quick Reference",
    ],
    icon: "Lock",
    color: "rose",
  },
];

// Helper functions
export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getCoursesByTier(tier: Tier): Course[] {
  return courses.filter((c) => c.tier === tier);
}

export function getFoundationalCourses(): Course[] {
  return getCoursesByTier("foundational");
}

export function getImplementationCourses(): Course[] {
  return getCoursesByTier("implementation");
}

export const tierLabels: Record<Tier, string> = {
  foundational: "Foundational",
  implementation: "Implementation",
};

export const tierDescriptions: Record<Tier, string> = {
  foundational:
    "Required modules that give leaders the strategic AI literacy to make smart decisions. No technical background needed.",
  implementation:
    "Hands-on modules for practitioners who will build, operate, and govern AI tools daily.",
};

export const deliveryFormats = [
  {
    name: "Executive Briefing",
    duration: "90 min",
    modules: "F1 (condensed)",
    audience: "Board, C-suite",
  },
  {
    name: "Foundation Day",
    duration: "Full day",
    modules: "F1 + F2 + F3",
    audience: "Leadership teams",
  },
  {
    name: "Practitioner Intensive",
    duration: "2 days",
    modules: "F1 + I1 + I2 + Vertical",
    audience: "Hands-on practitioners",
  },
  {
    name: "Organization Transformation",
    duration: "5 days",
    modules: "Full curriculum",
    audience: "Enterprise programs",
  },
];
