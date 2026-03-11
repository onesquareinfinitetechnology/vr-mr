"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

import { TestimonialRail } from "./TestimonialRail";

type TestimonialCarouselProps = React.HTMLAttributes<HTMLDivElement>;

export function TestimonialCarousel({
  className = "",
  children,
  ...props
}: TestimonialCarouselProps) {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const updateScrollState = () => {
      const maxScrollLeft = rail.scrollWidth - rail.clientWidth;
      setCanScrollLeft(rail.scrollLeft > 4);
      setCanScrollRight(maxScrollLeft - rail.scrollLeft > 4);
    };

    updateScrollState();
    rail.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      rail.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByPage = (direction: "left" | "right") => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const distance = Math.max(rail.clientWidth * 0.85, 280);
    rail.scrollBy({
      left: direction === "right" ? distance : -distance,
      behavior: "smooth",
    });
  };

  const classes = `testimonial-carousel ${className}`.trim();

  return (
    <div className={classes} {...props}>
      <div className="testimonial-carousel-header">
        <div className="testimonial-carousel-hint">Swipe or use the arrows to explore more reviews.</div>
        <div className="testimonial-carousel-controls" aria-label="Testimonial navigation">
          <button
            type="button"
            className="carousel-button"
            onClick={() => scrollByPage("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll testimonials left"
          >
            ←
          </button>
          <button
            type="button"
            className="carousel-button"
            onClick={() => scrollByPage("right")}
            disabled={!canScrollRight}
            aria-label="Scroll testimonials right"
          >
            →
          </button>
        </div>
      </div>
      <TestimonialRail ref={railRef}>{children}</TestimonialRail>
    </div>
  );
}
