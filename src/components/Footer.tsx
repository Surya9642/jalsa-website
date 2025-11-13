import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-heading font-bold text-gold mb-4">JALSA</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Experience the grandeur of royal Indian cuisine in an atmosphere of elegance and celebration.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-heading font-semibold text-gold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">180 E Main St Ste 105, Hillsboro, OR 97123</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/80">hello@jalsa.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xl font-heading font-semibold text-gold mb-4">Hours</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <p className="font-semibold">Monday - Thursday</p>
                  <p className="text-sm">11.00 am to 11.00 pm</p>
                </div>
              </div>
              <div className="ml-8">
                <p className="font-semibold">Friday - Saturday</p>
                <p className="text-sm">11.00 am to 12.00 am</p>
              </div>
              <div className="ml-8">
                <p className="font-semibold">Sunday</p>
                <p className="text-sm">11.00 am to 10.00 pm</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-heading font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-gold transition-colors">Menu</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">Reservations</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 JALSA Indian Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
