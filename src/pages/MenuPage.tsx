import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/menu-header.jpg";
import { Link } from "react-router-dom";

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-125"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />

        <div className="relative z-10 text-center container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-4">
            Our Menu
          </h1>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8" />

          <p className="text-primary-foreground/90 max-w-xl mx-auto mb-10">
            Choose how you want to enjoy our food
          </p>

          {/* TWO BUTTONS ONLY */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/menu-dine-in">
              <Button size="lg" variant="gold" className="text-lg px-10 py-6">
                Dine-In Menu
              </Button>
            </Link>

            <Link to="/menu-takeaway">
              <Button size="lg" variant="gold" className="text-lg px-10 py-6">
                Takeaway Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MenuPage;
