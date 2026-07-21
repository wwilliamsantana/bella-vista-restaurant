import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-4xl shadow-2xl">
        <Image
          src="/hero-food.jpg"
          alt="Italian gourmet dish"
          width={6720}
          height={4480}
          priority
          className="h-auto w-full object-cover"
        />
      </div>

      <div className=" absolute -left-8 bottom-10 rounded-3xl bg-white p-5 shadow-xl">
        <p className="text-sm text-gray-500">{"Chef's Choice"}</p>

        <h4 className="mt-1 font-semibold">Truffle Pasta</h4>
      </div>
    </div>
  );
}
