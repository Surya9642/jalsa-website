import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Award, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const AboutPage = () => {
  const [openReservation, setOpenReservation] = useState(false);

  const team = [
    {
      name: "Chef Vikram Singh",
      role: "Executive Chef",
      image:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop",
    },
    {
      name: "Priya Sharma",
      role: "Head of Service",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
    {
      name: "Raj Patel",
      role: "Pastry Chef",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      <Header />

      {/* ⭐ POPUP RESERVATION FORM */}
      {openReservation && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-card p-6 sm:p-8 rounded-2xl shadow-elegant max-w-lg w-full border border-gold/30"
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-4 text-center">
              Reserve Your Table
            </h2>

            <div className="w-20 h-1 bg-gradient-gold mx-auto mb-6" />

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-3 rounded-lg bg-muted/30 border border-gold/20 focus:border-gold outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="p-3 rounded-lg bg-muted/30 border border-gold/20 focus:border-gold outline-none"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="p-3 w-full rounded-lg bg-muted/30 border border-gold/20 focus:border-gold outline-none"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  className="p-3 rounded-lg bg-muted/30 border border-gold/20 focus:border-gold outline-none"
                />
                <input
                  type="time"
                  className="p-3 rounded-lg bg-muted/30 border border-gold/20 focus:border-gold outline-none"
                />
              </div>

              <input
                type="number"
                placeholder="Number of Guests"
                className="p-3 w-full rounded-lg bg-muted/30 border border-gold/20 focus:border-gold outline-none"
              />

              <textarea
                placeholder="Special Requests (optional)"
                rows={3}
                className="p-3 w-full rounded-lg bg-muted/30 border border-gold/20 focus:border-gold outline-none"
              ></textarea>

              <Button
                variant="gold"
                className="w-full py-3 text-lg font-semibold"
              >
                Submit Reservation
              </Button>
            </form>

            <button
              className="mt-4 w-full text-center text-gold hover:text-primary font-semibold"
              onClick={() => setOpenReservation(false)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[50vh] sm:min-h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-4">
            Our Story
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-gold mx-auto" />
        </motion.div>
      </section>

      {/* Origins */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-12 items-center mb-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-6">
                Where Every Meal Is A Celebration
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                JALSA was born from a simple belief: that dining should be an
                experience of joy, connection, and celebration.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Every dish tells a story of tradition passed down through
                generations, prepared with authentic spices and the finest
                ingredients.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=800&fit=crop"
                alt="Restaurant interior"
                className="rounded-xl shadow-elegant w-full object-cover max-h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-gold rounded-full opacity-20 blur-2xl" />
            </motion.div>
          </div>

          {/* Philosophy */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Sparkles,
                title: "Authentic Flavors",
                desc: "Regional recipes crafted with traditional techniques",
              },
              {
                icon: Heart,
                title: "Made with Love",
                desc: "Every dish prepared with passion and care",
              },
              {
                icon: Award,
                title: "Award Winning",
                desc: "Recognized excellence in Indian cuisine",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base px-2">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Meet Our Team
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-gold mx-auto mb-6" />
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              The passionate artisans behind every celebration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="group text-center"
              >
                <div className="relative mb-6 overflow-hidden rounded-lg border-4 border-gold/20 group-hover:border-gold/40 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-gold text-sm sm:text-base">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-royal relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-gold/10 rounded-full blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-4 sm:mb-6">
            Join Us for a Celebration
          </h2>
          <p className="text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Experience the magic of JALSA and create unforgettable memories
          </p>

          <Button
            variant="gold"
            size="lg"
            className="animate-shimmer text-sm sm:text-base"
            onClick={() => setOpenReservation(true)}
          >
            Reserve Your Table
          </Button>
        </motion.div>
      </section>

      <br />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
