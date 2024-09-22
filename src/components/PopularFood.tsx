import Image from "next/image";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function PopularFood() {
  return (
    <div className="w-full max-w-6xl flex justify-center items-center flex-col mt-4 pt-10">
      <div className=" flex flex-row">
        <Image
          src="/titleIcon.svg"
          className="w-4 h-4"
          alt="titleicon"
          width={512}
          height={512}
        />
        <h1 className=" text-[#fc791a] uppercase font-bold  text-xl mx-2">
          Best Food
        </h1>
        <Image
          src="/titleIcon.svg"
          className="w-4 h-4"
          alt="titleicon"
          width={512}
          height={512}
        />
      </div>

      <div className="w-full flex justify-center items-center">
        <h1 className="text-[#010f1c] font-extrabold text-3xl">
          Popular Food Items
        </h1>
      </div>
      <div className="w-full flex flex-row">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full "
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
