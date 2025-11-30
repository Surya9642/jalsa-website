import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import ReservationModal from "./ReservationModal";
import logo from "../assets/jalsa-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showReservation, setShowReservation] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 shadow-md"
        style={{
          backgroundColor: "#cc932a",
          color: "#60081b",
          height: "80px",
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" onClick={closeMobileMenu}>
            <img
              src={logo}
              alt="JALSA Logo"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 relative">

            <Link to="/" className="hover:text-gold" style={{ color: "#61041a" }}>
              Home
            </Link>

            <Link to="/about" className="hover:text-gold" style={{ color: "#61041a" }}>
              About
            </Link>

            {/* MENU DROPDOWN */}
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span className="flex items-center gap-1 hover:text-gold" style={{ color: "#61041a" }}>
                Menu <ChevronDown size={18} />
              </span>

              {showDropdown && (
                <div className="absolute top-full left-0 bg-white rounded-md border shadow-lg py-2 w-44 text-sm">
                  <Link
                    to="/menu-dine-in"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dine-In Menu
                  </Link>

                  <Link
                    to="/menu-takeaway"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Takeaway Menu
                  </Link>
                </div>
              )}
            </div>

            <Link to="/gallery" className="hover:text-gold" style={{ color: "#61041a" }}>
              Gallery
            </Link>

            <Link to="/catering" className="hover:text-gold" style={{ color: "#61041a" }}>
              Catering
            </Link>

            <Link to="/contact" className="hover:text-gold" style={{ color: "#61041a" }}>
              Contact
            </Link>
          </nav>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden"
            style={{ color: "#61041a" }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden border-t shadow-inner"
            style={{
              backgroundColor: "#fee49d",
              borderColor: "#f8ba27",
            }}
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-3">

              <Link to="/" onClick={closeMobileMenu}>Home</Link>
              <Link to="/about" onClick={closeMobileMenu}>About</Link>

              {/* mobile menu has direct pages */}
              <Link to="/menu-dine-in" onClick={closeMobileMenu}>Dine-In Menu</Link>
              <Link to="/menu-takeaway" onClick={closeMobileMenu}>Takeaway Menu</Link>

              <Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link>
              <Link to="/catering" onClick={closeMobileMenu}>Catering</Link>
              <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>

              {/* mobile only reserve button */}
              <Button
                size="default"
                onClick={() => {
                  closeMobileMenu();
                  setShowReservation(true);
                }}
                className="w-full mt-4 font-semibold"
                style={{
                  backgroundColor: "#f8ba27",
                  color: "#61041a",
                }}
              >
                Reserve Table
              </Button>
            </nav>
          </div>
        )}
      </header>

      <div style={{ paddingTop: "80px" }}></div>

      {/* RESERVATION MODAL */}
      {showReservation && (
        <ReservationModal
          open={showReservation}
          onClose={() => setShowReservation(false)}
        />
      )}
    </>
  );
};

export default Header;
