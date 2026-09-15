"use server";
import { revalidatePath } from "next/cache";
import { Auction, createAuction } from "../services/auctionService";
import { redirect } from "next/navigation";

export async function addAuction(data: Auction) {
    const auction = await createAuction(data);
    if (auction) {
        revalidatePath("/auctions");
        redirect("/auctions");
    }
}