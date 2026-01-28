import { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <main className="pt-20 md:pt-24">
        {children}
      </main>
    </div>
  );
};

export default Layout;
