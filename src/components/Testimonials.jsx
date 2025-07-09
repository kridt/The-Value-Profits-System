// Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "Amalie Sørensen",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Hey, kan du tro. Jeg var egentlig ret skeptisk i starten – jeg har aldrig spillet på sport før 😅 Men jeg satte 5000 kr ind da jeg startede, og nu er jeg oppe over 4.500 kr i plus bare ved at følge jeres system... Tak for at vise det afsted 🙌 Knus Amalie",
  },
  {
    name: "Sofie Jelstroem",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Asger, du sagde det ville tage lidt tid – men efter 3 uger er jeg allerede i profit! +3.800 kr og min første måned med fuld kontrol. Tak for den ekstra hjælp du har givet!",
  },
  {
    name: "Casper Vejlestroem",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    text: "Jeg lavede mit første VP bet for 14 dage siden, og nu sidder jeg og kigger på 2.100 kr ekstra på kontoen. Det er faktisk ret vildt, hvor simpelt det føles.",
  },
  {
    name: "Michael",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "Føler jeg har fundet en cheat code 🧠 Value Profits Business og er 15000 kr i plus på en måned ca.. Jeg har seriøst aldrig tjent penge på betting før – nu føles det som en forretning. Tak legend 🙏",
  },
];

const TestimonialCard = ({ name, image, text }) => (
  <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg border border-[#2a2a2a] mb-6 w-full transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-[#00ffb3]">
    <div className="flex gap-2 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-red-500">
          ★
        </span>
      ))}
    </div>
    <p className="text-gray-300 text-sm leading-relaxed">“{text}”</p>
    <div className="flex items-center mt-4 gap-3">
      <img
        src={image}
        alt={name}
        className="w-8 h-8 rounded-full object-cover border border-gray-600"
      />
      <span className="text-white font-semibold text-sm">{name}</span>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <div className="py-16 px-4 sm:px-8 lg:px-32 bg-[#0b1a24]">
      <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-12 text-center border-b border-neutral-800 pb-4">
        Hvad siger de første allerede?
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6 animate-slideDownSlow">
          {testimonials.slice(0, 2).map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
        <div className="space-y-6 animate-slideUpSlow">
          {testimonials.slice(2).map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
