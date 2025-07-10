// src/components/ImageRow.jsx
import React from "react";

const images = [
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png",
  "img6.png",
];

const ImageRow = () => {
  return (
    <div className="w-full py-16 bg-transparent flex justify-center">
      <div className="flex flex-wrap gap-6 justify-center max-w-[1400px] px-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={`/images/${img}`}
            alt={`screenshot-${i}`}
            className="w-[1000px] rounded-xl shadow-lg transition-transform duration-200 hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageRow;
