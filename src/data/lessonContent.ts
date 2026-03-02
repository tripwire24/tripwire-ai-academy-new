// Rich lesson content for each course section
// Each key maps to `courseSlug:sectionIndex`

const lessonContent: Record<string, string> = {
  // ═══════════════════════════ F1: AI DEMYSTIFIED ═══════════════════════════
  "ai-demystified:0": `
## What AI Actually Is (and Isn't)

### The AI Family Tree

Artificial Intelligence isn't one thing — it's a family of technologies that have evolved over decades:

**Machine Learning (ML)** → **Deep Learning** → **Large Language Models (LLMs)** → **Generative AI (GenAI)**

Each builds on the last. When people say "AI" today, they usually mean GenAI — but the broader family matters because different business problems call for different branches.

---

### Four Types of AI in Business

| Type | What It Does | Example |
|------|-------------|---------|
| **Predictive AI** | Forecasts outcomes from historical data | Demand forecasting, churn prediction |
| **Generative AI** | Creates new content (text, images, code) | ChatGPT, DALL-E, Copilot |
| **Conversational AI** | Natural language dialogue with users | Customer service bots, virtual assistants |
| **Agentic AI** | Takes multi-step actions autonomously | Code agents, workflow automation |

> **Key insight:** Most organizations need a *mix* of these types. GenAI gets the headlines, but predictive AI often delivers the fastest ROI.

---

### What AI Can and Can't Do Today

**AI excels at:**
- Pattern recognition at scale
- Content generation and transformation
- Summarization and extraction
- Repetitive knowledge work
- Code generation and debugging

**AI struggles with:**
- Truly novel reasoning (beyond training data)
- Guaranteed factual accuracy
- Understanding causation (vs. correlation)
- Tasks requiring physical world awareness
- Ethical judgment and nuanced decisions

> **Bottom line:** AI is a powerful tool for augmenting human capability, not replacing human judgment.
`,

  "ai-demystified:1": `
## How Large Language Models Work

### Token Prediction Explained Simply

At its core, an LLM does one thing: **predict the next token** (word fragment) given the tokens that came before.

Think of it like an incredibly sophisticated autocomplete. It's read billions of documents and learned patterns about how language works — which words tend to follow which words. When you give it a prompt, it generates a response one token at a time, each time asking "what word is most likely to come next?"

This is why LLMs can:
- Write in any style (they've seen millions of examples)
- Answer questions (they've seen Q&A patterns)
- Follow instructions (they've been fine-tuned on instruction-following data)

And why they sometimes:
- **"Hallucinate"** — they generate plausible-sounding but factually wrong content
- **Contradict themselves** — each token is predicted independently
- **Struggle with math** — language patterns ≠ mathematical reasoning

---

### The Context Window

The **context window** is how much text the model can "see" at once when generating a response.

| Model | Context Window |
|-------|---------------|
| GPT-4o | 128,000 tokens (~96,000 words) |
| Claude 3.5 Sonnet | 200,000 tokens (~150,000 words) |
| Gemini 1.5 Pro | 2,000,000 tokens (~1.5M words) |

**The Context Quality Principle:** It's not about how *much* context you provide — it's about how *relevant* that context is. A focused 500-word brief beats a 50,000-word document dump.

---

### Why Bigger Isn't Always Better

Larger models are more capable but:
- **Cost more** per API call
- **Run slower** (higher latency)
- **May be overkill** for simple tasks

**Rule of thumb:** Use the smallest model that reliably handles your task. A smaller model with great prompts often beats a large model with lazy prompts.
`,

  "ai-demystified:2": `
## Hallucination & Mitigation

### Why Hallucination Happens

LLMs don't "know" facts — they predict statistically likely text. Hallucination occurs when the model generates content that is:

- **Plausible-sounding** (follows language patterns)
- **Confidently stated** (no uncertainty markers)
- **Factually wrong** (not grounded in reality)

This happens because the model optimizes for **statistical confidence**, not **truth**. If the training data contains conflicting information, or the question requires knowledge the model doesn't have, it will still generate a confident-sounding answer.

> **Critical insight:** Hallucination is not a bug — it's a fundamental property of how these models work. It can be mitigated but not eliminated.

---

### Mitigation Strategies

**1. Grounding**
Provide the model with authoritative source material and instruct it to only use that material for its response.

**2. Retrieval-Augmented Generation (RAG)**
Connect the model to a knowledge base so it retrieves real documents before generating a response.

**3. Verification Loops**
Ask the model to cite its sources, then verify those citations exist and say what the model claims.

**4. Confidence Calibration**
Ask the model to rate its confidence (1-10) for each claim. Low-confidence statements should be manually verified.

**5. Structured Output**
Constrain the model's output format (JSON, templates) to reduce the surface area for hallucination.

---

### When to Trust vs. Verify

| Task Type | Trust Level | Action |
|-----------|------------|--------|
| Creative writing / brainstorming | High | Use freely |
| Summarization of provided text | Medium-High | Spot-check key claims |
| Factual claims / statistics | Low | Always verify |
| Legal / medical / financial advice | Very Low | Expert review required |
| Code generation | Medium | Test and review |

> **Rule:** The higher the stakes, the more verification you need. Never deploy unverified AI output in high-consequence domains.
`,

  "ai-demystified:3": `
## AI Decision Framework

### Where AI Creates Genuine Business Value

AI delivers the most value when applied to tasks that are:

1. **High volume** — done frequently enough to justify setup time
2. **Pattern-based** — follow recognizable patterns AI can learn
3. **Currently manual** — currently consume human time
4. **Tolerance for imperfection** — don't require 100% accuracy every time

**Top value areas by function:**
- **Marketing:** Content generation, personalization, A/B test analysis
- **Operations:** Document processing, workflow automation, anomaly detection
- **Customer Service:** Tier-1 support, ticket routing, knowledge base generation
- **Finance:** Report generation, data extraction, compliance monitoring
- **HR:** Resume screening, onboarding content, policy Q&A

---

### The "Should This Be AI-Assisted?" Framework

Ask these five questions for any proposed AI use case:

| Question | If Yes | If No |
|----------|--------|-------|
| 1. Is this done frequently (daily/weekly)? | Strong candidate | Weak candidate unless high-value |
| 2. Does it follow patterns? | AI can learn it | Needs human judgment |
| 3. Is current human time > 30 min per instance? | Good ROI potential | May not justify setup |
| 4. Is imperfect output acceptable / reviewable? | Safe to automate | Needs human-in-the-loop |
| 5. Is source data available and clean? | Ready to start | Data work needed first |

**Score 4-5 "Yes"** → Strong AI candidate — pilot it
**Score 2-3 "Yes"** → Consider with caveats — human-in-the-loop recommended
**Score 0-1 "Yes"** → Not an AI play right now

---

### Common Adoption Mistakes

1. **Starting with the hardest problem** — Start with quick wins, not moonshots
2. **No success metrics** — Define "good enough" before you start
3. **Ignoring change management** — Tools only work if people use them
4. **Over-automating** — Keep humans in the loop for high-stakes decisions
5. **Expecting perfection** — AI outputs need review, not blind trust

> **Action item:** Pick one process in your team that scores 4+ on the framework. That's your first AI pilot.
`,

  // ═══════════════════════════ F2: AI RISK & GOVERNANCE ═══════════════════════════
  "ai-risk-governance:0": `
## The Real Risks of AI in Business

### Risk Priority Matrix

Every organization using AI faces these six risks, ranked by likelihood and impact:

---

### Risk #1: Data Leakage
**Impact: Critical | Likelihood: High**

When employees paste confidential data into AI tools, that data may be:
- Used for model training (depending on the tool's terms)
- Stored on third-party servers
- Accessible to the AI vendor's staff

**Mitigation:** Data classification policy, approved tool list, DLP monitoring

---

### Risk #2: Hallucination & Accuracy
**Impact: High | Likelihood: Very High**

AI will generate plausible but incorrect information. If this goes unverified into client deliverables, contracts, or public communications, the consequences can be severe.

**Mitigation:** Mandatory review workflows, verification checklists, "AI-assisted" labeling

---

### Risk #3: Intellectual Property
**Impact: High | Likelihood: Medium**

AI-generated content may inadvertently reproduce copyrighted material. Ownership of AI-generated work is legally ambiguous in most jurisdictions.

**Mitigation:** IP review process, attribution policies, human editing of all outputs

---

### Risk #4: Bias and Fairness
**Impact: High | Likelihood: Medium**

AI models reflect biases in their training data. This is especially dangerous in HR, lending, and customer-facing applications.

**Mitigation:** Bias testing, diverse review panels, human oversight for consequential decisions

---

### Risk #5: Vendor & Supply Chain
**Impact: Medium | Likelihood: Medium**

AI vendor lock-in, pricing changes, service disruptions, and data handling practices all represent operational risk.

**Mitigation:** Multi-vendor strategy, data portability requirements, contractual protections

---

### Risk #6: Prompt Injection (Emerging)
**Impact: Variable | Likelihood: Growing**

Attackers can craft inputs that cause AI systems to ignore instructions, leak data, or perform unauthorized actions.

**Mitigation:** Input sanitization, output validation, least-privilege access for AI agents
`,

  "ai-risk-governance:1": `
## Governance Gap Assessment

### Key Governance Decisions Every Organization Must Make

Before expanding AI use, your organization needs clear positions on:

| Decision | Options | Who Decides |
|----------|---------|-------------|
| Which AI tools are approved? | Whitelist vs. blacklist approach | IT + Legal + Business |
| What data can be used with AI? | Classification tiers (public/internal/confidential/restricted) | Data governance / Legal |
| Who reviews AI output? | Author, peer, manager, or domain expert | Department heads |
| How do we handle AI errors? | Correction process, liability, disclosure | Legal + Operations |
| What training is required? | Role-based requirements, certification | HR + Learning |

---

### Data Classification Requirements for AI

Not all data should be used with AI tools. Classify your data:

**🟢 Public** — Can be used freely with any AI tool
- Published content, public-facing documents, marketing materials

**🟡 Internal** — Can be used with approved enterprise AI tools only
- Internal reports, meeting notes, process documentation

**🔴 Confidential** — Restricted to on-premise / private AI instances only
- Customer PII, financial data, employee records, contracts

**⛔ Restricted** — Never input to any AI tool
- Trade secrets, legal hold documents, classified information, credentials

---

### Vendor Evaluation Criteria

When evaluating AI vendors, assess:

1. **Data handling** — Where is data stored? Is it used for training? Can it be deleted?
2. **Security certifications** — SOC 2, ISO 27001, GDPR compliance
3. **Access controls** — Role-based access, audit logging, SSO integration
4. **Commercial terms** — Usage limits, price escalation, data portability
5. **Exit strategy** — What happens to your data if you leave?
`,

  "ai-risk-governance:2": `
## Acceptable Use Policy Workshop

### Policy Template Walkthrough

Every organization needs a clear AI Acceptable Use Policy. Here's the structure:

---

#### 1. Purpose & Scope
Define who the policy covers and why it exists.

> *"This policy governs the use of AI tools by all employees, contractors, and third parties acting on behalf of [Organization]. Its purpose is to enable productive AI use while managing associated risks."*

#### 2. Approved Tools
Maintain a list of sanctioned AI tools:

| Tool | Approved Use | Data Tier Allowed | Owner |
|------|-------------|-------------------|-------|
| Microsoft Copilot (Enterprise) | All business tasks | Internal + Public | IT |
| ChatGPT Team | Content drafting, research | Internal + Public | IT |
| Midjourney | Marketing visuals | Public only | Marketing |

#### 3. Prohibited Uses
Be explicit about what's not allowed:
- Inputting customer PII into non-enterprise AI tools
- Using AI for final legal or compliance determinations
- Generating synthetic media of real people without consent
- Bypassing security controls using AI tools
- Submitting AI output as original work without disclosure

#### 4. Output Review Requirements
Define review levels based on audience:

| Audience | Review Required |
|----------|----------------|
| Internal working documents | Self-review |
| Cross-team communications | Peer review |
| Client-facing | Manager approval |
| Public / regulatory | Domain expert + Legal |

#### 5. Incident Response
What to do when things go wrong:
1. Stop using the AI tool for the affected task
2. Report to [Security/Compliance team]
3. Preserve the prompt and output
4. Assess impact and remediate

---

### Rollout Strategy
1. **Announce** — All-hands communication with FAQ
2. **Train** — Role-based training sessions (this course!)
3. **Enable** — Provision approved tools
4. **Monitor** — Monthly compliance checks for first quarter
5. **Iterate** — Quarterly policy reviews
`,

  // ═══════════════════════════ F3: AI-READY ORGANIZATION ═══════════════════════════
  "ai-ready-organization:0": `
## The Readiness Question

### AI Adoption Curve

Organizations follow a predictable path with AI:

\`\`\`
Aware → Exploring → Piloting → Scaling → Transformed
\`\`\`

**Where most organizations actually are:**
- 60% are in **Aware** or **Exploring** — they've tried ChatGPT but have no strategy
- 25% are **Piloting** — running experiments but not scaling
- 10% are **Scaling** — moving from pilots to production
- 5% are **Transformed** — AI is embedded in operations

> **Reality check:** If your organization hasn't run a structured AI pilot yet, you're in the majority — and that's okay. The goal isn't speed, it's strategic intent.

---

### Why Readiness Matters

Jumping to AI tools without assessing readiness leads to:
- **Tool sprawl** — everyone buys different AI subscriptions
- **Shadow AI** — employees use unapproved tools with company data
- **Pilot purgatory** — experiments that never move to production
- **Change resistance** — teams feel AI was imposed, not enabled

**The fix:** Assess where you are, build a roadmap, and start small but deliberately.
`,

  "ai-ready-organization:1": `
## AI Readiness Assessment

### Four Dimensions of Readiness

Score your organization 1-5 on each criterion (1 = not started, 5 = mature):

---

#### Dimension 1: Data Readiness
| Criterion | 1 | 3 | 5 |
|-----------|---|---|---|
| Data is classified and cataloged | No classification | Partial classification | Full data classification in place |
| Data quality is monitored | No quality checks | Ad hoc quality reviews | Automated quality monitoring |
| Data is accessible to authorized users | Siloed in departments | Shared by request | Self-service data platform |
| Data governance policies exist | No policies | Basic policies exist | Comprehensive governance framework |

#### Dimension 2: Process Readiness
| Criterion | 1 | 3 | 5 |
|-----------|---|---|---|
| Key processes are documented | Tribal knowledge | Some documentation | Full process maps |
| Processes have clear inputs/outputs | Undefined | Partially defined | Well-defined standards |
| Repetitive tasks are identified | Not tracked | Some awareness | Catalog of automation candidates |
| Quality metrics exist | No measurements | Some KPIs | Comprehensive metrics |

#### Dimension 3: People Readiness
| Criterion | 1 | 3 | 5 |
|-----------|---|---|---|
| AI literacy across leadership | No understanding | Basic awareness | Strategic literacy (this course!) |
| Team openness to AI | Resistance or fear | Curious but cautious | Active champions |
| AI skills in technical team | No AI skills | Some experimentation | Dedicated AI capability |
| Change management capability | No process | Ad hoc approach | Structured change management |

#### Dimension 4: Technical Readiness
| Criterion | 1 | 3 | 5 |
|-----------|---|---|---|
| Cloud infrastructure | On-premise only | Hybrid | Cloud-native |
| API integration capability | No APIs | Some integrations | API-first architecture |
| Security controls for AI | No controls | Basic access control | AI-specific security framework |
| Development/testing environment | None | Basic dev environment | CI/CD pipeline with AI testing |

---

### Interpreting Your Results

| Total Score | Stage | Recommended Action |
|-------------|-------|-------------------|
| 16-32 | **Aware** | Focus on literacy and policy first |
| 33-48 | **Exploring** | Run first structured pilot |
| 49-64 | **Piloting** | Build repeatable pilot framework |
| 65-80 | **Scaling** | Invest in platform and governance |
`,

  "ai-ready-organization:2": `
## 90-Day Roadmap Planning

### Building the Business Case

Every AI initiative needs a business case. Use this framework:

**Problem Statement:** What specific problem are we solving?
**Current State:** How is this done today? What does it cost?
**Proposed Solution:** How will AI help? What tool/approach?
**Expected Benefit:** Time saved, quality improved, capacity increased?
**Investment Required:** Tool costs, training, setup time?
**Risks:** What could go wrong? How do we mitigate?
**Success Metrics:** How will we know it worked?

---

### Designing an Effective AI Pilot

**Pilot Selection Criteria:**
1. ✅ High-frequency task (done daily or weekly)
2. ✅ Clear success metrics (measurable improvement)
3. ✅ Low-risk domain (errors are correctable)
4. ✅ Willing team (champions, not conscripts)
5. ✅ Manageable scope (can show results in 30 days)

**Pilot Structure:**
| Phase | Duration | Activities |
|-------|----------|-----------|
| Setup | Week 1 | Define scope, select tool, train team |
| Run | Weeks 2-4 | Execute with daily check-ins |
| Measure | Week 4 | Collect metrics, gather feedback |
| Decide | Week 5 | Scale, iterate, or stop |

---

### 90-Day Roadmap Template

**Days 1-30: Foundation**
- Complete AI readiness assessment
- Establish governance framework (AUP, approved tools)
- Select and launch first pilot
- Train pilot team

**Days 31-60: Learn**
- Run pilot, collect data
- Document learnings and patterns
- Start second pilot in different area
- Refine governance based on early findings

**Days 61-90: Decide**
- Evaluate pilot results against success criteria
- Decide: scale, iterate, or pivot
- Build 6-month roadmap based on evidence
- Present findings to leadership

---

### Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails | Better Approach |
|-------------|-------------|-----------------|
| "Boil the ocean" | Too many initiatives, no focus | One pilot at a time |
| "Technology-first" | Bought the tool, looking for the problem | Start with the problem |
| "Set and forget" | No monitoring or iteration | Weekly check-ins, monthly reviews |
| "Ivory tower" | AI strategy designed without frontline input | Include end users from day one |
| "Perfection paralysis" | Waiting for the perfect tool/model | Start with what's available, iterate |
`,

  // ═══════════════════════════ I1: PROMPT ENGINEERING ═══════════════════════════
  "prompt-engineering:0": `
## Foundations — Why Prompts Fail

### The Five Prompt Killers

Most prompts fail because of predictable mistakes:

**1. Vagueness** — "Write something about marketing"
*Fix: Be specific about topic, audience, length, angle*

**2. Missing Context** — "Summarize this" (with no background)
*Fix: Provide role, audience, purpose, and source material*

**3. Ambiguous Format** — No indication of expected output structure
*Fix: Specify format explicitly (bullet points, table, email, report)*

**4. No Examples** — Asking for output without showing what "good" looks like
*Fix: Include 1-3 examples of desired output*

**5. Kitchen Sink** — Cramming too many instructions into one prompt
*Fix: Break complex tasks into sequential prompts*

---

### The CRAFT Framework

Every effective prompt includes these elements:

| Element | Question | Example |
|---------|----------|---------|
| **C**ontext | What background does the AI need? | "You're helping a B2B SaaS company..." |
| **R**ole | What expertise should the AI embody? | "Act as a senior marketing strategist..." |
| **A**ction | What specific task should it perform? | "Write 3 LinkedIn posts that..." |
| **F**ormat | What should the output look like? | "Each post should be 150-200 words with..." |
| **T**one | What voice/style is appropriate? | "Professional but conversational, avoid jargon" |

---

### The Specificity Lever

Prompt quality is directly proportional to specificity:

**Vague:** "Write a blog post about AI"
**Better:** "Write a 500-word blog post about AI adoption challenges for mid-market manufacturers, targeting operations directors"
**Best:** "Write a 500-word blog post about AI adoption challenges for mid-market manufacturers (100-500 employees). Target audience: operations directors evaluating their first AI initiative. Tone: pragmatic, evidence-based. Include 3 specific examples. End with a clear next step."

> **Exercise:** Take one of your recent AI prompts and rewrite it using the CRAFT framework. Compare the outputs.
`,

  "prompt-engineering:1": `
## Advanced Techniques

### Chain-of-Thought Reasoning

Instead of asking for a direct answer, ask the model to **think step by step**:

**Without CoT:** "What's the best pricing strategy for our SaaS product?"

**With CoT:** "I need to determine a pricing strategy for our SaaS product. Think through this step by step:
1. First, analyze the typical pricing models for B2B SaaS
2. Consider our context: [details]
3. Evaluate each model against our constraints
4. Recommend a strategy with reasoning"

Chain-of-Thought works because it forces the model to show its work, reducing errors and making it easier to spot flawed reasoning.

---

### Few-Shot Learning with Examples

Providing examples of desired output dramatically improves consistency:

\`\`\`
Transform customer feedback into structured insights.

Example Input: "Your app crashes every time I try to upload a photo"
Example Output:
- Category: Bug Report
- Feature: Photo Upload
- Severity: High
- Sentiment: Frustrated
- Action: Route to Engineering

Now process this feedback: "I love the new dashboard but wish I could export to PDF"
\`\`\`

**Best practices for examples:**
- Use 2-3 examples (diminishing returns after that)
- Show variety (different categories, edge cases)
- Keep examples realistic (not cherry-picked easy cases)

---

### System Prompts and Personas

System prompts set persistent behavior across an entire conversation:

\`\`\`
System: You are a senior financial analyst at a mid-market manufacturing company. 
You communicate in clear, jargon-free language. When uncertain, you say so.
You always cite specific numbers and provide your reasoning.
\`\`\`

**Powerful persona patterns:**
- **Expert reviewer:** "You are a [domain] expert reviewing this for errors and improvements"
- **Devil's advocate:** "Challenge every assumption in this proposal. What could go wrong?"
- **Translator:** "Explain this to a [specific audience] with no technical background"
- **Structured thinker:** "Organize your response using [specific framework]"

---

### Multi-Step Prompt Chains

Complex tasks are better handled as a sequence of prompts:

1. **Step 1: Research** — "Analyze this data and identify the top 5 trends"
2. **Step 2: Strategy** — "Given these trends, recommend 3 strategic actions"
3. **Step 3: Communication** — "Draft an executive summary of these recommendations"

Each step builds on the previous output, keeping the model focused on one task at a time.
`,

  "prompt-engineering:2": `
## Practical Mastery

### Troubleshooting Toolkit

When AI output isn't meeting expectations, diagnose systematically:

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| Output is too generic | Insufficient context | Add specific details about audience, purpose, constraints |
| Output is wrong format | Format not specified | Add explicit format instructions with examples |
| Output contradicts itself | Too many competing instructions | Simplify; break into steps |
| Output hallucinates facts | No source material provided | Ground with specific source documents |
| Output is too long/short | No length constraints | Specify word count or "3-5 bullet points" |
| Output misses the point | Vague or ambiguous action | Rewrite the core ask with more specificity |
| Output is inconsistent | No examples | Add 2-3 few-shot examples |

---

### Building Your Template Library

The most productive AI users maintain a library of tested prompts. Start with these categories:

**1. Content Templates**
- Email drafts (by type: outreach, follow-up, escalation)
- Report sections (executive summary, findings, recommendations)
- Social media posts (by platform and content type)

**2. Analysis Templates**
- Data summarization (from tables, reports, feedback)
- Competitive analysis
- Decision comparison (pros/cons, weighted criteria)

**3. Process Templates**
- Meeting prep (agenda generation from notes)
- Status reports (from task list data)
- Documentation (process docs, how-to guides)

---

### Template Structure

Every template should include:

\`\`\`
[TEMPLATE NAME]
Purpose: What this template is for
When to use: Specific trigger/situation

---
Context: [Fill in project/company context]

Role: You are a [specific role] with expertise in [domain].

Task: [Specific action verb] [specific deliverable]

Input: [Paste source material here]

Format: [Exact output format expected]

Constraints:
- [Length/word count]
- [Tone and style]
- [Things to include/exclude]

Examples:
[1-2 examples of desired output]
---
\`\`\`

> **Exercise:** Create 3 templates for tasks you do at least weekly. Test each one 3 times and refine until output is consistently useful.
`,

  // ═══════════════════════════ I2: AGENTIC WORKSPACES ═══════════════════════════
  "agentic-workspaces:0": `
## Setup — Browser AI vs Desktop Agent

### The Fundamental Difference

| Feature | Browser AI (ChatGPT, Claude.ai) | Desktop Agent (VS Code + Copilot/Cursor) |
|---------|-------------------------------|----------------------------------------|
| Context | Only what you paste in | Sees your entire workspace (files, folders, code) |
| Actions | Generates text in a chat window | Creates, edits, and deletes files; runs commands |
| Persistence | New conversation = blank slate | Workspace persists across sessions |
| Scope | One task at a time | Multi-step workflows across files |
| Integration | Copy-paste workflow | Direct access to terminal, file system, APIs |

> **Key insight:** A browser AI is a consultant you email. A desktop agent is an assistant sitting at the desk next to you with access to your files.

---

### Installation Steps

**1. Install VS Code**
- Download from [code.visualstudio.com](https://code.visualstudio.com)
- Install with default settings

**2. Configure AI Extension**
- GitHub Copilot: Install from Extensions marketplace → Sign in with GitHub
- Cursor: Download from [cursor.sh](https://cursor.sh) (VS Code fork with built-in AI)

**3. Verify Environment**
- Open a new workspace folder
- Open the Chat panel (Ctrl+Shift+I or Cmd+Shift+I)
- Ask: "What files are in this workspace?"
- The agent should respond based on your actual files

**4. First Agent Conversation**
Try these starter prompts:
- "Create a README.md for this project"
- "Explain what this workspace does"
- "Find all TODO comments in this project"

---

### Key Mental Model

The agent is a capable but literal collaborator. It will:
- ✅ Do exactly what you ask (if instructions are clear)
- ✅ Work with your actual files and data
- ✅ Remember context within a conversation
- ⚠️ Sometimes misunderstand ambiguous requests
- ⚠️ Occasionally make mistakes (always review)
- ❌ Not take initiative unless prompted
`,

  "agentic-workspaces:1": `
## Core Operations

### File Operations

Your agent can create, read, edit, and search files in your workspace:

**Creating files:**
> "Create a file called meeting-notes.md with today's date as the heading"

**Editing files:**
> "In config.json, change the API endpoint from staging to production"

**Searching:**
> "Find all files that reference 'customer_id' in the src/ folder"

**Multi-file operations:**
> "Create a new component called UserProfile with a TypeScript file, test file, and CSS module"

---

### Terminal Commands

The agent can run commands in your terminal:

> "Run the test suite and show me any failures"
> "Install the lodash package"
> "Check the git status and show recent commits"

**Safety note:** Always review terminal commands before they execute. The agent has the same permissions as your user account.

---

### Multi-Step Workflows

Chain requests to accomplish complex tasks:

**Example: Research → Analyze → Create**
1. "Read all the markdown files in the research/ folder and summarize the key findings"
2. "Based on those findings, identify the top 3 recommendations"
3. "Create a presentation outline in slides.md with those recommendations"

**Example: Debug → Fix → Test**
1. "Look at the error in the console and find the relevant source file"
2. "Fix the bug and explain what was wrong"
3. "Run the tests to verify the fix"

> **Pro tip:** Be explicit about what "done" looks like. Instead of "fix this," say "fix the null reference error on line 42 and make sure the user profile loads correctly."
`,

  "agentic-workspaces:2": `
## Context & Structure

### Workspace Organization Patterns

A well-organized workspace helps both you and the agent:

\`\`\`
project/
├── AGENTS.md          ← Instructions for the AI agent
├── README.md          ← Project overview
├── plans/
│   └── Current/
│       ├── Brief.md   ← What we're building and why
│       └── Plan.md    ← How we're building it (steps + progress)
├── intake/            ← Raw inputs (notes, transcripts, research)
├── src/               ← Source code / working files
├── docs/              ← Documentation
└── tests/             ← Test files
\`\`\`

---

### Context Management

AI agents have limited memory. Structure your workspace so the agent can find what it needs:

**AGENTS.md** — Persistent instructions the agent reads at the start of every conversation:
- Your preferences and working style
- Project-specific rules
- File conventions
- What to read first

**Brief.md** — The "what and why":
- Objective
- Requirements
- Constraints
- Success criteria

**Plan.md** — The "how":
- Execution steps
- Progress tracking
- Change log
- Decisions made

---

### Persistent Instructions

Create an AGENTS.md file with rules the agent should always follow:

\`\`\`markdown
# AGENTS.md

## Rules
1. Always read Brief.md before starting work
2. Update Plan.md after completing each step
3. Never delete files without confirmation
4. Use TypeScript for all new code
5. Write tests for every new function

## Preferences
- Keep responses concise
- Show code, not explanations of code
- Ask before making irreversible changes
\`\`\`

> The agent will reference this file automatically in VS Code Copilot, forming a persistent "personality" across sessions.
`,

  "agentic-workspaces:3": `
## Operational Mastery

### Guardrails and Safety Protocols

Treat the AI agent like a capable junior employee: trust but verify.

**Must-have guardrails:**
1. **Review all file changes** before committing to version control
2. **Never give agents access to production credentials** directly
3. **Use version control** (git) so you can always undo changes
4. **Set clear boundaries** in AGENTS.md about what the agent should never do
5. **Confirm destructive actions** — deleting files, overwriting data, running unfamiliar commands

---

### Daily Workflow Patterns

**Morning startup:**
1. Open workspace
2. Agent reads AGENTS.md + Brief.md + Plan.md
3. "What's the next step on the plan?"
4. Work through tasks with agent assistance

**Per-task pattern:**
1. Describe the task clearly
2. Review the agent's plan before it executes
3. Check the output
4. Update Plan.md (mark complete, log notes)

**End of session:**
1. "Summarize what we accomplished today"
2. Commit changes to git
3. Update Plan.md with status and next steps

---

### Troubleshooting Common Issues

| Problem | Solution |
|---------|----------|
| Agent forgot earlier context | Re-reference the relevant file: "Read Brief.md and then..." |
| Agent makes the same mistake repeatedly | Add a rule to AGENTS.md |
| Agent is too verbose | "Keep responses under 3 sentences unless I ask for detail" |
| Agent takes wrong approach | "Stop. Let me describe the approach I want..." |
| Agent seems confused | Start a new conversation, provide fresh context |

---

### Complete a Real Task

Apply everything you've learned:

1. **Create a workspace** for an actual work project
2. **Set up AGENTS.md** with your preferences and rules
3. **Write a Brief.md** describing a real deliverable
4. **Build a Plan.md** with the agent's help
5. **Execute the plan** step by step
6. **Review the output** and iterate

> This is not a drill — use a real project. The best way to learn agentic workflows is to do real work with them.
`,

  // ═══════════════════════════ I3: GENAI TOOLS ═══════════════════════════
  "genai-tools:0": `
## Content Creation with AI

### Writing Workflows

AI transforms writing from blank-page to editing-and-refining:

**The AI Writing Pipeline:**
1. **Brief** → Tell AI what to write (CRAFT framework)
2. **Draft** → AI generates first version
3. **Review** → You evaluate and mark issues
4. **Refine** → AI iterates based on your feedback
5. **Polish** → Final human edit for voice and accuracy

---

### Editing and Content Transformation

AI excels at transforming existing content:

| Task | Prompt Pattern |
|------|---------------|
| Summarize | "Summarize this [document] in [X] bullet points for [audience]" |
| Reformat | "Convert this email thread into a structured action item list" |
| Translate register | "Rewrite this technical document for a non-technical audience" |
| Expand | "Take these bullet points and expand into a full [document type]" |
| Condense | "Reduce this 2000-word report to a 200-word executive summary" |

---

### Brand Voice Consistency

Three techniques for maintaining consistent voice:

**1. Few-Shot Examples**
Provide 3 examples of existing brand content and say "Write in this style"

**2. Style Guide Prompt**
Create a style guide prompt: "Write in [Brand] voice: [characteristics]. Always [dos]. Never [don'ts]."

**3. Revision Loop**
Draft → Compare to brand samples → "Make this more [brand characteristic]" → Repeat

---

### Content Pipeline Exercise

Build a repeatable content pipeline:

1. **Input:** Raw meeting notes, research, or data
2. **Step 1:** "Extract the 5 key takeaways from this material"
3. **Step 2:** "Turn each takeaway into a LinkedIn post (150 words, professional tone)"
4. **Step 3:** "Create a blog post that ties all 5 takeaways together (800 words)"
5. **Step 4:** "Write an email newsletter summary (100 words) linking to the blog post"

One input → four content pieces → consistent messaging across channels.
`,

  "genai-tools:1": `
## Analysis & Research with AI

### Document Analysis Techniques

AI can process large volumes of text quickly when given clear instructions:

**Pattern: Extract & Structure**
> "Read this 50-page report and extract: (1) key findings, (2) data points cited, (3) recommendations made, (4) risks identified. Present as a structured table."

**Pattern: Compare & Contrast**
> "Compare these three vendor proposals across: pricing, capabilities, implementation timeline, and support. Create a comparison matrix."

**Pattern: Gap Analysis**
> "Review our current policy against this regulatory framework. Identify gaps where we don't meet requirements."

---

### Data Summarization Patterns

| Data Type | Prompt Approach |
|-----------|----------------|
| Survey results | "Analyze these responses. Identify themes, quantify sentiment, highlight outliers" |
| Financial data | "Summarize trends, calculate key metrics, flag anomalies" |
| Customer feedback | "Categorize by topic, score sentiment, prioritize by frequency" |
| Meeting transcripts | "Extract decisions, action items (with owners), and open questions" |

---

### Research Workflows

**Structured Research Template:**
\`\`\`
Research Topic: [Topic]
Questions to Answer:
1. [Specific question]
2. [Specific question]
3. [Specific question]

For each question:
- Provide a clear answer
- Cite reasoning
- Note confidence level (High/Medium/Low)
- Flag anything that needs human verification
\`\`\`

**Important:** AI research should be treated as a starting point. Always verify critical claims, statistics, and recommendations through primary sources.
`,

  "genai-tools:2": `
## Integration & Workflows

### Combining Tools Effectively

No single AI tool does everything well. Build workflows that use the right tool for each step:

| Need | Best Tool Category | Examples |
|------|-------------------|----------|
| Text generation | LLM (conversational) | ChatGPT, Claude, Gemini |
| Image creation | Diffusion model | DALL-E 3, Midjourney, Stable Diffusion |
| Code generation | Code-focused LLM | GitHub Copilot, Cursor, Cody |
| Data analysis | LLM with code execution | Code Interpreter, Gemini Advanced |
| Voice/audio | Speech model | ElevenLabs, PlayHT |
| Video | Video generation | Runway, Sora, HeyGen |

---

### Building Repeatable Processes

Document your AI workflows so they're repeatable:

\`\`\`
Workflow: Weekly Client Report
1. Pull data from [source] 
2. → ChatGPT: "Analyze this data and identify top 3 trends and 2 concerns"
3. → Claude: "Draft client-facing summary in our brand voice (template attached)"
4. → Human: Review, edit, approve
5. → Send to client
Time: 30 min (was 3 hours)
\`\`\`

---

### Cost Optimization

AI tools vary dramatically in cost:

| Strategy | How |
|----------|-----|
| Right-size the model | Use GPT-4o-mini for simple tasks, GPT-4o for complex |
| Batch processing | Combine multiple requests into one prompt |
| Cache reusable outputs | Save and reuse system prompts, templates, examples |
| Free tiers first | Most tools offer free trials; test before committing |
| Monitor usage | Track API costs weekly to catch unexpected spikes |

---

### Model Comparison

| Capability | GPT-4o | Claude 3.5 Sonnet | Gemini 1.5 Pro |
|-----------|--------|-------------------|----------------|
| Creative writing | ★★★★★ | ★★★★★ | ★★★★ |
| Factual accuracy | ★★★★ | ★★★★★ | ★★★★ |
| Code generation | ★★★★★ | ★★★★★ | ★★★★ |
| Long document handling | ★★★★ | ★★★★★ | ★★★★★ |
| Instruction following | ★★★★★ | ★★★★★ | ★★★★ |
| Cost efficiency | ★★★★ | ★★★★ | ★★★★★ |
| Multimodal (image input) | ★★★★★ | ★★★★ | ★★★★★ |

> **Recommendation:** Don't marry a single model. Test your key workflows on 2-3 models and pick the best fit per task.
`,

  // ═══════════════════════════ I4: SYNTHETIC MEDIA ═══════════════════════════
  "synthetic-media:0": `
## AI Image Generation

### Text-to-Image Fundamentals

AI image generation works by converting text descriptions into visual output through diffusion models. The quality of your output depends entirely on the quality of your prompt.

**Key platforms:**
| Tool | Strengths | Best For |
|------|-----------|----------|
| DALL-E 3 (ChatGPT) | Ease of use, text rendering | Quick concepts, marketing visuals |
| Midjourney | Aesthetic quality, consistency | Brand imagery, artistic content |
| Stable Diffusion | Customization, local control | Technical users, custom models |
| Adobe Firefly | Brand safety, commercial license | Enterprise marketing |

---

### Effective Visual Prompting

Structure your image prompts with six elements:

**Subject** + **Action** + **Setting** + **Style** + **Mood** + **Technical**

**Example:**
> "A diverse team of professionals collaborating around a glass conference table, in a modern office with floor-to-ceiling windows, photorealistic style, warm and optimistic mood, shot at eye level with shallow depth of field"

**Prompt engineering tips for images:**
- Be specific about composition (close-up, wide shot, overhead)
- Reference art styles ("in the style of editorial photography")
- Specify what you DON'T want ("no text overlays, no watermarks")
- Include lighting directions ("soft natural light from the left")

---

### Editing and Refinement

**Iteration workflow:**
1. Generate 4 variations from your prompt
2. Select the best as a starting point
3. Use inpainting to fix specific areas
4. Upscale for final resolution
5. Apply brand colors/overlays in your design tool

> **Exercise:** Create 3 marketing visuals for a fictional product launch. Start with a detailed prompt, generate variations, and refine your best option.
`,

  "synthetic-media:1": `
## Video & Audio with AI

### AI Video Synthesis

AI-generated video is evolving rapidly. Current business applications:

| Use Case | Tool | Maturity |
|----------|------|----------|
| AI avatar presentations | HeyGen, Synthesia | Production-ready |
| Product demos | Runway, Pika | Emerging |
| Social media clips | CapCut AI, OpusClip | Production-ready |
| Full video generation | Sora, Runway Gen-3 | Early stage |

**AI Avatar Best Practices:**
- Use for internal training, product demos, and social content
- Always disclose AI-generated content
- Choose avatars that represent diverse perspectives
- Avoid using avatars that mimic real public figures

---

### Voice Generation and Cloning

AI voice technology enables:
- **Text-to-speech** with natural-sounding voices
- **Voice cloning** from short audio samples
- **Real-time translation** with voice preservation
- **Podcast/narration** generation at scale

**Key tools:** ElevenLabs, PlayHT, Amazon Polly, Google Cloud TTS

**Critical safeguards:**
- Never clone someone's voice without explicit consent
- Disclose AI-generated voice in all content
- Keep voice clone access restricted to authorized users
- Establish organizational policy before deploying

---

### Business Audio Applications

| Application | How AI Helps | Tools |
|-------------|-------------|-------|
| Training narration | Convert text courses to audio | ElevenLabs, PlayHT |
| Podcast production | Generate intros, clean audio | Descript, Adobe Podcast |
| Accessibility | Add narration to visual content | Any TTS service |
| Localization | Translate and re-voice content | HeyGen, ElevenLabs |
| Meeting summaries | Transcribe and summarize | Otter.ai, Fireflies |
`,

  "synthetic-media:2": `
## Ethics & Governance for Synthetic Media

### Disclosure Requirements

**When must you disclose AI generation?**

| Content Type | Disclosure Required? | How |
|-------------|---------------------|-----|
| Internal training | Recommended | Note in description |
| Marketing content | Yes (most jurisdictions) | Clear label or watermark |
| Social media | Yes (platform policies) | #AI or platform label |
| Client deliverables | Yes | Explicit written disclosure |
| News/journalism | Absolutely | Prominent disclaimer |

---

### Legal Considerations

**Copyright:**
- AI-generated content may not be copyrightable (varies by jurisdiction)
- Using copyrighted material in prompts may create legal exposure
- "Style of [artist]" prompts are ethically and legally risky

**Commercial use:**
- Check each tool's commercial license terms
- Enterprise plans typically include commercial rights
- Free/personal plans often restrict commercial use

**Liability:**
- Your organization is responsible for AI-generated content it publishes
- "The AI made it" is not a defense
- Content review processes are essential

---

### Brand and Reputation Risk

**Risk scenarios:**
1. AI-generated image contains inappropriate hidden elements
2. Marketing content is obviously AI-generated (uncanny valley)
3. Competitor points out undisclosed AI use
4. AI-generated spokesperson says something unexpected

**Mitigation framework:**
1. **Review:** Every piece of AI-generated content gets human review
2. **Test:** Preview with a small audience before wide distribution
3. **Label:** Be transparent about AI use (builds trust)
4. **Archive:** Keep records of prompts and outputs for accountability
5. **Policy:** Document organizational guidelines for AI media

---

### Exercise: Develop Your Guidelines

Create a one-page AI Media Policy for your organization:
1. What types of synthetic media are approved?
2. What disclosure/labeling is required?
3. Who reviews AI-generated media before publication?
4. What topics/subjects are off-limits for AI generation?
5. How do you handle mistakes or backlash?
`,

  // ═══════════════════════════ I5: AI OPERATIONS ═══════════════════════════
  "ai-operations:0": `
## Foundations — Workflow Design

### 7 Workflow Design Principles

1. **Start with the trigger** — What event kicks off this workflow?
2. **Define the happy path** — What should happen when everything goes right?
3. **Plan for failure** — What happens when AI output is wrong or an API fails?
4. **Keep humans in the loop** — Where do humans need to review or approve?
5. **Build in validation** — How do you verify each step's output?
6. **Log everything** — You can't improve what you can't measure
7. **Design for iteration** — Version your prompts and workflows, don't set and forget

---

### Anatomy of an AI Workflow

Every AI workflow follows this pattern:

\`\`\`
Trigger → Process → Validate → Action

[Event occurs]
    ↓
[AI processes data]
    ↓
[Quality check on output]
    ↓  ↓ (fail → retry or alert human)
[Take action with validated output]
\`\`\`

---

### Tool Landscape

| Tool | Complexity | Best For | Pricing Model |
|------|-----------|----------|---------------|
| Zapier | Low | Simple 2-3 step automations | Per-task |
| Make (Integromat) | Medium | Visual workflow builder | Per-operation |
| n8n | Medium-High | Self-hosted, complex flows | Self-hosted (free) or cloud |
| LangChain | High | AI-native chains and agents | Open source |
| Temporal | Very High | Mission-critical orchestration | Enterprise |

**Selection criteria:**
- How complex is your workflow? (2 steps → Zapier, 10 steps → n8n)
- Do you need to self-host? (compliance requirements → n8n)
- What's your team's technical skill level?
- What's your budget? (Zapier scales expensively)

---

### Design Exercise

Map out a workflow you want to automate:
1. What triggers it?
2. What data does it need?
3. What does the AI do with that data?
4. How do you validate the output?
5. What action do you take with good output?
6. What happens when it fails?
`,

  "ai-operations:1": `
## Building Blocks

### Triggers and Inputs

**Event-based triggers:**
- New email received (matching criteria)
- Form submission
- File upload
- Webhook from external system
- Chat message / Slack command
- Calendar event

**Schedule-based triggers:**
- Daily at 9am (report generation)
- Weekly (digest compilation)
- Monthly (analysis and summary)

**Manual triggers:**
- Button click in dashboard
- API call from custom app
- Command line execution

---

### AI Processing Steps

Common AI operations in workflows:

| Operation | Example | Prompt Pattern |
|-----------|---------|---------------|
| Classify | Route support tickets | "Classify this ticket as: Bug, Feature Request, Question, Complaint" |
| Extract | Pull data from documents | "Extract: customer name, date, amount, items from this invoice" |
| Transform | Convert format | "Rewrite this technical log as a client-facing status update" |
| Generate | Create content | "Write a follow-up email based on this meeting summary" |
| Analyze | Identify patterns | "Analyze these 50 reviews and identify the top 3 themes" |
| Decide | Make routing decisions | "Based on this data, should we: approve, deny, or escalate?" |

---

### Outputs and Actions

After AI processing, common output actions:
- Send email/notification
- Update database record
- Create document/file
- Post to Slack/Teams
- Trigger another workflow
- Update CRM record
- Generate report

---

### Exercise: Build a Simple Workflow

**Scenario:** Automatically process customer support emails

1. **Trigger:** New email to support@company.com
2. **Extract:** Customer name, issue description, urgency
3. **Classify:** Bug / Question / Feature Request / Complaint
4. **Route:** Based on classification, assign to correct team
5. **Generate:** Draft initial response
6. **Action:** Create ticket, send draft to agent for review
`,

  "ai-operations:2": `
## Reliability & Quality

### Error Handling Patterns

AI workflows WILL fail. Plan for it:

**Pattern 1: Retry with Backoff**
If API call fails, wait 5 seconds and retry. Then 15 seconds. Then 60 seconds. Then alert a human.

**Pattern 2: Fallback**
If primary AI model fails, fall back to secondary model. If that fails, route to human.

**Pattern 3: Circuit Breaker**
If a step fails N times in a row, stop the entire workflow and alert operations team.

**Pattern 4: Dead Letter Queue**
Failed items go to a queue for manual review instead of being lost.

---

### Validation and Quality Gates

Never pass AI output directly to action without validation:

| Validation Type | How | When |
|----------------|-----|------|
| Format check | Does output match expected schema? | Every time |
| Length check | Is output within acceptable range? | Every time |
| Confidence score | Did AI report high confidence? | When available |
| Keyword check | Does output contain required elements? | For structured outputs |
| Human review | Person checks before action | High-stakes outputs |

---

### Logging and Monitoring

**Log everything:**
- Timestamp of each step
- Input to each AI call
- Output from each AI call
- Processing time
- Any errors or retries
- Final action taken

**Monitor for:**
- Error rate (should be < 5%)
- Processing time (watch for degradation)
- Output quality drift (regular spot-checks)
- Cost per workflow run
- Volume trends

> **Rule:** If you can't see what your workflow is doing, you can't trust it. Logging is not optional — it's the foundation of operational reliability.
`,

  "ai-operations:3": `
## Production & Scale

### Deployment Patterns

**Pattern 1: Shadow Mode**
Run the AI workflow alongside existing process. Compare outputs but don't act on AI results yet. Duration: 2-4 weeks.

**Pattern 2: Human-in-the-Loop**
AI processes and drafts, human reviews and approves. Full automation later once confidence is established.

**Pattern 3: Gradual Rollout**
Start with 10% of volume automated. Increase to 25%, 50%, 100% as quality metrics confirm.

**Pattern 4: Full Automation with Monitoring**
AI handles everything. Humans only intervene when alerts fire. Requires mature monitoring.

---

### Maintenance and Improvement

AI workflows are not "set and forget":

**Weekly:**
- Review error logs
- Spot-check 5-10 random outputs
- Check cost trends

**Monthly:**
- Review quality metrics
- Update prompts based on failure patterns
- Check for better/cheaper models
- Update documentation

**Quarterly:**
- Full workflow audit
- Evaluate ROI vs. expectations
- Assess new tool options
- Update stakeholders

---

### Scaling Considerations

| Challenge | Solution |
|-----------|----------|
| Rate limits | Implement queuing and batching |
| Cost at scale | Optimize prompts, right-size models |
| Latency | Parallelize independent steps |
| Consistency | Version-control all prompts |
| Debugging | Comprehensive logging + replay capability |

---

### Production Readiness Checklist

Before going live, verify:

- [ ] All error handling paths tested
- [ ] Logging captures full audit trail
- [ ] Monitoring alerts configured
- [ ] Rollback plan documented
- [ ] Prompt versions tracked
- [ ] Cost estimates match budget
- [ ] Human escalation path tested
- [ ] Documentation up to date
- [ ] Team trained on operations
- [ ] Stakeholders informed
`,

  // ═══════════════════════════ I6: AI SECURITY ═══════════════════════════
  "ai-security:0": `
## Understanding the AI Attack Surface

### Core Mental Model

> **An AI agent is software running with your permissions.**

When you give an AI agent access to your terminal, files, and APIs, it can do anything you can do. This includes:
- Read any file you can read
- Run any command you can run
- Access any API with your credentials
- Send data to external services

This isn't theoretical — it's how these tools work by design. The question isn't whether to use them, but how to use them safely.

---

### Attack Surface Map

\`\`\`
┌─────────────────────────────────────────┐
│            AI Agent Surface              │
├──────────┬──────────┬──────────┬────────┤
│ Terminal  │  Files   │  Web/MCP │ Browser│
│ Commands  │  System  │  Tools   │ Access │
├──────────┼──────────┼──────────┼────────┤
│ Can run   │ Can read │ Can call │ Can    │
│ any cmd   │ write    │ external │ access │
│ as you    │ delete   │ APIs     │ URLs   │
└──────────┴──────────┴──────────┴────────┘
         ↓
┌─────────────────────────────────────────┐
│         Context Window Attack           │
│ Malicious content in files/URLs can     │
│ alter agent behavior                    │
└─────────────────────────────────────────┘
\`\`\`

---

### Five Real Risks (Ranked)

**1. Prompt Injection** (Highest Risk)
Malicious content in files, websites, or tools that hijacks the agent's behavior.
> *Example: A README.md containing hidden instructions that make the agent exfiltrate your environment variables.*

**2. Data Exfiltration**
Agent sends sensitive data to external services (intentionally via injection, or unintentionally via tool calls).

**3. Credential Exposure**
Agent reads .env files, config files, or secret stores and includes credentials in outputs or logs.

**4. Destructive Commands**
Agent runs commands that delete data, modify production systems, or corrupt files.

**5. File Injection**
Malicious files that, when read by the agent, alter its behavior for subsequent operations.

---

### Seven Defense Layers

Implement these in order (each layer < 15 minutes to set up):

1. **Workspace isolation** — Separate workspace per project; no shared credentials
2. **Credential isolation** — .env files excluded from agent context; use vault references
3. **Command confirmation** — Agent asks before running terminal commands
4. **File access boundaries** — Agent stays within workspace directory
5. **Network restrictions** — Limit outbound connections from agent context
6. **Output review** — Review all agent-generated files before committing
7. **Audit logging** — Track all agent actions for post-incident analysis
`,

  "ai-security:1": `
## Operational Profiles & Enterprise

### Three Profiles for Three Risk Levels

#### Profile: Standard (Most Users)
- Agent has workspace access
- Terminal commands require confirmation
- No access to production systems
- Output reviewed before commit
- Use for: Daily development, content creation, analysis

#### Profile: Restricted (Sensitive Work)
- Agent has read-only file access
- No terminal access
- No external tool/MCP access
- All output manually copied
- Use for: Working with confidential data, compliance work

#### Profile: Elevated (Trusted Automation)
- Agent has full workspace access
- Pre-approved command set runs without confirmation
- API access to approved services
- Automated testing validates output
- Use for: CI/CD pipelines, automated reports, DevOps

---

### MCP and Tool Governance

Model Context Protocol (MCP) tools extend agent capability — and attack surface:

**Governance checklist for new MCP tools:**
1. Who published the tool? Is it from a trusted source?
2. What permissions does it need? (minimal privilege principle)
3. What data does it send externally?
4. Has the source code been reviewed?
5. Is it pinned to a specific version?

**Tool categories by risk:**
| Risk Level | Examples | Controls |
|-----------|---------|----------|
| Low | File search, workspace tools | Standard approval |
| Medium | GitHub, database read-only | Team lead approval |
| High | Email send, API write access | Security team approval |
| Critical | Production deploy, financial APIs | CISO approval |

---

### Enterprise Security Considerations

For organizations deploying AI agents at scale:

**Identity and Access:**
- Integrate AI tool access with SSO/SAML
- Role-based access to different agent capabilities
- Audit logs of all agent activity per user

**Data Protection:**
- Data classification enforced in agent context
- DLP policies for agent output
- Encryption at rest and in transit

**Compliance:**
- AI usage logged for regulatory requirements
- Prompt and output retention per policy
- Regular security assessments of AI tools

---

### Exercise: Build Your Security Checklist

Create a security checklist for your environment:

1. What profile (Standard/Restricted/Elevated) is appropriate for your work?
2. What credentials exist in your workspace? How are they protected?
3. What MCP tools do you use? Have they been reviewed?
4. What's your process for reviewing agent output?
5. How would you detect if an agent was compromised?
`,
};

export function getLessonContent(courseSlug: string, sectionIndex: number): string {
  const key = `${courseSlug}:${sectionIndex}`;
  return lessonContent[key] || `
## Content Coming Soon

This section's detailed content is being developed. Check back soon for the full lesson material.

In the meantime, review the section outline on the course page for key topics covered.
`;
}

export function getCourseLessonKeys(courseSlug: string): string[] {
  return Object.keys(lessonContent).filter(key => key.startsWith(courseSlug + ":"));
}
