// Testimonials.jsx
import React from "react";
import IframeResizer from "iframe-resizer-react";

const Testimonials = () => {
  return (
    <div className="py-16 px-4 bg-[#0b1a24] flex justify-center">
      <div className="w-full max-w-5xl md:w-[75%]">
        <IframeResizer
          src="https://embed-v2.testimonial.to/w/value-profits-system---gratis?animated=on&theme=dark&shadowColor=071b26&speed=1&tag=all&cc=off"
          style={{
            width: "1px",
            minWidth: "100%",
            border: "none",
            height: "800px",
          }}
          className="w-full rounded-xl overflow-hidden shadow-lg"
        />
      </div>
    </div>
  );
};

export default Testimonials;
