"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { CreateOfferData } from "@/app/lib/services/auctionService";
import { addOffer } from "@/app/lib/actions/offerAction";
import { useState } from "react";

type OfferAuction = {
  auctionId: string;
};

export default function CreateOffer({ auctionId }: OfferAuction) {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<CreateOfferData>();

  async function onSumbit(data: CreateOfferData) {
    const result = await addOffer({
      auctionId,
      biddingPrice: data.biddingPrice
    })

    if (!result.success) {
      setError("root", {
        message: result.error,
      });

      return;
    }
    else {
      setOpen(false);
      reset();
    }


  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Make New Offer</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>New Offer</SheetTitle>
          <SheetDescription>Add an offer for this auction</SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit(onSumbit)}>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <FieldSet className="w-full max-w-xs">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="biddingPrice">Offer Amount</FieldLabel>
                  <Input
                    id="offerAmount"
                    type="number"
                    placeholder="1000"
                    {...register("biddingPrice", {
                      required: "offer amount is required",
                      min: {
                        value: 1,
                        message: "Offer amount must be at least 1",
                      },
                      valueAsNumber: true,
                    })}
                  />
                  <FieldDescription>Provide offer amount</FieldDescription>
                  {errors.biddingPrice && (
                    <p className="text-red-500  text-sm">
                      {errors.biddingPrice.message}
                    </p>
                  )}

                  {errors.root && (
                    <p className="text-sm text-destructive">
                      {errors.root.message}
                    </p>
                  )}
                </Field>
              </FieldGroup>
            </FieldSet>
          </div>
          <SheetFooter>
            <Button type="submit">Save Offer</Button>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
