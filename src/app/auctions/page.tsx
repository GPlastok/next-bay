import AuctionCard from "@/components/auctions/AuctionCard";
import { getAllAuctions, QueryParams } from "../lib/services/auctionService";
import SearchBar from "@/components/auctions/SearchBar";
import LogoutLink from "@/components/auth/Logout";
import { cookies } from "next/headers";

export default async function AllAuctionsPage({
  searchParams,
}: {
  searchParams: Promise<QueryParams>;
}) {
  const searchFilters = await searchParams;
  const auctions = await getAllAuctions(searchFilters);
  const cookieStore = await cookies();

  return (
    <div className="flex min-h-screen items-center justify-center">
      {cookieStore.get("session_token")?.value ? <LogoutLink /> : ""}
      <SearchBar />
      {auctions.data.map((auction) => (
        <AuctionCard key={auction.id} auction={auction} />
      ))}
    </div>
  );
}
