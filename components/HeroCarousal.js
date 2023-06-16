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
              loading="eager"
              alt="Picture of the artist"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,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"
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
