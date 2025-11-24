import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-[calc(100vh-2rem)] flex flex-col border-2 border-current m-4 p-[clamp(0.5rem,3vw,2rem)]">
      <div className="max-w-7xl mx-auto w-full flex flex-col flex-1">
        <Navigation />
        <main className="flex-1 p-0">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
