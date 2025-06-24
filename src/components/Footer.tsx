
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">Ray</div>
            <p className="text-gray-400 text-sm">
              © 2025 Ray. One reading a day.
            </p>
          </div>
          
          <div>
            <div className="space-y-3">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors duration-300">
                About
              </a>
              <a href="#library" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Browse the Library
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Get the App
              </a>
            </div>
          </div>
          
          <div>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Contact
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">
                About the developer
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">
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
