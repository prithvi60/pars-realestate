import React, { Component } from "react";
import Image from "next/image";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import C1 from "../public/images/clients/dummy.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}
export const TestimonialCarousal = () => {
  const images = [C1, C1, C1, C1];
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {images.map((image, idx) => {
        return (
          <div key={idx} className="flex flex-col items-center justify-center">
            <Image
              src={image}
              alt="Picture of the artist"
              placeholder="blur"
              className="rounded-sm"
              style={{
                // height: "40vh",
                // width: "40vw",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "cover",
              }}
            />
            <p className="legend text-black text-xs md:text-sm mt-4">
              INTERMONT is one of the most trusted and distinguished developer
              in the city of Chennai for over three decades. The other important
              characteristics of Intermont are excellence in quality of
              workmanship and commitment to time in delivery.”
            </p>
          </div>
        );
      })}
    </Slider>
  );
};
