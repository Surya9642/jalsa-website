import { useState } from "react";
import { motion } from "framer-motion";
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
  // ⭐ FORM STATE
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const updateField = (key: string, value: string) => {
    setContactData((prev) => ({ ...prev, [key]: value }));
  };

  // ⭐ SUBMIT HANDLER
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("https://jalsaindianrestaurant.com/send-contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const text = await res.text();
      let result;

      try {
        result = JSON.parse(text);
      } catch {
        throw new Error("Unexpected server response");
      }

      if (!res.ok || result.status !== "success") {
        throw new Error(result.message || "Submission failed");
      }

      setSuccess(true);

      setContactData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err: any) {
      alert(err.message || "Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex items-center justify-center min-h-[50vh] sm:min-h-[60vh]"
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
          <div className="w-20 h-1 bg-gradient-gold mx-auto mb-4" />
          <p className="text-base sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            We’d love to hear from you
          </p>
        </div>
      </motion.section>

      {/* MAIN CONTENT */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-10">

          {/* CONTACT INFO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-6">
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
                    <a href="tel:+15036736070" className="hover:text-gold transition-colors">
                      +1 (503) 673-6070
                    </a>
                  ),
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: (
                    <a href="mailto:jalsacuisine@gmail.com" className="hover:text-gold transition-colors">
                      jalsacuisine@gmail.com
                    </a>
                  ),
                },
                {
                  icon: Clock,
                  title: "Hours",
                  content: (
                    <>
                      Monday - Thursday: 11am – 10pm <br />
                      {/* Tues: Closed <br /> */}
                      Friday – Saturday: 11am – 11pm <br />
                      Sunday: 11am – 9pm
                    </>
                  ),
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex justify-center items-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary">{item.title}</h3>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* MAP */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="rounded-xl overflow-hidden border-2 border-gold/20 h-64"
            >
              <iframe
                src="https://maps.google.com/maps?q=180%20E%20Main%20St%20Hillsboro&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
              />
            </motion.div>
          </motion.div>

          {/* FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-6">
              Send Us a Message
            </h2>

            {success && (
              <div className="p-3 bg-green-100 text-green-700 font-semibold rounded-lg mb-4">
                Message sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                type="text"
                placeholder="Your Name"
                value={contactData.name}
                onChange={(e) => updateField("name", e.target.value)}
                required
              />

              <Input
                type="email"
                placeholder="Your Email"
                value={contactData.email}
                onChange={(e) => updateField("email", e.target.value)}
                required
              />

              <Input
                type="tel"
                placeholder="Phone Number"
                value={contactData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
              />

              <Textarea
                placeholder="Your Message"
                rows={6}
                value={contactData.message}
                onChange={(e) => updateField("message", e.target.value)}
                required
              />

              <Button type="submit" variant="gold" size="lg" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
