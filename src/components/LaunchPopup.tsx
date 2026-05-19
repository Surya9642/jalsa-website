import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LaunchPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LaunchPopup: React.FC<LaunchPopupProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={onClose}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Popup Container */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="
              relative
              max-w-md
              w-full
              rounded-3xl
              border-[3px]
              border-yellow-400
              bg-[#8b0000]
              shadow-[0_0_40px_rgba(255,215,0,0.25)]
              overflow-hidden
            "
          >
            {/* Popup Image */}
            <img
              src="/resto/8.jpeg"
              alt="Opening Announcement"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LaunchPopup;