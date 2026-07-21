import { galleryImages } from "@/data/gallery";
import { GalleryCard } from "./GalleryCard";

export function GalleryGrid() {
  return (
    <div className="grid auto-rows-70 gap-6 md:grid-cols-3">
      {galleryImages.map((image, index) => (
        <GalleryCard key={image.id} {...image} delay={index * 0.15} />
      ))}
    </div>
  );
}
