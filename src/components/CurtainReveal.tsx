import { useState } from "react";
import { Button } from "@/components/ui/button";

import logoTopLeft from "@/assets/1.png";
import logoTopRight from "@/assets/3.png";
import logoBottomLeft from "@/assets/2.png";
import logoBottomRight from "@/assets/4.png";
import fullLogo from "@/assets/jalsa-logo.png";

interface CurtainRevealProps {
  onEnter: () => void;
}

const CurtainReveal = ({ onEnter }: CurtainRevealProps) => {
  const [fadeOutMainLogo, setFadeOutMainLogo] = useState(false);
  const [startPieces, setStartPieces] = useState(false);
  const [mergeLogo, setMergeLogo] = useState(false);
  const [showFullLogo, setShowFullLogo] = useState(false);
  const [openCurtain, setOpenCurtain] = useState(false);

  const handleEnter = () => {
    // fade main logo
    setFadeOutMainLogo(true);

    setTimeout(() => setStartPieces(true), 700); // show 4 parts
    setTimeout(() => setMergeLogo(true), 2000); // merge animation
    setTimeout(() => setShowFullLogo(true), 2900); // fade in final logo
    setTimeout(() => setOpenCurtain(true), 3700); // curtains open

    // exit to website
    setTimeout(() => {
      localStorage.setItem("jalsaIntroSeen", "true");
      onEnter();
    }, 4700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black flex items-center justify-center">

      {/* ⭐ Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute sparkle"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1.5 + Math.random()}s`,
            }}
          />
        ))}
      </div>

      {/* 🎆 Fireworks */}
<div className="fireworks-container pointer-events-none">
  <div className="firework"></div>
  <div className="firework"></div>
  <div className="firework"></div>
</div>

{/* ✨ Glitter trails following logo pieces */}
{startPieces && (
  <div className="glitter-trails">
    {[...Array(30)].map((_, i) => (
      <span key={i} className="glitter"></span>
    ))}
  </div>
)}


      {/* 🎉 Confetti falling layer */}
      <div className="confetti-layer pointer-events-none"></div>

      {/* 💥 Gold Burst when logo merges */}
      {mergeLogo && <div className="merge-burst"></div>}

      {/* 🟡 Left Curtain */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 ${
          openCurtain ? "animate-curtain-left" : ""
        }`}
        style={{
          background: "#cc932a",
          boxShadow: "inset -40px 0 60px -20px rgba(0,0,0,0.4)",
        }}
      />

      {/* 🟡 Right Curtain */}
      <div
        className={`absolute inset-y-0 right-0 w-1/2 ${
          openCurtain ? "animate-curtain-right" : ""
        }`}
        style={{
          background: "#cc932a",
          boxShadow: "inset 40px 0 60px -20px rgba(0,0,0,0.4)",
        }}
      />

      {/* 🔶 LOGO ANIMATIONS */}
      <div className="relative z-10 flex flex-col items-center gap-8">

        {/* 4 Piece Logo Animation */}
        {startPieces && (
          <div className="relative w-64 h-64 md:w-80 md:h-80">

            <img
              src={logoTopLeft}
              className={`absolute w-1/2 h-1/2 top-0 left-0 ${
                mergeLogo ? "animate-merge-top-left" : "animate-from-top-left"
              }`}
            />

            <img
              src={logoTopRight}
              className={`absolute w-1/2 h-1/2 top-0 right-0 ${
                mergeLogo ? "animate-merge-top-right" : "animate-from-top-right"
              }`}
            />

            <img
              src={logoBottomLeft}
              className={`absolute w-1/2 h-1/2 bottom-0 left-0 ${
                mergeLogo
                  ? "animate-merge-bottom-left"
                  : "animate-from-bottom-left"
              }`}
            />

            <img
              src={logoBottomRight}
              className={`absolute w-1/2 h-1/2 bottom-0 right-0 ${
                mergeLogo
                  ? "animate-merge-bottom-right"
                  : "animate-from-bottom-right"
              }`}
            />

            {/* Final Full Logo */}
            {/* {showFullLogo && (
              <img
                src={fullLogo}
                className="absolute inset-0 w-full h-full object-contain animate-fade-in"
              />
            )} */}
          </div>
        )}

        {/* Start Button */}
        {!fadeOutMainLogo && !startPieces && (
          <Button
            onClick={handleEnter}
            className="bg-[#60081b] text-[#E7C875] px-8 py-3 rounded-full text-lg shadow-lg hover:bg-[#7b0d25] transition-all"
          >
            Enter the Celebration
          </Button>
        )}

        {/* Loading text after curtain opens */}
        {openCurtain && (
          <div className="text-[#E7C875] text-lg font-heading animate-pulse">
            Loading JALSA...
          </div>
        )}
      </div>
    </div>
  );
};

export default CurtainReveal;
