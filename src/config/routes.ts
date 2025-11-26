import type { ComponentType } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import Thoughts from "../pages/Thoughts";

export interface RouteConfig {
  path: string;
  label: string;
  component: ComponentType;
}

export const routes: RouteConfig[] = [
  { path: "/", label: "home", component: Home },
  { path: "/about", label: "about", component: About },
  { path: "/work", label: "work", component: Work },
  { path: "/thoughts", label: "thoughts", component: Thoughts },
  { path: "/contact", label: "contact", component: Contact },
];

export const navRoutes: RouteConfig[] = [
  { path: "/about", label: "about", component: About },
  { path: "/work", label: "work", component: Work },
  { path: "/thoughts", label: "thoughts", component: Thoughts },
];
