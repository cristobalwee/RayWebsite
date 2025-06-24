
const DiveInSection = () => {
  return (
    <section className="py-32 relative reveal-section">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8">
          <span className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">
            Day 1 / 1000
          </span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold mb-16 leading-tight">
          Ready to dive into your
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            1000-day journey?
          </span>
        </h2>
        
        <button className="bg-white text-gray-900 px-12 py-6 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl">
          Get the App
        </button>
      </div>
    </section>
  );
};

export default DiveInSection;
