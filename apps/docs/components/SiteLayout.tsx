import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="site-shell">
      <Navbar />
      <main className="site-main">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
