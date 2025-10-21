import React, { useMemo } from "react";

/**
 * Simple video player component without gate
 */
export default function VideoGate({
  videoUrl = "https://player.vimeo.com/video/1098616437?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
}) {
  const validUrl = useMemo(() => String(videoUrl || "").trim(), [videoUrl]);

  return (
    <div className="relative w-full mx-2 sm:mx-0">
      {/* Mobil: 16:9; >=sm: 16:9 */}
      <div className="relative w-full aspect-[16/9] rounded-lg sm:rounded-xl overflow-hidden">
        <iframe
          src={validUrl}
          title="VPS video"
          width="100%"
          height="100%"
          style={{ border: "none", position: "absolute", inset: 0 }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
