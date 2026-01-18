import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHiding(true);
      setTimeout(() => setIsVisible(false), 300);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-300 ${
        isHiding ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center animate-fade-in">
        <div className="relative mb-6">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow animate-bounce-subtle">
            <ShoppingBag className="w-10 h-10 text-primary-foreground" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Shopping Store</h2>
        <div className="w-10 h-10 mx-auto border-3 border-muted border-t-primary rounded-full animate-spin"
          style={{ borderWidth: '3px' }}
        />
      </div>
    </div>
  );
}
