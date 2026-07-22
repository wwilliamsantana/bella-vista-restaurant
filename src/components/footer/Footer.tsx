import { FooterBottom } from "./FooterBottom";
import { FooterBrand } from "./FooterBrand";
import { FooterContact } from "./FooterContact";
import { FooterLinks } from "./FooterLinks";
import { FooterNewsletter } from "./FooterNewsletter";

export function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          <FooterBrand />
          <FooterLinks />
          <FooterContact />
          <FooterNewsletter />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}
