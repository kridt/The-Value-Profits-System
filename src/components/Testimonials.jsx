import React from "react";
import IframeResizer from "iframe-resizer-react";

export default function Testimonials() {
  return (
    <div className="py-16 px-4 flex justify-center">
      <div className="w-full max-w-5xl surface glow-soft overflow-hidden">
        <IframeResizer
          src="https://embed-v2.testimonial.to/w/value-profits-system---gratis?animated=on&theme=dark&shadowColor=071b26&speed=1&tag=all&cc=off"
          style={{
            width: "1px",
            minWidth: "100%",
            border: "none",
            height: "800px",
          }}
          className="w-full"
        />
      </div>
    </div>
  );
}
