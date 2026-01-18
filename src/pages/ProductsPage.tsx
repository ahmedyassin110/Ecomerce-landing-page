import { useState, useMemo } from "react";
import { ProductCard } from "@/components/ProductCard";
import { ProductPreviewModal } from "@/components/ProductPreviewModal";
import { products, categories } from "@/data/products";
import { Product } from "@/types/store";
import { Button } from "@/components/ui/button";

interface ProductsPageProps {
  onAddToCart: (product: Product) => void;
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function ProductsPage({ onAddToCart, selectedCategory, onCategoryChange }: ProductsPageProps) {
  const [sortBy, setSortBy] = useState("featured");
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }, [filteredProducts, sortBy]);

  const currentCategory = categories.find((c) => c.id === selectedCategory);
  const pageTitle = currentCategory ? currentCategory.name : "All Products";

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground shadow-glow animate-slide-up">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {selectedCategory
                ? `Explore Our ${pageTitle} Collection`
                : "Grab Upto 50% Off On Selected Items"}
            </h1>
            <p className="opacity-90">
              {currentCategory?.description || "Premium products at unbeatable prices"}
            </p>
          </div>
          <Button
            variant="secondary"
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Shop Now
          </Button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            !selectedCategory
              ? "bg-primary text-primary-foreground shadow-glow"
              : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary"
          }`}
        >
          All Products
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? "bg-primary text-primary-foreground shadow-glow"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            {pageTitle} <span className="text-muted-foreground font-normal text-lg">({sortedProducts.length} items)</span>
          </h2>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-card border border-border rounded-lg px-4 py-2 text-sm text-foreground focus:ring-2 focus:ring-primary outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Customer Reviews</option>
          </select>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onAddToCart={onAddToCart}
              onPreview={setPreviewProduct}
            />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Product Preview Modal */}
      <ProductPreviewModal
        product={previewProduct}
        isOpen={!!previewProduct}
        onClose={() => setPreviewProduct(null)}
        onAddToCart={onAddToCart}
      />
    </div>
  );
}
