
import { ServicePackage } from './types';

export const CLEANING_PACKAGES: ServicePackage[] = [
  {
    id: 'basic',
    name: 'Standard Sparkle',
    price: 120,
    description: 'Perfect for regular upkeep of your home.',
    features: ['Dusting surfaces', 'Vacuuming & Mopping', 'Kitchen counters', 'Bathroom sanitization'],
  },
  {
    id: 'deep',
    name: 'Deep Shine',
    price: 240,
    description: 'A thorough top-to-bottom refresh.',
    features: ['Everything in Standard', 'Baseboards & Trim', 'Inside Microwave', 'Window sills & Tracks'],
  },
  {
    id: 'move',
    name: 'Move In/Out',
    price: 350,
    description: 'Readying a blank canvas for its next chapter.',
    features: ['Inside all cabinets', 'Inside Oven & Fridge', 'Wall spot cleaning', 'Floor-to-ceiling detail'],
  },
];

export const PRICING_FACTORS = {
  bedroom: 35,
  bathroom: 25,
  baseRate: 50,
};

export const FREQUENCY_DISCOUNTS = {
  once: 0,
  weekly: 0.20,
  biweekly: 0.15,
  monthly: 0.10,
};
