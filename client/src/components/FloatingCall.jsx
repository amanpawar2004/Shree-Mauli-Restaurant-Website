import { FaPhoneAlt } from "react-icons/fa";

function FloatingCall() {
  return (
    <a
      href="tel:+919921291202"
      className="fixed bottom-24 right-6 bg-red-700 hover:bg-red-800 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110"
      aria-label="Call Restaurant"
    >
      <FaPhoneAlt size={28} />
    </a>
  );
}

export default FloatingCall;