import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LibrarySection from '../components/LibrarySection';
import UISection from '../components/UISection';
import WhyRaySection from '../components/WhyRaySection';
import DiveInSection from '../components/DiveInSection';
import Footer from '../components/Footer';

const Index = () => {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import('@studio-freight/lenis')).default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Intersection Observer for section animations
      const observerOptions = {
        threshold: 0.4,
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

      return () => {
        observer.disconnect();
        lenis.destroy();
      };
    };

    initLenis();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <LibrarySection />
        <UISection />
        <WhyRaySection />
        <DiveInSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
