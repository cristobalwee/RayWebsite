import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

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
      <div className={`relative bg-background rounded-[16px] md:rounded-[24px] w-full max-w-4xl max-h-[95vh] md:max-h-[90vh] overflow-hidden transition-all duration-300 p-3 md:p-5 ${
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
          <h2 className="text-4xl md:text-5xl font-bold">Privacy Policy</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl md:max-w-xl text-center leading-tight">
            Last updated: June 2025
          </p>
        </div>

        {/* Content */}
        <div className="px-4 md:px-8 pb-4 md:pb-8 overflow-y-auto max-h-[60vh]">
          <div className="space-y-6 text-sm md:text-base leading-relaxed">
            <section>
              <h3 className="text-xl font-semibold mb-3">Introduction</h3>
              <p className="text-muted-foreground">
                Ray ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our reading application.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Information We Don't Collect</h3>
              <p className="text-muted-foreground mb-3">
                Ray is designed with privacy in mind. We do not collect, store, or process any personal information from our users, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Personal identification information (name, email, phone number)</li>
                <li>Account credentials or login information</li>
                <li>Reading preferences or history</li>
                <li>Device information or location data</li>
                <li>Usage analytics or tracking data</li>
                <li>Cookies or similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">How Ray Works</h3>
              <p className="text-muted-foreground mb-3">
                Ray operates as a standalone reading application that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Functions entirely offline once installed</li>
                <li>Does not require user accounts or registration</li>
                <li>Does not connect to external servers for user data</li>
                <li>Stores all content locally on your device</li>
                <li>Does not share any information with third parties</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Third-Party Services</h3>
              <p className="text-muted-foreground">
                Ray does not integrate with third-party services that collect user data. Any external links (such as developer information) are provided for informational purposes only and are not part of our data collection practices.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Data Security</h3>
              <p className="text-muted-foreground">
                Since we do not collect or store any personal information, there is no risk of data breaches or unauthorized access to user information. All reading content is stored locally on your device and remains under your control.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Children's Privacy</h3>
              <p className="text-muted-foreground">
                Ray does not knowingly collect any personal information from children under 13. Since we do not collect any user data, parents can be assured that their children's privacy is protected when using our application.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Changes to This Policy</h3>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us through the developer's website or the contact information provided in the application.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal; 