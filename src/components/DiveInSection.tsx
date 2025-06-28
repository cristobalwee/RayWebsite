const DiveInSection = () => {
  return (
    <section className="py-32 md:py-64 relative reveal-section">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-6 md:mb-8">
          <span className="inline-block px-4 py-2 rounded-lg text-xs md:text-sm bg-secondary">
            Day 1 / 1000
          </span>
        </div>
        
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-8 md:mb-14 leading-tight">
          Ready to dive into your
          <br className="hidden sm:block" />
          &nbsp;1000-day journey?
        </h2>
        
        <button className="btn-primary text-lg md:text-xl shadow-2xl">
          $9.99 on the App Store
        </button>
      </div>
    </section>
  );
};

export default DiveInSection;
