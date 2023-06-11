import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

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
export const Carousal = ({ images }) => {
  const [width, setWidth] = useState(null);
  useEffect(() => {
    // window is accessible here.
    setWidth(window.innerWidth);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
                height: width > 600 ? "450px" : "400px",
                width: width > 600 ? "800px" : "500px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
                //     filter: "brightness(0.4)",
              }}
            />
            {/* <p className="legend">Artist {idx + 1}</p> */}
          </div>
        );
      })}
    </Slider>
  );
};
