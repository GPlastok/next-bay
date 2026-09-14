import AuctionCard from "@/components/auctions/AuctionCard";
import {
  getAllAuctions,
  QueryParams,
} from "../lib/services/auctionService";
import SearchBar from "@/components/auctions/SearchBar";

export default async function AllAuctionsPage({
  searchParams,
}: {
  searchParams: Promise<QueryParams>;
}) {
  const searchFilters = await searchParams;
  const auctions = await getAllAuctions(searchFilters);
  return (
    <div>
      <SearchBar />
      {auctions.data.map((auction) => (
        <AuctionCard key={auction.id} auction={auction} />
      ))}
    </div>
  );
}
