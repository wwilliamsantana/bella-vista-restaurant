import { NavLink } from "./NavLink";
import { navigation } from "@/data/navigation";

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-10 lg:flex">
      {navigation.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}

      <button className=" rounded-full bg-[#7A1F1F] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#631919] hover:shadow-lg">
        Reserve a Table
      </button>
    </nav>
  );
}
