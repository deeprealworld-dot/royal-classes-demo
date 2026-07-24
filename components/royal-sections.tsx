"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { site } from "@/lib/royal-data";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: reduceMotion ? 0 : 0.58,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryLabel = "Enquire for Admission",
  primaryHref = "/admission",
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  compact?: boolean;
}) {
  return (
    <section className="interior-hero">
      <div className="interior-hero-orb interior-hero-orb-one" aria-hidden="true" />
      <div className="interior-hero-orb interior-hero-orb-two" aria-hidden="true" />
      <div
        className={`shell relative z-[1] grid items-end gap-10 ${
          compact
            ? "py-14 sm:py-16"
            : "py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_auto] lg:py-24"
        }`}
      >
        <Reveal className="max-w-[780px]">
          <span className="section-kicker light">{eyebrow}</span>
          <h1 className="mt-4 max-w-[760px] text-[clamp(2.35rem,6vw,4.9rem)] font-[820] leading-[0.98] tracking-[-0.055em] text-white">
            {title}
          </h1>
          <p className="mt-6 max-w-[680px] text-[15px] leading-7 text-white/[0.68] sm:text-base">
            {description}
          </p>
        </Reveal>

        {!compact && (
          <Reveal
            className="flex flex-wrap items-center gap-3 lg:max-w-[230px] lg:flex-col lg:items-stretch"
            delay={0.12}
          >
            <a className="button button-gold" href={primaryHref}>
              {primaryLabel}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="button button-outline-light" href={site.phoneHref}>
              <Phone size={17} aria-hidden="true" />
              Call Now
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto max-w-[720px] text-center"
          : "max-w-[720px]"
      }
    >
      <span className="section-kicker">{eyebrow}</span>
      <h2 className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-[800] leading-[1.05] tracking-[-0.045em] text-[var(--navy-900)]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-[15px]">
          {description}
        </p>
      )}
    </Reveal>
  );
}

export function CtaBand({
  title = "Ready to choose the right programme?",
  copy = "Speak with the Royal Classes team about the student’s current standard, target examination and available batch options.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="bg-[var(--gold-500)]">
      <div className="shell flex flex-col items-start justify-between gap-7 py-10 sm:py-12 lg:flex-row lg:items-center">
        <Reveal className="max-w-[680px]">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[color:var(--navy-900)]/[0.65]">
            Admissions 2026–2027
          </span>
          <h2 className="mt-2 text-2xl font-[820] tracking-[-0.035em] text-[var(--navy-950)] sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-[color:var(--navy-900)]/[0.74]">
            {copy}
          </p>
        </Reveal>
        <Reveal className="flex flex-wrap gap-3" delay={0.1}>
          <a className="button button-dark" href="/admission">
            Enquire Now
            <ArrowRight size={17} aria-hidden="true" />
          </a>
          <a
            className="button button-gold-outline"
            href={site.whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} aria-hidden="true" />
            WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
