
export interface ServicePackage {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

export interface BookingDetails {
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  packageId: string;
  date: Date | null;
  frequency: 'once' | 'weekly' | 'biweekly' | 'monthly';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
