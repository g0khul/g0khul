import profileImage from "../assets/images/about/profile.png";

interface Quote {
  text: string;
  author?: string;
}

export const quote: Quote = {
  text: "Build it clearly, fix it calmly, and let the product speak for you.",
  // author: "me",
};

export const bio = {
  photo: profileImage,
  paragraphs: [
    `I am a full-stack developer who finds pleasure in comprehending how every component of a system works: the logic, data, the user interface, and the minor details people overlook but would overlook if they were incorrect. Building things with stability, consistency, and thoughtful assembly is something I enjoy.`,
    `I'm still working on perfecting my frontend and design skills, and the main way to achieve that is by building projects, breaking them, and reworking them until they look and feel right. I care about clarity, good structure, and the kind of code that you don’t have to explain twice. I don’t ship things just to ship them.`,
    `I keep pushing until it feels complete, intentional, and exactly how it should be. If there's a way to improve something, I'll make it better.`,
  ],
};

export interface TimelineEntry {
  startYear: string;
  endYear?: string; // undefined means "Present"
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
    startYear: "Nov 2023",
    // endYear undefined = Present
    role: "Software Development Engineer I",
    company: "Galvanize Global Education",
    description:
      "Building and maintaining large-scale assessment systems, spanning backend logic, multi-step frontend flows, and automated feedback pipelines. Improved reliability with async processing and stronger testing practices that reduced post-release bugs by 60%. Led key parts of a legacy-to-modern rewrite, refactoring major endpoints and schemas end-to-end.",
  },
  {
    startYear: "Jun 2023",
    endYear: "Sept 2023",
    role: "Freelance Technical Trainer",
    company: "Self Employed",
    description:
      "Delivered technical training to students through structured lessons, live explanations, and hands-on problem-solving. Created practical, real-world exercises tailored to different skill levels to help students understand core programming concepts effectively.",
  },
  {
    startYear: "Feb 2023",
    endYear: "Apr 2023",
    role: "Software Engineer",
    company: "Technical Trainer Intern",
    description:
      "Taught data structures focused problem solving to senior year students and guided them through competitive programming fundamentals. Mentored learners through live coding sessions, doubt-clearing, and weekly performance assessments.",
  },
];
