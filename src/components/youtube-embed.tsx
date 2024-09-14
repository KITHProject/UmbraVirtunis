type Props = {
  videoId: string
};

const YouTubeEmbed = ({ videoId }: Props) => {
  return (
    <div className="mt-4 flex items-center justify-center p-4">
      <div className="aspect-w-16 aspect-h-9 w-full max-w-7xl">
        <div className="relative col-span-3 flex w-full flex-col border border-gray-600 bg-black/70 p-2 shadow-[0_10px_45px_1px_rgba(0,0,0,0.4)]">
          <div className="z-100 pointer-events-none absolute inset-0 before:absolute before:-left-[2px] before:-top-[2px] before:h-2 before:w-2 before:border-l-2 before:border-t-2 before:border-white before:content-[''] after:absolute after:-right-[2px] after:-top-[2px] after:h-2 after:w-2 after:border-r-2 after:border-t-2 after:border-white after:content-['']">
            <div className="pointer-events-none absolute inset-0 before:absolute before:-bottom-[2px] before:-left-[2px] before:h-2 before:w-2 before:border-b-2 before:border-l-2 before:border-white before:content-[''] after:absolute after:-bottom-[2px] after:-right-[2px] after:h-2 after:w-2 after:border-b-2 after:border-r-2 after:border-white after:content-['']"></div>
          </div>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            width="700px"
            height="400px"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
