import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LaunchPopup from "@/components/LaunchPopup";

// Animation presets
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Index: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Show popup on page load (after small delay)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-background"
    >
      <Header />

      {/* ✅ Launch Popup */}
      <LaunchPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.section>

      {/* About */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <About />
      </motion.section>

      {/* Menu */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={1}
      >
        <Menu />
      </motion.section>

      {/* Gallery */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={2}
      >
        <Gallery />
      </motion.section>

      <Footer />
      <WhatsAppButton />
    </motion.div>
  );
};

export default Index;
