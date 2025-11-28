import { useState } from "react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const ReservationModal = ({ open, onClose }: Props) => {

  if (!open) return null; // <-- IMPORTANT

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    requests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://jalsaindianrestaurant.com/send-reservation.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Reservation submitted successfully!");
        onClose();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-xl w-full max-w-2xl p-8 relative shadow-lg">

        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-center text-3xl font-heading font-semibold mb-6">
          Reserve Your Table
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
              required
            />

            <input
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
              required
            />
          </div>

          <input
            name="guests"
            placeholder="Number of Guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <textarea
            name="requests"
            placeholder="Special Requests (optional)"
            value={formData.requests}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 h-24"
          />

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg text-lg font-semibold hover:bg-primary/80 transition"
          >
            Submit Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;
