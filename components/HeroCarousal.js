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
  // const [zoom, setZoom] = useState(false);
  // useEffect(() => {
  //   setZoom(true);
  // }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setZoom((o) => !o);
  //   }, 15000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [zoom]);
  return (
    <Slider {...settings}>
      {images.map((image, idx) => {
        return (
          <div key={idx}>
            <HeroImage
              largeImgSrc={image.src}
              smallImgSrc={
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAQEAzYDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECBQME/8QAFxABAQEBAAAAAAAAAAAAAAAAABEBEv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAwIE/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD3Aet5BAAAAAAABAAAAQABFQBFQURUARUARUQEVAQAEABEVEVEVAQAETVQERUBEVEVEVARFQERUBE1U1BAQVAAZABEVEERUBAAQAEABAEBUUUAAVFAVFAVFAVFAVFAVFBQBFABQAFRQAAFRQAAAAAAd9AbMwAAAAAAAEAABAAAEABFQBFQURUQEVAEVAQAERUARUBEVEVAARFQERUBEVEVEVARFQERUBE1UQRFQVEVAQAERUQRFQEABAAQAEARQAFAAVFAVAFVAFVFAVFAVFAVFBQBFEUBUUAABUUAAAAAAHeAbMwAAAAABFQAABAAABAAEAURUARUQEABABAARFQBARURUBEVAEVARFQERURURUBEVARFQERUQRFQVEVARFQBAQRFQEABAAQAEARQAFAAABQAUAFVFAVFAVFAVFBRFEFRQFQBQAFQBQAAAAAd4BszAAAABAAAAEAAARUABBQAEABAEEABEVAEVAEVAQERRFQERUBEVAEVEERUFRFQERUBEVARF1EERUFRFQERUBEVEBFQEBAEVAAQABAAFFRQAAUAFABQAVUAVUUBUUBUUQVFAABQAAAUAAAAAHeEGzNRAAAAAAEAAABAABRAABAEVEBFQBFQBFQBFQEABEVEVAQBFQERUBARAQBURUBEVARFQE1FRBEVBURUBEVARFRBAARFQBFQBFQABAAFAAUAFEUFABQAUAFVAFVAFVAFAEUAFEUAABUAUAAAHdAbMwAAEBUAAAAEFAAEAAAEAQQABAAQAQAEBAEVEBAFRFQEBAEAERUQRFQVEVARFQERUQRFQBBBRBAEVARFRBEVAEAEABAAARBRFAAFFRQFRQFRQURQUBBQAUAFABQAURVQVAFAAABRAFEAd0Bs4AAAAAQFQAAAEAAABAQEAAEARUARUARUAQAQERRFQEBAEVARFRBAQURUBEVARFQERUQRFQERUFRFQERUQQEARUBEVAEVAAQABAABRFFFQBVQBVRQFRUBUUBUUBUUBUUBUUBUAUABUFRQAAAAAd0QbOFEAVAAAAAAQAAQFQEBAABAAQAAEABAQBFRFEAEBAEVARFQBBEBFQVEVARFQERUBEVEEBAEEFEEARUQRFQERUAQAQAEAAAQAAABVEUFEUFAQUAFABVQBVQBVQBQAUAFEUAABUAURQAAdwBuzAABAFEAAABBAAAQAAQAAEAAQAEABAQQEFEVAEAERUAQEERUFQEAQQBFQERUQRFQERUFRFQERUQRFQBBAEEARUARUABAAEAAFEUBUBVVFAVBBVRQFRQURQURQURQURQFQBQAURQAAAAAAdwBuzAQFEEFEAAAAQFQABAAEBUABAAQAEBFEABBAAQBABARARUBAQUQARFQERUBEVEERUBEVBRlUBARAQQBFQERUBAAQEAAQAAAAAAURRVEVBRFBQAVUAVUUBUAVUAUAFAAVAFAAVAFEUAAHbEGzNRAFEAUQAAAEAAABAAEBUABAFEBAQAEABBAAQBFQBBEBFQUQQBFQERUBEVEBBAEEAQQUQRAQQBFQERUBAQBFQBAAQEAAAABUAVUBVVBBVRQFRQURQURQURQURQURQFQBQAFQBQAAAAAdsQbM1EAVAAAAEAUQABAVAFAQAEBUBAQAEABAAQQAEARUQEEFEVAEEARUBARAQQBBAEEFEEQEVARFQERUBEVAEEARUAQABBAAAVAFEUBUEVVRQURQURQUAFABVQBQAUAFEUBUAURQAAAAUQB2gGzgAAAAEAUQAAAEAVAAEEAEABAVAAQAEEABEAEAQBRABAQBBAEVEEBAEEAQQBFQVEVEERUBEVARFQBBAEEARUAQAAEAQBRAFABRFRRUUFEUFVAFVAFVFAVFAVFAVAFABRFAAAVAFEUAAHZAbOAEBRAFEAUQQAQFQAAQFQABAAEABAAQAEQAQBFQUQAEEARUAQRAQAQEAQQBABEVEVEVARFQERUBAQERUEEEARUFARAAABAUQBQAURUVRFBVZUFVAVVRQURQURUFEUFEUBUAUARRAFAAAAAB2RBs4UQBRAAAAQBRAAEBRAAEBUAAQAEABBAEBQEAQAEEABAEBAQQBABAQBBAEEARURURUBEVARFQERUEQEAQQAERQABAFAAAEAAFEUFEUFVAFVAVoRUFEUFEUFEUFEUFEAVUAURQAAAAUQB2BBs4UQBRAFEAVAAEAUQABAUQAEAVBEFQAEABAAQAEEABEAQAQQAEAQQBFQEBAEEQEAVEEAQQQQARFZAQAEAVAEBAFAQFEEAABUAUAFEUFVAFVBFaEUFEUFEUFEUFEUFEAVUAURQAAFQBRAHYEGzhUAAAAQBRAFQEAQBUAAQBUEBRAAQAEAAQAEABEBAAQQAEAQAEEAQRARUAQQBBAEEAQQBBAEEARUAQEUQBRAABEVUABUAUQBQAURRFVlUVVQBVRQURQVUAVUAUAFEUBUAUAAABUAUQB1xBq4UQBRAAEBRAFEAAQFEAAQFEABAAEBUEBUEQVBAVBAVBAAQBAAQQBAQEEAQQBBAEVARFQBnVQERUBAQBFRFEAUQBRAQBAVRAFQAUQQVUBFE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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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"
              }
            />
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
