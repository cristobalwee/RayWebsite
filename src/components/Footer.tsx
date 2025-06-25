const Footer = () => {
  return (
    <footer className="border-t py-16 max-w-7xl mx-auto">
      <div className="px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-start justify-between gap-4">
            <div className="text-2xl font-bold logo">Ray<span className='text-[#C6698B]'>.</span></div>
            <p className="text-sm">
              © 2025 Ray. One reading a day.
            </p>
          </div>
          
          <div>
            <div className="space-y-3">
              <a href="#about" className="block transition-colors duration-300">
                About
              </a>
              <a href="#library" className="block transition-colors duration-300">
                Browse the Library
              </a>
              <a href="#" className="block transition-colors duration-300">
                Get the App
              </a>
            </div>
          </div>
          
          <div>
            <div className="space-y-3">
              <a href="#" className="block transition-colors duration-300">
                Contact
              </a>
              <a href="#" className="block transition-colors duration-300">
                About the developer
              </a>
              <a href="#" className="block transition-colors duration-300">
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
