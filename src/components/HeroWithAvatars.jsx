import React from "react";

// Avatar data with initials (using stock/placeholder approach)
const members = [
  { name: "Andreas M.", initials: "AM", color: "from-blue-500 to-cyan-500" },
  { name: "Sarah K.", initials: "SK", color: "from-pink-500 to-rose-500" },
  { name: "Michael J.", initials: "MJ", color: "from-purple-500 to-indigo-500" },
  { name: "Emma L.", initials: "EL", color: "from-amber-500 to-orange-500" },
  { name: "Daniel P.", initials: "DP", color: "from-green-500 to-emerald-500" },
  { name: "Sophie N.", initials: "SN", color: "from-violet-500 to-fuchsia-500" },
  { name: "Lucas R.", initials: "LR", color: "from-teal-500 to-cyan-500" },
  { name: "Isabella T.", initials: "IT", color: "from-red-500 to-pink-500" },
];

export default function HeroWithAvatars() {
  return (
    <div className="mb-8">
      {/* Avatar Row */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="flex -space-x-3">
          {members.map((member, i) => (
            <div
              key={i}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${member.color} border-2 border-[var(--bg)] flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg hover:scale-110 transition-transform cursor-pointer`}
              title={member.name}
            >
              {member.initials}
            </div>
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
