import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroBg from "@/assets/3.jpg";

const galleryImages = [
  "/resto/1.jpg",
  "/resto/2.jpg",
  "/resto/3.jpg",
  "/resto/4.jpg",
  "/resto/5.jpg",
  "/resto/6.jpg",
  "/resto/7.jpg",
  "/resto/9.jpg",
  "/resto/item1.jpeg",
  "/resto/item2.jpeg",
  "/resto/item3.jpeg",
  "/resto/item4.jpeg",
  "/resto/item5.jpeg",
  "/resto/item6.jpeg",
  "/resto/item7.jpeg",
  "/resto/item8.jpeg",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const GalleryPage = () => {
  return (
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
                  backgroundImage: `url(${heroBg})`,
                }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-4">
            Our Gallery
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-gold mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Experience the ambiance, passion, and flavor of JALSA
          </p>
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {galleryImages.map((image, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <img
                  src={image}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 sm:py-20 bg-gradient-royal relative text-center overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gold/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-4 sm:mb-6">
            Capture Your Own JALSA Moments
          </h2>
          <p className="text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Visit us today and become part of our ever-growing story of joy, food, and festivity.
          </p>
          <a
            href="/contact"
            className="inline-block border border-gold text-primary-foreground hover:bg-gold hover:text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </motion.section>

      <br />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GalleryPage;
