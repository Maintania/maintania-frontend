"use client";

import { motion } from "framer-motion";

type SearchInputProps = {
  placeholder?: string;
};

export function SearchInput({ placeholder = "Search documentation" }: SearchInputProps) {
  return (
    <motion.label
      className="search-input"
      whileFocus={{ scale: 1.01 }}
      transition={{ duration: 0.18 }}
    >
      <span>Search</span>
      <input type="search" placeholder={placeholder} />
    </motion.label>
  );
}
