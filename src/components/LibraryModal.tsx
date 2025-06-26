import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { READINGS, CATEGORY_COLORS } from '../constants';

interface LibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LibraryModal = ({ isOpen, onClose }: LibraryModalProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All readings');
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

  const categories = ['All readings', 'Short_stories', 'Poems', 'Essays'];
  
  const filteredReadings = selectedCategory === 'All readings' 
    ? READINGS 
    : READINGS.filter(reading => reading.category === selectedCategory);

  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      onClose();
      setIsAnimatingOut(false);
    }, 200);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Trigger animation in after a brief delay to ensure DOM is ready
      setTimeout(() => setIsAnimatingIn(true), 10);
    } else {
      document.body.style.overflow = 'unset';
      setIsAnimatingIn(false);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  if (!isOpen && !isAnimatingOut) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" data-lenis-prevent="true">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimatingOut ? 'opacity-0' : isAnimatingIn ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className={`relative bg-background rounded-[16px] md:rounded-[24px] w-full max-w-7xl max-h-[95vh] md:max-h-[90vh] overflow-hidden transition-all duration-300 p-3 md:p-5 ${
        isAnimatingOut 
          ? 'opacity-0 scale-95 translate-y-4' 
          : isAnimatingIn 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4'
      }`}>
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-8 right-8 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X size={20} className="md:w-6 md:h-6 text-gray-700" />
        </button>

        {/* Header */}
        <div className="flex items-center justify-between px-4 md:px-8 pt-4 md:pt-8 pb-4 md:pb-6">
          <h2 className="text-4xl md:text-5xl font-bold">The Vault</h2>
        </div>

        {/* Filters */}
        <div className="px-4 md:px-8 pb-4 md:pb-6">
          <div className="flex gap-2 md:gap-3 overflow-x-auto mx-[-28px] px-[28px]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full md:text-lg font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-muted'
                }`}
              >
                {category === 'Short_stories' ? 'Short stories' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-2 md:px-8 pb-4 md:pb-8 overflow-hidden relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-6">
            {filteredReadings.map((reading) => (
              <div
                key={reading.id}
                className="bg-card rounded-[12px] md:rounded-[16px] overflow-hidden flex flex-col justify-between"
              >
                <div className="overflow-hidden flex items-center justify-center pt-4 md:pt-6">
                  <img
                    src={reading.imageUrl}
                    alt={reading.title}
                    className="w-1/2 object-cover rounded-[6px] md:rounded-[8px]"
                  />
                </div>
                <div className="p-3 md:p-5">
                  <h3 className="font-bold text-sm md:text-lg mb-1 line-clamp-2">
                    {reading.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-2 md:mb-3">
                    {reading.author}
                  </p>
                  <span
                    className="inline-block px-1 md:px-2 py-0.5 md:py-1 rounded-full text-xs font-medium text-white text-sm"
                    style={{ 
                      backgroundColor: CATEGORY_COLORS[reading.category as keyof typeof CATEGORY_COLORS],
                    }}
                  >
                    {reading.category === 'Short_stories' ? 'Short stories' : reading.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Blur Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
          
          {/* Locked Content Message */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center w-full">
            <h3 className="text-2xl font-semibold text-foreground mb-2 md:mb-4">
              Get the app to see all 1000+ readings
            </h3>
            <p className="text-lg text-muted-foreground">
              Unlock the full library with Ray
            </p>
          </div>
      </div>
    </div>
  );
};

export default LibraryModal; 