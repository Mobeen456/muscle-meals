"use client";
import React, { useState } from "react";
import Trash from "@/components/icons/Trash";
import TitleHeader from "@/components/layout/TitleHeader";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const initialCartItems = [
  {
    id: 1,
    image: "/product.image",
    name: "Protein Shake",
    price: 250.0,
    quantity: 1,
  },
  {
    id: 2,
    image: "/product.image",
    name: "Veggies",
    price: 50.0,
    quantity: 1,
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const incrementQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveItem = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div>
      <TitleHeader title="Cart Items" subtitle="Cart" />
      <div className="w-full px-6 py-8 md:px-36 md:py-24 flex flex-col items-start justify-center bg-white">
        {/* <div className="w-full bg-[#eb0029] p-3 text-white">Shipping Cost Updated</div> */}
        <br/>
        <div className="w-full border  border-gray-300  shadow-md">
          <Table className="w-full  ">
            <TableHeader className="w-full border-2 border-gray-300">
              <TableRow className=" h-24 ">
                <TableHead className="text-left font-bold  text-black pl-4">Item Image</TableHead>
                <TableHead className="text-left font-bold  text-black ">Item Name</TableHead>
                <TableHead className="text-left font-bold text-black ">Price</TableHead>
                <TableHead className="text-center font-bold text-black ">Quantity</TableHead>
                <TableHead className="text-right font-bold text-black ">Total</TableHead>
                <TableHead className="text-right font-bold text-black pr-4">Remove</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Image
                      width={100}
                      height={100}
                      src={item.image}
                      alt={item.name}
                    />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center">
                      <Button
                        variant="outline"
                        aria-label="Decrease quantity"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        -
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button
                        variant="outline"
                        aria-label="Increase quantity"
                        onClick={() => incrementQuantity(item.id)}
                      >
                        +
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      aria-label="Remove item"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <Trash />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter className="border-t">
              <TableRow>
                <TableCell colSpan={4} className="text-left font-bold">Total</TableCell>
                <TableCell className="text-right font-bold">
                  ${calculateTotal()}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
}
