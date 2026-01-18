import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onShopNow: () => void;
}

export function HeroSection({ onShopNow }: HeroSectionProps) {
  return (
    <section className="bg-card rounded-2xl shadow-lifted overflow-hidden mb-8">
      <div className="grid lg:grid-cols-2 gap-8 p-6 lg:p-12 items-center">
        <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground leading-tight mb-6">
            Shopping And{" "}
            <span className="text-gradient">Department Store</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed">
            Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
          </p>
          <Button
            variant="hero"
            size="xl"
            onClick={onShopNow}
            className="group"
          >
            Learn More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div
          className="relative animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-20 blur-3xl" />
          <img
            src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Shopping experience"
            className="relative w-full h-64 lg:h-96 object-cover rounded-2xl shadow-floating animate-float"
          />
        </div>
      </div>
    </section>
  );
}
