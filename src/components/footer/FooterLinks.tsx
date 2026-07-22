"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Specialties", "#specialties"],
  ["Menu", "#menu"],
  ["Gallery", "#gallery"],
  ["Reservation", "#reservation"],
  ["FAQ", "#faq"],
];

export function FooterLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="mb-6 text-xl font-semibold text-white">Quick Links</h3>

      <ul className="space-y-4">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="transition hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
