import { Star, ShoppingCart, Bluetooth, Clock, Headphones, Battery, Volume2, Droplets, Gamepad2, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Product } from "@/types/store";

const specIcons: Record<string, React.ReactNode> = {
  "Bluetooth 5.0": <Bluetooth className="w-4 h-4" />,
  "24h Battery": <Clock className="w-4 h-4" />,
  "20h Battery": <Battery className="w-4 h-4" />,
  "15h Battery": <Battery className="w-4 h-4" />,
  "30h Battery": <Battery className="w-4 h-4" />,
  "18h Battery": <Battery className="w-4 h-4" />,
  "Noise Cancelling": <Headphones className="w-4 h-4" />,
  "Premium Sound": <Volume2 className="w-4 h-4" />,
  "Sweat Resistant": <Droplets className="w-4 h-4" />,
  "Gaming": <Gamepad2 className="w-4 h-4" />,
  "Built-in Mic": <Mic className="w-4 h-4" />,
};

interface ProductPreviewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductPreviewModal({ product, isOpen, onClose, onAddToCart }: ProductPreviewModalProps) {
  if (!product) return null;

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card border-border">
        <DialogTitle className="sr-only">Product Preview: {product.name}</DialogTitle>
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-72 md:h-full min-h-[300px] bg-muted">
            {product.badge && (
              <span className={`absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full text-sm font-semibold ${
                product.badge.includes("OFF") || product.badge === "SALE"
                  ? "bg-destructive text-destructive-foreground"
                  : product.badge === "NEW"
                  ? "bg-success text-success-foreground"
                  : "bg-primary text-primary-foreground"
              }`}>
                {product.badge}
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="p-6 md:p-8 flex flex-col">
            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? "text-accent fill-accent"
                      : "text-muted"
                  }`}
                />
              ))}
              <span className="text-sm text-muted-foreground ml-2">
                ({product.rating} rating)
              </span>
            </div>

            {/* Name & Category */}
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {product.name}
            </h2>
            <p className="text-muted-foreground mb-4 capitalize">
              Category: {product.category} • Color: {product.color}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-foreground">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-sm font-semibold text-destructive">
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            {/* Specs */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-3">Specifications</h3>
              <div className="flex flex-wrap gap-2">
                {product.specs.map((spec) => (
                  <span
                    key={spec}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-muted-foreground text-sm"
                  >
                    {specIcons[spec] || null}
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-auto">
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
