import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import CurtainReveal from "@/components/CurtainReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const NewsPost = () => {
  const { slug } = useParams();
  const [showCurtain, setShowCurtain] = useState(() => {
    return !sessionStorage.getItem("jalsaIntroSeen");
  });

  const handleEnter = () => {
    sessionStorage.setItem("jalsaIntroSeen", "true");
    setShowCurtain(false);
  };

  // Mock post data - in a real app, you'd fetch this based on slug
  const post = {
    title: "Diwali Special Menu Launches This Week",
    date: "Nov 5, 2025",
    image:
      "https://images.unsplash.com/photo-1604608672516-1d01a7929863?w=1200&h=800&fit=crop",
    content: `
      <p class="text-lg mb-6">This Diwali, JALSA brings you an exclusive festive menu that celebrates the rich culinary traditions of India. Our chefs have crafted special dishes that honor the festival of lights while adding our signature royal touch.</p>

      <h2 class="text-3xl font-heading font-bold text-primary mb-4 mt-8">Featured Dishes</h2>
      <p class="mb-4">Our Diwali menu includes:</p>
      <ul class="list-disc list-inside mb-6 space-y-2 text-muted-foreground">
        <li>Royal Kaju Katli with edible gold leaf</li>
        <li>Saffron-infused Gulab Jamun</li>
        <li>Special Diwali Thali with 12 traditional dishes</li>
        <li>Hand-crafted Mithai platter</li>
      </ul>

      <p class="mb-6">Each dish has been prepared using traditional family recipes passed down through generations, using only the finest ingredients sourced from across India.</p>

      <h2 class="text-3xl font-heading font-bold text-primary mb-4 mt-8">Reservation Required</h2>
      <p class="mb-6">Due to high demand, we recommend making reservations early. The Diwali special menu will be available from November 8th through November 15th.</p>

      <p class="text-lg italic text-gold">May your Diwali be filled with light, love, and delicious celebrations!</p>
    `,
  };

  return (
    <>
      {showCurtain && <CurtainReveal onEnter={handleEnter} />}

      {!showCurtain && (
        <div className="min-h-screen bg-background flex flex-col overflow-hidden">
          <Header />

          {/* Article Section */}
          <motion.article
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="pt-24 sm:pt-32 pb-16 sm:pb-20"
          >
            <div className="container mx-auto px-4">
              {/* Back Button */}
              <motion.div variants={fadeUp}>
                <Link to="/news">
                  <Button variant="ghost" className="mb-6 sm:mb-8 flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to News
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="max-w-4xl mx-auto"
              >
                {/* Date */}
                <div className="flex items-center gap-2 text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-primary mb-6 sm:mb-8 leading-tight">
                  {post.title}
                </h1>

                {/* Image */}
                <motion.div
                  variants={fadeUp}
                  className="relative mb-8 sm:mb-12 overflow-hidden rounded-2xl shadow-elegant"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-video object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={fadeUp}
                  className="prose prose-lg max-w-none text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* CTA Buttons */}
                <motion.div
                  variants={fadeUp}
                  className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border"
                >
                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    <Button
                      variant="gold"
                      size="lg"
                      className="animate-shimmer text-sm sm:text-base"
                    >
                      Reserve Your Table
                    </Button>
                    <Link to="/menu">
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-gold hover:bg-gold hover:text-primary text-sm sm:text-base"
                      >
                        View Menu
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.article>

          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </>
  );
};

export default NewsPost;
