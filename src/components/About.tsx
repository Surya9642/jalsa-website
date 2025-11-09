import { Sparkles, Award, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Authentic Flavors",
      description: "Traditional recipes passed down through generations, prepared with the finest ingredients.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award Winning",
      description: "Recognized for excellence in authentic Indian cuisine and exceptional dining experience.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Made with Love",
      description: "Every dish is crafted with passion, bringing you the taste of royal Indian heritage.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Experience Royal Indian Dining
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At JALSA, we bring the opulence of royal Indian palaces to your plate. 
            Every meal is a journey through the rich culinary heritage of India, 
            served in an atmosphere of elegance and grandeur.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-gold/20"
            >
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mb-6 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
