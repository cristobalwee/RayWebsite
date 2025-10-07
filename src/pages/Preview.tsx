import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LenisProvider, useLenis } from "../contexts/LenisContext";
import { usePageTransition } from "../contexts/PageTransitionContext";
import ReadingThumbnail from "../components/ReadingThumbnail";
import ReadingModal from "../components/ReadingModal";
import { READINGS, READING_DAYS, VAULT_READINGS, CATEGORY_COLORS, getSlug } from "../constants";
import { preloadReading } from "../utils/readingLoader";
import { Clock } from "lucide-react";

const PreviewContent = () => {
  const { lenisRef } = useLenis();
  const { startTransition } = usePageTransition();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReading, setSelectedReading] = useState<
    (typeof READINGS)[0] | null
  >(null);

  useEffect(() => {
    const initLenis = async () => {
      // Reset scroll position to top on page load
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

      // Trigger fade-in after a short delay
      setTimeout(() => {
        setIsLoaded(true);
      }, 100);

      return () => {
        lenis.destroy();
      };
    };

    initLenis();
  }, [lenisRef]);

  // Helper function to find reading by title and author
  const findReadingByTitleAndAuthor = (title: string, author: string) => {
    return READINGS.find(reading => 
      reading.title === title && reading.author === author
    );
  };

  // Get current date
  const currentDate = new Date();
  const dayName = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const monthName = currentDate.toLocaleDateString("en-US", { month: "short" });
  const dayNumber = currentDate.getDate();

  // Use systematic reading selection based on constants
  const todayReading = findReadingByTitleAndAuthor(READING_DAYS[0].title, READING_DAYS[0].author);
  const upcomingReadings = READING_DAYS.slice(1).map(day => 
    findReadingByTitleAndAuthor(day.title, day.author)
  ).filter(Boolean); // Filter out any undefined matches
  const vaultReadings = VAULT_READINGS.map(vaultReading => 
    findReadingByTitleAndAuthor(vaultReading.title, vaultReading.author)
  ).filter(Boolean); // Filter out any undefined matches

  // Safety check - if todayReading is not found, fall back to first reading
  if (!todayReading) {
    console.warn(`Today's reading "${READING_DAYS[0].title}" by "${READING_DAYS[0].author}" not found in READINGS array`);
  }

  // Get reading time estimate based on category
  const getReadingTime = (wordcount: number) => {
    return `${Math.round(wordcount / 250)} min`;
  };

  // Format category for display
  const formatCategory = (category: string) => {
    return category.replace("_", " ");
  };

  // Handle opening reading modal
  const handleReadingClick = (reading: (typeof READINGS)[0]) => {
    setSelectedReading(reading);
    setIsModalOpen(true);
  };

  // Handle closing reading modal
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedReading(null);
  };

  // Preload reading content on hover
  const handleReadingHover = (title: string) => {
    preloadReading(title);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="max-w-6xl mx-auto px-6 pt-32 md:pt-48 pb-16">
        {/* Hero Section */}
        <div
          className={`text-center mb-12 md:mb-20 transition-all duration-1000 ease-out flex flex-col items-center gap-4 md:gap-8 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col gap-2 md:gap-3">
            <p className="text-base md:text-lg text-muted-foreground">
              Let's dive in.
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {dayName}, {monthName}. {dayNumber}
            </h1>
          </div>
          <div className="inline-block bg-[#232323] px-6 py-2 rounded-lg">
            <span className="text-md text-muted-foreground">Day 1</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-11 gap-12 mb-20 transition-all duration-1000 ease-out delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Today's Reading - Takes 2 columns on large screens */}
          <div className="lg:col-span-6">
            <p className="text-lg action-text mb-6 md:block hidden">
              Today's Reading
            </p>
            {todayReading && (
              <div
                className="bg-[#1C1C1C] rounded-[24px] p-0 overflow-hidden md:p-10 max-w-[280px] md:max-w-none mx-auto flex flex-col md:flex-row gap-0 md:gap-10 cursor-pointer hover:bg-[#222] transition-colors justify-center items-center"
                onClick={() => handleReadingClick(todayReading)}
                onMouseEnter={() => handleReadingHover(todayReading.title)}
              >
              {/* Book Cover */}
              <div className="w-full h-full bg-[#282828] md:bg-transparent flex items-center justify-center p-6 md:p-0 md:w-auto md:h-auto">
                <ReadingThumbnail
                  label={todayReading.label}
                  title={todayReading.title}
                  author={todayReading.author}
                  size="large"
                />
              </div>

              {/* Reading Info */}
              <div className="flex-1 flex flex-col justify-between w-full p-6 md:p-0">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-1">
                    {todayReading.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {todayReading.author}
                  </p>
                  <div className="flex gap-2">
                    <span
                      className="text-white text-md px-4 py-1 rounded-full"
                      style={{
                        backgroundColor:
                          CATEGORY_COLORS[
                            todayReading.category as keyof typeof CATEGORY_COLORS
                          ],
                      }}
                    >
                      {formatCategory(todayReading.category)}
                    </span>
                    <span className="bg-[#2A2A2A] text-white text-md px-4 py-1 rounded-full flex gap-1.5 items-center justify-center">
                      <Clock size={12} />
                      {getReadingTime(todayReading.wordcount)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>

          {/* Upcoming Readings */}
          <div className="lg:col-span-5">
            <p className="text-lg action-text mb-3">Upcoming Readings</p>
            <div className="flex flex-col gap-2">
              {upcomingReadings.map((reading, index) => (
                <div
                  key={getSlug(reading.title)}
                  className="px-0 md:px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-[#222] transition-colors rounded-[12px]"
                  onClick={() => handleReadingClick(reading)}
                  onMouseEnter={() => handleReadingHover(reading.title)}
                >
                  <div className="flex items-center gap-4">
                    <ReadingThumbnail
                      label={reading.label}
                      title={reading.title}
                      author={reading.author}
                      size="small"
                    />
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        Day {index + 2}
                      </p>
                      <h4 className="text-lg font-bold">{reading.title}</h4>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Vault Section */}
        <div
          className={`transition-all duration-1000 ease-out delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg action-text mb-6">The Vault</p>
          <div className="bg-card rounded-[16px]">
            <div className="flex overflow-x-auto scrollbar-hide p-6 md:p-8 gap-5 md:gap-8 items-start">
              {vaultReadings.map((reading) => (
                <div
                  key={getSlug(reading.title)}
                  className="flex-shrink-0 cursor-pointer hover:bg-[#222] overflow-hidden flex flex-col justify-center"
                  onClick={() => handleReadingClick(reading)}
                  onMouseEnter={() => handleReadingHover(reading.title)}
                >
                  <div className="relative mb-3 group">
                    <div className="overflow-hidden flex items-center justify-between">
                      <ReadingThumbnail
                        label={reading.label}
                        title={reading.title}
                        author={reading.author}
                        className="w-full max-w-[110px] md:max-w-[120px]"
                      />
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold mb-1 line-clamp-2 max-w-[110px]">
                    {reading.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {reading.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`mt-24 mb-16 mx-auto max-w-lg transition-all duration-1000 ease-out delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-2">
              Ready for the full experience?
            </h3>
            <p className="text-lg mb-6 leading-tight text-muted-foreground">
              Unlock daily recommendations and access to all 1,000+ readings.
            </p>
            <a
              href="https://apps.apple.com/us/app/ray-one-reading-a-day/id6747955197"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary text-base md:text-lg">
                Get the App
              </button>
            </a>
          </div>
        </div>
      </main>
      <Footer />

      {/* Reading Modal */}
      <ReadingModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        reading={selectedReading}
      />
    </div>
  );
};

const Preview = () => {
  return (
    <LenisProvider>
      <PreviewContent />
    </LenisProvider>
  );
};

export default Preview;
