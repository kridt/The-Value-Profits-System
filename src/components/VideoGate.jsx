import React from "react";

const VideoGate = () => {
  return (
    <div className="w-full flex flex-col items-center mt-10 px-4">
      <div className="w-full max-w-4xl aspect-video mb-6">
        <iframe
          src="https://player.vimeo.com/video/1098616437?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          title="Opdag hemmeligheden bag succesfuld sportsbetting!"
          className="w-full h-full rounded-lg shadow-md"
        ></iframe>
      </div>
      <br />
      <br />
      <a
        href="https://calendly.com/vpsystem1/30min?month=2025-06"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg transition duration-200"
      >
        Book din samtale
      </a>
    </div>
  );
};

export default VideoGate;
