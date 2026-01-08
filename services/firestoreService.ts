import {
    collection,
    addDoc,
    updateDoc,
    doc,
    onSnapshot,
    query,
    orderBy,
    Timestamp
} from "firebase/firestore";
import { db } from "../firebase";
import { Donation, DonationStatus } from "../types";

export const subscribeToDonations = (callback: (donations: Donation[]) => void) => {
    const q = query(collection(db, "donations"), orderBy("createdAt", "desc"));

    return onSnapshot(q, (snapshot) => {
        const donations = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as Donation[];

        callback(donations);
    });
};

export const addDonation = async (donation: Omit<Donation, "id">) => {
    try {
        await addDoc(collection(db, "donations"), donation);
    } catch (error) {
        console.error("Error adding donation: ", error);
        throw error;
    }
};

export const updateDonationStatus = async (
    donationId: string,
    status: DonationStatus,
    updates: Partial<Donation> = {}
) => {
    try {
        const donationRef = doc(db, "donations", donationId);
        await updateDoc(donationRef, {
            status,
            ...updates
        });
    } catch (error) {
        console.error("Error updating donation status: ", error);
        throw error;
    }
};

export const registerRestaurant = async (profile: Omit<import("../types").RestaurantProfile, "isVerified" | "createdAt">) => {
    try {
        await addDoc(collection(db, "restaurants"), {
            ...profile,
            isVerified: false,
            createdAt: new Date().toISOString()
        });
    } catch (error) {
        console.error("Error registering restaurant: ", error);
        throw error;
    }
};

export const registerNGO = async (profile: Omit<import("../types").NGOProfile, "isVerified" | "createdAt">) => {
    try {
        await addDoc(collection(db, "ngos"), {
            ...profile,
            isVerified: false,
            createdAt: new Date().toISOString()
        });
    } catch (error) {
        console.error("Error registering NGO: ", error);
        throw error;
    }
};
