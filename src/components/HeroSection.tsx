import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePageTransition } from "../contexts/PageTransitionContext";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const { startTransition, isReturningToIndex, markLeavingIndex } =
    usePageTransition();

  useEffect(() => {
    // If returning from navigation, animate in immediately
    // Otherwise, wait for loading screen to complete
    const delay = isReturningToIndex ? 0 : 3200;

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [isReturningToIndex]);

  const handlePreviewClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    markLeavingIndex();
    await startTransition();
    navigate("/preview");
  };

  const handlePreviewHover = () => {
    // Preload the preview route
    import("../pages/Preview");
  };

  return (
    <section className="min-h-screen flex items-center justify-start relative overflow-hidden flex-col gap-[6vh] md:gap-[8vh] pt-[20vh] md:pt-[25vh]">
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <h1
          className={`text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight transition-all duration-1000 ease-out max-w-lg md:max-w-2xl mx-auto ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Expand your mind, one reading at a time
        </h1>

        <p
          className={`text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-100 leading-tight ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          One reading a day. Countless days of thought.
          <br className="hidden sm:block" />
          <span className="inline sm:hidden">&nbsp;</span>
          No distractions. No subscriptions. Just timeless words, beautifully
          delivered.
        </p>

        <div
          className={`flex flex-col justify-center items-center gap-4 duration-1000 ease-out delay-200 ${
            isLoaded
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <div className="flex flex-row justify-center items-center gap-4">
            <a
              href="https://apps.apple.com/us/app/ray-one-reading-a-day/id6747955197"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary text-base md:text-lg transition-all duration-500 ease-out">
                Get the App
              </button>
            </a>
            <Link
              to="/preview"
              onClick={handlePreviewClick}
              onMouseEnter={handlePreviewHover}
            >
              <button className="border border-[#464646] rounded-lg transition-all duration-500 ease-out hover:scale-105 text-base md:text-lg px-6 py-3">
                Try the free preview
              </button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            One-time purchase, $9.99.
          </p>
        </div>
      </div>

      {/* Hero image */}
      <img
        src="/hero.webp"
        alt="Ray App Preview"
        className={`h-auto object-contain md:w-full md:max-w-4xl max-w-xl transition-all duration-1000 ease-out delay-300 ${
          isLoaded
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-12 scale-95"
        }`}
      />
    </section>
  );
};

export default HeroSection;
