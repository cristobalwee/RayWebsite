import { useEffect, useState } from "react";

interface TruncatedOverlayProps {
  scrollProgress: number;
  onScrollLock: () => void;
  title: string;
}

const TruncatedOverlay = ({
  scrollProgress,
  onScrollLock,
  title,
}: TruncatedOverlayProps) => {
  const [hasLockedScroll, setHasLockedScroll] = useState(false);

  // Lock scroll when user reaches the paywall (40% progress)
  useEffect(() => {
    if (scrollProgress >= 40 && !hasLockedScroll) {
      setHasLockedScroll(true);
      onScrollLock();
    }
  }, [scrollProgress, hasLockedScroll, onScrollLock]);

  return (
    <div className="transition-opacity duration-500 delay-200 relative -mt-[100px]">
      <div className="w-full h-[100px] bg-gradient-to-b from-transparent via-background/60 to-background" />
      {/* CTA content */}
      <div className="mb-10 -mt-1 pointer-events-auto z-2">
        <div className="mx-auto text-center">
          <div className="bg-[#1A1A1A] rounded-[24px] p-6 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Continue reading {title}
            </h3>
            <p className="text-xl text-muted-foreground mb-6 leading-tight">
              Download Ray to finish this reading and unlock 1,000+ other
              timeless classics
              <span className="hidden md:inline">
                {" "}
                - one recommendation delivered daily, no subscription required.
              </span>
            </p>
            <a
              href="https://apps.apple.com/us/app/ray-one-reading-a-day/id6747955197"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary text-lg w-full sm:w-auto">
                Get the App
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruncatedOverlay;
