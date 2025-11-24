// Shared TypeScript types

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  stack: string[];
  codeLink?: string;
  liveLink?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  type: "reach" | "connect" | "miscellaneous";
}

export interface Experience {
  id: string;
  title: string;
  company?: string;
  period: string;
  description: string;
  current?: boolean;
}

export type Theme = "light" | "dark";
