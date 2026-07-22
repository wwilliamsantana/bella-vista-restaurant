import { TestimonialsGrid } from "./TestimonialsGrid";
import { TestimonialsHeader } from "./TestimonialsHeader";
import { TestimonialsStats } from "./TestimonialsStats";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <TestimonialsHeader />
        <TestimonialsStats />
        <TestimonialsGrid />
      </div>
    </section>
  );
}
