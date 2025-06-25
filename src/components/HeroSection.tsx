const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-start relative overflow-hidden flex-col gap-[8vh] pt-[25vh]">      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight animate-fade-in">
          Expand your mind, one
          <br />
          <span>
            reading at a time
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
          One short reading a day. 1000 days of thought. No distractions. No
          subscriptions. Just timeless words — beautifully delivered.
        </p>
        
        <button className="btn-primary text-lg animate-fade-in delay-500">
          Get the App
        </button>
      </div>

      {/* Hero image */}
      <img 
        src="/hero.webp" 
        alt="Ray App Preview" 
        className="h-auto object-contain"
      />
    </section>
  );
};

export default HeroSection;
