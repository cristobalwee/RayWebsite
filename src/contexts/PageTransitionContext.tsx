import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface PageTransitionContextType {
  isTransitioning: boolean;
  isReturningToIndex: boolean;
  startTransition: () => Promise<void>;
  markLeavingIndex: () => void;
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined);

interface PageTransitionProviderProps {
  children: ReactNode;
}

export const PageTransitionProvider = ({ children }: PageTransitionProviderProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasLeftIndex, setHasLeftIndex] = useState(false);

  const startTransition = useCallback(async () => {
    setIsTransitioning(true);

    // Wait for fade-out animation to complete
    await new Promise(resolve => setTimeout(resolve, 400));

    // Reset transition state after navigation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 100);
  }, []);

  const markLeavingIndex = useCallback(() => {
    setHasLeftIndex(true);
  }, []);

  return (
    <PageTransitionContext.Provider value={{ isTransitioning, isReturningToIndex: hasLeftIndex, startTransition, markLeavingIndex }}>
      <div className={`transition-opacity duration-400 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = (): PageTransitionContextType => {
  const context = useContext(PageTransitionContext);
  if (context === undefined) {
    throw new Error('usePageTransition must be used within a PageTransitionProvider');
  }
  return context;
};