
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in">
          Expand your mind, one
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            reading at a time
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
          One short reading a day. 1000 days of thought. No distractions. No
          subscriptions. Just timeless words — beautifully delivered.
        </p>
        
        <button className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-fade-in delay-500">
          Get the App
        </button>
      </div>

      {/* Phone mockup */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 opacity-20">
        <div className="w-72 h-[600px] bg-gray-800 rounded-[3rem] p-2">
          <div className="w-full h-full bg-gray-900 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-full"></div>
            <div className="p-6 pt-12">
              <div className="text-center mb-8">
                <div className="text-white text-lg font-semibold mb-2">Friday, June 20</div>
                <div className="text-gray-400 text-sm">Day 1 / 1000</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg mb-3"></div>
                <div className="text-white font-semibold text-sm">The Story of an Hour</div>
                <div className="text-gray-400 text-xs">by Kate Chopin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
