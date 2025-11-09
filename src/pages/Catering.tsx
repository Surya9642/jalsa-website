import { useState } from "react";
import { motion } from "framer-motion";
import CurtainReveal from "@/components/CurtainReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Catering = () => {
  const [showCurtain, setShowCurtain] = useState(() => {
    return !sessionStorage.getItem("jalsaIntroSeen");
  });

  const handleEnter = () => {
    sessionStorage.setItem("jalsaIntroSeen", "true");
    setShowCurtain(false);
  };

  const packages = [
    {
      name: "Silver",
      price: "$25/person",
      features: [
        "Up to 50 guests",
        "3 Starter options",
        "4 Main course dishes",
        "2 Dessert selections",
        "Beverages included",
        "Basic décor",
      ],
    },
    {
      name: "Gold",
      price: "$35/person",
      features: [
        "Up to 100 guests",
        "5 Starter options",
        "6 Main course dishes",
        "3 Dessert selections",
        "Premium beverages",
        "Live counters",
        "Enhanced décor",
        "Dedicated service staff",
      ],
      featured: true,
    },
    {
      name: "Royal",
      price: "Custom",
      features: [
        "Unlimited guests",
        "Fully customized menu",
        "Live cooking stations",
        "Premium bar service",
        "Royal décor & lighting",
        "Live entertainment",
        "Personal event coordinator",
        "Valet parking",
      ],
    },
  ];

  return (
    <>
      {showCurtain && <CurtainReveal onEnter={handleEnter} />}

      {!showCurtain && (
        <div className="min-h-screen bg-background flex flex-col overflow-hidden">
          <Header />

          {/* Hero */}
          <section className="relative flex items-center justify-center min-h-[50vh] sm:min-h-[60vh] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1519167758481-83f29da8c2b0?w=1920&h=1080&fit=crop)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-overlay" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 container mx-auto px-4 text-center"
            >
              <div className="flex justify-center mb-4">
                <Sparkles className="w-10 sm:w-12 h-10 sm:h-12 text-gold animate-pulse" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-4">
                Catering & Private Events
              </h1>
              <div className="w-20 sm:w-24 h-1 bg-gradient-gold mx-auto mb-4 sm:mb-6" />
              <p className="text-base sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Make your celebration truly unforgettable with JALSA’s royal
                catering services.
              </p>
            </motion.div>
          </section>

          {/* Packages */}
          <section className="py-16 sm:py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center mb-12 sm:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                  Our Packages
                </h2>
                <div className="w-20 sm:w-24 h-1 bg-gradient-gold mx-auto mb-4 sm:mb-6" />
                <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose the perfect package for your celebration
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {packages.map((pkg, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                    className={`relative bg-card rounded-2xl p-6 sm:p-8 shadow-elegant hover:shadow-gold transition-all duration-300 border-2 ${
                      pkg.featured
                        ? "border-gold scale-[1.02] sm:scale-105"
                        : "border-transparent"
                    }`}
                  >
                    {pkg.featured && (
                      <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-2 text-center">
                      {pkg.name}
                    </h3>
                    <p className="text-3xl sm:text-4xl font-bold text-gold mb-6 text-center">
                      {pkg.price}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm sm:text-base"
                        >
                          <Check className="w-4 sm:w-5 h-4 sm:h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={pkg.featured ? "gold" : "outline"}
                      className={`w-full text-sm sm:text-base ${
                        !pkg.featured
                          ? "border-gold hover:bg-gold hover:text-primary"
                          : ""
                      }`}
                    >
                      Request a Quote
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-16 sm:py-20 bg-gradient-to-b from-muted/30 to-background">
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center mb-12 sm:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                  Our Process
                </h2>
                <div className="w-20 sm:w-24 h-1 bg-gradient-gold mx-auto" />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {[
                  { step: "1", title: "Discover", desc: "Share your vision with us" },
                  { step: "2", title: "Curate Menu", desc: "We craft the perfect menu" },
                  { step: "3", title: "Tasting", desc: "Sample and refine selections" },
                  { step: "4", title: "Celebrate", desc: "Enjoy your perfect event" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    className="text-center"
                  >
                    <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 text-xl sm:text-2xl font-bold text-primary">
                      {item.step}
                    </div>
                    <h3 className="text-lg sm:text-xl font-heading font-semibold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 sm:py-20 bg-gradient-royal relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gold/10 rounded-full blur-3xl" />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="container mx-auto px-4 text-center relative z-10"
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-4 sm:mb-6">
                Ready to Plan Your Event?
              </h2>
              <p className="text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                Let us help you create an unforgettable celebration.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                <Button
                  variant="gold"
                  size="lg"
                  className="animate-shimmer text-sm sm:text-base"
                >
                  Request a Quote
                </Button>
                <Button
                  variant="gold"
                  size="lg"
                  className="animate-shimmer text-sm sm:text-base"
                >
                  Download Brochure
                </Button>
              </div>
            </motion.div>
          </section>
                <br />
          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </>
  );
};

export default Catering;
