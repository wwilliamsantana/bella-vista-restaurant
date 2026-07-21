import { menuItems } from "@/data/menu";
import { MenuItem } from "./MenuItem";

interface Props {
  activeCategory: string;
}

export function MenuGrid({ activeCategory }: Props) {
  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory,
  );

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {filteredItems.map((item, index) => (
        <MenuItem key={item.id} {...item} delay={index * 0.15} />
      ))}
    </div>
  );
}
