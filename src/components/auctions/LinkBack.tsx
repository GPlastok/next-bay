import Link from "next/link";

export default function LinkBack() {
  return (
    <Link href={"/auctions"} className="flex gap-2 mb-8">
      Back to All Auctions
    </Link>
  );
}
