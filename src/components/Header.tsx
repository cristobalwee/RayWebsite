
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
      isScrolled ? 'bg-gray-900/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold">Ray</div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
            About
          </a>
          <a href="#library" className="text-gray-300 hover:text-white transition-colors duration-300">
            Browse the Library
          </a>
        </nav>

        <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105">
          Get the App
        </button>
      </div>
    </header>
  );
};

export default Header;
