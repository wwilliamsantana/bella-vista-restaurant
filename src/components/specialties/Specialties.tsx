import { SpecialtiesHeader } from "./SpecialtiesHeader";
import { SpecialtiesGrid } from "./SpecialtiesGrid";

export function Specialties() {
  return (
    <section id="specialties" className="bg-[#FFF9F2] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SpecialtiesHeader />
        <SpecialtiesGrid />
      </div>
    </section>
  );
}
