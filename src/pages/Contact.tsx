import { useState } from "react";
import { motion } from "framer-motion";
import CurtainReveal from "@/components/CurtainReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Contact = () => {
  const [showCurtain, setShowCurtain] = useState(() => {
    return !sessionStorage.getItem("jalsaIntroSeen");
  });

  const handleEnter = () => {
    sessionStorage.setItem("jalsaIntroSeen", "true");
    setShowCurtain(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form handling logic
  };

  return (
    <>
      {showCurtain && <CurtainReveal onEnter={handleEnter} />}

      {!showCurtain && (
        <div className="min-h-screen bg-background flex flex-col overflow-hidden">
          <Header />

          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center min-h-[50vh] sm:min-h-[60vh] overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-overlay" />
            </div>
            <div className="relative z-10 container mx-auto px-4 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-4">
                Contact Us
              </h1>
              <div className="w-20 sm:w-24 h-1 bg-gradient-gold mx-auto mb-4 sm:mb-6" />
              <p className="text-base sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                We’d love to hear from you
              </p>
            </div>
          </motion.section>

          {/* Contact Info & Form */}
          <section className="py-16 sm:py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 max-w-6xl mx-auto">

                {/* Contact Info */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-6 sm:mb-8">
                    Get In Touch
                  </h2>

                  <div className="space-y-6 mb-10">
                    {[
                      {
                        icon: MapPin,
                        title: "Address",
                        content: (
                          <>
                            180 E Main St Ste 105, <br />
                            Hillsboro, OR 97123
                          </>
                        ),
                      },
                      {
                        icon: Phone,
                        title: "Phone",
                        content: (
                          <a
                            href="tel:+1234567890"
                            className="text-muted-foreground hover:text-gold transition-colors"
                          >
                            +1 (234) 567-890
                          </a>
                        ),
                      },
                      {
                        icon: Mail,
                        title: "Email",
                        content: (
                          <a
                            href="mailto:info@jalsa.com"
                            className="text-muted-foreground hover:text-gold transition-colors"
                          >
                            info@jalsa.com
                          </a>
                        ),
                      },
                      {
                        icon: Clock,
                        title: "Hours",
                        content: (
                          <>
                            Mon-Thu: 11:00 AM - 10:00 PM
                            <br />
                            Fri-Sat: 11:00 AM - 12:00 AM
                            <br />
                            Sunday: 11:00 PM - 10:00 PM
                          </>
                        ),
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        variants={fadeUp}
                        custom={i}
                        className="flex gap-4 items-start"
                      >
                        <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-1 text-sm sm:text-base">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm sm:text-base">
                            {item.content}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Map */}
                  <motion.div
                    variants={fadeUp}
                    custom={4}
                    className="rounded-xl overflow-hidden border-2 border-gold/20 h-60 sm:h-72"
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-6 sm:mb-8">
                    Send Us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="border-gold/30 focus:border-gold transition-all"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="border-gold/30 focus:border-gold transition-all"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        className="border-gold/30 focus:border-gold transition-all"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        required
                        rows={6}
                        className="border-gold/30 focus:border-gold resize-none transition-all"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      className="w-full animate-shimmer text-sm sm:text-base"
                    >
                      Send Message
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </section>

          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </>
  );
};

export default Contact;
