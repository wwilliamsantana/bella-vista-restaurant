import { About } from "@/components/about/About";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/hero/Hero";
import { Menu } from "@/components/menu/Menu";
import { Navbar } from "@/components/navbar/Navbar";
import { Reservation } from "@/components/reservation/Reservation";
import { Specialties } from "@/components/specialties/Specialties";
import { Testimonials } from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Specialties />
        <Menu />
        <Gallery />
        <Testimonials />
        <Reservation />
      </main>
    </>
  );
}
