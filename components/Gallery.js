import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Lightbox from "react-spring-lightbox";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={"/rarrow.svg"}
      className={className}
      style={{
        ...style,
        display: "block",
        // background: "grey",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={"/larrow.svg"}
      className={className}
      style={{
        ...style,
        display: "block",
        // background: "grey",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}
export const Gallery = ({ images, type }) => {
  const [width, setWidth] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // window is accessible here.
    setWidth(window.innerWidth);
  }, []);
  // lightbox
  const [currentImageIndex, setCurrentIndex] = useState(0);

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
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
    <>
      <Slider {...settings}>
        {images.map((image, idx) => {
          return (
            <div key={idx} className="relative">
              <img
                src={image.src}
                alt="Picture of the artist"
                placeholder="blur"
                style={{
                  height: width > 600 ? "450px" : "400px",
                  width: width > 600 ? "800px" : "400px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  objectFit: type === "plan" ? "scale-down" : "cover",
                  //     filter: "brightness(0.4)",
                }}
              />
              <p
                className="absolute bottom-4 right-4 cursor-pointer bg-gray-700 p-2 rounded-full"
                onClick={() => {
                  setOpen(true);
                  setCurrentIndex(idx);
                }}
              >
                <img src={"/fs.svg"} alt="site" width={30} height={30} />
              </p>
            </div>
          );
        })}
      </Slider>
      <Lightbox
        isOpen={open}
        onPrev={gotoPrevious}
        onNext={gotoNext}
        images={images}
        currentIndex={currentImageIndex}
        /* Add your own UI */
        renderHeader={() => (
          <div
            className=" px-8 flex w-screen justify-end "
            onClick={() => setOpen(false)}
          >
            <div className="cursor-pointer text-white-100 font-bold">X</div>
          </div>
        )}
        // renderPrevButton={() => <SamplePrevArrow />}
        // renderNextButton={() => <SampleNextArrow />}
        /* Add styling */
        style={{ background: "#000000", zIndex: "99999" }}
        /* Handle closing */
        onClose={() => setOpen(false)}
        /* Use single or double click to zoom */
        singleClickToZoom
      />
    </>
  );
};
