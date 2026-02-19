"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrandLogo } from "./BrandLogo";
import { navItems } from "../lib/constant/site-data";

export function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-row">
        <BrandLogo />
        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <motion.div key={item.href} whileHover={{ y: -2 }} transition={{ duration: 0.15 }}>
              <Link href={item.href}>{item.label}</Link>
            </motion.div>
          ))}
        </nav>
        <div className="nav-actions">
          <Link href="http://localhost:3000/login" className="btn btn-ghost">
            Login
          </Link>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="/contact" className="btn btn-primary">
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
