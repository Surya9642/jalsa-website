import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  // ⭐ Reservation Form State
  const [reservationData, setReservationData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    requests: "",
  });

  const [resLoading, setResLoading] = useState(false);
  const [resSuccess, setResSuccess] = useState(false);

  const updateReservation = (key: string, value: string) => {
    setReservationData((prev) => ({ ...prev, [key]: value }));
  };

  // ⭐ Submit Reservation
  const handleReservationSubmit = async (e: any) => {
    e.preventDefault();
    setResLoading(true);
    setResSuccess(false);

    try {
      const res = await fetch(
        "https://jalsaindianrestaurant.com/send-reservation.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(reservationData),
        }
      );

      const text = await res.text();
      let result;

      try {
        result = JSON.parse(text);
      } catch {
        throw new Error("Server returned unexpected response");
      }

      if (!res.ok || result.status !== "success") {
        throw new Error(result.message || "Reservation failed");
      }

      setResSuccess(true);

      // Reset Form
      setReservationData({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        guests: "",
        requests: "",
      });

      // Optional: close popup after success
      setTimeout(() => setOpenModal(false), 2000);
    } catch (err: any) {
      alert(err.message || "Something went wrong. Please try again.");
    }

    setResLoading(false);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground mb-6">
            JALSA
          </h1>

          <p className="text-xl md:text-3xl lg:text-4xl font-heading text-gold mb-12">
            Where Every Meal Is A Celebration
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Reservation Popup */}
            <Button variant="hero" size="xl" onClick={() => setOpenModal(true)}>
              Reserve Your Table
            </Button>

            {/* Go to Menu */}
            <Button variant="hero" size="xl" onClick={() => navigate("/menu-dine-in")}>
              View Menu
            </Button>
          </div>
        </div>

        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
          </div>
        </div> */}
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
            <form className="space-y-4" onSubmit={handleReservationSubmit}>
              {resSuccess && (
                <div className="p-3 bg-green-100 text-green-700 rounded-lg text-center font-semibold">
                  Reservation submitted successfully!
                </div>
              )}

              <input
                type="text"
                placeholder="Full Name"
                value={reservationData.name}
                onChange={(e) => updateReservation("name", e.target.value)}
                className="w-full border p-3 rounded-lg"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={reservationData.phone}
                onChange={(e) => updateReservation("phone", e.target.value)}
                className="w-full border p-3 rounded-lg"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={reservationData.email}
                onChange={(e) => updateReservation("email", e.target.value)}
                className="w-full border p-3 rounded-lg"
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  value={reservationData.date}
                  onChange={(e) => updateReservation("date", e.target.value)}
                  className="w-full border p-3 rounded-lg"
                  required
                />

                <input
                  type="time"
                  value={reservationData.time}
                  onChange={(e) => updateReservation("time", e.target.value)}
                  className="w-full border p-3 rounded-lg"
                  required
                />
              </div>

              <input
                type="number"
                placeholder="Number of Guests"
                value={reservationData.guests}
                onChange={(e) => updateReservation("guests", e.target.value)}
                className="w-full border p-3 rounded-lg"
                min="1"
                required
              />

              <textarea
                placeholder="Special Requests (optional)"
                value={reservationData.requests}
                onChange={(e) => updateReservation("requests", e.target.value)}
                className="w-full border p-3 rounded-lg"
                rows={3}
              ></textarea>

              <Button
                type="submit"
                className="w-full bg-[#60081b] text-[#E7C875] py-3 text-lg rounded-full"
                disabled={resLoading}
              >
                {resLoading ? "Submitting..." : "Submit Reservation"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
