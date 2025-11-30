import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import ReservationModal from "./ReservationModal";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">

            {/* Brand */}
            <div>
              <h3 className="text-3xl font-heading font-bold text-gold mb-4">JALSA</h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Experience the grandeur of royal Indian cuisine in an atmosphere of elegance and celebration.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61584301221477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-gold text-gold hover:bg-gold hover:text-primary transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href="https://www.instagram.com/jalsa_cuisine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-gold text-gold hover:bg-gold hover:text-primary transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://chat.whatsapp.com/BVRtjZa86wOIJueyR6vNv7?mode=hqrt2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-gold text-gold hover:bg-gold hover:text-primary transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.86 11.86 0 0012 0a11.92 11.92 0 00-10.3 17.89L0 24l6.32-1.65A11.92 11.92 0 0012 24a11.86 11.86 0 008.52-3.48A11.89 11.89 0 0024 12a11.84 11.84 0 00-3.48-8.52zm-8.52 19a9.83 9.83 0 01-5-1.37l-.36-.21-3.75.98 1-3.66-.24-.38A9.83 9.83 0 0112 2a10 10 0 017.14 2.86A9.83 9.83 0 0122 12a9.83 9.83 0 01-2.86 7.14A9.83 9.83 0 0112 22zm5.12-7.25c-.27-.14-1.59-.79-1.84-.88s-.43-.14-.61.14-.7.88-.86 1.06-.32.2-.59.07a7.93 7.93 0 01-2.33-1.42A8.67 8.67 0 019.6 12c-.16-.27 0-.42.12-.56s.27-.32.4-.48a2 2 0 00.27-.46.5.5 0 000-.47c-.07-.14-.61-1.47-.84-2S8.91 8 8.7 7.95a1.14 1.14 0 00-.74.05 1.57 1.57 0 00-.5.37A2.14 2.14 0 007 10.13a3.75 3.75 0 00.4 1.57 9.87 9.87 0 003.69 4.17 12.52 12.52 0 004.81 1.94 3.63 3.63 0 001.77.11 2.74 2.74 0 001.79-1.27 2.28 2.28 0 00.16-1.27c-.06-.12-.22-.19-.49-.33z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-heading font-semibold text-gold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <span className="text-primary-foreground/80">
                    180 E Main St Ste 105, Hillsboro, OR 97123
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-primary-foreground/80">
                    <a href="tel:+15036736070">+1 (503) 673-6070</a>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                  <a href="mailto:jalsacuisine@gmail.com">
                  <span className="text-primary-foreground/80">jalsacuisine@gmail.com</span></a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-xl font-heading font-semibold text-gold mb-4">Hours</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                  <p className="font-semibold">
                    Mon, Wed, Thu: 11:00 AM - 10:00 PM
                  </p>
                </div>
                <p className="font-semibold ml-8">Tuesday: Closed</p>
                <p className="font-semibold ml-8">Fri-Sat: 11:00 AM - 12:00 AM</p>
                <p className="font-semibold ml-8">Sunday: 11:00 AM – 9:00 PM</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-heading font-semibold text-gold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link to="/about" className="hover:text-gold transition-colors">About Us</Link>
                </li>
                <li>
                  <Link to="/menu-dine-in" className="hover:text-gold transition-colors">
                    Dine-In Menu
                  </Link>
                </li>
                <li>
                  <Link to="/menu-takeaway" className="hover:text-gold transition-colors">
                    Takeaway Menu
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link>
                </li>
                <li>
                  <button
                    className="hover:text-gold transition-colors"
                    onClick={() => setShowModal(true)}
                  >
                    Reservations
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gold/20 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © 2025 JALSA Indian Restaurant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      <ReservationModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Footer;
