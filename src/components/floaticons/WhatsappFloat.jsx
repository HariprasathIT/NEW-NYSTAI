import { MessageCircle } from "lucide-react";

export default function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/919189977700"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed bottom-6 right-6 z-[999]
        w-14 h-14
        bg-green-500 text-white
        rounded-full
        flex items-center justify-center
        shadow-xl
        transition-transform duration-300
        hover:scale-110
        animate-pulse
      "
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
