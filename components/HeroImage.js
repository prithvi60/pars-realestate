import React, { useEffect, useState } from "react";

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
        src={props.smallImgSrc}
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
