import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINKS } from "@/lib/constants";

export function WhatsAppFAB() {
  return (
    <a
      href={WHATSAPP_LINKS.general}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95 md:h-16 md:w-16"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
    </a>
  );
}
