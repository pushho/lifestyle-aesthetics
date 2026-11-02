/** Update these when real numbers are confirmed. */
export const CONTACT = {
  email: "info@ls-aesthetics.com",
  phoneDisplay: "+971 4 435 7689",
  phoneTel: "+97144357689",
  whatsappE164: "97144357689",
  whatsappMessage:
    "Hello Lifestyle Aesthetics team, I'd like to learn more about partnering with your team.",
} as const;

export function getWhatsAppHref() {
  const text = encodeURIComponent(CONTACT.whatsappMessage);
  return `https://wa.me/${CONTACT.whatsappE164}?text=${text}`;
}

export function getTelHref() {
  return `tel:${CONTACT.phoneTel}`;
}
