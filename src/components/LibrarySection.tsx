import { useState } from 'react';
import LibraryModal from './LibraryModal';

const LibrarySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="pt-32 md:pt-64 relative reveal-section px-8 md:px-12" id="library">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center rounded-[24px] md:rounded-[36px] py-12 md:py-24 px-6 md:px-20 bg-[#222222] overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center md:items-start justify-around text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                1000+ short stories, poems, and essays at your fingertips
              </h2>
              
              <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-3xl">
                Access a curated library of 1000+ short-form readings, available
                offline anytime – yours to explore, yours to keep.
              </p>
              
              <button 
                className="btn-secondary"
                onClick={() => setIsModalOpen(true)}
              >
                Browse the Library
              </button>
            </div>

            <div className="relative max-h-[350px] md:max-h-[200px]">
              {/* Phone mockup */}
              <img 
                src="/vault.webp" 
                alt="Ray App Preview" 
                className="h-auto object-contain mt-0 md:mt-[-3rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <LibraryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default LibrarySection;
