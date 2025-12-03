import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5036736070";
    window.open(
      `https://wa.me/1${phoneNumber}`,
      "_blank"
    );

  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant="gold"
      size="icon"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-gold hover:shadow-xl"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
};

export default WhatsAppButton;
