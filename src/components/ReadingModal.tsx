import { useState, useEffect, useCallback } from "react";
import { X, BookOpen, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePageTransition } from "../contexts/PageTransitionContext";
import ReadingThumbnail from "./ReadingThumbnail";
import { CATEGORY_COLORS, getSlug } from "../constants";

interface Reading {
  title: string;
  author: string;
  category: string;
  label: string;
  summary: string;
  wordcount: number;
}

interface ReadingModalProps {
  isOpen: boolean;
  onClose: () => void;
  reading: Reading | null;
}

const ReadingModal = ({ isOpen, onClose, reading }: ReadingModalProps) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const { startTransition } = usePageTransition();
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      onClose();
      setIsAnimatingOut(false);
    }, 200);
  }, [onClose]);

  const handleStartReading = async () => {
    if (!reading) return;
    await startTransition();
    navigate(`/preview/${getSlug(reading.title)}`);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Trigger animation in after a brief delay to ensure DOM is ready
      setTimeout(() => setIsAnimatingIn(true), 10);
    } else {
      document.body.style.overflow = "unset";
      setIsAnimatingIn(false);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, handleClose]);

  if (!isOpen && !isAnimatingOut) return null;
  if (!reading) return null;

  // Get reading time estimate based on category
  const getReadingTime = (wordcount: number) => {
    const totalTime = Math.round(wordcount / 250);
    return `${totalTime || "< 1"} min`;
  };

  // Format category for display
  const formatCategory = (category: string) => {
    return category.replace("_", " ");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      data-lenis-prevent="true"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimatingOut
            ? "opacity-0"
            : isAnimatingIn
              ? "opacity-100"
              : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative bg-background rounded-[16px] md:rounded-[24px] w-full max-w-lg h-[90dvh] max-h-[800px] overflow-x-hidden overflow-y-scroll transition-all duration-300 ${
          isAnimatingOut
            ? "opacity-0 scale-95 translate-y-4"
            : isAnimatingIn
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <X size={20} className="text-gray-700" />
        </button>

        {/* Reading Thumbnail */}
        <div className="flex items-center justify-center p-8 bg-[#232323]">
          <ReadingThumbnail
            label={reading.label}
            title={reading.title}
            author={reading.author}
            size="large"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title and Author */}
          <div className="text-left mb-4">
            <h2 className="text-3xl font-bold mb-1">{reading.title}</h2>
            <p className="text-muted-foreground text-lg">{reading.author}</p>
          </div>

          {/* Tags */}
          <div className="flex gap-2 justify-start mb-6">
            <span
              className="text-white text-base px-4 py-1 rounded-full"
              style={{
                backgroundColor:
                  CATEGORY_COLORS[
                    reading.category as keyof typeof CATEGORY_COLORS
                  ],
              }}
            >
              {formatCategory(reading.category)}
            </span>
            <span className="bg-[#2A2A2A] text-white text-base px-4 py-1 rounded-full flex items-center gap-1">
              <Clock size={12} />
              {getReadingTime(reading.wordcount)}
            </span>
          </div>

          {/* Start Reading Button */}
          <button
            onClick={handleStartReading}
            className="w-full bg-[#222222] rounded-lg p-4 flex items-center justify-between hover:bg-[#282828] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#313131] p-4 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground normal-text">
                  Ready to dive in?
                </p>
                <h2 className="text-white text-xl">Start reading</h2>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-white"
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
          </button>

          {/* Summary */}
          <div className="mt-6">
            <p className="text-lg action-text mb-2">Summary</p>
            <p className="text-muted-foreground text-xl leading-tight">
              {reading.summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingModal;
