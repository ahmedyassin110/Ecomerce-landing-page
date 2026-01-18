import { Star, ShoppingCart, Eye, Bluetooth, Clock, Headphones, Battery, Volume2, Droplets, Gamepad2, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/store";

const specIcons: Record<string, React.ReactNode> = {
  "Bluetooth 5.0": <Bluetooth className="w-3 h-3" />,
  "24h Battery": <Clock className="w-3 h-3" />,
  "20h Battery": <Battery className="w-3 h-3" />,
  "15h Battery": <Battery className="w-3 h-3" />,
  "30h Battery": <Battery className="w-3 h-3" />,
  "Noise Cancelling": <Headphones className="w-3 h-3" />,
  "Premium Sound": <Volume2 className="w-3 h-3" />,
  "Sweat Resistant": <Droplets className="w-3 h-3" />,
  "Gaming": <Gamepad2 className="w-3 h-3" />,
  "Built-in Mic": <Mic className="w-3 h-3" />,
};

interface ProductCardProps {
  product: Product;
  index: number;
  onAddToCart: (product: Product) => void;
  onPreview: (product: Product) => void;
}

export function ProductCard({ product, index, onAddToCart, onPreview }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-floating hover:-translate-y-2 transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        {product.badge && (
          <span className={`absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-semibold ${
            product.badge.includes("OFF") || product.badge === "SALE"
              ? "bg-destructive text-destructive-foreground"
              : product.badge === "NEW"
              ? "bg-success text-success-foreground"
              : "bg-primary text-primary-foreground"
          }`}>
            {product.badge}
          </span>
        )}

        {/* Quick View Button */}
        <button
          onClick={() => onPreview(product)}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          <Eye className="w-4 h-4" />
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
          onClick={() => onPreview(product)}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? "text-accent fill-accent"
                  : "text-muted"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">
            ({product.rating})
          </span>
        </div>

        <h3
          className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors cursor-pointer"
          onClick={() => onPreview(product)}
        >
          {product.name}
        </h3>

        {/* Specs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.specs.slice(0, 2).map((spec) => (
            <span
              key={spec}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs"
            >
              {specIcons[spec] || null}
              {spec}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through mr-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-xl font-bold text-foreground">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <Button
            variant="cart"
            size="sm"
            onClick={() => onAddToCart(product)}
            className="group/btn"
          >
            <ShoppingCart className="w-4 h-4 group-hover/btn:animate-bounce-subtle" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
