"use client";

import { motion } from "framer-motion";

export function FooterNewsletter() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert("Subscribed successfully!");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      <h3 className="mb-6 text-xl font-semibold text-white">Newsletter</h3>

      <p className="mb-6">
        Subscribe to receive exclusive offers and seasonal menus.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email address"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400 outline-none transition focus:border-[#C79A63]"
        />

        <button className="w-full rounded-xl bg-[#7A1F1F] py-4 font-semibold text-white transition hover:bg-[#631919]">
          Subscribe
        </button>
      </form>
    </motion.div>
  );
}
