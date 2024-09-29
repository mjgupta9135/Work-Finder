import React, { useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchQuery } from "@/slices/jobSlice";

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "Full Stack Developer",
  "DevOps Engineer",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Memoize the handler to avoid unnecessary re-renders
  const searchJobHandler = useCallback(
    (query) => {
      dispatch(setSearchQuery(query));
      navigate("/browse");
    },
    [dispatch, navigate]
  );

  return (
    <div className="animate-fadeInLeft">
      <Carousel className="w-full max-w-xl mx-auto my-28">
        <CarouselContent>
          {categories?.map((category, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 flex lg:basis-1/3 p-2"
            >
              <Button
                onClick={() => searchJobHandler(category)}
                variant="outline"
                className="rounded-full font-semibold"
              >
                {category}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext aria-label="Next" />
        <CarouselPrevious aria-label="Previous" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
