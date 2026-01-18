import { ShoppingBag, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Page } from "@/types/store";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  cartCount: number;
  onCartClick: () => void;
}

const navItems: { page: Page; label: string }[] = [
  { page: "home", label: "Home" },
  { page: "categories", label: "Categories" },
  { page: "products", label: "Products" },
  { page: "cart", label: "Cart" },
];

export function Header({ currentPage, onNavigate, cartCount, onCartClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <ShoppingBag className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-lg lg:text-xl font-bold text-foreground hidden sm:block">
              Shopping & Department{" "}
              <span className="text-gradient">Store</span>
            </h1>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === item.page
                    ? "text-primary bg-primary/10 rounded-lg"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10 hover:rounded-lg"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-destructive text-destructive-foreground text-xs font-semibold flex items-center justify-center animate-bounce-subtle">
                  {cartCount}</span>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex items-center justify-around py-2 border-t border-border bg-card">
        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => onNavigate(item.page)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              currentPage === item.page
                ? "text-primary bg-primary/10 rounded-lg"
                : "text-muted-foreground hover:text-primary hover:bg-primary/10 hover:rounded-lg"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
