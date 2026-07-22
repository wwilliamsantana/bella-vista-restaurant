"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  avatar: string;
  name: string;
  role: string;
  review: string;
  delay: number;
}

export function TestimonialCard({
  avatar,
  name,
  role,
  review,
  delay,
}: TestimonialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="mb-6 flex items-center gap-4">
        <Image
          src={avatar}
          alt={name}
          width={64}
          height={64}
          className="rounded-full object-cover h-16 w-16"
        />

        <div>
          <h3 className="font-semibold text-[#1F1F1F]">{name}</h3>

          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>

      <div className="mb-5 flex gap-1 text-yellow-400">
        {[...Array(5)].map((_, index) => (
          <Star key={index} size={18} fill="currentColor" />
        ))}
      </div>

      <p className="leading-8 text-gray-600">{review}</p>
    </motion.article>
  );
}
