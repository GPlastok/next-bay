import { getAuctionById } from "@/app/lib/services/auctionService";
import { notFound } from "next/navigation";
import OfferList from "@/components/offers/OfferList";

export default async function AuctionDetailPage({
  params,
}: PageProps<"/auctions/[id]">) {
  const { id } = await params;
  const auction = await getAuctionById(id);

  if (!auction) {
    return notFound();
  }
  return (
    <div>
      <h1>{auction.title}</h1>
      <p>{auction.description}</p>
      <p>End Date: {new Date(auction.endDate).toDateString()}</p>
      <p>
        Selling Price:{" "}
        {auction.currentPrice ? auction.currentPrice : auction.sellingPrice}
      </p>
      <OfferList offers={auction.offers}></OfferList>
    </div>
  );
}

// export default function AuctionCard({ auction }: { auction: Auction; }) {
//     return (
//         <Card key={auction.id} className="bg-gray-100 dark:bg-gray-800">
//             <CardHeader>
//                 <CardTitle>{auction.title}</CardTitle>
//                 <CardDescription>{auction.description}</CardDescription>
//             </CardHeader>
//             <CardContent>
//                 <p>End Date: {new Date(auction.endDate).toDateString()}</p>
//                 <p>Selling Price: {auction.currentPrice}</p>
//             </CardContent>
//         </Card>
//     )
// }
