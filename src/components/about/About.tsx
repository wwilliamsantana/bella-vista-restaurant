import { AboutContent } from "./AboutContent";
import { AboutImage } from "./AboutImage";

export function About() {
  return (
    <section id="about" className="bg-[#FFF9F2] py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-20 px-6 lg:grid-cols-2">
        <AboutImage />

        <AboutContent />
      </div>
    </section>
  );
}
