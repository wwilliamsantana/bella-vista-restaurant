import { menuCategories } from "@/data/menu";

interface Props {
  activeCategory: string;
  onChange: (category: string) => void;
}

export function MenuCategories({ activeCategory, onChange }: Props) {
  return (
    <div className="mb-14 flex flex-wrap justify-center gap-4">
      {menuCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => onChange(category.id)}
          className={`rounded-full px-6 py-3 transition-all duration-300 ${
            activeCategory === category.id
              ? "bg-[#7A1F1F] text-white"
              : "bg-[#F8E7D5] text-[#7A1F1F] hover:bg-[#7A1F1F] hover:text-white"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
