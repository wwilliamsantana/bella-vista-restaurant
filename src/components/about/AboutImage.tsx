"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="overflow-hidden rounded-4xl shadow-2xl">
        <Image
          src="/about-restaurant.jpg"
          alt="Bella Vista Restaurant"
          width={5025}
          height={3287}
          className="h-auto w-full object-cover transition duration-700 hover:scale-105"
        />
      </div>

      <div className=" absolute -bottom-8 -right-6 rounded-3xl bg-white p-6 shadow-xl ">
        <span className="block text-4xl font-bold text-[#7A1F1F]">20+</span>

        <span className="text-gray-500">Years of Excellence</span>
      </div>
    </motion.div>
  );
}
