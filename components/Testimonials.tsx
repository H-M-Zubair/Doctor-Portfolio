"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Testimonials } from "@/constants/Testimonials";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  return (
  <div>
    <div className="text-center flex justify-center ">
<h2 className="text-4xl font-bold" >Testimonials</h2>
</div>    
      <div className="flex  justify-center my-8 px-4">
  <div className="w-full max-w-screen-lg">
        <Carousel
          plugins={[plugin.current]}
          className="relative"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Testimonials.map((test, index) => (
              <CarouselItem key={index} className="flex items-center justify-center p-4">
                <Card className="w-full max-w-md bg-white shadow-lg rounded-lg">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <Image
                      width={100}
                      height={100}
                      alt="Testimonial"
                      src={test.img}
                      className="rounded-full w-24 h-24 object-cover mb-4"
                    />
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">{test.heading}</h2>
                    <p className="text-gray-700 mb-4">{test.description}</p>
                    <div>
                      <span className="block text-lg font-semibold">{test.name}</span>
                      <span className="text-gray-500">New Patient</span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-4 md:left-2 z-10">
            <CarouselPrevious className="text-gray-800 hover:text-gray-600 transition" />
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-4 md:right-2 z-10">
            <CarouselNext className="text-gray-800 hover:text-gray-600 transition" />
          </div>
        </Carousel>
      </div>
    </div>
  </div>
  );
}
