import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";

export function Logo() {
  return (
    <Link
      href="#home"
      className="flex items-center gap-3 transition-opacity hover:opacity-80"
    >
      <div className="rounded-full bg-[#7A1F1F] p-2 text-white">
        <UtensilsCrossed size={18} />
      </div>

      <div className="leading-tight">
        <h2 className="font-serif text-2xl font-bold text-[#1F1F1F]">
          Bella Vista
        </h2>

        <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
          Italian Restaurant
        </span>
      </div>
    </Link>
  );
}
