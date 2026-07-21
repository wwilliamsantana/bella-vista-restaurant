import Link from "next/link";

export function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href="#reservation"
        className="rounded-full bg-[#7A1F1F] px-8 py-4 font-semibold text-white transition hover:bg-[#631919]"
      >
        Reserve a Table
      </Link>

      <Link
        href="#menu"
        className="rounded-full border border-[#7A1F1F] px-8 py-4 font-semibold text-[#7A1F1F] transition hover:bg-[#7A1F1F] hover:text-white"
      >
        Explore Menu
      </Link>
    </div>
  );
}
