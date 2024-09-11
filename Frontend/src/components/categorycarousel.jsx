import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "Full Stack Developer",
  "Devops Engineer",
];

const CategoryCarousel = () => {
  return (
    <div className="animate-fadeInLeft">
      <Carousel className="w-full max-w-xl mx-auto my-28">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 flex lg:basis-1/3   "
            >
              <Button variant="outline" className="rounded-full font-semibold">
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
