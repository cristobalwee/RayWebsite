import { useEffect, useRef, useState } from 'react';

const UISection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hasVideoEnded, setHasVideoEnded] = useState(false);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const target = mutation.target as HTMLElement;
          if (target.classList.contains('animate-fade-in') && !hasAutoPlayed) {
            const video = videoRef.current;
            if (video) {
              video.play().catch(console.error);
              setIsVideoPlaying(true);
              setHasVideoEnded(false);
              setHasAutoPlayed(true);
            }
          }
        }
      });
    });

    observer.observe(section, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, [hasAutoPlayed]);

  const handlePlayAgain = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(console.error);
      setIsVideoPlaying(true);
      setHasVideoEnded(false);
    }
  };

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.error);
      setIsVideoPlaying(true);
    }
  };

  const handlePause = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      setIsVideoPlaying(false);
    }
  };

  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
    setHasVideoEnded(true);
  };

  return (
    <section ref={sectionRef} className="pt-32 md:pt-64 relative reveal-section">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 md:mb-8 max-w-2xl leading-tight">
          No accounts, no subscriptions, no distractions.
        </h2>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl leading-tight">
          Our goal with Ray is to create a beautiful, focused reading experience with
          seamless interactions. Enjoy it to the fullest without having to create an account
          or pay a monthly subscription.
        </p>

        <div className="relative max-w-4xl mx-8 md:mx-0 min-w-[300px]">
          <img 
            src="/phone.webp" 
            alt="Ray App Preview" 
            className="h-auto object-contain max-w-full relative"
          />
          <video
            ref={videoRef}
            src="/ui_recording.webm"
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="absolute inset-0 object-cover ui-recording"
          />
        </div>
        
        {!isVideoPlaying ? (
          hasVideoEnded ? (
            <button
              onClick={handlePlayAgain}
              className="text-lg mt-4 text-white hover:text-gray-300 underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
              </svg>
              Play again
            </button>
          ) : (
            <button
              onClick={handlePlay}
              className="text-lg mt-4 text-white hover:text-gray-300 underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Play
            </button>
          )
        ) : (
          <button
            onClick={handlePause}
            className="text-lg mt-4 text-white hover:text-gray-300 underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
            Pause
          </button>
        )}
      </div>
    </section>
  );
};

export default UISection;
