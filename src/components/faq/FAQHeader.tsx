"use client";

import { motion } from "framer-motion";

export function FAQHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-16 max-w-3xl text-center"
    >
      <span className="inline-flex rounded-full bg-[#F8E7D5] px-4 py-2 text-sm font-medium text-[#7A1F1F]">
        FAQ
      </span>

      <h2 className="mt-6 font-serif text-5xl font-bold text-[#1F1F1F]">
        Frequently Asked Questions
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Everything you need to know before visiting Bella Vista. If you have
        additional questions, feel free to contact us.
      </p>
    </motion.div>
  );
}
