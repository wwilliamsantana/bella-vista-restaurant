"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryCardProps {
  image: string;
  title: string;
  className?: string;
  delay: number;
}

export function GalleryCard({
  image,
  title,
  className,
  delay,
}: GalleryCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      className={`group relative overflow-hidden rounded-3xl ${className}`}
    >
      <Image
        src={image}
        alt={title}
        loading="eager"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/45" />

      <div className="absolute bottom-0 left-0 w-full translate-y-8 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="font-serif text-2xl font-semibold text-white">
          {title}
        </h3>
      </div>
    </motion.article>
  );
}
