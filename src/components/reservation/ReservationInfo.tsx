"use client";

import { info } from "@/data/info";
import { motion } from "framer-motion";

export function ReservationInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {info.map((item) => (
        <div
          key={item.title}
          className="flex gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#7A1F1F]">
            <item.icon size={24} />
          </div>

          <div>
            <h3 className="font-semibold text-white">{item.title}</h3>

            <p className="mt-2 whitespace-pre-line text-gray-300">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
