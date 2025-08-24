import { useState, useEffect, useMemo } from 'react';
import { X } from 'lucide-react';
import { READINGS, CATEGORY_COLORS } from '../constants';
import ReadingThumbnail from './ReadingThumbnail';

interface LibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const LibraryModal = ({ isOpen, onClose }: LibraryModalProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All readings');
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

  const categories = ['All readings', 'Short_stories', 'Poems', 'Essays'];
  
  const filteredReadings = useMemo(() => {
    const filtered = selectedCategory === 'All readings' 
      ? READINGS 
      : READINGS.filter(reading => reading.category === selectedCategory);
    
    // Shuffle if showing all readings, otherwise show first 10
    return selectedCategory === 'All readings' 
      ? shuffleArray(filtered)
      : filtered;
  }, [selectedCategory]);

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
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 max-h-[min(1000px, 90dvh)] ${
          isAnimatingOut ? 'opacity-0' : isAnimatingIn ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className={`relative bg-background rounded-[16px] md:rounded-[24px] w-full max-w-7xl h-[90dvh] max-h-[1000px] overflow-y-auto transition-all duration-300 p-3 md:p-5 ${
        isAnimatingOut 
          ? 'opacity-0 scale-95 translate-y-4' 
          : isAnimatingIn 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4'
      }`}>
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 z-10 p-2 bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <X size={20} className="md:w-6 md:h-6 text-gray-700" />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center justify-center px-4 md:px-8 pt-8 md:pt-12 pb-4 md:pb-6 gap-4">
          <h2 className="text-4xl md:text-5xl font-bold">The Vault</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl md:max-w-xl text-center leading-tight">
            Ray comes preloaded with a vault of 1000+ timeless readings for your journey, always available offline and constantly getting updated.
          </p>
        </div>

        {/* Filters */}
        <div className="px-4 md:px-8 pb-6 md:pb-10">
          <div className="flex gap-2 md:gap-3 overflow-x-auto mx-[-28px] px-[28px] justify-start sm:justify-center sm:mx-0 sm:px-0 sm:flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 md:px-6 py-2 rounded-full md:text-lg font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === category
                    ? 'border border-[transparent] bg-primary text-primary-foreground'
                    : 'border border-[#464646] text-secondary-foreground hover:bg-muted'
                }`}
              >
                {category === 'Short_stories' ? 'Short stories' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-2 md:px-8 pb-4 md:pb-8 overflow-hidden relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
            {filteredReadings.map((reading) => (
              <div
                key={reading.id}
                className="bg-card rounded-[12px] md:rounded-[16px] overflow-hidden flex flex-col justify-center"
              >
                <div className="overflow-hidden flex items-center justify-center pt-4 md:pt-6 px-5 md:px-6">
                  <ReadingThumbnail 
                    label={reading.label}
                    title={reading.title}
                    author={reading.author}
                    className="w-full max-w-[120px] md:max-w-[130px]"
                  />
                </div>
                <div className="p-3 md:p-5">
                  <h3 className="font-bold text-sm md:text-lg leading-tight mb-1 line-clamp-2">
                    {reading.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-2 md:mb-3">
                    {reading.author}
                  </p>
                  <span
                    className="inline-block px-3 py-0.5 md:py-1.5 rounded-full font-medium text-white text-sm"
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
        <div className="sticky bottom-[-1px] left-0 right-0">
          <div className="absolute bottom-[-20px] left-0 right-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
          
          {/* Locked Content Message */}
          <div className="absolute bottom-4 text-center w-full">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 max-w-sm md:max-w-none mx-auto">
              Get the app to see all 1000+ readings
            </h3>
            <p className="text-lg text-muted-foreground">
              Unlock the full library with Ray
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryModal; 