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
  const [showGlow, setShowGlow] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const handleEnter = () => {
    // Fade out the big logo
    setFadeOutMainLogo(true);

    // start pieces fly-in after fade
    setTimeout(() => setStartPieces(true), 500);

    // merge + glow + particles
    setTimeout(() => {
      setMergeLogo(true);
      setShowGlow(true);
      setShowParticles(true);
    }, 1600);

    // show main logo asap when merged
    setTimeout(() => setShowFullLogo(true), 2000);

    // open curtains immediately after
    setTimeout(() => setOpenCurtain(true), 2200);

    // finalize and go to site
    setTimeout(() => onEnter(), 3400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black">
      {/* Left curtain */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 ${openCurtain ? "animate-curtain-left" : ""}`}
        style={{ background: "#60081b", boxShadow: "inset -40px 0 60px -20px rgba(0,0,0,0.5)" }}
      />

      {/* Right curtain */}
      <div
        className={`absolute inset-y-0 right-0 w-1/2 ${openCurtain ? "animate-curtain-right" : ""}`}
        style={{ background: "#60081b", boxShadow: "inset 40px 0 60px -20px rgba(0,0,0,0.5)" }}
      />

      {/* Center stage */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Initial full logo */}
          {!startPieces && (
            <img
              src={fullLogo}
              alt="JALSA"
              className={`w-64 h-64 md:w-80 md:h-80 object-contain transition-opacity duration-600 ${
                fadeOutMainLogo ? "opacity-0" : "opacity-100"
              }`}
            />
          )}

          {/* Pieces block */}
          {startPieces && (
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              {/* glow pulse behind */}
              {showGlow && <div className="absolute inset-0 maroon-pulse z-0" />}

              {/* sparkle particles */}
              {showParticles && <div className="absolute inset-0 pointer-events-none sparkle-burst z-30" />}

              <div className="relative z-10 w-full h-full">
                {/* Top-left piece */}
                <img
                  src={logoTopLeft}
                  alt="top-left"
                  className={
                    "absolute w-1/2 h-1/2 top-0 left-0 object-cover piece " +
                    (mergeLogo ? "animate-merge-top-left" : "pre-start animate-from-top-left")
                  }
                  style={{ animationDelay: startPieces ? "0ms" : undefined }}
                />

                {/* Top-right piece */}
                <img
                  src={logoTopRight}
                  alt="top-right"
                  className={
                    "absolute w-1/2 h-1/2 top-0 right-0 object-cover piece " +
                    (mergeLogo ? "animate-merge-top-right" : "pre-start animate-from-top-right")
                  }
                  style={{ animationDelay: startPieces ? "80ms" : undefined }}
                />

                {/* Bottom-left piece */}
                <img
                  src={logoBottomLeft}
                  alt="bottom-left"
                  className={
                    "absolute w-1/2 h-1/2 bottom-0 left-0 object-cover piece " +
                    (mergeLogo ? "animate-merge-bottom-left" : "pre-start animate-from-bottom-left")
                  }
                  style={{ animationDelay: startPieces ? "140ms" : undefined }}
                />

                {/* Bottom-right piece */}
                <img
                  src={logoBottomRight}
                  alt="bottom-right"
                  className={
                    "absolute w-1/2 h-1/2 bottom-0 right-0 object-cover piece " +
                    (mergeLogo ? "animate-merge-bottom-right" : "pre-start animate-from-bottom-right")
                  }
                  style={{ animationDelay: startPieces ? "200ms" : undefined }}
                />
              </div>

              {/* Full logo fades in when merged */}
              {showFullLogo && (
                <img
                  src={fullLogo}
                  alt="jalsa-full"
                  className="absolute inset-0 w-full h-full object-contain animate-fade-in z-40"
                />
              )}
            </div>
          )}

          {/* Enter button */}
          {!fadeOutMainLogo && !startPieces && (
            <Button
              variant="hero"
              size="xl"
              onClick={handleEnter}
              className="bg-[#60081b] text-[#E7C875] border border-[#E7C875]/30 rounded-full px-8 py-3 text-lg font-semibold hover:bg-[#7b0d25] hover:text-[#ffeb9a] transition-all duration-300 shadow-[0_0_10px_rgba(231,200,117,0.3)]"
            >
              Enter the Celebration
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurtainReveal;
