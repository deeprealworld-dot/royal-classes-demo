"use client";
/* eslint-disable @next/next/no-img-element */

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Expand, X } from "lucide-react";
import { useEffect, useState } from "react";
import { galleryItems } from "@/lib/royal-data";

export function GalleryShowcase() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const active = activeIndex === null ? null : galleryItems[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((value) =>
          value === null ? 0 : (value + 1) % galleryItems.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((value) =>
          value === null
            ? 0
            : (value - 1 + galleryItems.length) % galleryItems.length,
        );
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <motion.button
            key={item.src}
            type="button"
            className={`gallery-showcase-card group relative overflow-hidden rounded-[10px] bg-[var(--navy-900)] text-left shadow-[var(--shadow-sm)] ${
              index === 0 ? "gallery-showcase-featured sm:col-span-2 lg:row-span-2" : ""
            }`}
            onClick={() => setActiveIndex(index)}
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: reduceMotion ? 0 : 0.48,
              delay: reduceMotion ? 0 : Math.min(index * 0.055, 0.24),
            }}
            aria-label={`Open larger view of ${item.title}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="gallery-showcase-image"
              loading={index < 2 ? "eager" : "lazy"}
            />
            <span className="gallery-showcase-shade" />
            <span className="gallery-showcase-caption">
              <span>
                <small className="block text-[9px] font-extrabold uppercase tracking-[0.13em] text-[var(--gold-400)]">
                  {item.category}
                </small>
                <strong className="mt-1 block text-base">{item.title}</strong>
              </span>
              <Expand size={19} aria-hidden="true" />
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} image preview`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setActiveIndex(null);
            }}
          >
            <motion.figure
              className="gallery-lightbox-figure"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
            >
              <img
                src={active.src}
                alt={active.alt}
                className="gallery-lightbox-image"
              />
              <figcaption className="gallery-lightbox-caption">
                <span>
                  <small className="block text-[9px] font-extrabold uppercase tracking-[0.13em] text-[var(--gold-400)]">
                    {active.category}
                  </small>
                  <strong>{active.title}</strong>
                </span>
                <span className="text-xs text-white/[0.55]">
                  Use arrow keys to browse
                </span>
              </figcaption>
              <button
                type="button"
                className="gallery-lightbox-close"
                onClick={() => setActiveIndex(null)}
                aria-label="Close image preview"
              >
                <X size={21} />
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
