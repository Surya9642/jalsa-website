import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "../assets/jalsa-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Menu", to: "/menu" },
    { label: "Gallery", to: "/gallery" },
    { label: "Catering", to: "/catering" },
    { label: "News", to: "/news" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <>
      {/* FIX 1 — STATIC HEADER HEIGHT FOR PERFECT RESPONSIVENESS */}
      <header
        className="fixed top-0 left-0 right-0 z-50 shadow-md"
        style={{
          backgroundColor: "#cc932a",
          color: "#60081b",
          height: "80px",                 // ← Locked height
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" onClick={closeMobileMenu} className="flex items-center">
            <img
              src={logo}
              alt="JALSA Logo"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-all duration-300"
              style={{
                maxWidth: "260px",
              }}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-medium transition-colors"
                style={{ color: "#61041a" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f8ba27")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#61041a")}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden transition-colors"
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
              {navLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className="py-2 text-base font-medium rounded-lg px-3 transition-colors"
                  style={{ color: "#61041a" }}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                size="default"
                className="w-full mt-4 text-base font-semibold transition-all duration-200"
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

      {/* FIX 2 — PADDING BELOW HEADER SO CONTENT NEVER HIDES */}
      <div style={{ paddingTop: "80px" }}></div>
    </>
  );
};

export default Header;
