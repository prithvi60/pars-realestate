import React from "react";
import Slider from "react-slick";
import HeroImage from "./HeroImage";
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

  return (
    <Slider {...settings}>
      {images.map((image, idx) => {
        return (
          <div key={idx}>
            <HeroImage largeImgSrc={image.src} />
            {/* <Img
              // loading={"eager"}
              loader={
                <img
                  src={image.src}
                  alt="Picture of the artist"
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
              }
              src={image.src}
              alt="Picture of the artist"
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
            /> */}
            {/* <p className="legend">Artist {idx + 1}</p> */}
          </div>
        );
      })}
    </Slider>
  );
};
