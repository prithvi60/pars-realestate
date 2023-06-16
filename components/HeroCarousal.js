import React, { Component, useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
export const HeroCarousal = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
  };
  const [zoom, setZoom] = useState(false);
  useEffect(() => {
    setZoom(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setZoom((o) => !o);
    }, 15000);
    return () => {
      clearTimeout(timer);
    };
  }, [zoom]);
  return (
    <Slider {...settings}>
      {images.map((image, idx) => {
        return (
          <div key={idx} class="">
            <Image
              src={image}
                priority={true}
              alt="Picture of the artist"
              placeholder="blur"
              style={{
                height: "100vh",
                width: "100vw",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "cover",
                filter: "brightness(0.35) sepia(28%)",
                transform: zoom ? "scale(1.5)" : "scale(1)",
                transformOrigin: "50% 65%",
                transition: "transform 15s  ease-in-out",
              }}
            />
            {/* <p className="legend">Artist {idx + 1}</p> */}
          </div>
        );
      })}
    </Slider>
  );
};
