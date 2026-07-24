"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Atom,
  BookOpenCheck,
  Calculator,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Pill,
  Stethoscope,
  Target,
} from "lucide-react";
import type { Course } from "@/lib/royal-data";

const icons = {
  flask: FlaskConical,
  graduation: GraduationCap,
  heart: HeartPulse,
  atom: Atom,
  target: Target,
  book: BookOpenCheck,
  calculator: Calculator,
  stethoscope: Stethoscope,
  pill: Pill,
};

export function CourseCard({
  course,
  index = 0,
}: {
  course: Course;
  index?: number;
}) {
  const reduceMotion = useReducedMotion();
  const Icon = icons[course.icon];

  return (
    <motion.article
      className="group relative flex h-full flex-col overflow-hidden rounded-[10px] border border-[#dce5f0] bg-white p-6 shadow-[0_8px_26px_rgba(9,31,65,0.055)]"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{
        duration: reduceMotion ? 0 : 0.46,
        delay: reduceMotion ? 0 : Math.min(index * 0.045, 0.22),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <span className="absolute inset-x-0 top-0 h-[3px] origin-center scale-x-40 bg-[var(--royal-700)] opacity-0 transition duration-200 group-hover:scale-x-100 group-hover:opacity-100" />
      <div className="flex items-center justify-between gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-[var(--royal-100)] text-[var(--royal-700)]">
          <Icon size={23} aria-hidden="true" />
        </span>
        <span className="text-[9px] font-extrabold uppercase tracking-[0.1em] text-[#80611f]">
          {course.category}
        </span>
      </div>
      <h2 className="mt-5 text-[21px] font-[790] tracking-[-0.03em] text-[var(--navy-900)]">
        {course.title}
      </h2>
      <p className="mt-2 flex-1 text-[12.5px] leading-[1.7] text-[var(--muted)]">
        {course.short}
      </p>
      <a
        className="mt-5 inline-flex items-center justify-between border-t border-[#e8edf4] pt-4 text-xs font-bold text-[var(--royal-700)]"
        href={`/courses/${course.slug}`}
      >
        View Details
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </a>
    </motion.article>
  );
}
