import React from "react";
import Image from "next/image";
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
        background: "orange",
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
        background: "orange",
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
    autoplay: false,
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
          <div key={idx}>
            <div className="flex flex-col items-center gap-2 ">
              <Image
                src={image}
                alt="Picture of the artist"
                placeholder="blur"
                className="rounded-full border-2 "
                style={{
                  height: "140px",
                  width: "140px",
                  borderColor: "orange",
                  objectFit: "cover",
                }}
              />
              <p className=" text-black text-xs md:text-sm mt-4 mx-2 text-justify font-body">
                INTERMONT is one of the most trusted and distinguished developer
                in the city of Chennai for over three decades. The other
                important characteristics of Intermont are excellence in quality
                of workmanship and commitment to time in delivery.
              </p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
