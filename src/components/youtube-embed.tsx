'use client';

import { useState, useEffect } from 'react';

type Props = {
  videoId: string
};

export default function YouTubeEmbed({ videoId }: Props) {
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      const maxWidth = Math.min(vw * 0.9, 1200); // 90% of viewport width, max 1200px
      const maxHeight = vh * 0.6; // 60% of viewport height
      const width = Math.min(maxWidth, maxHeight * (16/9));
      setContainerWidth(width);
    };

    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const aspectRatio = 9 / 16; // 16:9 aspect ratio
  const height = containerWidth * aspectRatio;

  return (
    <div className="mt-8 flex items-center justify-center w-full">
      <div style={{ width: containerWidth, height }} className="relative">
        <div className="absolute inset-0 border border-gray-600 bg-black/70 shadow-[0_10px_45px_1px_rgba(0,0,0,0.4)]">
          <div className="pointer-events-none absolute inset-0 before:absolute before:-left-[2px] before:-top-[2px] before:h-2 before:w-2 before:border-l-2 before:border-t-2 before:border-white before:content-[''] after:absolute after:-right-[2px] after:-top-[2px] after:h-2 after:w-2 after:border-r-2 after:border-t-2 after:border-white after:content-['']">
            <div className="pointer-events-none absolute inset-0 before:absolute before:-bottom-[2px] before:-left-[2px] before:h-2 before:w-2 before:border-b-2 before:border-l-2 before:border-white before:content-[''] after:absolute after:-bottom-[2px] after:-right-[2px] after:h-2 after:w-2 after:border-b-2 after:border-r-2 after:border-white after:content-['']"></div>
          </div>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}