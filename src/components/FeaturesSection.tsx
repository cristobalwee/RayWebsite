const FeaturesSection = () => {
  return (
    <section className="pt-32 md:pt-64 relative reveal-section" id="about">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 md:mb-8 max-w-2xl leading-tight mx-auto">
          Everything you need. Nothing you don't.
        </h2>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl leading-tight mx-auto">
          Simple tools that get out of your way and let you focus on what matters: creating space for discovery, reflection, and genuine connection with timeless works.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="max-w-4xl w-full mx-auto rounded-[24px] md:rounded-[36px] p-6 md:p-12 transition-all duration-500 bg-[#222222] flex flex-col items-center justify-start text-left gap-2 overflow-hidden animate-fade-in-up delay-500">
            <h4 className="text-lg w-full md:text-2xl font-medium quote-text text-left leading-[1.5] mb-0">
              Never lose your place
            </h4>
            <p className="text-lg w-full md:text-xl mb-4 md:mb-6 max-w-3xl leading-tight">
              No pressure to finish in one sitting, you can always pick up exactly where you left off.
            </p>
            <div className="relative max-h-[350px] md:max-h-[300px] min-w-[180px] px-4">
              {/* Phone mockup */}
              <img 
                src="/autosave.webp" 
                alt="Ray App Preview" 
                className="h-auto object-contain mt-0"
              />
            </div>
          </div>
          <div className="max-w-4xl w-full mx-auto rounded-[24px] md:rounded-[36px] p-6 md:p-12 transition-all duration-500 bg-[#222222] flex flex-col items-center justify-start text-left gap-2 overflow-hidden animate-fade-in-up delay-600">
            <h4 className="text-lg w-full md:text-2xl font-medium quote-text text-left leading-[1.5] mb-0">
              Bookmark your favorites
            </h4>
            <p className="text-lg w-full md:text-xl mb-4 md:mb-6 max-w-3xl leading-tight">
              Save the readings that strike you and create your own anthology of favorites.
            </p>
            <div className="relative max-h-[350px] md:max-h-[300px] min-w-[180px] px-4">
              {/* Phone mockup */}
              <img 
                src="/bookmarks.webp" 
                alt="Ray App Preview" 
                className="h-auto object-contain mt-0"
              />
            </div>
          </div>
          <div className="max-w-4xl w-full mx-auto rounded-[24px] md:rounded-[36px] p-6 md:p-12 transition-all duration-500 bg-[#222222] flex flex-col items-center justify-start text-left gap-2 overflow-hidden animate-fade-in-up delay-800">
            <h4 className="text-lg w-full md:text-2xl font-medium quote-text text-left leading-[1.5] mb-0">
              Share what sticks with you
            </h4>
            <p className="text-lg w-full md:text-xl mb-4 md:mb-6 max-w-3xl leading-tight">
              Great literature is meant to be shared. Inspire someone else's reading journey.
            </p>
            <div className="relative max-h-[350px] md:max-h-[300px] min-w-[180px] px-4">
              {/* Phone mockup */}
              <img 
                src="/share.webp" 
                alt="Ray App Preview" 
                className="h-auto object-contain mt-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
