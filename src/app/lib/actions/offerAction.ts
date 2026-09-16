"use server";

import { revalidatePath } from "next/cache";
import { createOffer, CreateOfferData } from "../services/auctionService";

export async function addOffer(offerData: CreateOfferData) {

  try {
    const response = await createOffer(offerData);

    revalidatePath("/auctions");
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}