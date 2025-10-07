import { useLenis } from "../contexts/LenisContext";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePageTransition } from "../contexts/PageTransitionContext";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

const Footer = () => {
  const { lenisRef } = useLenis();
  const location = useLocation();
  const navigate = useNavigate();
  const { startTransition } = usePageTransition();
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const handleSectionClick = async (section: string) => {
    if (location.pathname === '/') {
      // On landing page, scroll to section
      lenisRef.current.scrollTo(section);
    } else {
      // On other pages, navigate to landing page with hash
      await startTransition();
      navigate(`/${section}`);
    }
  };

  return (
    <>
      <footer className="border-t py-8 mx-8 md:py-16 max-w-7xl xl:mx-auto">
        <div className="lg:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-stretch justify-between gap-8 mb-8">
            <div className="flex flex-col items-start justify-between gap-4">
              <div className="text-xl md:text-2xl font-bold logo">Ray<span className='text-[#C6698B]'>.</span></div>
              <p className="text-xs md:text-sm text-[#888888]">
                © 2025 Ray. One reading a day.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start justify-between gap-8 sm:gap-16 md:gap-64 w-full md:w-auto">
              <div className="space-y-2 md:space-y-3">
                <a onClick={() => handleSectionClick('#about')} className="block transition-all duration-300 hover:text-[#AAA] hover:translate-x-1 cursor-pointer text-sm md:text-base">
                  Why Ray?
                </a>
                <a onClick={() => handleSectionClick('#library')} className="block transition-all duration-300 hover:text-[#AAA] hover:translate-x-1 cursor-pointer text-sm md:text-base">
                  Preview the Vault
                </a>
                <a href="https://apps.apple.com/us/app/ray-one-reading-a-day/id6747955197" target="_blank" rel="noopener noreferrer" className="block transition-all duration-300 hover:text-[#AAA] hover:translate-x-1 text-sm md:text-base">
                  Get the App
                </a>
              </div>

              <div className="space-y-2 md:space-y-3">
                <a href="mailto:hello@readray.app" target="_blank" rel="noopener noreferrer" className="block transition-all duration-300 hover:text-[#AAA] hover:translate-x-1 text-sm md:text-base">
                  Contact
                </a>
                <a href="https://cristobalgrana.me/" target="_blank" rel="noopener noreferrer" className="block transition-all duration-300 hover:text-[#AAA] hover:translate-x-1 text-sm md:text-base">
                  About the developer
                </a>
                <a onClick={() => setIsPrivacyModalOpen(true)} className="block transition-all duration-300 hover:text-[#AAA] hover:translate-x-1 cursor-pointer text-sm md:text-base">
                  Privacy policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
    </>
  );
};

export default Footer;
