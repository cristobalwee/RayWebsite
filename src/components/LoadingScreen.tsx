import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Fade in the loader after a short delay
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress > 85) progress = 85;
      setLoadingProgress(Math.min(progress, 85));
    }, 150);

    // Function to check if custom fonts are loaded
    const checkCustomFontsLoaded = async () => {
      const fonts = [
        'MartinaPlantijn-Black',
        'Metric-Light', 
        'Metric-Regular',
        'Metric-Medium'
      ];

      // Wait for all fonts to be ready
      await document.fonts.ready;
      
      // Additional check for custom fonts
      for (const font of fonts) {
        await document.fonts.load(`16px ${font}`);
      }
    };

    // Function to preload local images
    const preloadLocalImages = async () => {
      const localImages = [
        '/hero.webp',
        '/reader.webp', 
        '/vault.webp',
        '/favicon.png',
        '/favicon-dark.png'
      ];

      const imagePromises = localImages.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false); // Continue even if some images fail
          img.src = src;
        });
      });

      await Promise.all(imagePromises);
    };

    // Function to wait for all resources
    const waitForResources = async () => {
      try {
        // Wait for fonts and images in parallel
        await Promise.all([
          checkCustomFontsLoaded(),
          preloadLocalImages()
        ]);
      } catch (error) {
        console.warn('Some resources failed to load:', error);
      }
    };

    // Start checking for resources after a minimum loading time
    setTimeout(() => {
      waitForResources();
    }, 1000);

    // Always complete to 100% and wait 400ms before fading out
    const completeLoading = () => {
      // Clear the progress interval to prevent it from going backwards
      clearInterval(progressInterval);
      setLoadingProgress(100);
      
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          onLoadingComplete();
        }, 400); // Wait for slide animation to complete
      }, 600); // Wait 400ms at 100% before fading out
    };

    // Set a minimum loading time and ensure we always reach 100%
    setTimeout(() => {
      completeLoading();
    }, 2000); // Minimum 2 seconds total loading time

    return () => {
      clearTimeout(fadeInTimer);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-all duration-500 ease-in-out ${
        isVisible 
          ? 'opacity-100' 
          : 'opacity-0'
      } ${
        !isVisible && loadingProgress === 100 ? 'transform -translate-y-full' : ''
      }`}
    >
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'MartinaPlantijn-Black, serif' }}>
            Ray
          </h1>
          <p className="text-gray-300 text-lg" style={{ fontFamily: 'Metric-Light, sans-serif' }}>
            Loading your experience...
          </p>
        </div>
        
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
        
        <div className="mt-4 text-gray-400 text-sm" style={{ fontFamily: 'Metric-Regular, sans-serif' }}>
          {Math.round(loadingProgress)}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 