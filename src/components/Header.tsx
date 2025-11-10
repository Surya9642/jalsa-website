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
    <header
      className="fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-300"
      style={{ backgroundColor: "#cc932a ", color: "#60081b" }}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        {/* ✅ Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={logo}
            alt="JALSA Logo"
            className="h-10 sm:h-12 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
            style={{ maxWidth: "200px" }}
          />
        </Link>

        {/* 🖥️ Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-medium transition-colors duration-200"
              style={{
                color: "#61041a",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f8ba27")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#61041a")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 📱 Mobile Menu Button */}
        <button
          className="md:hidden transition-colors"
          style={{ color: "#61041a" }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#f8ba27")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#61041a")}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden border-t shadow-inner"
          style={{
            backgroundColor: "#fee49d",
            borderColor: "#f8ba27",
            color: "#61041a",
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
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f8ba27")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#61041a")}
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e4a516")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#f8ba27")
              }
            >
              Reserve Table
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
