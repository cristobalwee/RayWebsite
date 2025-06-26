const UISection = () => {
  return (
    <section className="pt-32 md:pt-64 relative reveal-section">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 md:mb-8 max-w-2xl leading-tight">
          No accounts, no subscriptions, no distractions.
        </h2>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl leading-tight">
          Our goal with Ray is to create a beautiful, focused reading experience with
          seamless interactions. Enjoy it to the fullest without having to create an account
          or pay a monthly subscription.
        </p>

        <img 
          src="/reader.webp" 
          alt="Ray App Preview" 
          className="h-auto object-contain max-w-4xl mx-8 md:mx-0 max-w-full"
        />
      </div>
    </section>
  );
};

export default UISection;
