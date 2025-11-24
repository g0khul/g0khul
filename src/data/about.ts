// About page data

export const bio = {
  photo: "https://placehold.co/300x300/1a1a1a/ffffff?text=Photo",
  paragraphs: [
    `I'm a backend engineer who accidentally fell in love with clean UIs. Most of my days are spent architecting APIs, optimizing databases, and making sure servers don't catch fire at 3 AM.`,
    `"Code is like humor. When you have to explain it, it's bad." — I live by this. Whether it's Python, Go, or TypeScript, I believe in writing code that speaks for itself. Currently obsessed with distributed systems and occasionally dabbling in React when the frontend folks need backup.`,
    `When I'm not debugging production issues (we've all been there), you'll find me exploring new tech, contributing to open source, or writing about lessons learned the hard way. I believe in building things that just work — no magic, no mystery, just solid engineering.`,
  ],
};

export interface TimelineEntry {
  year: string;
  role: string;
  company: string;
  description: string;
  link?: string;
}

export interface KilledItem {
  name: string;
  description: string;
  link?: string;
  causeOfDeath: string; // fun reason why it died
}

export const killedByGokhul: KilledItem[] = [
  {
    name: "Side Project #12",
    description: "A subnet manager for Avalanche Chain. Ironic.",
    link: "https://github.com/g0khul/avalanche-subnet-launcher",
    causeOfDeath: "Skill issue",
  },
  {
    name: "Personal Substack",
    description: "Personal blog left personal",
    link: "https://gokhul.substack.com",
    causeOfDeath: "Consistency issue",
  },
  {
    name: "LeetCode Streak",
    description: "After being top 4.2% leetcoders, then life happened.",
    link: "https://leetcode.com/gokhul",
    causeOfDeath: "Boredom issue",
  },
  {
    name: "Hashnode Blog",
    description: "Wrote notes as blogs when learning",
    link: "https://gokhul.hashnode.dev/",
    causeOfDeath: "Hand written notes works better",
  },
  {
    name: "Intectual Substack",
    description: "Informaton about information age",
    link: "https://greathack.substack.com",
    causeOfDeath: "Consistency issue",
  },
  {
    name: "Open Source Contribution",
    description: "Forked the repo. That was it.",
    link: "https://github.com/g0khul/EdgeChains",
    causeOfDeath: "Scope creep paralysis",
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "2024",
    role: "Senior Backend Engineer",
    company: "Tech Corp",
    description:
      "Leading API architecture and scaling infrastructure to handle millions of requests.",
  },
  {
    year: "2023",
    role: "Backend Engineer",
    company: "StartupXYZ",
    description:
      "Built core payment systems and real-time notification services.",
  },
  {
    year: "2022",
    role: "Software Engineer",
    company: "DevShop Inc",
    description:
      "Full-stack development with focus on backend services and database optimization.",
  },
  {
    year: "2021",
    role: "Junior Developer",
    company: "CodeBase",
    description:
      "Started the journey. Learned to love clean code and hate merge conflicts.",
  },
];
