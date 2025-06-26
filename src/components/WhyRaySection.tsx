const WhyRaySection = () => {
  return (
    <section className="pt-32 md:pt-64 relative reveal-section" id="about">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 md:mb-8">
          <span>
            Why Ray?
          </span>
        </h2>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto leading-tight">
          Inspired by Ray Bradbury, Ray was born out of a simple directive of his:
          read a short story every night, for 1,000 nights. We took this quote and ran with it,
          creating our own vision for a daily reading experience.
        </p>

        {/* Quote box */}
        <div className="max-w-4xl mx-auto rounded-[24px] md:rounded-[36px] p-6 md:p-12 transition-all duration-500 bg-[#222222] flex flex-col items-start justify-start">
          <div className="text-3xl md:text-5xl mb-6 md:mb-8 quote-text text-[#9C9C9C]">"</div>
          
          <blockquote className="text-lg md:text-2xl lg:text-3xl font-medium mb-8 md:mb-14 quote-text text-left leading-[1.5]">
            I'll give you a programme to follow every night. Very simple
            programme. For the next thousand nights, before you go to bed
            every night, read one short story.
          </blockquote>
          
          <cite className="text-base md:text-xl">– Ray Bradbury</cite>
        </div>
      </div>
    </section>
  );
};

export default WhyRaySection;
