/** Update these when real numbers are confirmed. */
export const CONTACT = {
  phoneDisplay: "+971 4 123 4567",
  phoneTel: "+97141234567",
  whatsappE164: "97141234567",
  whatsappMessage:
    "Hello Lifestyle Aesthetics — I'd like to learn more about partnering with your team.",
} as const;

export function getWhatsAppHref() {
  const text = encodeURIComponent(CONTACT.whatsappMessage);
  return `https://wa.me/${CONTACT.whatsappE164}?text=${text}`;
}

export function getTelHref() {
  return `tel:${CONTACT.phoneTel}`;
}
