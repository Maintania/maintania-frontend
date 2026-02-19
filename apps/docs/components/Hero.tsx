"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { MotionGroup, MotionReveal } from "./motion";

export function Hero() {
  return (
    <MotionGroup className="hero">
      <MotionReveal>
        <p className="eyebrow">Maintainer Intelligence Platform</p>
        <h1>Reduce maintainer workload. Focus only on what matters.</h1>
        <p className="hero-copy">
          Maintania AI classifies issues, flags duplicates, and drafts documentation-backed replies so teams focus on high-priority engineering work.
        </p>
        <div className="hero-actions">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="/contact" className="btn btn-primary">
              Get Started
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="/docs" className="btn btn-secondary">
              View Docs
            </Link>
          </motion.div>
        </div>
      </MotionReveal>

      <MotionReveal>
        <div className="hero-panel">
          <motion.div
            className="hero-chip chip-top"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            Duplicate detected
          </motion.div>
          <motion.div
            className="hero-chip chip-bottom"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Suggested from docs
          </motion.div>
          <motion.div
            className="ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="signal-grid"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }}
          >
            <p>Live triage signal</p>
            <strong>97% confidence</strong>
            <div>
              <span />
              <span />
              <span />
              <span />
            </div>
          </motion.div>
        </div>
      </MotionReveal>
    </MotionGroup>
  );
}
