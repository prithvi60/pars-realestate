import React from "react";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-8 right-4 " style={{ zIndex: "1000" }}>
      <a
        href="https://wa.me/919600520369"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/whatsapp.gif"
          alt="msg"
          className="rounded-full p-2 shadow-xl"
          style={{ boxShadow: "0 0 0 3px #dbc07c8e" }}
        />
      </a>
    </div>
  );
}
