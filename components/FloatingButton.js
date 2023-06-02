import React from "react";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-12 right-4 ">
      <button className="rounded-full p-2" style={{ background: "#e7a646" }}>
        <img src="/whatsapp.svg" alt="msg" />
      </button>
    </div>
  );
}
