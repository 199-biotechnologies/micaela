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
  const [displayIndex, setDisplayIndex] = useState(initialIndex);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [showNext, setShowNext] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set([initialIndex]));

  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Reset on modal open
  useEffect(() => {
    if (isOpen) {
      setDisplayIndex(initialIndex);
      setNextIndex(null);
      setShowNext(false);
      setImagesLoaded(new Set([initialIndex]));
    }
  }, [isOpen, initialIndex]);

  // Mark image as loaded
  const handleImageLoad = useCallback((index: number) => {
    setImagesLoaded((prev) => new Set([...prev, index]));
  }, []);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  // Navigate to new index
  const navigateToIndex = useCallback((newIndex: number) => {
    if (nextIndex !== null) return; // Already transitioning

    // Set up next image layer
    setNextIndex(newIndex);

    // Wait one frame for DOM to render, then trigger fade
    animationFrameRef.current = requestAnimationFrame(() => {
      setShowNext(true);

      // Wait for crossfade to complete
      transitionTimeoutRef.current = setTimeout(() => {
        setDisplayIndex(newIndex);
        setNextIndex(null);
        setShowNext(false);
      }, 450);
    });
  }, [nextIndex]);

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

  // Touch handling
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

  // Prevent body scroll
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

  const isTransitioning = nextIndex !== null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-fade-in" />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[102] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-smooth-fast"
        aria-label="Close gallery"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute bottom-6 left-6 z-[102] text-white/80 text-xs font-light tracking-[0.2em] uppercase">
        {displayIndex + 1} / {images.length}
      </div>

      {/* Image Container */}
      <div
        className="relative z-[101] w-full h-full flex items-center justify-center px-20"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative max-w-[90vw] max-h-[90vh] w-full h-full">
          {/* Current display layer */}
          <div
            className={`absolute inset-0 transition-opacity duration-400 ease-out ${
              showNext ? "opacity-0" : "opacity-100"
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

          {/* Next layer (crossfades in) */}
          {nextIndex !== null && (
            <div
              className={`absolute inset-0 transition-opacity duration-400 ease-out ${
                showNext ? "opacity-100" : "opacity-0"
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

          {/* Preload adjacent */}
          {!isTransitioning && (
            <>
              <div className="hidden">
                <Image
                  src={images[(displayIndex + 1) % images.length].src}
                  alt="Preload"
                  width={1920}
                  height={1080}
                  quality={100}
                  onLoad={() => handleImageLoad((displayIndex + 1) % images.length)}
                />
              </div>
              <div className="hidden">
                <Image
                  src={images[(displayIndex - 1 + images.length) % images.length].src}
                  alt="Preload"
                  width={1920}
                  height={1080}
                  quality={100}
                  onLoad={() => handleImageLoad((displayIndex - 1 + images.length) % images.length)}
                />
              </div>
            </>
          )}
        </div>

        {/* Navigation - Desktop */}
        <div className="hidden md:block">
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            disabled={isTransitioning}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-smooth-fast disabled:opacity-30 disabled:cursor-wait"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            disabled={isTransitioning}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-smooth-fast disabled:opacity-30 disabled:cursor-wait"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
