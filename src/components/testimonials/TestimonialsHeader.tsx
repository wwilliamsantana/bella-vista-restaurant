"use client";

import { motion } from "framer-motion";

export function TestimonialsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <span className="inline-flex rounded-full bg-[#F8E7D5] px-4 py-2 text-sm font-medium text-[#7A1F1F]">
        Testimonials
      </span>

      <h2 className="mt-6 font-serif text-5xl font-bold text-[#1F1F1F]">
        Loved by Thousands of Happy Guests
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Every review reflects our passion for authentic Italian cuisine,
        outstanding service, and unforgettable dining experiences.
      </p>
    </motion.div>
  );
}
