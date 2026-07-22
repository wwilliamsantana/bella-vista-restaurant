"use client";

import { motion } from "framer-motion";

export function ReservationForm() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert("Reservation request sent!");
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-5 rounded-4xl bg-white p-8"
    >
      <input
        type="text"
        placeholder="Full Name"
        className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#7A1F1F]"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#7A1F1F]"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <input
          type="number"
          placeholder="Guests"
          className="rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#7A1F1F]"
        />

        <input
          type="date"
          className="rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#7A1F1F]"
        />
      </div>

      <input
        type="time"
        className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#7A1F1F]"
      />

      <button
        type="submit"
        className="w-full rounded-xl bg-[#7A1F1F] py-4 font-semibold text-white transition hover:scale-[1.02]"
      >
        Reserve Now
      </button>
    </motion.form>
  );
}
