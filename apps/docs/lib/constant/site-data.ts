export type NavItem = {
  label: string;
  href: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

export const navItems: NavItem[] = [
  { label: "Product", href: "/" },
  { label: "Docs", href: "/docs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Security", href: "/security" },
  { label: "Blog", href: "#" },
];

export const featureItems: Feature[] = [
  {
    title: "Intelligent triage",
    description:
      "Auto-label incoming issues by intent, urgency, and area ownership so maintainers skip repetitive routing.",
  },
  {
    title: "Duplicate detection",
    description:
      "Semantic matching identifies repeat reports and links contributors to active issue threads.",
  },
  {
    title: "Documentation answers",
    description:
      "Generate response drafts grounded in docs, release notes, and repository history.",
  },
  {
    title: "Priority insights",
    description:
      "Rank issues by impact signals so teams focus on production-critical problems first.",
  },
  {
    title: "Workflow automation",
    description:
      "Trigger labels, assignees, and escalation workflows from one policy-driven automation layer.",
  },
];

export const howItWorks = [
  {
    title: "Connect your repositories",
    description: "Install the GitHub app and map your triage policy to labels and routing rules.",
  },
  {
    title: "Index project context",
    description: "Maintania AI builds knowledge from docs, issue history, and maintainer decisions.",
  },
  {
    title: "Automate the first pass",
    description: "Each new issue is classified, deduplicated, and prioritized before humans review.",
  },
];

export const useCases = [
  "Open source maintainers",
  "Developer tools teams",
  "Enterprise engineering teams",
];

export const testimonials = [
  {
    quote:
      "Maintania AI reduced our first-response triage workload by 43% in the first month.",
    byline: "Lead Maintainer, infra OSS",
  },
  {
    quote:
      "We now route high-priority defects in minutes instead of scanning issue queues manually.",
    byline: "Director of Engineering, DevTools company",
  },
];

export const productBreakdown = [
  {
    title: "Classification engine",
    description:
      "Issues are tagged by type, urgency, and likely owner using policy rules and repository history.",
  },
  {
    title: "Response copilot",
    description:
      "Maintainers receive draft replies linked to exact documentation passages and previous resolved issues.",
  },
  {
    title: "Priority radar",
    description:
      "A scoring layer highlights incidents with user impact, regressions, and release-blocking risk.",
  },
];

export const productMetrics = [
  { label: "Average triage reduction", value: "40%" },
  { label: "Duplicate issue detection", value: "Up to 85%" },
  { label: "Time to first useful response", value: "< 10 min" },
];

export const docsSections = [
  {
    id: "getting-started",
    title: "Getting started",
    body: "Set up your workspace, connect a repository, and run your first AI triage pass.",
  },
  {
    id: "installation",
    title: "Installation",
    body: "Install Maintania AI from GitHub Marketplace and authorize target repositories.",
  },
  {
    id: "github-integration",
    title: "GitHub integration",
    body: "Configure webhook scopes and event subscriptions for issues and discussions.",
  },
  {
    id: "configuration",
    title: "Configuration",
    body: "Define policy rules for confidence thresholds, labels, and escalation behavior.",
  },
  {
    id: "faq",
    title: "FAQ",
    body: "Find answers for data handling, model confidence, and rollout best practices.",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    description: "For maintainers validating the workflow.",
    features: [
      "1 repository",
      "Issue classification",
      "Limited doc suggestions",
      "Community support",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$49/mo",
    description: "For teams managing active issue queues.",
    features: [
      "10 repositories",
      "Advanced duplicate detection",
      "Priority insights dashboard",
      "Automation policies",
      "Email support",
    ],
    cta: "Start Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with strict controls.",
    features: [
      "Unlimited repositories",
      "SSO + RBAC",
      "Private deployment options",
      "Compliance support",
      "Priority success partner",
    ],
    cta: "Contact Sales",
  },
];
