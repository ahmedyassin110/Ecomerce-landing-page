import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Header } from "@/components/Header";
import { CartSidebar } from "@/components/CartSidebar";
import { HomePage } from "@/pages/HomePage";
import { ProductsPage } from "@/pages/ProductsPage";
import { CategoriesPage } from "@/pages/CategoriesPage";
import { CartPage } from "@/pages/CartPage";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import { Page, Product } from "@/types/store";

const Index = () => {
  const { isAuth, currentUser } = useAuth();
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
  } = useCart();



  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      description: `$${product.price.toFixed(2)}`,
      action: {
        label: "View Cart",
        onClick: () => setIsCartOpen(true),
      },
    });
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    if (page === "products" && currentPage !== "home" && currentPage !== "categories") {
      setSelectedCategory(null);
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };



  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            onNavigate={handleNavigate}
            onCategorySelect={handleCategorySelect}
          />
        );
      case "categories":
        return (
          <CategoriesPage
            onNavigate={handleNavigate}
            onCategorySelect={handleCategorySelect}
          />
        );
      case "products":
        return (
          <ProductsPage
            onAddToCart={handleAddToCart}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        );
      case "cart":
        return (
          <CartPage
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            total={cartTotal}
            onNavigate={handleNavigate}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <LoadingScreen />
      <Toaster position="bottom-right" />

      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main className="container mx-auto px-4 lg:px-8 py-8">
        {renderPage()}
      </main>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        total={cartTotal}
      />
    </div>
  );
};

export default Index;
