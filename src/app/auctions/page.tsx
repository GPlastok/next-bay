
import AuctionCard from "@/components/auctions/AuctionCard";
import { Auction, getAllAuctions } from "../lib/services/auctionService";

export default async function AllAuctionsPage() {
    const auctions = await getAllAuctions();
    return (
        <div>
            {auctions.data.map((auction) => (
                <AuctionCard key={auction.id} auction={auction} />
            ))
            }
        </div>
    )
}