"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

export function PricingCard({
  name,
  price,
  description,
  features,
  cta,
  popular = false,
}: PricingCardProps) {
  return (
    <motion.article
      className={`pricing-card ${popular ? "is-popular" : ""}`}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      {popular ? <span className="pricing-badge">Most Popular</span> : null}
      <h3>{name}</h3>
      <p className="price">{price}</p>
      <p className="description">{description}</p>
      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Link className="btn btn-secondary full" href="/contact">
        {cta}
      </Link>
    </motion.article>
  );
}
