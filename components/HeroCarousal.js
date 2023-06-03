import React, { Component } from "react";
import Image from "next/image";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
export const HeroCarousal = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows:true
  };
  return (
    <Slider {...settings}>
      {images.map((image, idx) => {
        return (
          <div key={idx}>
            <Image
              src={image}
              alt="Picture of the artist"
              placeholder="blur"
              style={{
                height: "100vh",
                width:"100vw",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit:"cover",
                filter: "brightness(0.4)"

              }}
            />
            {/* <p className="legend">Artist {idx + 1}</p> */}
          </div>
        );
      })}
    </Slider>
  );
};
