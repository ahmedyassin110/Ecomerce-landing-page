import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem, Page } from "@/types/store";

interface CartPageProps {
  cart: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
  total: number;
  onNavigate: (page: Page) => void;
}

export function CartPage({
  cart,
  onUpdateQuantity,
  onRemove,
  total,
  onNavigate,
}: CartPageProps) {
  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
        <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
          <ShoppingBag className="w-12 h-12 text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Your cart is empty
        </h2>
        <p className="text-muted-foreground mb-6 text-center max-w-md">
          Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
        </p>
        <Button variant="hero" size="lg" onClick={() => onNavigate("products")}>
          Start Shopping
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-foreground animate-slide-up">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item, index) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 bg-card rounded-xl shadow-soft border border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Color: {item.color}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-8 h-8"
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-8 text-center font-medium text-foreground">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-8 h-8"
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive hover:bg-destructive/10"
                    onClick={() => onRemove(item.id)}
                  >
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-foreground">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground">
                  ${item.price.toFixed(2)} each
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-xl shadow-soft border border-border p-6 sticky top-28 animate-slide-up">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Order Summary
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span className="text-success">Free</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex justify-between text-lg font-bold text-foreground">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button variant="hero" size="lg" className="w-full">
              Proceed to Checkout
              <ArrowRight className="w-5 h-5" />
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Secure checkout • Free returns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
