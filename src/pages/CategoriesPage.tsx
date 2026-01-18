import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/products";
import { Page } from "@/types/store";

interface CategoriesPageProps {
  onNavigate: (page: Page) => void;
  onCategorySelect: (categoryId: string) => void;
}

export function CategoriesPage({ onNavigate, onCategorySelect }: CategoriesPageProps) {
  const handleCategoryClick = (categoryId: string) => {
    onCategorySelect(categoryId);
    onNavigate("products");
  };

  return (
    <div className="space-y-8">
      <div className="text-center animate-slide-up">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Browse Categories
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore our wide range of products across different categories. Find exactly what you're looking for.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={category.id}
            category={category}
            index={index}
            onClick={() => handleCategoryClick(category.id)}
          />
        ))}
      </div>

      {/* Featured Categories Banner */}
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <div
          className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer animate-slide-up"
          style={{ animationDelay: "0.6s" }}
          onClick={() => handleCategoryClick("tech")}
        >
          <img
            src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Electronics"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <h3 className="text-2xl font-bold text-card mb-2">Tech & Electronics</h3>
            <p className="text-card/80">Discover latest gadgets</p>
          </div>
        </div>

        <div
          className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer animate-slide-up"
          style={{ animationDelay: "0.7s" }}
          onClick={() => handleCategoryClick("sneakers")}
        >
          <img
            src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Fashion"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <h3 className="text-2xl font-bold text-card mb-2">Sneakers</h3>
            <p className="text-card/80">Trending styles</p>
          </div>
        </div>
      </div>
    </div>
  );
}
