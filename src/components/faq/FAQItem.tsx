"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay: number;
}

export function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
  delay,
}: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
      }}
      className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
        isOpen
          ? "border-[#7A1F1F] bg-white shadow-lg"
          : "border-gray-200 bg-white"
      }`}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-7 text-left"
      >
        <h3 className="text-lg font-semibold text-[#1F1F1F]">{question}</h3>

        <ChevronDown
          size={22}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#7A1F1F]" : ""
          }`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className="overflow-hidden"
      >
        <p className="px-7 pb-7 leading-8 text-gray-600">{answer}</p>
      </motion.div>
    </motion.div>
  );
}
