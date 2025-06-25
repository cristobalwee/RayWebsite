const LibrarySection = () => {
  return (
    <section className="pt-64 relative reveal-section" id="library">
      <div className="max-w-6xl mx-auto flex flex-row items-center justify-center rounded-[36px] py-24 px-20 bg-[#222222] overflow-hidden">
        <div className="flex flex-row gap-20 items-start justify-around">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              1000+ short stories, poems, and essays at your fingertips
            </h2>
            
            <p className="text-xl mb-8 max-w-3xl">
              Access a curated library of 1000+ short-form readings, available
              offline anytime – yours to explore, yours to keep.
            </p>
            
            <button className="btn-secondary">
              Browse the Library
            </button>
          </div>

          <div className="relative max-h-[200px]">
            {/* Phone mockup */}
            <img 
              src="/vault.webp" 
              alt="Ray App Preview" 
              className="h-auto object-contain mt-[-3rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibrarySection;
