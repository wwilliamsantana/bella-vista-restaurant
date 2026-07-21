"use client";

import { motion } from "framer-motion";
import { HeroButtons } from "./HeroButtons";
import { HeroStats } from "./HeroStats";

export function HeroContent() {
  return (
    <div className="space-y-8">
      <motion.span
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex rounded-full bg-[#F8E7D5] px-4 py-2 text-sm font-medium text-[#7A1F1F]"
      >
        Authentic Italian Cuisine
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-xl font-serif text-5xl font-bold leading-tight text-[#1F1F1F] lg:text-7xl"
      >
        Experience Authentic Italian Cuisine
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-lg text-lg leading-8 text-gray-600"
      >
        Every dish is prepared with passion, tradition, and the finest
        ingredients to create unforgettable dining experiences.
      </motion.p>

      <HeroButtons />

      <HeroStats />
    </div>
  );
}
