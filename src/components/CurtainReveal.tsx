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
    // 1️⃣ Fade out the main logo
    setFadeOutMainLogo(true);

    // 2️⃣ Start 4 parts flying in
    setTimeout(() => setStartPieces(true), 700);

    // 3️⃣ Merge parts together
    setTimeout(() => setMergeLogo(true), 2000);

    // 4️⃣ Show full logo at perfect merge moment
    setTimeout(() => setShowFullLogo(true), 2900);

    // 5️⃣ Open curtain
    setTimeout(() => setOpenCurtain(true), 3700);

    // 6️⃣ Load website
    setTimeout(() => onEnter(), 4800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black">
      {/* Left Curtain */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 ${
          openCurtain ? "animate-curtain-left" : ""
        }`}
        style={{
          background: "#cc932a",
          boxShadow: "inset -40px 0 60px -20px rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Right Curtain */}
      <div
        className={`absolute inset-y-0 right-0 w-1/2 ${
          openCurtain ? "animate-curtain-right" : ""
        }`}
        style={{
          background: "#cc932a",
          boxShadow: "inset 40px 0 60px -20px rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="flex flex-col items-center gap-8">
          {/* 🔶 Step 1: Full logo before click */}
          {!startPieces && (
            <img
              src={fullLogo}
              alt="JALSA"
              className={`w-64 h-64 md:w-80 md:h-80 object-contain transition-opacity duration-700 ${
                fadeOutMainLogo ? "opacity-0" : "opacity-100"
              }`}
            />
          )}

          {/* 🔷 Step 2: Four logo parts (fly in + merge) */}
          {startPieces && (
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src={logoTopLeft}
                alt="Top Left"
                className={`absolute w-1/2 h-1/2 top-0 left-0 object-cover ${
                  mergeLogo ? "animate-merge-top-left" : "animate-from-top-left"
                }`}
              />
              <img
                src={logoTopRight}
                alt="Top Right"
                className={`absolute w-1/2 h-1/2 top-0 right-0 object-cover ${
                  mergeLogo ? "animate-merge-top-right" : "animate-from-top-right"
                }`}
              />
              <img
                src={logoBottomLeft}
                alt="Bottom Left"
                className={`absolute w-1/2 h-1/2 bottom-0 left-0 object-cover ${
                  mergeLogo
                    ? "animate-merge-bottom-left"
                    : "animate-from-bottom-left"
                }`}
              />
              <img
                src={logoBottomRight}
                alt="Bottom Right"
                className={`absolute w-1/2 h-1/2 bottom-0 right-0 object-cover ${
                  mergeLogo
                    ? "animate-merge-bottom-right"
                    : "animate-from-bottom-right"
                }`}
              />
              {/* Step 3: Full logo fade-in at merge point */}
              {showFullLogo && (
                <img
                  src={fullLogo}
                  alt="JALSA"
                  className="absolute inset-0 w-full h-full object-contain animate-fade-in"
                />
              )}
            </div>
          )}

          {/* Enter Button */}
          {!fadeOutMainLogo && !startPieces && (
            <Button
  variant="hero"
  size="xl"
  onClick={handleEnter}
  className="animate-shimmer bg-[#60081b] text-[#E7C875] border border-[#E7C875]/30 rounded-full px-8 py-3 text-lg font-semibold hover:bg-[#7b0d25] hover:text-[#ffeb9a] transition-all duration-300 shadow-[0_0_10px_rgba(231,200,117,0.3)]"
>
  Enter the Celebration
</Button>
          )}

          {openCurtain && (
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
