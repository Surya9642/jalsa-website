import { Button } from "@/components/ui/button";
import biryaniImg from "@/assets/dish-biryani.jpg";
import butterChickenImg from "@/assets/dish-butter-chicken.jpg";
import naanImg from "@/assets/dish-naan.jpg";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const dishes = [
    {
      name: "Royal Biryani",
      description: "Fragrant basmati rice with tender meat, saffron, and aromatic spices",
      image: biryaniImg,
      price: "$24",
    },
    {
      name: "Butter Chicken",
      description: "Tender chicken in a rich, creamy tomato-based curry",
      image: butterChickenImg,
      price: "$22",
    },
    {
      name: "Assorted Naan",
      description: "Freshly baked traditional Indian breads with butter and garlic",
      image: naanImg,
      price: "$8",
    },
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Our Signature Dishes
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the flavors that have made JALSA a destination for lovers of authentic Indian cuisine
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-gold text-3xl font-heading font-bold">
                    {dish.price}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-gold">{dish.price}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gold hover:bg-gold hover:text-primary"
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ⭐ View Full Menu Button → goes to /menu */}
        <div className="text-center">
          <Button
            variant="gold"
            size="lg"
            onClick={() => navigate("/menu")}
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
