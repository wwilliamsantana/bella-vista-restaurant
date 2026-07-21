"use client";

import { useState } from "react";

import { MenuHeader } from "./MenuHeader";
import { MenuCategories } from "./MenuCategories";
import { MenuGrid } from "./MenuGrid";

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("starters");

  return (
    <section id="menu" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <MenuHeader />

        <MenuCategories
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <MenuGrid activeCategory={activeCategory} />
      </div>
    </section>
  );
}
