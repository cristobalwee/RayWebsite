
const WhyRaySection = () => {
  return (
    <section className="py-32 relative reveal-section" id="about">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Why Ray?
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
          Inspired by Ray Bradbury, Ray was born out of a simple directive of his:
          read a short story for 1,000 nights. We took this quote and ran with it,
          creating our own vision for a daily reading experience.
        </p>

        {/* Quote box */}
        <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500">
          <div className="text-6xl text-gray-600 mb-6">"</div>
          
          <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed italic">
            I'll give you a programme to follow every night. Very simple
            programme. For the next thousand nights, before you go to bed
            every night, read one short story.
          </blockquote>
          
          <cite className="text-gray-400 text-lg">– Ray Bradbury</cite>
        </div>
      </div>
    </section>
  );
};

export default WhyRaySection;
