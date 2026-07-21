"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  name: string;
  description: string;
  price: string;
  delay: number;
}

export function MenuItem({ name, description, price, delay }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
      }}
      className="group flex items-start justify-between rounded-3xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex-1">
        <h3 className="font-serif text-2xl font-semibold text-[#1F1F1F]">
          {name}
        </h3>

        <p className="mt-3 text-gray-600">{description}</p>
      </div>

      <div className="ml-8 flex flex-col items-end">
        <span className="text-xl font-bold text-[#7A1F1F]">{price}</span>

        <ArrowRight
          size={18}
          className="mt-5 transition-transform group-hover:translate-x-1"
        />
      </div>
    </motion.article>
  );
}
