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

export type Theme = "light" | "dark";
