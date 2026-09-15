"use server";
import { revalidatePath } from "next/cache";
import { Auction, createAuction } from "../services/auctionService";
import { redirect } from "next/navigation";

export async function addAuction(data: Auction) {
    await createAuction(data);

    revalidatePath("/auctions");
    redirect("/auctions");
}
