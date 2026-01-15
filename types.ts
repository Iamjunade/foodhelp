export enum UserRole {
  DONOR = 'DONOR',
  RECIPIENT = 'RECIPIENT',
  RESCUER = 'RESCUER',
  ADMIN = 'ADMIN', // For seeing the architecture docs
  PENDING = 'PENDING'
}

export enum DonationStatus {
  AVAILABLE = 'AVAILABLE',
  CLAIMED = 'CLAIMED',
  PICKED_UP = 'PICKED_UP',
  DELIVERED = 'DELIVERED',
  VERIFIED = 'VERIFIED'
}

export type FoodCategory = 'COOKED_MEAL' | 'RAW_INGREDIENTS' | 'PACKAGED_GOODS' | 'BAKERY' | 'DAIRY_PRODUCE';

export interface Location {
  lat: number;
  lng: number;
  address: string;
}

export interface FoodItem {
  id: string;
  title: string;
  description: string;
  category: FoodCategory;
  quantity: string; // e.g. "5kg", "20 meals"
  preparedTime: string;
  expiryTime: string;
  isPerishable: boolean;
  safetyScore?: number;
  safetyNotes?: string;
  imageUrl?: string;
  tags: string[];
}

export interface Donation {
  id: string;
  donorId: string;
  donorName: string;
  recipientId?: string;
  recipientName?: string;
  rescuerId?: string;
  rescuerName?: string;
  location: Location;
  items: FoodItem[];
  status: DonationStatus;
  createdAt: string;
  distanceKm?: number; // Calculated relative to user
}

export interface ImpactMetrics {
  mealsSaved: number;
  co2PreventedKg: number;
  moneySaved: number;
  activeStreak: number;
}

export interface RestaurantProfile {
  userId: string;
  businessName: string;
  fssaiLicense: string;
  contactPerson: string;
  phone: string;
  address: string;
  isVerified: boolean;
  createdAt: string;
}