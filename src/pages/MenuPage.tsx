import { useState } from "react";
import CurtainReveal from "@/components/CurtainReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import biryaniImg from "@/assets/dish-biryani.jpg";
import butterChickenImg from "@/assets/dish-butter-chicken.jpg";
import naanImg from "@/assets/dish-naan.jpg";

type MenuItem = {
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
  badges?: string[];
};

const MenuPage = () => {
  const [showCurtain, setShowCurtain] = useState(() => {
    return !sessionStorage.getItem("jalsaIntroSeen");
  });

  const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleEnter = () => {
    sessionStorage.setItem("jalsaIntroSeen", "true");
    setShowCurtain(false);
  };

  const categories = ["All", "Appetizers", "Small Plates", "Curries", "Dosa", "Uttapam", "Fried Rice", "Noodles", "Biryani", "Tandoori", "Breads", "Desserts"];

  const menuItems: MenuItem[] = [
   {
    name: "Butter Masala Fries",
    description:
      "Crispy fries tossed with creamy butter masala sauce and Indian spices.",
    image:
      "https://images.unsplash.com/photo-1606756790138-19509e26c5d0?w=600&h=600&fit=crop",
    price: "$9.99",
    category: "Small Plates",
    badges: ["GF", "NF"],
  },
  {
    name: "Chicken Tikka Sliders",
    description:
      "Mini burgers with flavorful chicken tikka filling and fresh salad.",
    image:
      "https://images.unsplash.com/photo-1605478371698-2e1bcbfb4a9a?w=600&h=600&fit=crop",
    price: "$10.99",
    category: "Small Plates",
    badges: ["NF"],
  },
  {
    name: "Tandoori Chicken Wings",
    description:
      "Juicy wings marinated in yogurt and spices, roasted in a clay oven.",
    image:
      "https://images.unsplash.com/photo-1605478031299-421a8b0d52a5?w=600&h=600&fit=crop",
    price: "$11.99",
    category: "Small Plates",
    badges: ["GF", "NF"],
  },
  {
    name: "Cheesy Tikka Masala Nachos",
    description:
      "Crispy nachos smothered with tikka sauce, cheese, jalapeños and raita.",
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600&h=600&fit=crop",
    price: "$10.99",
    category: "Small Plates",
    badges: ["GF", "NF"],
  },
  {
    name: "Masala Mac Melt",
    description:
      "Creamy mac and cheese fused with rich tikka masala sauce.",
    image:
      "https://images.unsplash.com/photo-1606851092707-7f1f3e0e7b4f?w=600&h=600&fit=crop",
    price: "$10.99",
    category: "Small Plates",
    badges: ["GF", "NF"],
  },
  {
    name: "Basil Crunch Pakoras",
    description:
      "Golden veggie fritters with basil flavor, fried to perfection.",
    image:
      "https://images.unsplash.com/photo-1630949224536-3c2b0b6f5d09?w=600&h=600&fit=crop",
    price: "$9.99",
    category: "Small Plates",
    badges: ["GF", "NF", "V"],
  },
  {
    name: "Samosa (2pc)",
    description:
      "Crispy pastry stuffed with spiced potatoes and peas.",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&h=600&fit=crop",
    price: "$6.99",
    category: "Appetizers",
    badges: ["NF", "V"],
  },
  {
    name: "Cut Mirchi Chaat",
    description:
      "Fried green chili fritters topped with onions, peanuts, mint and tamarind chutneys.",
    image:
      "https://images.unsplash.com/photo-1620137973907-9e7403817f24?w=600&h=600&fit=crop",
    price: "$9.99",
    category: "Appetizers",
    badges: ["GF", "Spicy"],
  },
  {
    name: "Tandoori Papadums",
    description:
      "Crispy roasted lentil wafers served with house chutneys.",
    image:
      "https://images.unsplash.com/photo-1632059404780-d62abf2e5f03?w=600&h=600&fit=crop",
    price: "$4.99",
    category: "Appetizers",
    badges: ["GF", "NF"],
  },
  {
    name: "Corn Chaat",
    description:
      "Fried corn tossed with spices, herbs, onions, and lime.",
    image:
      "https://images.unsplash.com/photo-1621593888988-0e014192a5b7?w=600&h=600&fit=crop",
    price: "$9.99",
    category: "Appetizers",
    badges: ["GF", "V"],
  },
  {
    name: "Onion Spinach Pakora",
    description:
      "Savory fritters made with onion, spinach, and chickpea flour.",
    image:
      "https://images.unsplash.com/photo-1631823150509-e4ac7dbbccb3?w=600&h=600&fit=crop",
    price: "$8.99",
    category: "Appetizers",
    badges: ["GF", "NF", "V"],
  },
  {
    name: "Paneer Pakora",
    description:
      "Paneer dipped in chickpea batter and fried, served with chutneys.",
    image:
      "https://images.unsplash.com/photo-1642272943722-4a8d59d5a1d4?w=600&h=600&fit=crop",
    price: "$9.99",
    category: "Appetizers",
    badges: ["GF", "NF"],
  },
  {
    name: "Gobi Manchurian",
    description:
      "Fried cauliflower tossed in Indo-Chinese manchurian sauce.",
    image:
      "https://images.unsplash.com/photo-1628595351029-c2c20c9b0e7d?w=600&h=600&fit=crop",
    price: "$9.99",
    category: "Appetizers",
    badges: ["NF", "V"],
  },
  {
    name: "Tofu Manchurian",
    description:
      "Fried tofu and peppers tossed in house-made manchurian sauce.",
    image:
      "https://images.unsplash.com/photo-1639158784773-4b4f14c72e5f?w=600&h=600&fit=crop",
    price: "$11.99",
    category: "Appetizers",
    badges: ["NF", "V"],
  },
  {
    name: "Chili Paneer",
    description:
      "Paneer stir-fried with onions, bell peppers, and spicy chili sauce.",
    image:
      "https://images.unsplash.com/photo-1600628422019-3e74a8d4349b?w=600&h=600&fit=crop",
    price: "$11.99",
    category: "Appetizers",
    badges: ["NF", "Spicy"],
  },
  {
    name: "Chili Chicken",
    description:
      "Fried chicken tossed with spicy Indo-Chinese chili sauce.",
    image:
      "https://images.unsplash.com/photo-1605478031299-421a8b0d52a5?w=600&h=600&fit=crop",
    price: "$11.99",
    category: "Appetizers",
    badges: ["DF", "NF", "Spicy"],
  },
  {
    name: "Samosa Channa Chaat",
    description:
      "Crispy samosas crushed and topped with masala chickpeas, yogurt and chutneys.",
    image:
      "https://images.unsplash.com/photo-1605628298170-55c2c1e8a770?w=600&h=600&fit=crop",
    price: "$11.99",
    category: "Appetizers",
    badges: ["NF", "V"],
  },
  {
    name: "Chole Bhatura",
    description:
      "Chickpea curry served with fluffy fried bhatura bread.",
    image:
      "https://images.unsplash.com/photo-1626080143430-7c4cf08e4a7a?w=600&h=600&fit=crop",
    price: "$14.99",
    category: "Appetizers",
    badges: ["NF"],
  },
  {
    name: "Chicken 65",
    description:
      "Deep-fried spicy chicken bites with curry leaves and chili.",
    image:
      "https://images.unsplash.com/photo-1621939093638-6d96ad933f8c?w=600&h=600&fit=crop",
    price: "$10.99",
    category: "Appetizers",
    badges: ["DF", "NF", "Spicy"],
  },
  {
    name: "Chicken Tikka Kebab",
    description:
      "Boneless chicken marinated in yogurt and spices, skewered and roasted in the tandoor. Served with salad and mint chutney.",
    image:
      "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d?w=600&h=600&fit=crop",
    price: "$14.99",
    category: "Tandoori",
    badges: ["GF", "NF"],
  },
  {
    name: "Paneer Cheese Tikka Kebab",
    description:
      "Cottage cheese cubes marinated in spices and grilled in the tandoor, served with mint chutney.",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&h=600&fit=crop",
    price: "$14.99",
    category: "Tandoori",
    badges: ["GF", "NF", "V"],
  },
  {
    name: "Tandoori Salmon",
    description:
      "Fresh salmon fillet marinated in spiced yogurt and slow-roasted in a clay oven.",
    image:
      "https://images.unsplash.com/photo-1606755962773-90e1e057b8b9?w=600&h=600&fit=crop",
    price: "$17.99",
    category: "Tandoori",
    badges: ["GF", "NF"],
  },
  {
    name: "Daal Tadka",
    description:
      "Yellow lentils tempered with mustard seeds, cumin, garlic and herbs. Comforting and flavorful.",
    image:
      "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600&h=600&fit=crop",
    price: "$12.99",
    category: "Curries",
    badges: ["GF", "V"],
  },
  {
    name: "Aloo Gobi Masala",
    description:
      "Cauliflower and potatoes simmered in a tomato-onion gravy with spices and herbs.",
    image:
      "https://images.unsplash.com/photo-1631452180519-bcd746f53242?w=600&h=600&fit=crop",
    price: "$13.99",
    category: "Curries",
    badges: ["GF", "NF", "V"],
  },
  {
    name: "Channa Masala",
    description:
      "Chickpeas in rich tomato-onion gravy with ginger, garlic and garam masala.",
    image:
      "https://images.unsplash.com/photo-1628764252233-94b6b2cb03a8?w=600&h=600&fit=crop",
    price: "$13.99",
    category: "Curries",
    badges: ["GF", "NF", "V"],
  },
  {
    name: "Malai Kofta",
    description:
      "Paneer-potato dumplings in creamy cashew onion gravy with a hint of cardamom.",
    image:
      "https://images.unsplash.com/photo-1621982852831-974fbfd05dc4?w=600&h=600&fit=crop",
    price: "$15.99",
    category: "Curries",
    badges: ["GF"],
  },
  {
    name: "Paneer Tikka Masala",
    description:
      "Grilled paneer in a rich onion-tomato-fenugreek cream sauce.",
    image:
      "https://images.unsplash.com/photo-1626074353765-527c46f00865?w=600&h=600&fit=crop",
    price: "$15.99",
    category: "Curries",
    badges: ["GF", "NF", "V"],
  },
  {
    name: "Tofu Tikka Masala",
    description:
      "Grilled tofu in a creamy tomato-onion sauce infused with Indian spices.",
    image:
      "https://images.unsplash.com/photo-1621072159650-de6c72a3d63d?w=600&h=600&fit=crop",
    price: "$15.99",
    category: "Curries",
    badges: ["GF", "NF", "V"],
  },
  {
    name: "Butter Paneer",
    description:
      "Paneer cubes simmered in a buttery tomato-based sauce.",
    image:
      "https://images.unsplash.com/photo-1631515243349-d1b1e4c09c82?w=600&h=600&fit=crop",
    price: "$15.99",
    category: "Curries",
    badges: ["GF", "NF"],
  },
  {
    name: "Butter Tofu",
    description:
      "Tofu in a creamy butter tomato sauce with mild spices.",
    image:
      "https://images.unsplash.com/photo-1621982852831-974fbfd05dc4?w=600&h=600&fit=crop",
    price: "$15.99",
    category: "Curries",
    badges: ["GF", "NF"],
  },
  {
    name: "Tawa Bhindi Masala",
    description:
      "Fried okra tossed in a tomato-onion masala with roasted cumin.",
    image:
      "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600&h=600&fit=crop",
    price: "$13.99",
    category: "Curries",
    badges: ["GF", "NF", "V"],
  },
  {
    name: "Andhra Guttivankaya",
    description:
      "Baby eggplants stuffed with spiced coconut-peanut masala and braised in tamarind-sesame gravy.",
    image:
      "https://images.unsplash.com/photo-1601050690597-733c0b8e8c3d?w=600&h=600&fit=crop",
    price: "$15.99",
    category: "Curries",
    badges: ["GF", "V"],
  },
  {
    name: "Butter Chicken",
    description:
      "Tandoori chicken cooked in a rich buttery tomato sauce with aromatic spices.",
    image:
      "https://images.unsplash.com/photo-1631515243349-d1b1e4c09c82?w=600&h=600&fit=crop",
    price: "$15.99",
    category: "Curries",
    badges: ["GF", "NF"],
  },
  {
    name: "Butter Lamb",
    description:
      "Slow-cooked lamb simmered in a buttery tomato cream gravy with Indian spices.",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&h=600&fit=crop",
    price: "$18.99",
    category: "Curries",
    badges: ["GF", "NF"],
  },
  {
    name: "Goat Curry",
    description:
      "Bone-in goat cooked in a tomato-onion tamarind gravy with spices.",
    image:
      "https://images.unsplash.com/photo-1645117480817-7cf45190d958?w=600&h=600&fit=crop",
    price: "$19.99",
    category: "Curries",
    badges: ["GF", "NF"],
  },
  {
    name: "Malabar Fish Curry",
    description:
      "Fish fillets cooked in tamarind-coconut gravy with curry leaves and spices.",
    image:
      "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600&h=600&fit=crop",
    price: "$16.99",
    category: "Curries",
    badges: ["GF", "NF", "DF"],
  },
  {
    name: "Coastal Shrimp Masala",
    description:
      "Shrimp simmered in onion-tomato sauce with spices and a touch of coconut.",
    image:
      "https://images.unsplash.com/photo-1613145993481-0e0b2a9d8c5e?w=600&h=600&fit=crop",
    price: "$16.99",
    category: "Curries",
    badges: ["GF", "NF", "DF"],
  },
  {
    name: "Goan Vindaloo (Chicken)",
    description:
      "Tangy spicy curry with potatoes, chilies and vinegar. Fiery and flavorful.",
    image:
      "https://images.unsplash.com/photo-1617196034644-9c20b0c7c9ab?w=600&h=600&fit=crop",
    price: "$15.99",
    category: "Curries",
    badges: ["GF", "DF", "NF", "Spicy"],
  },
  {
    name: "Saag Paneer",
    description:
      "Creamed spinach cooked with paneer and mild spices in a classic North Indian style.",
    image:
      "https://images.unsplash.com/photo-1621982852831-974fbfd05dc4?w=600&h=600&fit=crop",
    price: "$15.99",
    category: "Curries",
    badges: ["GF", "NF"],
  },
  {
    name: "Kurma Chicken",
    description:
      "Creamy nut-free curry with coconut and mild aromatic spices.",
    image:
      "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600&h=600&fit=crop",
    price: "$15.99",
    category: "Curries",
    badges: ["GF", "NF", "DF"],
  },
  {
    name: "Plain Dosa",
    description:
      "Thin, crispy crepe made from fermented rice and lentil batter, served with chutneys and sambar.",
    image:
      "https://images.unsplash.com/photo-1632059404780-d62abf2e5f03?w=600&h=600&fit=crop",
    price: "$11.99",
    category: "Dosa",
    badges: ["GF", "NF", "V"],
  },
  {
    name: "Cheese Dosa",
    description:
      "Crispy dosa filled with melted cheese and served with chutneys.",
    image:
      "https://images.unsplash.com/photo-1660024336863-17ed8c0b4b40?w=600&h=600&fit=crop",
    price: "$12.99",
    category: "Dosa",
    badges: ["GF", "NF"],
  },
  {
    name: "Chili Cheese Dosa",
    description:
      "Cheesy dosa infused with green chilies and spices for an extra kick.",
    image:
      "https://images.unsplash.com/photo-1614799211198-11f5efb8b57d?w=600&h=600&fit=crop",
    price: "$13.99",
    category: "Dosa",
    badges: ["GF", "NF", "Spicy"],
  },
  {
    name: "Masala Dosa",
    description:
      "Classic dosa filled with spiced potato masala, served with sambar and chutneys.",
    image:
      "https://images.unsplash.com/photo-1617196034796-73c2c1a6c58f?w=600&h=600&fit=crop",
    price: "$13.99",
    category: "Dosa",
    badges: ["GF", "NF", "V"],
  },
  {
    name: "Mysore Masala Dosa",
    description:
      "Crisp dosa coated with spicy red chutney and filled with potato masala.",
    image:
      "https://images.unsplash.com/photo-1622550853856-7fda7c73db3b?w=600&h=600&fit=crop",
    price: "$13.99",
    category: "Dosa",
    badges: ["GF", "NF", "Spicy"],
  },
  {
    name: "Paneer Dosa",
    description:
      "Stuffed with spiced paneer filling and served with chutneys and sambar.",
    image:
      "https://images.unsplash.com/photo-1651084063691-9f44d6fefb7f?w=600&h=600&fit=crop",
    price: "$15.99",
    category: "Dosa",
    badges: ["GF", "NF"],
  },
  {
    name: "Egg Dosa",
    description:
      "Crispy dosa layered with beaten egg and a touch of spice.",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&h=600&fit=crop",
    price: "$15.99",
    category: "Dosa",
    badges: ["GF", "NF"],
  },
  {
    name: "Chicken Tikka Dosa",
    description:
      "Unique fusion dosa filled with spiced chicken tikka.",
    image:
      "https://images.unsplash.com/photo-1605478031299-421a8b0d52a5?w=600&h=600&fit=crop",
    price: "$16.99",
    category: "Dosa",
    badges: ["GF", "NF"],
  },
  {
    name: "Plain Uttapam",
    description:
      "Soft, thick rice and lentil pancake served with chutneys and sambar.",
    image:
      "https://images.unsplash.com/photo-1642902676482-d9a2a28c7b8c?w=600&h=600&fit=crop",
    price: "$11.99",
    category: "Uttapam",
    badges: ["GF", "NF", "V"],
  },
  {
    name: "Onion Uttapam",
    description:
      "Uttapam topped with onions and herbs, served with chutneys.",
    image:
      "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600&h=600&fit=crop",
    price: "$12.99",
    category: "Uttapam",
    badges: ["GF", "NF", "V"],
  },
  {
    name: "Mix Veg Uttapam",
    description:
      "Loaded with assorted vegetables and fresh herbs.",
    image:
      "https://images.unsplash.com/photo-1612392061796-ff19f279bcf4?w=600&h=600&fit=crop",
    price: "$12.99",
    category: "Uttapam",
    badges: ["GF", "NF", "V"],
  },
  {
    name: "Masala Onion Uttapam",
    description:
      "Topped with spiced onion mixture for bold flavor.",
    image:
      "https://images.unsplash.com/photo-1642902676482-d9a2a28c7b8c?w=600&h=600&fit=crop",
    price: "$14.99",
    category: "Uttapam",
    badges: ["GF", "NF", "V"],
  },
  {
    name: "Veg Fried Rice",
    description:
      "Indo-Chinese stir-fry of rice with vegetables, soy sauce, and garlic.",
    image:
      "https://images.unsplash.com/photo-1625943553857-04c703d2a5b3?w=600&h=600&fit=crop",
    price: "$13.99",
    category: "Fried Rice",
    badges: ["DF", "NF", "V"],
  },
  {
    name: "Egg Fried Rice",
    description:
      "Classic Indo-Chinese fried rice tossed with egg, soy sauce and veggies.",
    image:
      "https://images.unsplash.com/photo-1628595351029-c2c20c9b0e7d?w=600&h=600&fit=crop",
    price: "$14.99",
    category: "Fried Rice",
    badges: ["DF", "NF"],
  },
  {
    name: "Paneer Fried Rice",
    description:
      "Fried rice with paneer, soy sauce, garlic, and Indo-Chinese spices.",
    image:
      "https://images.unsplash.com/photo-1628795731402-104e274c09f2?w=600&h=600&fit=crop",
    price: "$15.99",
    category: "Fried Rice",
    badges: ["NF"],
  },
  {
    name: "Tofu Fried Rice",
    description:
      "Wok-tossed rice with tofu and mixed vegetables in Indo-Chinese style.",
    image:
      "https://images.unsplash.com/photo-1604909053191-937cf8f0c25a?w=600&h=600&fit=crop",
    price: "$15.99",
    category: "Fried Rice",
    badges: ["DF", "NF", "V"],
  },
  {
    name: "Chicken & Egg Fried Rice",
    description:
      "Chicken and eggs tossed with rice, soy, and garlic for hearty Indo-Chinese flavor.",
    image:
      "https://images.unsplash.com/photo-1617196034644-9c20b0c7c9ab?w=600&h=600&fit=crop",
    price: "$16.99",
    category: "Fried Rice",
    badges: ["DF", "NF"],
  },
  {
    name: "Schezwan Fried Rice",
    description:
      "Spicy chili-garlic rice with Indo-Chinese Schezwan sauce.",
    image:
      "https://images.unsplash.com/photo-1621593888988-0e014192a5b7?w=600&h=600&fit=crop",
    price: "$13.99",
    category: "Fried Rice",
    badges: ["DF", "NF", "Spicy"],
  },
  {
    name: "Tikka Masala Fried Rice",
    description:
      "Basmati rice cooked with tikka masala sauce for extra flavor.",
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600&h=600&fit=crop",
    price: "$13.99",
    category: "Fried Rice",
    badges: ["GF", "NF"],
  },
  {
    name: "Veg Hakka Noodles",
    description:
      "Wok-tossed noodles with vegetables, soy, and garlic in Indo-Chinese style.",
    image:
      "https://images.unsplash.com/photo-1599974579688-8dbdd91d3b0f?w=600&h=600&fit=crop",
    price: "$14.99",
    category: "Noodles",
    badges: ["DF", "NF", "V"],
  },
  {
    name: "Egg Noodles",
    description:
      "Stir-fried noodles tossed with egg, vegetables and sauces.",
    image:
      "https://images.unsplash.com/photo-1620321814804-4b0eece1d9aa?w=600&h=600&fit=crop",
    price: "$15.99",
    category: "Noodles",
    badges: ["DF", "NF"],
  },
  {
    name: "Chicken & Egg Noodles",
    description:
      "Noodles tossed with chicken, egg and veggies in Indo-Chinese sauce.",
    image:
      "https://images.unsplash.com/photo-1605478031299-421a8b0d52a5?w=600&h=600&fit=crop",
    price: "$17.99",
    category: "Noodles",
    badges: ["DF", "NF"],
  },
  {
    name: "Schezwan Noodles",
    description:
      "Spicy noodles with chili-garlic Schezwan sauce, vegetables, and soy.",
    image:
      "https://images.unsplash.com/photo-1621791886542-bf3aeb3d00f8?w=600&h=600&fit=crop",
    price: "$14.99",
    category: "Noodles",
    badges: ["DF", "NF", "Spicy"],
  },
  {
    name: "Kuruma Noodle Bowl",
    description:
      "Coconut curry noodle soup topped with vegetables, onions, and lime.",
    image:
      "https://images.unsplash.com/photo-1621791886542-bf3aeb3d00f8?w=600&h=600&fit=crop",
    price: "$16.99",
    category: "Noodles",
    badges: ["DF", "NF"],
  },
  {
    name: "Hyderabad Veg Biryani",
    description:
      "Basmati rice slow-cooked with vegetables, saffron, and aromatic spices.",
    image:
      "https://images.unsplash.com/photo-1612392061796-ff19f279bcf4?w=600&h=600&fit=crop",
    price: "$13.99",
    category: "Biryani",
    badges: ["GF", "V"],
  },
  {
    name: "Hyderabad Chicken Biryani",
    description:
      "Fragrant basmati rice layered with spiced marinated chicken and herbs.",
    image:
      "https://images.unsplash.com/photo-1617196034644-9c20b0c7c9ab?w=600&h=600&fit=crop",
    price: "$15.99",
    category: "Biryani",
    badges: ["GF"],
  },
  {
    name: "Hyderabad Goat Biryani",
    description:
      "Traditional goat biryani served on weekends, cooked with aromatic rice and spices.",
    image:
      "https://images.unsplash.com/photo-1620137973907-9e7403817f24?w=600&h=600&fit=crop",
    price: "$19.99",
    category: "Biryani",
    badges: ["GF"],
  },
   {
    name: "Plain Naan",
    description:
      "Traditional soft Indian flatbread baked in a clay tandoor oven.",
    image:
      "https://images.unsplash.com/photo-1624000630028-6b1d72e8a1a9?w=600&h=600&fit=crop",
    price: "$3.49",
    category: "Breads",
    badges: [],
  },
  {
    name: "Butter Naan",
    description:
      "Soft tandoori-baked naan brushed with melted butter.",
    image:
      "https://images.unsplash.com/photo-1590080875832-7b1e1aef41a8?w=600&h=600&fit=crop",
    price: "$3.99",
    category: "Breads",
    badges: [],
  },
  {
    name: "Garlic Naan",
    description:
      "Naan topped with garlic and coriander, baked in the tandoor.",
    image:
      "https://images.unsplash.com/photo-1615485737457-6d15e358f3b3?w=600&h=600&fit=crop",
    price: "$4.49",
    category: "Breads",
    badges: [],
  },
  {
    name: "Cheese Naan",
    description:
      "Naan stuffed with cheese and cooked until golden brown.",
    image:
      "https://images.unsplash.com/photo-1624000630028-6b1d72e8a1a9?w=600&h=600&fit=crop",
    price: "$5.99",
    category: "Breads",
    badges: [],
  },
  {
    name: "Plain Roti",
    description:
      "Whole-wheat flatbread cooked on a griddle.",
    image:
      "https://images.unsplash.com/photo-1615485737457-6d15e358f3b3?w=600&h=600&fit=crop",
    price: "$3.49",
    category: "Breads",
    badges: ["V"],
  },
  {
    name: "Butter Roti",
    description:
      "Soft whole-wheat roti brushed with butter.",
    image:
      "https://images.unsplash.com/photo-1615485737457-6d15e358f3b3?w=600&h=600&fit=crop",
    price: "$3.99",
    category: "Breads",
    badges: [],
  },
  {
    name: "Bhatura",
    description:
      "Fluffy deep-fried bread served hot and puffed.",
    image:
      "https://images.unsplash.com/photo-1626080143430-7c4cf08e4a7a?w=600&h=600&fit=crop",
    price: "$4.99",
    category: "Breads",
    badges: [],
  },
  {
    name: "Rasmalai",
    description:
      "Soft paneer patties soaked in sweet, aromatic milk with pistachios.",
    image:
      "https://images.unsplash.com/photo-1661414428030-75b3c0e6252f?w=600&h=600&fit=crop",
    price: "$4.99",
    category: "Desserts",
    badges: ["GF"],
  },
  {
    name: "Gulab Jamun",
    description:
      "Fried milk dumplings soaked in rose-scented syrup.",
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&h=600&fit=crop",
    price: "$4.99",
    category: "Desserts",
    badges: ["V"],
  },
  {
    name: "Kheer Brûlée",
    description:
      "Rice pudding finished with a caramelized brûlée crust and a scoop of vanilla ice cream.",
    image:
      "https://images.unsplash.com/photo-1613145993481-0e0b2a9d8c5e?w=600&h=600&fit=crop",
    price: "$9.99",
    category: "Desserts",
    badges: [],
  },
  {
    name: "Chai Tiramisu",
    description:
      "Eggless cake soaked in chai and layered with rich cream.",
    image:
      "https://images.unsplash.com/photo-1622771939973-ec8efb8b88dc?w=600&h=600&fit=crop",
    price: "$9.99",
    category: "Desserts",
    badges: [],
  },
  {
    name: "Rasmalai Tres Leches",
    description:
      "Eggless sponge cake soaked in rasmalai milk, topped with rasmalai-flavored whipped cream.",
    image:
      "https://images.unsplash.com/photo-1657069234959-1c3cbfa9f764?w=600&h=600&fit=crop",
    price: "$9.99",
    category: "Desserts",
    badges: [],
  },
  {
    name: "Mango Lassi",
    description:
      "Refreshing yogurt-based mango drink.",
    image:
      "https://images.unsplash.com/photo-1626178808461-5bcb8d1aee32?w=600&h=600&fit=crop",
    price: "$5.49",
    category: "Drinks",
    badges: [],
  },
  {
    name: "Mango Coconut Lassi",
    description:
      "Smooth blend of mango, coconut, and yogurt.",
    image:
      "https://images.unsplash.com/photo-1626178808461-5bcb8d1aee32?w=600&h=600&fit=crop",
    price: "$5.49",
    category: "Drinks",
    badges: ["V"],
  },
  {
    name: "Minty Lemonade",
    description:
      "Fresh lemonade infused with mint leaves.",
    image:
      "https://images.unsplash.com/photo-1629401587984-6b6b6b7a37a5?w=600&h=600&fit=crop",
    price: "$5.49",
    category: "Drinks",
    badges: ["V"],
  },
  {
    name: "Masala Chai",
    description:
      "Traditional Indian tea brewed with milk and aromatic spices.",
    image:
      "https://images.unsplash.com/photo-1615485737457-6d15e358f3b3?w=600&h=600&fit=crop",
    price: "$4.49",
    category: "Drinks",
    badges: [],
  },
  {
    name: "Indian Coffee",
    description:
      "Strong, frothy South-Indian filter coffee served hot.",
    image:
      "https://images.unsplash.com/photo-1613145993481-0e0b2a9d8c5e?w=600&h=600&fit=crop",
    price: "$4.49",
    category: "Drinks",
    badges: [],
  },
  {
    name: "Soft Drinks",
    description:
      "Assorted carbonated beverages.",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=600&fit=crop",
    price: "$2.99",
    category: "Drinks",
    badges: [],
  },
  {
    name: "San Pellegrino",
    description:
      "Premium sparkling mineral water.",
    image:
      "https://images.unsplash.com/photo-1606312619070-d6e26fa04fd0?w=600&h=600&fit=crop",
    price: "$4.99",
    category: "Drinks",
    badges: [],
  },
  {
    name: "Raita",
    description:
      "Cucumber-yogurt dip with mild spices.",
    image:
      "https://images.unsplash.com/photo-1595273673362-84f5d6f4b035?w=600&h=600&fit=crop",
    price: "$3.99",
    category: "Sides",
    badges: ["GF"],
  },
  {
    name: "House Salad",
    description:
      "Fresh greens served with a light vinaigrette dressing.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=600&fit=crop",
    price: "$3.99",
    category: "Sides",
    badges: ["V", "GF"],
  },
  {
    name: "Chutney Sampler",
    description:
      "Trio of mint-cilantro, tamarind, and coconut chutneys.",
    image:
      "https://images.unsplash.com/photo-1624267631805-ccda8db3b0e5?w=600&h=600&fit=crop",
    price: "$3.99",
    category: "Sides",
    badges: ["V", "GF"],
  },
  {
    name: "Basmati Rice",
    description:
      "Steamed aromatic basmati rice.",
    image:
      "https://images.unsplash.com/photo-1612392061796-ff19f279bcf4?w=600&h=600&fit=crop",
    price: "$3.99",
    category: "Sides",
    badges: ["GF", "V"],
  },
  {
    name: "Sambhar (12 oz)",
    description:
      "Traditional South-Indian lentil soup with vegetables and spices.",
    image:
      "https://images.unsplash.com/photo-1632059404780-d62abf2e5f03?w=600&h=600&fit=crop",
    price: "$5.99",
    category: "Sides",
    badges: ["GF", "NF", "V"],
  }
  ];

  const filteredItems = selectedCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
  <>
    {showCurtain && <CurtainReveal onEnter={handleEnter} />}

    {!showCurtain && (
      <div className="min-h-screen bg-background flex flex-col overflow-hidden">
        <Header />

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
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
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-4">
              Our Menu
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-gradient-gold mx-auto mb-4 sm:mb-6" />
            <p className="text-base sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Explore the flavors of royal Indian cuisine
            </p>
          </div>
        </motion.section>

        {/* Menu */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">

            {/* Filters */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-3 mb-10 sm:mb-12"
            >
              {categories.map((category, i) => (
                <motion.div key={category} variants={fadeUp} custom={i}>
                  <Button
                    variant={selectedCategory === category ? "gold" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={`${
                      selectedCategory === category
                        ? ""
                        : "border-gold hover:bg-gold/20"
                    } text-sm sm:text-base`}
                  >
                    {category}
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Legend */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 text-xs sm:text-sm text-muted-foreground text-center px-2"
            >
              <span className="flex items-center gap-1.5 sm:gap-2">
                <Badge className="bg-green-100 text-green-700 border-green-300 text-[11px] sm:text-xs">
                  V
                </Badge>
                <span>Vegetarian</span>
              </span>

              <span className="flex items-center gap-1.5 sm:gap-2">
                <Badge className="bg-blue-100 text-blue-700 border-blue-300 text-[11px] sm:text-xs">
                  GF
                </Badge>
                <span>Gluten Free</span>
              </span>

              <span className="flex items-center gap-1.5 sm:gap-2">
                <Badge className="bg-red-100 text-red-700 border-red-300 text-[11px] sm:text-xs">
                  Spicy
                </Badge>
                <span>Spicy</span>
              </span>
            </motion.div>

            {/* Menu Items */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-12 px-2 sm:px-4"
            >
              {filteredItems.map((item, index) => (
                <motion.article
                  key={index}
                  variants={fadeUp}
                  custom={index % 6}
                  className="group bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-gold/20"
                >
                  <div className="relative overflow-hidden aspect-square">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-heading font-semibold text-primary mb-2">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg sm:text-xl font-semibold text-gold">
                        {item.price}
                      </span>
                      {item.badges && item.badges.length > 0 && (
                        <div className="flex gap-1 flex-wrap">
                          {item.badges.map((badge) => {
                            const badgeColor =
                              badge === "V"
                                ? "bg-green-100 text-green-700 border-green-300"
                                : badge === "GF"
                                ? "bg-blue-100 text-blue-700 border-blue-300"
                                : badge === "Spicy"
                                ? "bg-red-100 text-red-700 border-red-300"
                                : "border-gold text-gold";
                            return (
                              <Badge
                                key={badge}
                                variant="outline"
                                className={`${badgeColor} text-xs sm:text-sm`}
                              >
                                {badge}
                              </Badge>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-gold hover:bg-gold hover:text-primary text-sm sm:text-base"
              >
                Download Full Menu (PDF)
              </Button>
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
