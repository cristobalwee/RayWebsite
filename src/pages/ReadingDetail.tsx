import { useEffect, useState, useCallback, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { LenisProvider, useLenis } from "../contexts/LenisContext";
import { usePageTransition } from "../contexts/PageTransitionContext";
import { Bookmark, Share, ArrowLeft } from "lucide-react";
import { READINGS, getSlug } from "../constants";
import { loadReading } from "../utils/readingLoader";
import {
  loadPreviewReading,
  PreviewReadingData,
} from "../utils/previewReadingLoader";
import TruncatedOverlay from "../components/TruncatedOverlay";
import CompletionOverlay from "../components/CompletionOverlay";

const ReadingDetailContent = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { lenisRef } = useLenis();
  const { startTransition } = usePageTransition();
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [content, setContent] = useState<string[]>([]);
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [contentError, setContentError] = useState<string | null>(null);
  const [previewData, setPreviewData] = useState<PreviewReadingData | null>(
    null,
  );
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    position: { top: number; left: number };
    isClosing: boolean;
  } | null>(null);
  const bookmarkButtonRef = useRef<HTMLButtonElement>(null);
  const shareButtonRef = useRef<HTMLButtonElement>(null);

  const reading = READINGS.find((r) => getSlug(r.title) === id);

  // Detect if we're in preview mode
  const isPreviewMode = location.pathname.startsWith("/preview/");
  const isFiction = reading.category === "Fiction";

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

  // Load reading content
  useEffect(() => {
    if (!reading) return;

    const fetchContent = async () => {
      setIsLoadingContent(true);
      setContentError(null);

      try {
        if (isPreviewMode) {
          // Load preview content with truncation logic
          const data = await loadPreviewReading(
            reading.title,
            reading.wordcount,
          );
          setContent(data.content);
          setPreviewData(data);
        } else {
          // Load full content for non-preview routes
          const paragraphs = await loadReading(reading.title);
          setContent(paragraphs);
          setPreviewData(null);
        }
      } catch (error) {
        setContentError("Failed to load reading content");
        console.error("Error loading content:", error);
      } finally {
        setIsLoadingContent(false);
      }
    };

    fetchContent();
  }, [reading, isPreviewMode]);

  // Track scroll progress with virtual calculation for truncated readings
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;

      if (previewData?.isTruncated) {
        // For truncated readings, calculate progress based on virtual full content
        // When user reaches bottom of actual content, that should equal 40%
        const virtualFullHeight = scrollHeight / 0.4; // Total height if full content
        const virtualScrollHeight = virtualFullHeight - window.innerHeight;
        const progress = Math.min(
          (scrolled / virtualScrollHeight) * 100,
          previewData.progressCap,
        );
        setScrollProgress(progress);
      } else {
        // Normal progress calculation for full readings
        const progress = Math.min((scrolled / scrollHeight) * 100, 100);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [previewData]);

  // Lock scroll when paywall is reached
  const handleScrollLock = useCallback(() => {
    if (isScrollLocked) return;

    setIsScrollLocked(true);
  }, [isScrollLocked]);

  const showToast = (
    message: string,
    buttonRef: React.RefObject<HTMLButtonElement>,
  ) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();

      // Calculate initial centered position
      let leftPosition = rect.left + rect.width / 2;

      // Estimate toast width (rough calculation based on message length)
      const estimatedToastWidth = Math.max(200, message.length * 8);
      const halfToastWidth = estimatedToastWidth / 2;

      // Check right edge and adjust if needed
      const viewportWidth = window.innerWidth;
      const rightEdge = leftPosition + halfToastWidth;
      const padding = 16; // 16px padding from edge

      if (rightEdge > viewportWidth - padding) {
        leftPosition = viewportWidth - halfToastWidth - padding;
      }

      // Check left edge
      if (leftPosition - halfToastWidth < padding) {
        leftPosition = halfToastWidth + padding;
      }

      setToast({
        message,
        position: {
          top: rect.bottom + 8,
          left: leftPosition,
        },
        isClosing: false,
      });

      // Start closing animation before removing
      setTimeout(() => {
        setToast((prev) => (prev ? { ...prev, isClosing: true } : null));
      }, 2500);

      // Remove toast after exit animation completes
      setTimeout(() => {
        setToast(null);
      }, 3200);
    }
  };

  const handleBookmarkClick = () => {
    showToast("Bookmarks are disabled in preview mode", bookmarkButtonRef);
  };

  const handleShareClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Copied share link to clipboard!", shareButtonRef);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };

  const handleBack = async () => {
    await startTransition();
    navigate("/preview");
  };

  if (!reading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Reading not found</h1>
          <button onClick={handleBack} className="btn-primary">
            Back to Preview
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent max-w-7xl mx-auto">
        <div className="flex items-center justify-between p-4 md:p-6">
          <button
            onClick={handleBack}
            className="p-3.5 hover:bg-[#2A2A2A] bg-[#232323] rounded-full transition-colors"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="flex items-center gap-3">
            <button
              ref={bookmarkButtonRef}
              onClick={handleBookmarkClick}
              className="p-3.5 hover:bg-[#2A2A2A] bg-[#232323] rounded-full transition-colors"
            >
              <Bookmark size={20} />
            </button>
            <button
              ref={shareButtonRef}
              onClick={handleShareClick}
              className="p-3.5 hover:bg-[#2A2A2A] bg-[#232323] rounded-full transition-colors"
            >
              <Share size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main
        className={`max-w-3xl mx-auto px-6 pt-36 md:pt-48 pb-24 transition-all duration-1000 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Title Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {reading.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            by {reading.author}
          </p>
        </div>

        {/* Reading Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {isLoadingContent ? (
            // Loading skeleton
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-32 bg-[#2A2A2A] rounded-lg animate-pulse"
                />
              ))}
            </div>
          ) : contentError ? (
            // Error state
            <div className="p-6 bg-red-900/20 border border-red-800 rounded-xl">
              <p className="text-red-400">{contentError}</p>
            </div>
          ) : (
            // Render content
            <>
              {content.map((paragraph, index) => {
                // Check if this entire paragraph is a section marker
                const isSectionMarker = /^\*\*[IVX]+\*\*$/.test(
                  paragraph.trim(),
                );

                if (isSectionMarker) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-bold text-center my-8"
                    >
                      {paragraph.replace(/\*\*/g, "")}
                    </h2>
                  );
                }

                return (
                  <p
                    key={index}
                    className={`text-xl md:text-2xl ${isFiction ? "" : "mb-4"}`}
                  >
                    {paragraph.split("\n").map((line, lineIndex) => {
                      if (line === "\r" && isFiction) return null;

                      return (
                        <span className="block min-h-[1rem]" key={lineIndex}>
                          {isFiction && <>&emsp;</>}
                          {line}
                        </span>
                      );
                    })}
                  </p>
                );
              })}

              {previewData?.isTruncated && (
                <TruncatedOverlay
                  scrollProgress={scrollProgress}
                  onScrollLock={handleScrollLock}
                  title={reading.title}
                />
              )}

              {/* Completion overlay for short, full readings */}
              {previewData && !previewData.isTruncated && <CompletionOverlay />}
            </>
          )}
        </div>
      </main>

      {/* Fixed bottom progress indicator */}
      <div className="flex flex-col fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#313131] rounded-full px-7 pb-4 pt-2 gap-1.5">
        <span className="text-lg text-muted-foreground">
          {Math.round(scrollProgress)}% Completed
        </span>
        <div className="h-1.5 bg-[#1E1E1E] relative w-[140px] rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-white rounded-full"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed z-[60] transform -translate-x-1/2 px-4 py-2.5 bg-[#313131] text-white rounded-lg shadow-lg text-lg whitespace-nowrap transition-all duration-300 ease-out ${
            toast.isClosing ? "animate-toast-exit" : "animate-toast"
          }`}
          style={{
            top: `${toast.position.top}px`,
            left: `${toast.position.left}px`,
          }}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
};

const ReadingDetail = () => {
  return (
    <LenisProvider>
      <ReadingDetailContent />
    </LenisProvider>
  );
};

export default ReadingDetail;
