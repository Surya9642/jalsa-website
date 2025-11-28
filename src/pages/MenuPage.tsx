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
  type?: "veg" | "nonveg";
  badges?: string[];
};

const specialCats = ["Breads", "Dessert", "Drinks", "Sides"];

const MenuPage = () => {
  const [menuType, setMenuType] = useState<"dinein" | "takeout">("dinein");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  const activeMenu: MenuItem[] =
    menuType === "dinein" ? dineInMenu : takeoutMenu;

  const categories = useMemo(() => {
    const set = new Set<string>();
    set.add("All");
    activeMenu.forEach((i) => set.add(i.category));
    return Array.from(set);
  }, [menuType]);

  const filteredItems =
    selectedCategory === "All"
      ? activeMenu
      : activeMenu.filter((i) => i.category === selectedCategory);

  const showSplit = selectedCategory === "All" || !specialCats.includes(selectedCategory);

  const vegItems = filteredItems.filter((i) => i.type === "veg");
  const nonVegItems = filteredItems.filter((i) => i.type === "nonveg");

  const switchMenu = (type: "dinein" | "takeout") => {
    setLoading(true);
    setMenuType(type);
    setSelectedCategory("All");
    setTimeout(() => setLoading(false), 300);
  };

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
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />

          <div className="flex justify-center gap-4 mb-4">
            <Button
              variant={menuType === "dinein" ? "gold" : "outline"}
              onClick={() => switchMenu("dinein")}
            >
              Dine-In Menu
            </Button>

            <Button
              variant={menuType === "takeout" ? "gold" : "outline"}
              onClick={() => switchMenu("takeout")}
            >
              Takeout Menu
            </Button>
          </div>

          <p className="text-primary-foreground/90 max-w-xl mx-auto">
            Explore authentic Indian flavors
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">

          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "gold" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* LEGEND (responsive) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 text-center">
            <Legend icon="/icons/gf.svg" label="GF – Gluten Free" />
            <Legend icon="/icons/nf.svg" label="NF – Nut Free" />
            <Legend icon="/icons/vegan.svg" label="Can be V – Vegan" />
            <Legend icon="/icons/df.svg" label="DF – Dairy Free" />
          </div>

          {/* LOADING */}
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-10 h-10 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              {/* ALWAYS show VEG & NONVEG first */}
              {vegItems.length > 0 && (
                <CategorySection title="VEG" items={vegItems} icon="/icons/veg.svg" />
              )}
              {nonVegItems.length > 0 && (
                <CategorySection title="NON-VEG" items={nonVegItems} icon="/icons/nonveg.svg" />
              )}

              {/* SPECIAL CATEGORIES ALWAYS AFTER */}
              {specialCats.map((cat) => {
                const items = filteredItems.filter((i) => i.category === cat);
                if (!items.length) return null;

                return (
                  <CategorySection
                    key={cat}
                    title={cat}
                    items={items}
                  />
                );
              })}
            </>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const Legend = ({ icon, label }: { icon: string; label: string }) => (
  <div className="flex items-center justify-center gap-2 text-sm text-primary">
    <img src={icon} className="w-5 h-5" />
    {label}
  </div>
);

const CategorySection = ({
  title,
  icon,
  items,
}: {
  title: string;
  icon?: string;
  items: MenuItem[];
}) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-6">
      {icon && <img src={icon} className="w-6 h-6" />}
      <h2 className="text-3xl font-heading font-bold text-primary">{title}</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {items.map((item, i) => (
        <Card key={i} item={item} />
      ))}
    </div>
  </div>
);

const Card = ({ item }: { item: MenuItem }) => (
  <div className="bg-card rounded-xl overflow-hidden shadow-elegant border hover:border-gold/40 transition-all hover:-translate-y-1 flex w-full max-w-[680px] mx-auto">
    <div className="w-40 sm:w-48 md:w-56 overflow-hidden">
      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col justify-between p-4 flex-1">
      <div>
        <h3 className="text-xl font-heading font-semibold text-primary mb-1">
          {item.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
      </div>

      <div>
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
);

export default MenuPage;
