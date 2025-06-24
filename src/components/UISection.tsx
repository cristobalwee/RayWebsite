
const UISection = () => {
  return (
    <section className="py-32 relative reveal-section">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          No accounts, no subscriptions, no
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
            distractions (and a clean, beautiful UI)
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
          Our focus with Ray is to create a beautiful, focused reading experience with
          seamless interactions. Enjoy it to the fullest without having to create an account
          or pay a monthly subscription.
        </p>

        {/* Phone mockup */}
        <div className="relative max-w-sm mx-auto">
          <div className="w-80 h-[650px] bg-gray-800 rounded-[3rem] p-3 mx-auto transform hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full bg-gray-900 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-full"></div>
              <div className="p-6 pt-12">
                <div className="text-center mb-8">
                  <div className="text-gray-400 text-sm mb-2">Let's dive in.</div>
                  <div className="text-white text-xl font-semibold mb-2">Friday, June 20</div>
                  <div className="text-gray-400 text-sm">Day 1 / 1000</div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg mx-auto mb-4"></div>
                  <div className="text-center">
                    <div className="text-white font-semibold text-sm mb-1">A Modest Proposal</div>
                    <div className="text-gray-400 text-xs">by Jonathan Swift</div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Start reading
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UISection;
