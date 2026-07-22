"use client";

import { motion } from "framer-motion";

export function ReservationContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl text-center"
    >
      <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
        Reservation
      </span>

      <h2 className="mt-6 font-serif text-5xl font-bold text-white">
        Reserve Your Table
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-200">
        Book your dining experience today and enjoy handcrafted Italian cuisine
        in an elegant and welcoming atmosphere.
      </p>
    </motion.div>
  );
}
