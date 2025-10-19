import React from "react";
import BetList from "./BetList";

const images = [
  {
    src: "img1.png",
    alt: "Dokumenterede resultater fra Value Profits System medlemmer viser konsistent profit gennem value betting strategi med live chat beskeder og betting gevinster",
    width: 1200,
    height: 800
  }
];

export default function ImageRow() {
  return (
    <>
      <div className="w-full py-12 flex justify-center">
        <div className="flex flex-wrap gap-6 justify-center max-w-[1400px] px-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={`/images/${img.src}`}
              alt={img.alt}
              width={img.width}
              height={img.height}
              loading="lazy"
              decoding="async"
              className="w-[1000px] rounded-xl card transition-transform duration-300 hover:scale-[1.02]"
            />
          ))}
        </div>
      </div>
      <BetList />
    </>
  );
}
