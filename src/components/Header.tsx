import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'backdrop-blur-sm py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold logo">Ray<span className='text-[#C6698B]'>.</span></div>
        
        <nav className="flex items-center space-x-8">
          <a href="#about" className="hidden md:block transition-colors duration-300">
            About
          </a>
          <a href="#library" className="hidden md:block transition-colors duration-300">
            Browse the Library
          </a>
          <button className="btn-secondary">
            Get the App
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
