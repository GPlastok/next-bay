import AuctionCard from "@/components/auctions/AuctionCard";
import { getAllAuctions, QueryParams } from "../lib/services/auctionService";
import SearchBar from "@/components/auctions/SearchBar";
import LogoutLink from "@/components/auth/Logout";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function AllAuctionsPage({
  searchParams,
}: {
  searchParams: Promise<QueryParams>;
}) {
  const searchFilters = await searchParams;
  const auctions = await getAllAuctions(searchFilters);
  const cookieStore = await cookies();

  return (
    <div>
      <div className="flex items-center justify-center mb-10">
        <SearchBar />
        <Link href={"/auctions/new"}>New Auction</Link>
      </div>
      <div className="m-10 sm:mx-20">
        {auctions.data.map((auction) => (
          <AuctionCard key={auction.id} auction={auction} />
        ))}
      </div>
    </div>
  );
}
