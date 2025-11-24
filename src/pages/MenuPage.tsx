import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBg from "@/assets/menu-header.jpg";
import { dineInMenu } from "@/data/dineInMenu";
import { takeoutMenu } from "@/data/takeoutMenu";

type MenuItem = {
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
  badges?: string[];
};

const MenuPage = () => {
  const [menuType, setMenuType] = useState<"dinein" | "takeout">("dinein");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const activeMenu: MenuItem[] =
    menuType === "dinein" ? dineInMenu : takeoutMenu;

  const categories = useMemo(() => {
    const set = new Set<string>();
    set.add("All");
    activeMenu.forEach((item) => set.add(item.category));
    return Array.from(set);
  }, [menuType]);

  const filteredItems =
    selectedCategory === "All"
      ? activeMenu
      : activeMenu.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-125"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="relative z-10 text-center container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-4">
            Our Menu
          </h1>

          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />

          <div className="flex justify-center gap-4 mb-4">
            <Button
              variant={menuType === "dinein" ? "gold" : "outline"}
              onClick={() => {
                setMenuType("dinein");
                setSelectedCategory("All");
              }}
            >
              Dine-In Menu
            </Button>

            <Button
              variant={menuType === "takeout" ? "gold" : "outline"}
              onClick={() => {
                setMenuType("takeout");
                setSelectedCategory("All");
              }}
            >
              Takeout Menu
            </Button>
          </div>

          <p className="text-primary-foreground/90 max-w-xl mx-auto">
            Explore authentic Indian flavors
          </p>
        </div>
      </section>

      {/* MENU SECTION */}
      <section className="py-10">
        <div className="container mx-auto px-4">

          {/* CATEGORY FILTERS */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "gold" : "outline"}
                className="border-gold"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* LANDSCAPE MENU CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-card rounded-xl overflow-hidden shadow-elegant border hover:border-gold/40 transition-all hover:-translate-y-1 flex w-full max-w-[680px] mx-auto"
              >
                <div className="w-40 sm:w-48 md:w-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between p-4 flex-1">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-primary mb-1">
                      {item.name}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-3 ">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-2">
                    <span className="text-xl font-bold text-gold block mb-2">
                      {item.price}
                    </span>

                    {item.badges && (
                      <div className="flex flex-wrap gap-2">
                        {item.badges.map((b) => (
                          <Badge
                            key={b}
                            variant="outline"
                            className="border-gold text-gold text-xs px-2 py-0.5 rounded-full"
                          >
                            {b}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MenuPage;
