
const LibrarySection = () => {
  return (
    <section className="py-32 relative reveal-section" id="library">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              1000+ short stories,
              <br />
              poems, and essays at your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                fingertips
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Access a curated library of 1000+ short-form readings, available
              offline anytime – yours to explore, yours to keep.
            </p>
            
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
              Browse the Library
            </button>
          </div>

          <div className="relative">
            {/* Phone mockup */}
            <div className="w-80 h-[650px] bg-gray-800 rounded-[3rem] p-3 mx-auto transform hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full bg-gray-900 rounded-[2.5rem] relative overflow-hidden">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-full"></div>
                <div className="p-6 pt-12">
                  <div className="text-center mb-8">
                    <div className="text-white text-lg font-semibold mb-2">Friday, June 20</div>
                    <div className="text-gray-400 text-sm">Day 1 / 1000</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors duration-300">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg mb-3"></div>
                      <div className="text-white font-semibold text-sm mb-1">The Story of an Hour</div>
                      <div className="text-gray-400 text-xs mb-2">by Kate Chopin</div>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-400 text-xs">Fiction</span>
                        <span className="text-gray-500 text-xs">4 min</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors duration-300">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg mb-3"></div>
                      <div className="text-white font-semibold text-sm mb-1">A Modest Proposal</div>
                      <div className="text-gray-400 text-xs mb-2">by Jonathan Swift</div>
                      <div className="flex items-center justify-between">
                        <span className="text-green-400 text-xs">Essay</span>
                        <span className="text-gray-500 text-xs">12 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibrarySection;
