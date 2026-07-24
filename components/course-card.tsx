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
      className="interior-course-card group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[#e2e7ef] bg-white p-7 shadow-[0_14px_40px_rgba(9,31,65,0.065)]"
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
      <span className="absolute inset-x-0 top-0 h-[5px] origin-center scale-x-40 bg-gradient-to-r from-[var(--royal-600)] to-[var(--gold-500)] opacity-0 transition duration-200 group-hover:scale-x-100 group-hover:opacity-100" />
      <div className="flex items-center justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-[15px] bg-[var(--royal-100)] text-[var(--royal-700)] shadow-[inset_0_0_0_1px_rgba(49,84,200,0.08)]">
          <Icon size={23} aria-hidden="true" />
        </span>
        <span className="text-[9px] font-extrabold uppercase tracking-[0.1em] text-[#80611f]">
          {course.category}
        </span>
      </div>
      <h2 className="mt-6 text-[24px] font-[790] tracking-[-0.03em] text-[var(--navy-900)]">
        {course.title}
      </h2>
      <p className="mt-3 flex-1 text-[13px] leading-[1.8] text-[var(--muted)]">
        {course.short}
      </p>
      <a
        className="mt-6 inline-flex min-h-11 items-center justify-between rounded-xl bg-[var(--surface)] px-3 text-xs font-bold text-[var(--royal-700)]"
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
