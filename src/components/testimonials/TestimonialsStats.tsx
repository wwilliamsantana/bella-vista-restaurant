"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function TestimonialsStats() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="mb-16 flex flex-col items-center"
    >
      <div className="mb-3 flex gap-1 text-yellow-400">
        {[...Array(5)].map((_, index) => (
          <Star key={index} size={22} fill="currentColor" />
        ))}
      </div>

      <h3 className="text-2xl font-bold text-[#1F1F1F]">4.9 Average Rating</h3>

      <p className="mt-2 text-gray-600">
        Based on 2,500+ verified reviews from over 15,000 happy guests.
      </p>
    </motion.div>
  );
}
