import { StringToBoolean } from "class-variance-authority/types";

const api_url = process.env.API_URL;

export type Auction = {
    id: string;
    title: string;
    description: string;
    sellingPrice: string;
    currentPrice: string;
    endDate: Date;
    createdAt: Date;
}

export type AuctionResponse = {
    data: Auction[],
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPage: number;
    }
}
export async function getAllAuctions(): Promise<AuctionResponse> {
    const response = await fetch(`${api_url}/auction`);
    if (!response) {
        throw new Error("Auction fetch failed");
    }
    return response.json();
}

export async function getAuctionById(id: string): Promise<Auction> {
    const response = await fetch(`${api_url}/auction/${id}`);
    if (!response) {
        throw new Error("Auction fetch failed");
    }
    return response.json();
}

