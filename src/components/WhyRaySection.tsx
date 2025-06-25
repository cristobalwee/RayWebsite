const WhyRaySection = () => {
  return (
    <section className="pt-64 relative reveal-section" id="about">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          <span>
            Why Ray?
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          Inspired by Ray Bradbury, Ray was born out of a simple directive of his:
          read a short story for 1,000 nights. We took this quote and ran with it,
          creating our own vision for a daily reading experience.
        </p>

        {/* Quote box */}
        <div className="max-w-4xl mx-auto rounded-[36px] p-12 transition-all duration-500 bg-[#222222] flex flex-col items-start justify-start">
          <div className="text-5xl mb-12 quote-text text-[#9C9C9C]">"</div>
          
          <blockquote className="text-2xl md:text-3xl font-medium mb-14 quote-text text-left">
            I'll give you a programme to follow every night. Very simple
            programme. For the next thousand nights, before you go to bed
            every night, read one short story.
          </blockquote>
          
          <cite className="text-xl">– Ray Bradbury</cite>
        </div>
      </div>
    </section>
  );
};

export default WhyRaySection;
