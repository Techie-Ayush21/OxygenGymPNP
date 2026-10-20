/**
 * OXYGEN GYM — MEMBERSHIP OFFERS DATA
 * 
 * STATIC ARCHITECTURE RULES:
 * 1. To update prices or plans, edit this file, test locally with `npm run dev`, and redeploy.
 * 2. If `price: null`, the card will automatically render "Contact us for current pricing".
 * 3. Never display fake crossed-out prices or artificial urgency.
 * 4. Expired offers (`expiresOn < today`) are automatically filtered out.
 */

export const offers = [
  {
    id: "monthly",
    name: "Monthly Membership",
    price: null, // Set to numeric value (e.g. 1800) once approved by owner
    currency: "INR",
    duration: "1 Month",
    label: "Flexible Starter",
    description: "Ideal for testing your schedule and experiencing the disciplined training atmosphere of Oxygen Gym.",
    benefits: [
      "Full strength and free weights zone access",
      "High-incline cardio deck & rowing stations",
      "Locker & changing room facilities",
      "Floor trainer assistance & guidance",
      "Flexible morning & evening training shifts"
    ],
    expiresOn: null,
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "quarterly",
    name: "Quarterly Plan",
    price: null, // Set to numeric value once approved by owner
    currency: "INR",
    duration: "3 Months",
    label: "Most Popular",
    description: "The ideal consistency window to develop muscle definition, progressive overload habits, and strength PRs.",
    benefits: [
      "All Monthly Membership privileges included",
      "Complimentary baseline fitness assessment",
      "Workout structure & split guidance",
      "Dedicated floor assistance & form checks",
      "Priority locker access"
    ],
    expiresOn: null,
    isFeatured: true,
    isAvailable: true
  },
  {
    id: "half-yearly",
    name: "Half-Yearly Plan",
    price: null,
    currency: "INR",
    duration: "6 Months",
    label: "Commitment Tier",
    description: "Built for committed lifters seeking a continuous half-year training cycle with enhanced savings.",
    benefits: [
      "All Quarterly Plan privileges included",
      "Periodic body composition re-evaluation",
      "Progressive overload routine adjustments",
      "Complimentary 15-day membership freeze option",
      "Unrestricted morning and evening access"
    ],
    expiresOn: null,
    isFeatured: false,
    isAvailable: true
  },
  {
    id: "annual",
    name: "Annual Membership",
    price: null,
    currency: "INR",
    duration: "12 Months",
    label: "Best Value",
    description: "365 days of uncompromising training discipline. Maximum per-month value for dedicated gym-goers.",
    benefits: [
      "Full year unrestricted access across all zones",
      "Comprehensive initial & quarterly fitness evaluations",
      "Workout and progression strategy planning",
      "30-day membership pause / freeze policy",
      "Best seasonal rate per month"
    ],
    expiresOn: null,
    isFeatured: false,
    isAvailable: true
  }
];

/**
 * Filter valid and active offers
 * Checks availability and expiration dates
 */
export function getActiveOffers() {
  const today = new Date().toISOString().split("T")[0];
  return offers.filter(offer => {
    if (!offer.isAvailable) return false;
    if (offer.expiresOn && offer.expiresOn < today) return false;
    return true;
  });
}
