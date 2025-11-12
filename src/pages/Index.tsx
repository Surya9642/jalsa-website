import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CurtainReveal from "@/components/CurtainReveal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Animation presets
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Index = () => {
  const [showCurtain, setShowCurtain] = useState(false);

  useEffect(() => {
    // Check sessionStorage to see if curtain was already shown
    const hasSeenCurtain = sessionStorage.getItem("jalsaIntroSeen");

    if (!hasSeenCurtain) {
      // Show the curtain only once per session
      setShowCurtain(true);
    }
  }, []);

  const handleEnter = () => {
    // Mark curtain as seen so it won’t replay this session
    sessionStorage.setItem("jalsaIntroSeen", "true");
    setShowCurtain(false);
  };

  return (
    <>
      {showCurtain && <CurtainReveal onEnter={handleEnter} />}

      {!showCurtain && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen bg-background overflow-hidden"
        >
          <Header />

          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Hero />
          </motion.section>

          {/* About Section */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <About />
          </motion.section>

          {/* Menu Section */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            <Menu />
          </motion.section>

          {/* Gallery Section */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
          >
            <Gallery />
          </motion.section>

          <br />
          <Footer />
          <WhatsAppButton />
        </motion.div>
      )}
    </>
  );
};

export default Index;
