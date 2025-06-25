const UISection = () => {
  return (
    <section className="pt-64 relative reveal-section">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
          No accounts, no subscriptions, no
          <br />
          <span>
            distractions (and a clean, beautiful UI)
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl">
          Our focus with Ray is to create a beautiful, focused reading experience with
          seamless interactions. Enjoy it to the fullest without having to create an account
          or pay a monthly subscription.
        </p>

        <img 
          src="/reader.webp" 
          alt="Ray App Preview" 
          className="h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default UISection;
