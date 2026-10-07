import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LaunchPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LaunchPopup: React.FC<LaunchPopupProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={onClose}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Main Wrapper: side-by-side on desktop (md+), stacked on mobile */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="
              relative
              w-full
              max-w-4xl
              flex
              flex-col
              md:flex-row
              items-center
              justify-center
              gap-4 md:gap-6
              my-auto
            "
          >
            {/* Popup Card 1 */}
            <div
              className="
                w-full
                max-w-sm
                rounded-3xl
                border-[3px]
                border-yellow-400
                bg-[#8b0000]
                shadow-[0_0_40px_rgba(255,215,0,0.25)]
                overflow-hidden
              "
            >
              <img
                src="/resto/sep23.jpeg"
                alt="Opening Announcement 1"
                className="w-full h-auto object-cover block"
              />
            </div>

            {/* Popup Card 2 */}
            <div
              className="
                w-full
                max-w-sm
                rounded-3xl
                border-[3px]
                border-yellow-400
                bg-[#8b0000]
                shadow-[0_0_40px_rgba(255,215,0,0.25)]
                overflow-hidden
              "
            >
              <img
                src="/resto/oct2.jpeg"
                alt="Opening Announcement 2"
                className="w-full h-auto object-cover block"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LaunchPopup;