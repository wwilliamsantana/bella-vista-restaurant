import { GalleryHeader } from "./GalleryHeader";
import { GalleryGrid } from "./GalleryGrid";
import { GalleryCTA } from "./GalleryCTA";

export function Gallery() {
  return (
    <section id="gallery" className="bg-[#FFF9F2] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <GalleryHeader />

        <GalleryGrid />

        <GalleryCTA />
      </div>
    </section>
  );
}
