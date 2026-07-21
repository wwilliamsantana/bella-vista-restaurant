import { features } from "@/data/about";

export function AboutFeatures() {
  return (
    <div className="space-y-5">
      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <div key={feature.title} className="flex items-center gap-4">
            <div className="rounded-full bg-[#F8E7D5] p-2 text-[#7A1F1F]">
              <Icon size={20} />
            </div>

            <span className="font-medium text-[#1F1F1F]">{feature.title}</span>
          </div>
        );
      })}
    </div>
  );
}
