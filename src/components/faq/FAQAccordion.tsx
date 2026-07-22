"use client";

import { useState } from "react";

import { faq } from "@/data/faq";
import { FAQItem } from "./FAQItem";

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(1);

  function handleToggle(id: number) {
    setOpen(open === id ? null : id);
  }

  return (
    <div className="space-y-5">
      {faq.map((item, index) => (
        <FAQItem
          key={item.id}
          {...item}
          isOpen={open === item.id}
          onClick={() => handleToggle(item.id)}
          delay={index * 0.15}
        />
      ))}
    </div>
  );
}
