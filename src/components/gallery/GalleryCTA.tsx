"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function GalleryCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 rounded-4xl bg-[#7A1F1F] px-10 py-16 text-center text-white"
    >
      <h2 className="font-serif text-4xl font-bold">
        Ready for an Unforgettable Dining Experience?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-200">
        Reserve your table today and enjoy authentic Italian cuisine crafted
        with passion in a warm and welcoming atmosphere.
      </p>

      <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-[#7A1F1F] transition hover:gap-5">
        Reserve Your Table
        <ArrowRight size={18} />
      </button>
    </motion.div>
  );
}
