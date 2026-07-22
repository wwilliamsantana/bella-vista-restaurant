import { FAQAccordion } from "./FAQAccordion";
import { FAQHeader } from "./FAQHeader";

export function FAQ() {
  return (
    <section id="faq" className="bg-[#FFF9F2] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <FAQHeader />

        <FAQAccordion />
      </div>
    </section>
  );
}
