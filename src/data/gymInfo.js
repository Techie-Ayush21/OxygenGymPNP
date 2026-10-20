/**
 * OXYGEN GYM — BUSINESS CONFIGURATION
 * Model Town, Panipat, Haryana, India
 * 
 * NOTE FOR OWNER (Mr. Mohit Arya):
 * Replace placeholder contact number with confirmed business phone/WhatsApp before launch.
 */

export const gymInfo = {
  name: "Oxygen Gym",
  tagline: "Your Fitness. Your Pace.",
  location: "Model Town, Panipat",
  city: "Panipat",
  state: "Haryana",
  country: "India",
  pincode: "132103",
  address: "Model Town, Near Main Market, Panipat, Haryana 132103, India",
  
  // Contact details — easily updated here
  // International format without '+' or spaces for WhatsApp wa.me link
  phoneDisplay: "7742124209",
  phoneTel: "+917742124209",
  whatsappNumber: "917742124209",
  
  // Operating Hours
  hoursSummary: "Mon – Sat: 05:30 AM – 10:30 PM | Sun: 09:00 AM – 02:30 PM",
  hoursDays: "Monday – Saturday",
  weekdaysHours: "05:30 AM – 10:30 PM",
  sundaySchedule: "09:00 AM – 02:30 PM",
  
  // Directions (Verified Google Maps Search Query URL)
  googleMapsUrl: "https://maps.app.goo.gl/qCd5sZbLtxCQhiPZ6",
  
  // Social Profiles
  instagramUrl: "https://www.instagram.com/oxygengympanipat/",
  facebookUrl: "https://www.facebook.com/oxygengympanipat/",
  
  // Verification Flags
  isPricingPublic: false, // Set to true when prices are approved for public display
  isOwnerApproved: false, // Pending final owner sign-off
};

/**
 * Helper to generate prefilled WhatsApp enquiry URLs
 * @param {string} messageText 
 * @returns {string} Encoded WhatsApp URL
 */
export function getWhatsAppUrl(messageText = "Hi Oxygen Gym, I want to enquire about membership plans and facilities.") {
  const encoded = encodeURIComponent(messageText);
  return `https://wa.me/${gymInfo.whatsappNumber}?text=${encoded}`;
}
