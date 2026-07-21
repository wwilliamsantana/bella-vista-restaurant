"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { AboutFeatures } from "./AboutFeatures";

export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <span className="inline-flex rounded-full bg-[#F8E7D5] px-4 py-2 text-sm font-medium text-[#7A1F1F]">
        Our Story
      </span>

      <h2 className="font-serif text-5xl font-bold leading-tight text-[#1F1F1F]">
        Crafted with Passion,
        <br />
        Inspired by Tradition
      </h2>

      <p className="text-lg leading-8 text-gray-600">
        For over two decades, Bella Vista has been serving authentic Italian
        cuisine made with carefully selected ingredients and recipes passed down
        through generations.
      </p>

      <p className="text-lg leading-8 text-gray-600">
        Every dish is prepared with passion, bringing together traditional
        flavors and a warm dining experience that makes every visit
        unforgettable.
      </p>

      <AboutFeatures />

      <button className=" inline-flex items-center gap-3 rounded-full border border-[#7A1F1F] px-7 py-4 font-semibold text-[#7A1F1F] transition hover:bg-[#7A1F1F] hover:text-white">
        Learn More
        <ArrowRight size={18} />
      </button>
    </motion.div>
  );
}
