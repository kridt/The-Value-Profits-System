import React from "react";

// Avatar data with member images
const members = [
  { name: "Andreas M.", image: "/images/members/1.png" },
  { name: "Sarah K.", image: "/images/members/2.png" },
  { name: "Michael J.", image: "/images/members/3.png" },
  { name: "Emma L.", image: "/images/members/4.png" },
  { name: "Daniel P.", image: "/images/members/5.png" },
  { name: "Sophie N.", image: "/images/members/6.png" },
  { name: "Lucas R.", image: "/images/members/7.png" },
];

export default function HeroWithAvatars() {
  return (
    <div className="mb-8">
      {/* Avatar Row */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="flex -space-x-3">
          {members.map((member, i) => (
            <img
              key={i}
              src={member.image}
              alt={member.name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[var(--bg)] shadow-lg hover:scale-110 transition-transform cursor-pointer object-cover"
              title={member.name}
            />
          ))}
        </div>
        <div className="text-[var(--ink-2)] text-sm sm:text-base ml-2">
          <span className="font-bold text-[var(--accent)]">1000+</span> medlemmer
        </div>
      </div>

      {/* Subtext inspired by designIdea.png */}
      <p className="text-center text-[var(--muted)] text-sm max-w-2xl mx-auto">
        Slut dig til <span className="text-[var(--accent)] font-semibold">950+ succesfulde medlemmer</span> der allerede tjener penge på value betting
      </p>
    </div>
  );
}
