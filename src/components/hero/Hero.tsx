import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FFF9F2] pt-10">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}
