import { HeroSection } from "@/components/HeroSection";
import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/products";
import { Page } from "@/types/store";

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onCategorySelect: (categoryId: string) => void;
}

export function HomePage({ onNavigate, onCategorySelect }: HomePageProps) {
  const handleCategoryClick = (categoryId: string) => {
    onCategorySelect(categoryId);
    onNavigate("products");
  };

  return (
    <div className="space-y-12">
      <HeroSection onShopNow={() => onNavigate("products")} />

      <div className="h-px bg-border" />

      <section>
        <h2 className="text-3xl font-bold text-foreground mb-8 animate-slide-up">
          Shop Our Top Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
