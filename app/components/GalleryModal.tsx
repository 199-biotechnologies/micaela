"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
  // displayIndex: What's currently visible (stable)
  // targetIndex: What we're transitioning to (only during transition)
  const [displayIndex, setDisplayIndex] = useState(initialIndex);
  const [targetIndex, setTargetIndex] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set([initialIndex]));

  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const loadCheckTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Update display index when initialIndex changes
  useEffect(() => {
    setDisplayIndex(initialIndex);
    setTargetIndex(null);
    setImagesLoaded(new Set([initialIndex]));
  }, [initialIndex]);

  // Mark image as loaded
  const handleImageLoad = useCallback((index: number) => {
    setImagesLoaded((prev) => new Set([...prev, index]));
  }, []);

  // Clean up timeouts
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
      if (loadCheckTimeoutRef.current) clearTimeout(loadCheckTimeoutRef.current);
    };
  }, []);

  // Navigate to specific index
  const navigateToIndex = useCallback((newIndex: number) => {
    if (targetIndex !== null) return; // Already transitioning

    // Start transition immediately
    setTargetIndex(newIndex);

    // Function to complete the transition
    const completeTransition = () => {
      // Wait for CSS crossfade to complete (400ms)
      transitionTimeoutRef.current = setTimeout(() => {
        setDisplayIndex(newIndex);
        // Keep target layer for one more frame to ensure smooth handoff
        setTimeout(() => setTargetIndex(null), 50);
      }, 400);
    };

    // If image is already loaded, start transition immediately
    if (imagesLoaded.has(newIndex)) {
      completeTransition();
    } else {
      // Wait for image to load (max 3 seconds)
      const startTime = Date.now();
      const checkInterval = setInterval(() => {
        if (imagesLoaded.has(newIndex) || Date.now() - startTime > 3000) {
          clearInterval(checkInterval);
          completeTransition();
        }
      }, 50);

      // Store reference for cleanup
      loadCheckTimeoutRef.current = checkInterval as unknown as NodeJS.Timeout;
    }
  }, [targetIndex, imagesLoaded]);

  const goToNext = useCallback(() => {
    const newIndex = (displayIndex + 1) % images.length;
    navigateToIndex(newIndex);
  }, [displayIndex, images.length, navigateToIndex]);

  const goToPrevious = useCallback(() => {
    const newIndex = (displayIndex - 1 + images.length) % images.length;
    navigateToIndex(newIndex);
  }, [displayIndex, images.length, navigateToIndex]);

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
    if (touchStart - touchEnd > 75) goToNext();
    if (touchStart - touchEnd < -75) goToPrevious();
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

  const isTransitioning = targetIndex !== null;

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
        {displayIndex + 1} / {images.length}
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
          {/* Display layer - currently visible image (fades out when transitioning) */}
          <div
            className={`absolute inset-0 transition-opacity duration-400 ease-out ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src={images[displayIndex].src}
              alt={getTitle(images[displayIndex].titleKey)}
              fill
              className="object-contain"
              quality={100}
              priority
              onLoad={() => handleImageLoad(displayIndex)}
            />
          </div>

          {/* Target layer - next image (fades in when transitioning) */}
          {isTransitioning && targetIndex !== null && (
            <div className="absolute inset-0 transition-opacity duration-400 ease-out opacity-100">
              <Image
                src={images[targetIndex].src}
                alt={getTitle(images[targetIndex].titleKey)}
                fill
                className="object-contain"
                quality={100}
                priority
                onLoad={() => handleImageLoad(targetIndex)}
              />
            </div>
          )}

          {/* Preload adjacent images (hidden) */}
          {!isTransitioning && (
            <>
              <div className="hidden">
                <Image
                  src={images[(displayIndex + 1) % images.length].src}
                  alt="Preload next"
                  width={1920}
                  height={1080}
                  quality={100}
                  onLoad={() => handleImageLoad((displayIndex + 1) % images.length)}
                />
              </div>
              <div className="hidden">
                <Image
                  src={images[(displayIndex - 1 + images.length) % images.length].src}
                  alt="Preload previous"
                  width={1920}
                  height={1080}
                  quality={100}
                  onLoad={() => handleImageLoad((displayIndex - 1 + images.length) % images.length)}
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
            disabled={isTransitioning}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-smooth-fast disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous image"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            disabled={isTransitioning}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-smooth-fast disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next image"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
