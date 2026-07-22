import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.id}
          {...testimonial}
          delay={index * 0.2}
        />
      ))}
    </div>
  );
}
