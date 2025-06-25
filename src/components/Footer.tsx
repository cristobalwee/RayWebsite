import { useLenis } from "../contexts/LenisContext";

const Footer = () => {
  const { lenisRef } = useLenis();

  return (
    <footer className="border-t py-8 mx-8 md:py-16 max-w-7xl lg:mx-auto">
      <div className="lg:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-stretch justify-between gap-8 mb-8">
          <div className="flex flex-col items-start justify-between gap-4">
            <div className="text-xl md:text-2xl font-bold logo">Ray<span className='text-[#C6698B]'>.</span></div>
            <p className="text-xs md:text-sm text-[#888888]">
              © 2025 Ray. One reading a day.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start justify-between gap-8 sm:gap-16 md:gap-64 w-full md:w-auto">
            <div className="space-y-2 md:space-y-3">
              <a onClick={() => lenisRef.current.scrollTo('#about')} className="block transition-all duration-300 hover:text-[#AAA] hover:translate-x-1 cursor-pointer text-sm md:text-base">
                Why Ray?
              </a>
              <a onClick={() => lenisRef.current.scrollTo('#library')} className="block transition-all duration-300 hover:text-[#AAA] hover:translate-x-1 cursor-pointer text-sm md:text-base">
                Browse the Library
              </a>
              <a href="#" className="block transition-all duration-300 hover:text-[#AAA] hover:translate-x-1 text-sm md:text-base">
                Get the App
              </a>
            </div>

            <div className="space-y-2 md:space-y-3">
              <a href="#" className="block transition-all duration-300 hover:text-[#AAA] hover:translate-x-1 text-sm md:text-base">
                Contact
              </a>
              <a href="https://cristobalgrana.me/" target="_blank" rel="noopener noreferrer" className="block transition-all duration-300 hover:text-[#AAA] hover:translate-x-1 text-sm md:text-base">
                About the developer
              </a>
              <a href="#" className="block transition-all duration-300 hover:text-[#AAA] hover:translate-x-1 text-sm md:text-base">
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
