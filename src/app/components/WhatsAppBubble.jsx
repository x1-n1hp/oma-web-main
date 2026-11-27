"use client";

import { motion, useReducedMotion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/447587337870?text=Hello%20Oma%20Services%2C%20I%27d%20like%20to%20make%20an%20enquiry.";

export default function WhatsAppBubble() {
  const reduced = useReducedMotion();

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp (+44 7587 337870)"
      initial={reduced ? false : { opacity: 0, y: 24, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.55,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 rounded-oma border border-oma-lineStrong bg-oma-s1 px-4 py-3 text-sm font-medium text-oma-text shadow-lg transition-[border-color,background-color,transform] duration-150 hover:-translate-y-0.5 hover:border-oma-crimson hover:bg-oma-s2"
    >
      <span className="inline-grid h-7 w-7 place-items-center rounded-full bg-[#25D366] text-white">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.47 0 .1 5.37.1 11.96c0 2.11.55 4.17 1.6 5.99L0 24l6.23-1.63a11.9 11.9 0 0 0 5.83 1.49h.01c6.59 0 11.96-5.37 11.96-11.96 0-3.2-1.25-6.2-3.51-8.42Zm-8.46 18.36h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.7.97.99-3.61-.24-.37a9.87 9.87 0 0 1-1.52-5.27c0-5.46 4.44-9.9 9.91-9.9 2.65 0 5.14 1.03 7.01 2.9a9.84 9.84 0 0 1 2.9 7c0 5.46-4.45 9.88-9.93 9.88Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </motion.a>
  );
}
