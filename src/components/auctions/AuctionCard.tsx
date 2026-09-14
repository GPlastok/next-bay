import { Auction } from "@/app/lib/services/auctionService";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AuctionCard({ auction }: { auction: Auction; }) {
    return (
        <Card key={auction.id} className="bg-gray-100 dark:bg-gray-800">
            <CardHeader>
                <CardTitle>{auction.title}</CardTitle>
                <CardDescription>{auction.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>End Date: {new Date(auction.endDate).toDateString()}</p>
                <p>Selling Price: {auction.currentPrice}</p>
            </CardContent>
        </Card>
    )
}