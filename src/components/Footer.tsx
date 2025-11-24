import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
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
                <span className="text-primary-foreground/80">+1 (503) 673-6070</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/80">Pradikshajalsa@gmail.com</span>
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
                <Link to="/menu" className="hover:text-gold transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link>
              </li>
              <li>
                <button
                  className="hover:text-gold transition-colors"
                  onClick={() => console.log("Open reservation popup")}
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
  );
};

export default Footer;
