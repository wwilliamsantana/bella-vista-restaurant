import { ReservationContent } from "./ReservationContent";
import { ReservationForm } from "./ReservationForm";
import { ReservationInfo } from "./ReservationInfo";

export function Reservation() {
  return (
    <section id="reservation" className="bg-[#7A1F1F] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ReservationContent />

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <ReservationInfo />

          <ReservationForm />
        </div>
      </div>
    </section>
  );
}
