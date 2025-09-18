import { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LibrarySection from '../components/LibrarySection';
import UISection from '../components/UISection';
import WhyRaySection from '../components/WhyRaySection';
import DiveInSection from '../components/DiveInSection';
import Footer from '../components/Footer';
import { LenisProvider, useLenis } from '../contexts/LenisContext';
import FeaturesSection from '../components/FeaturesSection';

const IndexContent = () => {
  const { lenisRef } = useLenis();

  useEffect(() => {
    const initLenis = async () => {
      // Reset scroll position to top on page load
      window.scrollTo(0, 0);
      
      const Lenis = (await import('@studio-freight/lenis')).default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenisRef.current = lenis;

      // Also reset Lenis scroll position
      lenis.scrollTo(0, { immediate: true });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Intersection Observer for section animations
      const getThreshold = () => {
        // Use different thresholds based on screen size
        if (window.innerWidth < 768) {
          // Mobile: lower threshold for single column layout
          return 0.2;
        } else if (window.innerWidth < 1024) {
          // Tablet: medium threshold for 2-column layout
          return 0.3;
        } else {
          // Desktop: higher threshold for 3-column layout
          return 0.4;
        }
      };

      const observerOptions = {
        threshold: getThreshold(),
        rootMargin: '0px 0px -100px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      }, observerOptions);

      // Observe all sections
      const sections = document.querySelectorAll('.reveal-section');
      sections.forEach((section) => {
        section.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-1000', 'ease-out', 'delay-200');
        observer.observe(section);
      });

      // Handle resize events to update threshold
      const handleResize = () => {
        // Disconnect current observer
        observer.disconnect();
        
        // Create new observer with updated threshold
        const newObserverOptions = {
          threshold: getThreshold(),
          rootMargin: '0px 0px -100px 0px'
        };
        
        const newObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
          });
        }, newObserverOptions);
        
        // Re-observe all sections
        sections.forEach((section) => {
          newObserver.observe(section);
        });
        
        // Update the observer reference
        Object.assign(observer, newObserver);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        observer.disconnect();
        window.removeEventListener('resize', handleResize);
        lenis.destroy();
      };
    };

    initLenis();
  }, [lenisRef]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <LibrarySection />
        <UISection />
        <FeaturesSection />
        <WhyRaySection />
        <DiveInSection />
      </main>
      <Footer />
    </div>
  );
};

const Index = () => {
  return (
    <LenisProvider>
      <IndexContent />
    </LenisProvider>
  );
};

export default Index;
