"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryModalProps {
  images: Array<{ src: string; titleKey: string }>;
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  getTitle: (titleKey: string) => string;
}

export default function GalleryModal({
  images,
  initialIndex,
  isOpen,
  onClose,
  getTitle,
}: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [nextIndex, setNextIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set([initialIndex]));
  const [isLoading, setIsLoading] = useState(false);

  // Update indices when initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
    setNextIndex(initialIndex);
    setImagesLoaded(new Set([initialIndex]));
  }, [initialIndex]);

  // Mark image as loaded
  const handleImageLoad = useCallback((index: number) => {
    setImagesLoaded((prev) => new Set([...prev, index]));
  }, []);

  // Navigation functions with proper loading
  const goToNext = useCallback(() => {
    if (isTransitioning || isLoading) return;

    const targetIndex = (currentIndex + 1) % images.length;

    // If image isn't loaded yet, show loading state
    if (!imagesLoaded.has(targetIndex)) {
      setIsLoading(true);
    }

    setNextIndex(targetIndex);
    setIsTransitioning(true);

    // Wait for image to load, then transition
    const checkLoaded = setInterval(() => {
      if (imagesLoaded.has(targetIndex)) {
        clearInterval(checkLoaded);
        setIsLoading(false);

        // Crossfade duration
        setTimeout(() => {
          setCurrentIndex(targetIndex);
          setIsTransitioning(false);
        }, 400);
      }
    }, 50);

    // Timeout fallback
    setTimeout(() => {
      clearInterval(checkLoaded);
      setIsLoading(false);
      setCurrentIndex(targetIndex);
      setIsTransitioning(false);
    }, 2000);
  }, [images.length, currentIndex, isTransitioning, isLoading, imagesLoaded]);

  const goToPrevious = useCallback(() => {
    if (isTransitioning || isLoading) return;

    const targetIndex = (currentIndex - 1 + images.length) % images.length;

    // If image isn't loaded yet, show loading state
    if (!imagesLoaded.has(targetIndex)) {
      setIsLoading(true);
    }

    setNextIndex(targetIndex);
    setIsTransitioning(true);

    // Wait for image to load, then transition
    const checkLoaded = setInterval(() => {
      if (imagesLoaded.has(targetIndex)) {
        clearInterval(checkLoaded);
        setIsLoading(false);

        // Crossfade duration
        setTimeout(() => {
          setCurrentIndex(targetIndex);
          setIsTransitioning(false);
        }, 400);
      }
    }, 50);

    // Timeout fallback
    setTimeout(() => {
      clearInterval(checkLoaded);
      setIsLoading(false);
      setCurrentIndex(targetIndex);
      setIsTransitioning(false);
    }, 2000);
  }, [images.length, currentIndex, isTransitioning, isLoading, imagesLoaded]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrevious();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, goToNext, goToPrevious]);

  // Touch handling for swipe gestures
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      goToNext();
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      goToPrevious();
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-fade-in" />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[102] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-smooth-fast"
        aria-label="Close gallery"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Image Counter */}
      <div className="absolute bottom-6 left-6 z-[102] text-white/80 text-xs font-light tracking-[0.2em] uppercase">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Main Image Container */}
      <div
        className="relative z-[101] w-full h-full flex items-center justify-center px-20"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Dual-layer crossfade system */}
        <div className="relative max-w-[90vw] max-h-[90vh] w-full h-full">
          {/* Current image (stays visible during transition) */}
          <div
            className={`absolute inset-0 transition-opacity duration-400 ease-out ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src={images[currentIndex].src}
              alt={getTitle(images[currentIndex].titleKey)}
              fill
              className="object-contain"
              quality={100}
              priority
              onLoad={() => handleImageLoad(currentIndex)}
            />
          </div>

          {/* Next image (fades in when transitioning) */}
          {isTransitioning && (
            <div
              className={`absolute inset-0 transition-opacity duration-400 ease-out ${
                isTransitioning ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={images[nextIndex].src}
                alt={getTitle(images[nextIndex].titleKey)}
                fill
                className="object-contain"
                quality={100}
                priority
                onLoad={() => handleImageLoad(nextIndex)}
              />
            </div>
          )}

          {/* Preload adjacent images */}
          {!isTransitioning && (
            <>
              {/* Preload next */}
              <div className="hidden">
                <Image
                  src={images[(currentIndex + 1) % images.length].src}
                  alt="Preload next"
                  width={1920}
                  height={1080}
                  quality={100}
                  onLoad={() => handleImageLoad((currentIndex + 1) % images.length)}
                />
              </div>
              {/* Preload previous */}
              <div className="hidden">
                <Image
                  src={images[(currentIndex - 1 + images.length) % images.length].src}
                  alt="Preload previous"
                  width={1920}
                  height={1080}
                  quality={100}
                  onLoad={() => handleImageLoad((currentIndex - 1 + images.length) % images.length)}
                />
              </div>
            </>
          )}
        </div>

        {/* Navigation Arrows - Desktop Only */}
        <div className="hidden md:block">
          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            disabled={isTransitioning || isLoading}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-smooth-fast disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous image"
          >
            {isLoading && nextIndex === (currentIndex - 1 + images.length) % images.length ? (
              <svg
                className="w-5 h-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            )}
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            disabled={isTransitioning || isLoading}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-smooth-fast disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next image"
          >
            {isLoading && nextIndex === (currentIndex + 1) % images.length ? (
              <svg
                className="w-5 h-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
