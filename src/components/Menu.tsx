import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AUTO_SLIDE_INTERVAL = 3000;

const Menu = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const dishes = [
    {
      name: "Masala Mac Melt",
      description: "Creamy mac with tikka masala twist.",
      image: "/menu/item5.jpg",
      price: "$10.99",
    },
    {
      name: "Cut Mirchi Chaat",
      description: "Fried chili fritters with chutneys.",
      image: "/menu/item8.jpg",
      price: "$9.99",
    },
    {
      name: "Chole Bhatura",
      description: "Chickpea curry with fluffy bhatura.",
      image: "/menu/item19.jpg",
      price: "$14.99",
    },
    {
    name: "Chicken Tikka Masala",
    description: "Marinated chicken grilled in the tandoor and cooked in onion, tomato, and fenugreek cream sauce. Served à la carte with rice.",
    image: "/menu/item39.jpeg",
    price: "$15.99",
    },
    {
    name: "Butter Chicken",
    description: "Tandoori chicken cubes simmered in a buttery tomato-based sauce with Indian spices. Served à la carte with rice.",
    image: "/menu/item40.jpg",
    price: "$15.99",
    },
    {
      name: "Chicken Tikka Kebab",
      description: "Grilled spiced chicken.",
      image: "/menu/item26.jpeg",
      price: "$14.99",
    },
    {
      name: "Shrimps Vepudu",
      description: "Spicy shrimp sauté.",
      image: "/menu/item113.jpeg",
      price: "$16.99",
    },
    {
      name: "Malai Kofta",
      description: "Paneer dumplings in creamy gravy.",
      image: "/menu/item32.jpg",
      price: "$15.99",
    },
    {
      name: "Jalsa special chicken biryani (Boneless)",
      description: "Juicy boneless chicken simmered in aromatic spices, layered with fragrant basmati rice.",
      image: "/menu/item104.jpeg",
      price: "$17.99",
    },
    {
      name: "Paneer Noodles",
      description: "Spicy schezwan noodles.",
      image: "/menu/item97.jpeg",
      price: "$16.99",
    },
    {
      name: "Rasmalai Tres Leches",
      description: "Fusion dessert delight.",
      image: "/menu/item126.jpeg",
      price: "$9.99",
    },
  ];

  // Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsToShow = isMobile ? 1 : 3;
  const slideWidth = 100 / itemsToShow;

  // 🔥 EXTEND for loop
  const extended = [...dishes, ...dishes.slice(0, itemsToShow)];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // Reset loop (safe)
  useEffect(() => {
    if (index >= dishes.length) {
      setTimeout(() => {
        setIndex(0);
      }, 800);
    }
  }, [index, dishes.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">
            Our Signature Dishes
          </h2>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${index * slideWidth}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {extended.map((dish, i) => (
              <div
                key={i}
                style={{ width: `${slideWidth}%` }}
                className="px-3 flex-shrink-0"
              >
                <div className="bg-card rounded-xl overflow-hidden shadow-md">
                  <div className="aspect-square">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{dish.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {dish.description}
                    </p>
                    <p className="text-gold font-bold mt-2">
                      {dish.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <Button onClick={() => navigate("/menu")}>
            View Full Menu
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Menu;