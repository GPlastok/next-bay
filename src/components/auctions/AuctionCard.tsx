import { Auction } from "@/app/lib/services/auctionService";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import CreateOffer from "./CreateOffer";

export default function AuctionCard({ auction }: { auction: Auction }) {
  return (
    <Card
      key={auction.id}
      className="bg-gray-100 dark:bg-gray-800 mb-4 rounded-md"
    >
      <CardHeader>
        <CardTitle>
          <Link href={`auctions/${auction.id}`}>{auction.title}</Link>
        </CardTitle>
        <CardDescription>{auction.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>End Date: {new Date(auction.endDate).toDateString()}</p>
        <p>
          Selling Price:{" "}
          {auction.currentPrice ? auction.currentPrice : auction.sellingPrice}
        </p>
        <CreateOffer />
      </CardContent>
    </Card>
  );
}
