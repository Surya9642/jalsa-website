import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/2.jpg";

const Catering = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    deliveryType: "",
    deliveryAddress: "",
    orderDetails: "",
    dietary: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    try {
      const res = await fetch("https://jalsaindianrestaurant.com/send-catering.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const text = await res.text();
      let result;

      try {
        result = JSON.parse(text);
      } catch {
        throw new Error("Server returned unexpected response");
      }

      if (!res.ok || result.status !== "success") {
        throw new Error(result.message || "Submission failed");
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        people: "",
        deliveryType: "",
        deliveryAddress: "",
        orderDetails: "",
        dietary: "",
        notes: "",
      });
    } catch (err: any) {
      alert(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      <Header />

      {/* HERO (NO MOTION USED) */}
      <section className="relative flex items-center justify-center min-h-[50vh] sm:min-h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-12 h-12 text-gold animate-pulse" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-white mb-4">
            Catering & Private Events
          </h1>

          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />

          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Make your celebration unforgettable with JALSA’s royal catering services.
          </p>
        </div>
      </section>

      {/* FORM SECTION (NO MOTION ANYWHERE) */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary text-center mb-8">
            Catering Request Form
          </h2>

          {submitted && (
            <div className="bg-green-600/20 border border-green-600 text-green-700 p-4 rounded-xl mb-6 text-center font-semibold">
              Your catering request has been submitted successfully!
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-card shadow-elegant p-8 sm:p-10 rounded-2xl space-y-6 border border-gold/20"
          >
            <div className="grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="w-full p-3 rounded-lg bg-muted text-primary"
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full p-3 rounded-lg bg-muted text-primary"
                required
              />

              <input
                type="text"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className="w-full p-3 rounded-lg bg-muted text-primary"
                required
              />

              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => updateField("date", e.target.value)}
                  className="w-full p-3 rounded-lg bg-muted text-primary"
                  required
                />

                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => updateField("time", e.target.value)}
                  className="w-full p-3 rounded-lg bg-muted text-primary"
                  required
                />
              </div>

              {/* People */}
              <div>
                <label className="font-semibold text-primary block mb-2">
                  Number of People You Are Catering For
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-primary">
                  {["1–9", "10–19", "20–29", "30–39", "40–49", "50+"].map((range) => (
                    <label key={range} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="people"
                        value={range}
                        checked={formData.people === range}
                        onChange={(e) => updateField("people", e.target.value)}
                        required
                      />
                      {range}
                    </label>
                  ))}
                </div>
              </div>

              {/* Delivery or Pickup */}
              <div>
                <label className="font-semibold text-primary block mb-2">
                  Delivery or Pickup?
                </label>

                <div className="flex gap-6 text-primary">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="deliveryType"
                      value="Delivery"
                      checked={formData.deliveryType === "Delivery"}
                      onChange={(e) => updateField("deliveryType", e.target.value)}
                      required
                    />
                    Delivery
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="deliveryType"
                      value="Pickup"
                      checked={formData.deliveryType === "Pickup"}
                      onChange={(e) => updateField("deliveryType", e.target.value)}
                      required
                    />
                    Pickup
                  </label>
                </div>
              </div>

              {/* Delivery Address */}
              <textarea
                placeholder="If delivery, enter the address"
                value={formData.deliveryAddress}
                onChange={(e) => updateField("deliveryAddress", e.target.value)}
                className={`w-full p-3 rounded-lg bg-muted text-primary h-20 ${
                  formData.deliveryType === "Pickup" ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={formData.deliveryType === "Pickup"}
                required={formData.deliveryType === "Delivery"}
              ></textarea>

              {/* Order Details */}
              <textarea
                placeholder="What would you like to order?"
                value={formData.orderDetails}
                onChange={(e) => updateField("orderDetails", e.target.value)}
                className="w-full p-3 rounded-lg bg-muted text-primary h-20"
                required
              ></textarea>

              <textarea
                placeholder="Dietary restrictions or allergies"
                value={formData.dietary}
                onChange={(e) => updateField("dietary", e.target.value)}
                className="w-full p-3 rounded-lg bg-muted text-primary h-20"
              ></textarea>

              <textarea
                placeholder="Additional details or special instructions"
                value={formData.notes}
                onChange={(e) => updateField("notes", e.target.value)}
                className="w-full p-3 rounded-lg bg-muted text-primary h-20"
              ></textarea>
            </div>

            <Button
              size="lg"
              type="submit"
              disabled={loading}
              className="w-full bg-gold text-primary font-semibold py-3 rounded-full hover:bg-[#e4b445]"
            >
              {loading ? "Sending..." : "Send Catering Request"}
            </Button>
          </form>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Catering;
