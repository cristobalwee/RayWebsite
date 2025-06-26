import { useState, useEffect } from 'react';
import { useLenis } from '../contexts/LenisContext';

const Header = () => {
  const { lenisRef } = useLenis();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-sm p-6 md:px-10 ${
      isScrolled ? 'md:py-4' : 'md:py-8'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a className="text-xl md:text-2xl font-bold logo cursor-pointer" onClick={() => lenisRef.current.scrollTo(0, 0)}>Ray<span className='text-[#C6698B]'>.</span></a>
        
        <nav className="flex items-center space-x-4 md:space-x-8">
          <a onClick={() => lenisRef.current.scrollTo('#library')} className="hidden md:block transition-all duration-300 hover:text-[#AAA] hover:scale-105 cursor-pointer text-sm md:text-base">
            Browse the Library
          </a>
          <a onClick={() => lenisRef.current.scrollTo('#about')} className="hidden md:block transition-all duration-300 hover:text-[#AAA] hover:scale-105 cursor-pointer text-sm md:text-base">
            Why Ray?
          </a>
          <button className="border border-[#464646] rounded-lg transition-all duration-300 hover:scale-105 text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
            Get the App
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
