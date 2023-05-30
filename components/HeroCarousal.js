import React, { Component } from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export const HeroCarousal = ({ images }) => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      dynamicHeight={true}
      showThumbs={false}
    >
      {images.map((image, idx) => {
        return (
          <div key={idx}>
            <Image src={image} alt="Picture of the artist" placeholder="blur" />
            {/* <p className="legend">Artist {idx + 1}</p> */}
          </div>
        );
      })}
    </Carousel>
  );
};
