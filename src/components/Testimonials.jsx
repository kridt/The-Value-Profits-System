import React from "react";

export default function Testimonials() {
  return (
    <div className="card p-3 md:p-4">
      <div className="aspect-[16/9] w-full">
        <iframe
          src="https://embed-v2.testimonial.to/w/value-profits-system---gratis?animated=on&theme=dark&speed=1&tag=all&cc=off"
          title="Anmeldelser"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}
