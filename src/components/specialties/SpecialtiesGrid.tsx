"use client";

import { specialties } from "@/data/specialties";
import { SpecialtyCard } from "./SpecialtyCard";

export function SpecialtiesGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {specialties.map((dish, index) => (
        <SpecialtyCard key={dish.id} {...dish} delay={index * 0.2} />
      ))}
    </div>
  );
}
