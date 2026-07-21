"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SpecialtyCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  badge: string;
  delay: number;
}

export function SpecialtyCard({
  title,
  description,
  image,
  price,
  badge,
  delay,
}: SpecialtyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={800}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <span className="absolute left-5 top-5 rounded-full bg-[#7A1F1F] px-4 py-2 text-sm font-medium text-white">
          {badge}
        </span>
      </div>

      <div className="space-y-5 p-8">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl font-semibold text-[#1F1F1F]">
            {title}
          </h3>

          <span className="font-bold text-[#7A1F1F]">{price}</span>
        </div>

        <p className="leading-7 text-gray-600">{description}</p>

        <button className="inline-flex items-center gap-2 font-medium text-[#7A1F1F] transition hover:gap-4">
          Order Now
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.article>
  );
}
