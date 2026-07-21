import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative text-sm font-medium text-[#1F1F1F] transition-colors hover:text-[#7A1F1F]"
    >
      {children}

      <span className=" absolute -bottom-1 left-0 h-0.5 w-0 bg-[#7A1F1F] transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
