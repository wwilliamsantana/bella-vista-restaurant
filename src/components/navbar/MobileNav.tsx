"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { navigation } from "@/data/navigation";
import { NavLink } from "./NavLink";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Open navigation menu"
        onClick={() => setOpen(!open)}
        className="lg:hidden"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className=" absolute left-0 top-20 w-full bg-[#FFF9F2] shadow-lg lg:hidden"
          >
            <nav className="flex flex-col gap-6 p-8">
              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}

              <button className=" mt-2 rounded-full bg-[#7A1F1F] py-3 text-white transition hover:bg-[#631919]">
                Reserve a Table
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
