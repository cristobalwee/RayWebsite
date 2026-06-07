import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LenisProvider, useLenis } from "../contexts/LenisContext";

const PrivacyPolicyContent = () => {
  const { lenisRef } = useLenis();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initLenis = async () => {
      window.scrollTo(0, 0);

      const Lenis = (await import("@studio-freight/lenis")).default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenisRef.current = lenis;
      lenis.scrollTo(0, { immediate: true });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      setTimeout(() => {
        setIsLoaded(true);
      }, 100);

      return () => {
        lenis.destroy();
      };
    };

    initLenis();
  }, [lenisRef]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="max-w-3xl mx-auto px-6 pt-32 md:pt-48 pb-16">
        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Header */}
          <div className="flex flex-col items-center justify-center pb-8 md:pb-12 gap-4">
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-center leading-tight">
              Last updated: June 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6 text-sm md:text-base leading-relaxed">
            <section>
              <h3 className="text-xl font-semibold mb-3">Introduction</h3>
              <p className="text-muted-foreground">
                Ray ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our reading application. Ray is free to download and includes a 3-day free trial, after which full access is available as a one-time lifetime purchase.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Information We Don't Collect</h3>
              <p className="text-muted-foreground mb-3">
                Ray is designed with privacy in mind. We do not ask you to create an account, and we do not collect or store any of the following:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Your name, email address, or phone number</li>
                <li>Account credentials or login information</li>
                <li>Your reading preferences or reading history</li>
                <li>Location data</li>
                <li>Behavioral analytics or third-party advertising trackers</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Purchases and Subscriptions</h3>
              <p className="text-muted-foreground mb-3">
                We use RevenueCat to manage the free trial and process your lifetime purchase. The purchase itself is handled by the Apple App Store; we never see or receive your payment card details.
              </p>
              <p className="text-muted-foreground mb-3">
                To manage your entitlement, RevenueCat receives a pseudonymous user identifier (a random ID that is not linked to your name or email) along with purchase-related data such as whether you are in the trial period and whether you have made the lifetime purchase. RevenueCat acts as a data processor on our behalf.
              </p>
              <p className="text-muted-foreground">
                You can review how RevenueCat handles data, including their Data Processing Addendum and list of sub-processors, in their privacy documentation at{" "}
                <a
                  href="https://www.revenuecat.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#AAA]"
                >
                  revenuecat.com/privacy
                </a>
                .
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Trial Management</h3>
              <p className="text-muted-foreground">
                To keep your 3-day free trial consistent and prevent abuse, we operate a small backend (a Cloudflare Worker) that stores your pseudonymous RevenueCat user identifier together with timestamps recording when your trial started and ends. This is the only information our backend stores, and it is used solely to manage trial access. It is not linked to your name, email, or any other identifying information.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Notifications</h3>
              <p className="text-muted-foreground">
                Any reminders or reading notifications are scheduled locally on your device. We do not use push notification services, and no push tokens or device identifiers are sent to us or to any third party for this purpose.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Reading Content</h3>
              <p className="text-muted-foreground">
                Your reading content and any in-app activity remain on your device. We do not collect or transmit what you read or how you read it.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Data Security</h3>
              <p className="text-muted-foreground">
                The limited data we process — a pseudonymous identifier and trial timestamps — is handled over secure, encrypted connections. Because we do not collect names, emails, or accounts, this data cannot be used on its own to identify you.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Children's Privacy</h3>
              <p className="text-muted-foreground">
                Ray does not knowingly collect any personal information from children under 13. We do not collect names, emails, or accounts from any user, and the limited purchase and trial data described above is pseudonymous.
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
      </main>
      <Footer />
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <LenisProvider>
      <PrivacyPolicyContent />
    </LenisProvider>
  );
};

export default PrivacyPolicy;
