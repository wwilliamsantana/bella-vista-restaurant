"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const contacts = [
  {
    icon: MapPin,
    title: "Address",
    value: "123 Bella Vista Avenue\nNew York, NY",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@bellavista.com",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "11:00 AM - 11:00 PM",
  },
];

export function FooterContact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <h3 className="mb-6 text-xl font-semibold text-white">Contact</h3>

      <div className="space-y-5">
        {contacts.map(({ icon: Icon, title, value }) => (
          <div key={title} className="flex gap-4">
            <Icon size={18} className="mt-1 text-[#C79A63]" />

            <div>
              <h4 className="font-medium text-white">{title}</h4>

              <p className="whitespace-pre-line text-sm">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
