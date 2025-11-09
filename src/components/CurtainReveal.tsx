import { useState } from "react";
import { Button } from "@/components/ui/button";
import jalsaLogo from "@/assets/jalsa-logo.png";

interface CurtainRevealProps {
  onEnter: () => void;
}

const CurtainReveal = ({ onEnter }: CurtainRevealProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleEnter = () => {
    setIsOpening(true);
    setTimeout(() => {
      onEnter();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Left Curtain */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 curtain-gradient ${
          isOpening ? "animate-curtain-left" : ""
        }`}
        style={{
          boxShadow: "inset -40px 0 60px -20px rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Right Curtain */}
      <div
        className={`absolute inset-y-0 right-0 w-1/2 curtain-gradient ${
          isOpening ? "animate-curtain-right" : ""
        }`}
        style={{
          boxShadow: "inset 40px 0 60px -20px rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div
          className={`flex flex-col items-center gap-8 ${
            isOpening ? "animate-fade-out" : "animate-fade-in"
          }`}
        >
          {/* Logo */}
          <div className="relative">
            <img
              src={jalsaLogo}
              alt="JALSA"
              className="w-64 h-64 md:w-80 md:h-80 object-contain animate-float"
            />
            <div className="absolute inset-0 animate-glow rounded-full" />
          </div>

          {/* Enter Button */}
          {!isOpening && (
            <Button
              variant="hero"
              size="xl"
              onClick={handleEnter}
              className="animate-shimmer"
            >
              Enter the Celebration
            </Button>
          )}

          {isOpening && (
            <div className="text-gold text-lg font-heading animate-pulse">
              Loading JALSA...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurtainReveal;
