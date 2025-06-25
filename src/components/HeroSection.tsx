import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after loading screen has completely faded out
    // Loading screen: 200ms fade in + 2000ms minimum loading + 400ms pause + 500ms slide out = ~3100ms
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3200); // Add extra buffer to ensure loading screen is completely gone

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-start relative overflow-hidden flex-col gap-[6vh] md:gap-[8vh] pt-[20vh] md:pt-[25vh]">      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <h1 
          className={`text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight transition-all duration-1000 ease-out max-w-lg md:max-w-2xl mx-auto ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          Expand your mind, one reading at a time
        </h1>
        
        <p 
          className={`text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-300 ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          One short reading a day. 1000 days of thought. No distractions. No
          subscriptions. Just timeless words — beautifully delivered.
        </p>
        
        <button 
          className={`btn-primary text-base md:text-lg transition-all duration-1000 ease-out delay-500 ${
            isLoaded 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          Get the App
        </button>
      </div>

      {/* Hero image */}
      <img 
        src="/hero.webp" 
        alt="Ray App Preview" 
        className={`h-auto object-contain md:w-full md:max-w-4xl max-w-xl transition-all duration-1000 ease-out delay-700 ${
          isLoaded 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-12 scale-95'
        }`}
      />
    </section>
  );
};

export default HeroSection;
