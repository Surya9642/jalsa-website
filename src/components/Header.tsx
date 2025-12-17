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
              className="h-16 sm:h-20 md:h-20 w-auto object-contain"  // ⭐ Increased size for mobile
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 relative">
            <Link to="/" style={{ color: "#61041a" }}>Home</Link>
            <Link to="/about" style={{ color: "#61041a" }}>About</Link>

            {/* MENU DROPDOWN */}
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span className="flex items-center gap-1" style={{ color: "#61041a" }}>
                Menu <ChevronDown size={18} />
              </span>

              {showDropdown && (
                <div className="absolute top-full left-0 bg-white rounded-md border shadow-lg py-2 w-44 text-sm">
                  <Link to="/menu-dine-in" className="block px-4 py-2 hover:bg-gray-100">
                    Dine-In Menu
                  </Link>
                  <Link to="/menu-takeaway" className="block px-4 py-2 hover:bg-gray-100">
                    Takeaway Menu
                  </Link>
                </div>
              )}
            </div>

            <Link to="/gallery" style={{ color: "#61041a" }}>Gallery</Link>
            <Link to="/catering" style={{ color: "#61041a" }}>Catering</Link>
            <Link to="/contact" style={{ color: "#61041a" }}>Contact</Link>

            {/* ⭐ DESKTOP ORDER BUTTON */}
            <a
              href="https://app.upserve.com/s/jalsa-indian-cuisine-new-hillsboro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-90 font-semibold px-4 py-2"
              style={{
                backgroundColor: "#60081b",
                color: "#E7C875",
                borderRadius: "9999px",
              }}
            >
              Order Now
            </a>
          </nav>

          {/* ⭐ MOBILE HEADER: LOGO + CENTERED TOGGLE + ORDER BUTTON */}
          <div className="flex items-center gap-4 md:hidden">

            {/* Hamburger (Centered) */}
            <button
              className="flex items-center justify-center"
              style={{ color: "#60081b" }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />} {/* ⭐ Larger & centered */}
            </button>

            {/* Mobile ORDER NOW Button */}
            <button
              onClick={() =>
                window.open(
                  "https://app.upserve.com/s/jalsa-indian-cuisine-new-hillsboro",
                  "_blank"
                )
              }
              className="px-5 py-2 rounded-full font-semibold"
              style={{
                backgroundColor: "#60081b",
                color: "#E7C875",
              }}
            >
              Order Now
            </button>

          </div>
        </div>

        {/* ⭐ MOBILE DROPDOWN */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden border-t shadow-inner"
            style={{ backgroundColor: "#fee49d", borderColor: "#f8ba27" }}
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-3">

              <Link to="/" onClick={closeMobileMenu}>Home</Link>
              <Link to="/about" onClick={closeMobileMenu}>About</Link>
              <Link to="/menu-dine-in" onClick={closeMobileMenu}>Dine-In Menu</Link>
              <Link to="/menu-takeaway" onClick={closeMobileMenu}>Takeaway Menu</Link>
              <Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link>
              <Link to="/catering" onClick={closeMobileMenu}>Catering</Link>
              <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>

              {/* Mobile Reservation */}
              <Button
                onClick={() => {
                  closeMobileMenu();
                  setShowReservation(true);
                }}
                className="w-full mt-4 font-semibold"
                style={{ backgroundColor: "#f8ba27", color: "#61041a" }}
              >
                Reserve Table
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer to push content below header */}
      <div style={{ height: "80px" }} />

      {/* MODAL */}
      {showReservation && (
        <ReservationModal open={showReservation} onClose={() => setShowReservation(false)} />
      )}
    </>
  );
};

export default Header;
