import { useState, useMemo } from "react";
import CurtainReveal from "@/components/CurtainReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

// IMPORT 2 SEPARATE MENUS
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
  const [showCurtain, setShowCurtain] = useState(
    () => !sessionStorage.getItem("jalsaIntroSeen")
  );

  const handleEnter = () => {
    sessionStorage.setItem("jalsaIntroSeen", "true");
    setShowCurtain(false);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  // ⭐ MENU TYPE: dine-in or takeaway
  const [menuType, setMenuType] = useState<"dinein" | "takeout">("dinein");

  // ⭐ CATEGORY FILTER
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ⭐ SELECT ACTIVE MENU ARRAY
  const activeMenu: MenuItem[] =
    menuType === "dinein" ? dineInMenu : takeoutMenu;

  // ⭐ AUTO-GENERATE CATEGORIES
  const categories = useMemo(() => {
    const set = new Set<string>();
    set.add("All");
    activeMenu.forEach((item) => set.add(item.category));
    return Array.from(set);
  }, [menuType]);

  // ⭐ FILTER ITEMS BY CATEGORY
  const filteredItems =
    selectedCategory === "All"
      ? activeMenu
      : activeMenu.filter((item) => item.category === selectedCategory);

  return (
    <>
      {showCurtain && <CurtainReveal onEnter={handleEnter} />}

      {!showCurtain && (
        <div className="min-h-screen bg-background flex flex-col overflow-hidden">
          <Header />

          {/* HERO */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[50vh] flex items-center justify-center"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-overlay" />
            </div>

            <div className="relative z-10 text-center container mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-4">
                Our Menu
              </h1>

              <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />

              {/* ⭐ MENU SWITCH */}
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
          </motion.section>

          {/* MENU SECTION */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              {/* CATEGORY FILTERS */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-wrap gap-3 justify-center mb-10"
              >
                {categories.map((category, i) => (
                  <motion.div key={category} variants={fadeUp} custom={i}>
                    <Button
                      variant={
                        selectedCategory === category ? "gold" : "outline"
                      }
                      className="border-gold"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>

              {/* MENU GRID */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    custom={idx % 6}
                    className="bg-card rounded-2xl overflow-hidden shadow-elegant border hover:border-gold/30 transition-all hover:-translate-y-2"
                  >
                    {/* IMAGE */}
                    <div className="relative overflow-hidden aspect-square">
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-4">
                      <h3 className="text-xl font-heading font-semibold text-primary mb-1">
                        {item.name}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-gold">
                          {item.price}
                        </span>

                        {item.badges && (
                          <div className="flex gap-1">
                            {item.badges.map((b) => (
                              <Badge
                                key={b}
                                variant="outline"
                                className="border-gold text-gold text-xs"
                              >
                                {b}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </>
  );
};

export default MenuPage;
