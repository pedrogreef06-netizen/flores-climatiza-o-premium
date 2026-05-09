import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5548999999999?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20de%20climatiza%C3%A7%C3%A3o.";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid place-items-center h-14 w-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-premium animate-pulse-ring hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.2} />
    </a>
  );
}

export { WHATSAPP_URL };
