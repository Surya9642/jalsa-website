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

  // ⭐ Reservation form state
  const [reservationData, setReservationData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    requests: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const updateReservation = (key: string, value: string) => {
    setReservationData((prev) => ({ ...prev, [key]: value }));
  };

  // ⭐ Reservation Submit Handler
  const handleReservationSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch(
        "https://jalsaindianrestaurant.com/send-reservation.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(reservationData),
        }
      );

      const text = await res.text();
      const result = JSON.parse(text);

      if (!res.ok || result.status !== "success") {
        throw new Error(result.message || "Reservation failed");
      }

      setSuccess(true);

      setReservationData({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        guests: "",
        requests: "",
      });

      setTimeout(() => setOpenReservation(false), 2000);
    } catch (error: any) {
      alert(error.message);
    }

    setLoading(false);
  };

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
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* ⭐ Reservation Modal */}
      {openReservation && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-card p-6 sm:p-8 rounded-2xl shadow-elegant max-w-lg w-full border border-gold/30"
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center text-primary mb-3">
              Reserve Your Table
            </h2>

            <div className="w-20 h-1 bg-gradient-gold mx-auto mb-6" />

            {success && (
              <div className="p-3 bg-green-100 text-green-700 font-semibold text-center rounded-lg mb-3">
                Reservation submitted successfully!
              </div>
            )}

            <form className="space-y-4" onSubmit={handleReservationSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={reservationData.name}
                  onChange={(e) => updateReservation("name", e.target.value)}
                  className="p-3 rounded-lg bg-muted/30 border border-gold/20 focus:border-gold outline-none"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={reservationData.phone}
                  onChange={(e) => updateReservation("phone", e.target.value)}
                  className="p-3 rounded-lg bg-muted/30 border border-gold/20 focus:border-gold outline-none"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                value={reservationData.email}
                onChange={(e) => updateReservation("email", e.target.value)}
                className="p-3 w-full rounded-lg bg-muted/30 border border-gold/20 focus:border-gold outline-none"
                required
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  value={reservationData.date}
                  onChange={(e) => updateReservation("date", e.target.value)}
                  className="p-3 rounded-lg bg-muted/30 border border-gold/20 focus:border-gold outline-none"
                  required
                />
                <input
                  type="time"
                  value={reservationData.time}
                  onChange={(e) => updateReservation("time", e.target.value)}
                  className="p-3 rounded-lg bg-muted/30 border border-gold/20 focus:border-gold outline-none"
                  required
                />
              </div>

              <input
                type="number"
                placeholder="Number of Guests"
                min="1"
                value={reservationData.guests}
                onChange={(e) => updateReservation("guests", e.target.value)}
                className="p-3 w-full rounded-lg bg-muted/30 border border-gold/20 focus:border-gold outline-none"
                required
              />

              <textarea
                placeholder="Special Requests (optional)"
                value={reservationData.requests}
                onChange={(e) => updateReservation("requests", e.target.value)}
                className="p-3 w-full rounded-lg bg-muted/30 border border-gold/20 focus:border-gold outline-none"
                rows={3}
              ></textarea>

              <Button
                type="submit"
                variant="gold"
                disabled={loading}
                className="w-full py-3 text-lg font-semibold"
              >
                {loading ? "Submitting..." : "Submit Reservation"}
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

      {/* ⭐ All Sections Below */}
      <section className="relative flex items-center justify-center min-h-[40vh] sm:min-h-[55vh] overflow-hidden">
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
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl sm:text-6xl font-heading font-bold text-primary-foreground mb-3">
            Our Story
          </h1>
          <div className="w-20 h-1 bg-gradient-gold mx-auto" />
        </motion.div>
      </section>

      <section className="py-16 sm:py-20 container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-6">
              Where Every Meal Is A Celebration
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              JALSA was born from a simple belief: that dining should be an
              experience of joy and connection.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every dish tells a story of tradition passed through generations.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=800&fit=crop"
              alt="Restaurant interior"
              className="rounded-xl shadow-elegant w-full object-cover max-h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-gradient-gold rounded-full opacity-20 blur-2xl" />
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Sparkles,
              title: "Authentic Flavors",
              desc: "Traditional recipes from regional India.",
            },
            {
              icon: Heart,
              title: "Made with Love",
              desc: "Prepared with passion and care.",
            },
            {
              icon: Award,
              title: "Award Winning",
              desc: "Recognized excellence in Indian cuisine.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="text-center"
            >
              <div className="w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary">
                {item.title}
              </h3>
              <p className="text-muted-foreground mt-2 px-3">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 sm:py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-5" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Passionate artisans behind every celebration.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                className="text-center"
              >
                <div className="rounded-xl overflow-hidden border-4 border-gold/30 shadow-md mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full object-cover aspect-square"
                  />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary">
                  {member.name}
                </h3>
                <p className="text-gold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-royal relative text-center text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10"
        >
          <h2 className="text-4xl font-heading font-bold mb-4">
            Join Us for a Celebration
          </h2>
          <p className="max-w-xl mx-auto mb-8">
            Experience the magic of JALSA and create unforgettable memories.
          </p>

          <Button
            variant="gold"
            size="lg"
            onClick={() => setOpenReservation(true)}
          >
            Reserve Your Table
          </Button>
        </motion.div>
      </section>
        <br />
      {/* Footer */}
      <Footer />

      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
