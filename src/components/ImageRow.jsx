import React from "react";
import BetList from "./BetList";

const images = ["img1.png"];

export default function ImageRow() {
  return (
    <>
      <div className="w-full py-14 flex justify-center">
        <div className="flex flex-wrap gap-6 justify-center max-w-[1400px] px-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={`/images/${img}`}
              alt={`screenshot-${i}`}
              className="w-[1000px] rounded-xl surface hover:glow transition-transform duration-200 hover:scale-[1.01]"
            />
          ))}
        </div>
      </div>
      <BetList />
    </>
  );
}
