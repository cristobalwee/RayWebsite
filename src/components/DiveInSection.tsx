const DiveInSection = () => {
  return (
    <section className="py-32 md:py-64 relative reveal-section">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-6 md:mb-8">
          <span className="inline-block px-5 py-2 rounded-lg text-xs md:text-sm bg-secondary">
            Day 1
          </span>
        </div>
        
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-8 md:mb-14 leading-tight">
          Ready to dive into your
          <br className="hidden sm:block" />
          &nbsp;reading journey?
        </h2>
        
        <div className="flex flex-col justify-center items-center gap-4">
          <a href="https://apps.apple.com/us/app/ray-one-reading-a-day/id6747955197" target="_blank" rel="noopener noreferrer">
            <button 
              className="btn-primary text-base md:text-lg transition-all duration-500 ease-out"
            >
              $9.99 on the App Store
            </button>
          </a>
          <p className="text-sm text-muted-foreground">Available in the U.S. only.</p>
        </div>
      </div>
    </section>
  );
};

export default DiveInSection;
