import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
            JALSA
          </h1>

          <p
            className="text-xl md:text-3xl lg:text-4xl font-heading text-gold mb-12 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Where Every Meal Is A Celebration
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {/* Reservation Popup Button */}
            <Button variant="hero" size="xl" onClick={() => setOpenModal(true)}>
              Reserve Your Table
            </Button>

            {/* Go to Menu Page */}
            <Button
              variant="hero"
              size="xl"
              onClick={() => navigate("/menu")}
            >
              View Menu
            </Button>
          </div>
        </div>

        {/* Scroll Indicator (optional) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* RESERVATION POPUP MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-[90%] max-w-lg shadow-2xl relative">

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl text-black hover:text-red-600"
              onClick={() => setOpenModal(false)}
            >
              ✕
            </button>

            <h2 className="text-3xl font-heading font-bold text-center mb-6">
              Reserve Your Table
            </h2>

            {/* FORM */}
            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-3 rounded-lg"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border p-3 rounded-lg"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-3 rounded-lg"
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <input type="date" className="w-full border p-3 rounded-lg" required />
                <input type="time" className="w-full border p-3 rounded-lg" required />
              </div>

              <input
                type="number"
                placeholder="Number of Guests"
                className="w-full border p-3 rounded-lg"
                min="1"
                required
              />

              <textarea
                placeholder="Special Requests (optional)"
                className="w-full border p-3 rounded-lg"
                rows={3}
              ></textarea>

              <Button
                type="submit"
                className="w-full bg-[#60081b] text-[#E7C875] py-3 text-lg rounded-full"
              >
                Submit Reservation
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
