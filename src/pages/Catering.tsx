import { useState } from "react";
import { motion } from "framer-motion";
import CurtainReveal from "@/components/CurtainReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

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

  return (
    <>
      {showCurtain && <CurtainReveal onEnter={handleEnter} />}

      {!showCurtain && (
        <div className="min-h-screen bg-background flex flex-col overflow-hidden">
          <Header />

          {/* HERO */}
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
                <Sparkles className="w-12 h-12 text-gold animate-pulse" />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-4">
                Catering & Private Events
              </h1>

              <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />

              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Make your celebration truly unforgettable with JALSA’s royal
                catering services.
              </p>
            </motion.div>
          </section>

          {/* FORM SECTION */}
          <section className="py-16 sm:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-heading font-bold text-primary text-center mb-8"
              >
                Catering Request Form
              </motion.h2>

              <motion.form
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card shadow-elegant p-8 sm:p-10 rounded-2xl space-y-6 border border-gold/20"
              >
                {/* INPUTS */}
                <div className="grid grid-cols-1 gap-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 rounded-lg bg-muted text-primary focus:ring-2 focus:ring-gold outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-lg bg-muted text-primary focus:ring-2 focus:ring-gold outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-3 rounded-lg bg-muted text-primary focus:ring-2 focus:ring-gold outline-none"
                  />

                  {/* Date + Time */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <input
                      type="date"
                      className="w-full p-3 rounded-lg bg-muted text-primary focus:ring-2 focus:ring-gold outline-none"
                    />
                    <input
                      type="time"
                      className="w-full p-3 rounded-lg bg-muted text-primary focus:ring-2 focus:ring-gold outline-none"
                    />
                  </div>

                  {/* Radio Buttons: Number of People */}
                  <div>
                    <label className="font-semibold text-primary block mb-2">
                      Number of People You Are Catering For
                    </label>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-primary">
                      {["1–9","10–19","20–29","30–39","40–49","50+"].map((range) => (
                        <label key={range} className="flex items-center gap-2">
                          <input type="radio" name="people" />
                          {range}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Delivery / Pickup */}
                  <div>
                    <label className="font-semibold text-primary block mb-2">
                      Delivery or Pickup?
                    </label>
                    <div className="flex gap-6 text-primary">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="delivery" /> Delivery
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="delivery" /> Pickup
                      </label>
                    </div>
                  </div>

                  <textarea
                    placeholder="If delivery, enter the address it's being delivered to"
                    className="w-full p-3 rounded-lg bg-muted text-primary focus:ring-2 focus:ring-gold outline-none h-20"
                  ></textarea>

                  <textarea
                    placeholder="What would you like to order?"
                    className="w-full p-3 rounded-lg bg-muted text-primary focus:ring-2 focus:ring-gold outline-none h-20"
                  ></textarea>

                  <textarea
                    placeholder="Dietary restrictions or allergies"
                    className="w-full p-3 rounded-lg bg-muted text-primary focus:ring-2 focus:ring-gold outline-none h-20"
                  ></textarea>

                  <textarea
                    placeholder="Additional details or special instructions"
                    className="w-full p-3 rounded-lg bg-muted text-primary focus:ring-2 focus:ring-gold outline-none h-20"
                  ></textarea>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gold text-primary font-semibold py-3 rounded-full hover:bg-[#e4b445] transition-all"
                >
                  Send Catering Request
                </Button>
              </motion.form>
            </div>
          </section>

          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </>
  );
};

export default Catering;
