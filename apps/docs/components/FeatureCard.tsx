"use client";

import { motion } from "framer-motion";

type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <motion.article
      className="feature-card"
      whileHover={{ y: -7, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 360, damping: 26 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.article>
  );
}
