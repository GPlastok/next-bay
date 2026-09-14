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

export type QueryParams ={
    status?:string;
    maxPrice?:number;
    minPrice?:number
}

export async function getAllAuctions(queryParam?:QueryParams): Promise<AuctionResponse> {
    const searchParams = new URLSearchParams()
    if(queryParam?.status){
        searchParams.set("status",queryParam.status)
    }
     if(queryParam?.maxPrice){
        searchParams.set("maxPrice",queryParam.maxPrice.toString())
    }
     if(queryParam?.minPrice){
        searchParams.set("minPrice",queryParam.minPrice.toString())
    }
    const response = await fetch(`${api_url}/auction?${searchParams.toString()}`);
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

