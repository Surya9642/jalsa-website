import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/menu-header.jpg";
import { takeoutMenu } from "@/data/takeoutMenu";

const specialCats = ["Breads", "Dessert", "Drinks", "Sides", "Kids Menu"];

const MenuTakeaway = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    set.add("All");
    takeoutMenu.forEach((i) => set.add(i.category));
    return Array.from(set);
  }, []);

  const filteredItems =
    selectedCategory === "All"
      ? takeoutMenu
      : takeoutMenu.filter((i) => i.category === selectedCategory);

  const vegItems = filteredItems.filter((i) => i.type === "veg");
  const nonVegItems = filteredItems.filter((i) => i.type === "nonveg");

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
        <h1 className="relative z-10 text-6xl font-heading font-bold text-primary-foreground text-center px-4">
          Takeaway Menu
        </h1>
      </section>

      <section className="py-10 container mx-auto px-4">

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "gold" : "outline"}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* LEGEND */}
        <LegendRow />

        {/* SPICE LEVEL */}
        <div className="text-center text-[15px] text-primary mb-8 px-3">
          Please choose your spice level:{" "}
          <span className="">
            1 = Mild, 2 = Medium, 3 = Medium Hot, 4 = Hot, 5 = Extra Hot
          </span>
        </div>

           <div className="text-center text-[15px] text-primary mb-12 px-3">
          Note: {" "}
          <span className="">
            Fried foods may contain traces of gluten as they are prepared in shared fryers. Please inform your server of any allergies.
          </span> <br />
          An 18% gratuity will be added to parties of 6 or more
        </div>
        
        {/* CURRY INFO ONLY WHEN CURRY TAB IS SELECTED */}
        {selectedCategory === "Curry Entrées" && (
          <div className="mb-10 text-primary text-[15px]">
            <p className="text-md mb-2 text-center">
              Choose how you'd like to enjoy your curry:
            </p>
            <ul className="text-md list-disc list-inside space-y-1 leading-relaxed max-w-3xl mx-auto">
              <li>
                <span className="font-semibold">À la Carte</span> – Curry
                served with rice. Add naan for an additional charge.
              </li>
            </ul>
          </div>
        )}

        {/* VEG FIRST */}
        {vegItems.length > 0 && (
          <CategorySection title="VEG" items={vegItems} icon="/icons/veg.svg" />
        )}

        {/* NON VEG */}
        {nonVegItems.length > 0 && (
          <CategorySection
            title="NON-VEG"
            items={nonVegItems}
            icon="/icons/nonveg.svg"
          />
        )}

        {/* SPECIAL CATEGORIES */}
        {specialCats.map((cat) => {
          const items = filteredItems.filter((i) => i.category === cat);
          if (!items.length) return null;
          return <CategorySection key={cat} title={cat} items={items} />;
        })}
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const LegendRow = () => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 text-center text-[14px] text-primary">
    <Legend icon="/icons/gf.svg" label="GF – Gluten Free" />
    <Legend icon="/icons/nf.svg" label="NF – Nut Free" />
    <Legend icon="/icons/vegan.svg" label="DF – Dairy Free" />
    <Legend icon="/icons/df.svg" label="V – Vegan" />
  </div>
);

const Legend = ({ icon, label }: { icon: string; label: string }) => (
  <div className="flex items-center justify-center gap-2 text-sm text-primary">
    <img src={icon} className="w-5 h-5" alt={label} />
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
  items: any[];
}) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-6">
      {icon && <img src={icon} className="w-6 h-6" alt={title} />}
      <h2 className="text-3xl font-heading font-bold text-primary">{title}</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {items.map((item, i) => (
        <Card key={i} item={item} />
      ))}
    </div>
  </div>
);

const Card = ({ item }: { item: any }) => (
  <div className="bg-card rounded-xl overflow-hidden shadow-elegant border hover:border-gold/40 transition-all hover:-translate-y-1 flex w-full mx-auto">
    <div className="w-48 overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4 flex-1">
      <h3 className="text-xl font-heading font-semibold text-primary mb-1">
        {item.name}
      </h3>
      <p className="text-muted-foreground text-sm mb-3">
        {item.description}
      </p>

      <span className="text-xl font-bold text-gold block mb-2">
        {item.price}
      </span>

      {item.badges && (
        <div className="flex flex-wrap gap-2">
          {item.badges.map((b: any) => (
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
);

export default MenuTakeaway;
