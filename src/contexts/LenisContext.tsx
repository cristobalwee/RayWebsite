import { createContext, useContext, useRef, ReactNode } from 'react';

interface LenisContextType {
  lenisRef: React.MutableRefObject<any>;
}

const LenisContext = createContext<LenisContextType | undefined>(undefined);

interface LenisProviderProps {
  children: ReactNode;
}

export const LenisProvider = ({ children }: LenisProviderProps) => {
  const lenisRef = useRef<any>(null);

  return (
    <LenisContext.Provider value={{ lenisRef }}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = (): LenisContextType => {
  const context = useContext(LenisContext);
  if (context === undefined) {
    throw new Error('useLenis must be used within a LenisProvider');
  }
  return context;
}; 