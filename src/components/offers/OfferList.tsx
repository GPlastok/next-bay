import type { Offer } from "@/app/lib/services/auctionService";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";

export default function OfferList({ offers }: { offers: Offer[] }) {
  return (
    <>
      <h3>Offer History</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Offer</TableHead>
            <TableHead>Who?</TableHead>
            <TableHead>When?</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {offers.map((offer) => (
            <TableRow key={offer.id}>
              <TableCell className="font-medium">
                {offer.biddingPrice} €
              </TableCell>
              <TableCell>{offer.bidderId}</TableCell>
              <TableCell>{new Date(offer.createdAt).toDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
