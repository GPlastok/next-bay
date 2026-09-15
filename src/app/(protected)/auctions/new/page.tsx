"use client";
import { Auction } from "@/app/lib/services/auctionService";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { addAuction } from "@/app/lib/actions/auctionActions";
import LinkBack from "@/components/auctions/LinkBack";

export default function AuctionForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Auction>();

  const endDate = watch("endDate");
  function onSumbit(data: Auction) {
    addAuction(data);
  }
  return (
    <div>
      <LinkBack />
      <form onSubmit={handleSubmit(onSumbit)}>
        <FieldSet className="w-full max-w-xs">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="title">Title</FieldLabel>
              <Input
                id="title"
                type="text"
                placeholder="Auction title"
                {...register("title", {
                  required: "Title is required",
                  minLength: {
                    value: 3,
                    message: "Title must be at least three characters",
                  },
                })}
              />
              <FieldDescription>Provide Auction title</FieldDescription>
              {errors.title && (
                <p className="text-red-500  text-sm">{errors.title.message}</p>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="description">Description</FieldLabel>

              <Input
                id="description"
                type="text"
                placeholder="Description"
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 3,
                    message: "Description must be at least three characters",
                  },
                })}
              />
              <FieldDescription>Provide Auction Description</FieldDescription>
              {errors.description && (
                <p className="text-red-500  text-sm">
                  {errors.description.message}
                </p>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="sellingPrice">Selling Price</FieldLabel>
              <Input
                id="sellingPrice"
                type="number"
                placeholder="Selling Price"
                {...register("sellingPrice", {
                  required: "Selling Price is required",
                  min: {
                    value: 1,
                    message: "Selling Price must be at least 1",
                  },
                  valueAsNumber: true,
                })}
              />
              <FieldDescription>Provide Auction selling price</FieldDescription>
              {errors.sellingPrice && (
                <p className="text-red-500  text-sm">
                  {errors.sellingPrice.message}
                </p>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="endDate">End Date</FieldLabel>

              <input type="hidden" {...register("endDate")} />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="endDate"
                    className="justify-start font-normal"
                  >
                    {endDate ? (
                      format(endDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={(date) => {
                      setValue("endDate", date, {
                        shouldValidate: true,
                        shouldDirty: true,
                      });
                    }}
                    defaultMonth={endDate}
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
              <FieldDescription>Provide Auction End Date</FieldDescription>
              {errors.endDate && <p>{errors.endDate.message}</p>}
            </Field>
          </FieldGroup>
        </FieldSet>
        <Button type="submit">Create Auction</Button>
      </form>
    </div>
  );
}
