import {
  Armchair,
  ShoppingBag,
  BookOpen,
  Laptop,
  Footprints,
  Luggage,
  LucideIcon
} from "lucide-react";
import { Category } from "@/types/store";

const iconMap: Record<string, LucideIcon> = {
  Armchair,
  ShoppingBag,
  BookOpen,
  Laptop,
  Footprints,
  Luggage,
};

interface CategoryCardProps {
  category: Category;
  index: number;
  onClick: () => void;
}

export function CategoryCard({ category, index, onClick }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || ShoppingBag;

  return (
    <button
      onClick={onClick}
      className="group bg-card rounded-2xl p-6 text-center shadow-soft border border-border hover:border-primary hover:shadow-lifted hover:-translate-y-2 transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-1">
        {category.name}
      </h3>
      <p className="text-sm text-muted-foreground">{category.description}</p>
    </button>
  );
}
