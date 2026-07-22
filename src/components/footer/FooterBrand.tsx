"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    name: "instagram",
    icon: "/socials/instagram.png",
    href: "#",
  },
  {
    name: "facebook",
    icon: "/socials/facebook.png",
    href: "#",
  },
  {
    name: "X",
    icon: "/socials/x.png",
    href: "#",
  },
];

export function FooterBrand() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-serif text-3xl font-bold text-white">Bella Vista</h2>

      <p className="mt-5 leading-7">
        Authentic Italian cuisine crafted with passion, tradition and the finest
        seasonal ingredients.
      </p>

      <div className="mt-6 flex gap-4">
        {socials.map(({ name, icon: Icon, href }) => (
          <Link
            key={name}
            href={href}
            className="rounded-full border border-white/10 p-3 transition hover:border-[#7A1F1F] hover:text-white"
            aria-label={name}
          >
            <Image
              src={Icon}
              alt={"Social media" + name}
              width={18}
              height={18}
            />
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
