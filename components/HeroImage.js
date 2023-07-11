import React, { useEffect, useState } from "react";
import Hero1 from "../public/herocomp.jpg";

export default function HeroImage(props) {
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
  const [blur, setBlur] = React.useState(true);
  const loadingImage = React.useRef();

  React.useEffect(() => {
    if (loadingImage.current.complete) {
      setBlur(false);
    }

    loadingImage.current.addEventListener("load", () => {
      setBlur(false);
    });
  }, []);
  return (
    <div className={`image-container ${blur ? "blur" : "unblur"}`}>
      <img
        className="placeholder-image"
        loading={"eager"}
        src={Hero1.src}
        // src={
        //   "data:image/webp;base64,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"
        // }
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
      <img
        className="real-image"
        loading="lazy"
        ref={loadingImage}
        src={props.largeImgSrc}
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
    </div>
  );
}
