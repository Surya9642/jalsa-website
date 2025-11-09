import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CurtainReveal from "@/components/CurtainReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

// Animation presets
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const News = () => {
  const [showCurtain, setShowCurtain] = useState(() => {
    return !sessionStorage.getItem("jalsaIntroSeen");
  });

  const handleEnter = () => {
    sessionStorage.setItem("jalsaIntroSeen", "true");
    setShowCurtain(false);
  };

  const posts = [
    {
      slug: "diwali-special-menu",
      title: "Diwali Special Menu Launches This Week",
      excerpt:
        "Celebrate the festival of lights with our exclusive festive menu featuring traditional sweets and royal delicacies.",
      image:
        "https://images.unsplash.com/photo-1604608672516-1d01a7929863?w=800&h=600&fit=crop",
      category: "Events",
      date: "Nov 5, 2025",
    },
    {
      slug: "award-best-indian-restaurant",
      title: "JALSA Wins Best Indian Restaurant 2025",
      excerpt:
        "We're honored to be recognized as the city's finest Indian dining destination by the Culinary Excellence Awards.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      category: "Press",
      date: "Oct 28, 2025",
    },
    {
      slug: "live-music-nights",
      title: "Live Music Nights Every Friday",
      excerpt:
        "Join us for an evening of classical Indian music while you dine. Reservations filling fast!",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop",
      category: "Events",
      date: "Oct 20, 2025",
    },
  ];

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
                  "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-overlay" />
            </div>
            <div className="relative z-10 container mx-auto px-4 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-4">
                News & Events
              </h1>
              <div className="w-20 sm:w-24 h-1 bg-gradient-gold mx-auto mb-4 sm:mb-6" />
              <p className="text-base sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Stay updated with the latest from JALSA
              </p>
            </div>
          </motion.section>

          {/* Posts Section */}
          <section className="py-16 sm:py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
              >
                {posts.map((post, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    custom={index}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <Link
                      to={`/news/${post.slug}`}
                      className="group bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300 border border-transparent hover:border-gold/20 block"
                    >
                      <div className="relative overflow-hidden aspect-video">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gold text-gold-foreground shadow-md">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-5 sm:p-6">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-heading font-semibold text-primary mb-2 group-hover:text-gold transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </>
  );
};

export default News;
