import React from "react";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-8 right-4 ">
      <button>
        <img
          src="/whatsapp.gif"
          alt="msg"
          className="rounded-full p-2 shadow-xl"
          style={{ boxShadow: "0 0 0 3px #e7a6468d"}}
        />
      </button>
    </div>
  );
}
