import { Star } from "lucide-react";

export function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-6 pt-8">
      <div>
        <h3 className="text-3xl font-bold text-[#1F1F1F]">20+</h3>
        <p className="text-sm text-gray-500">Years Experience</p>
      </div>

      <div>
        <div className="flex items-center gap-1">
          <Star size={18} fill="#D4A017" color="#D4A017" />
          <span className="font-bold">4.9</span>
        </div>

        <p className="text-sm text-gray-500">Google Rating</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-[#1F1F1F]">15k+</h3>
        <p className="text-sm text-gray-500">Happy Guests</p>
      </div>
    </div>
  );
}
