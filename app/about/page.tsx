/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpenCheck,
  Eye,
  Heart,
  Quote,
  Target,
  Users,
} from "lucide-react";
import { CtaBand, PageHero, Reveal, SectionTitle } from "@/components/royal-sections";
import { SiteFrame } from "@/components/royal-shell";
import { trustHighlights } from "@/lib/royal-data";

export const metadata: Metadata = {
  title: "About Royal Classes | Coaching in Jogeshwari East",
  description:
    "Learn about Royal Classes, its teaching approach and over 25 years of commitment to Science, board and entrance coaching in Jogeshwari East, Mumbai.",
};

const values = [
  {
    icon: Target,
    title: "Our mission",
    copy:
      "Make serious Science, board and entrance preparation clear, structured and accessible to students in the local community.",
  },
  {
    icon: Eye,
    title: "Our vision",
    copy:
      "Be a dependable coaching partner where students understand what to study, how to improve and when to ask for help.",
  },
  {
    icon: Heart,
    title: "Our values",
    copy:
      "Discipline, honest guidance, personal attention and consistent academic work—without shortcuts or inflated promises.",
  },
];

const teachingSteps = [
  {
    number: "01",
    title: "Explain the concept",
    copy: "Start with clear classroom teaching and connect each topic to its examination context.",
  },
  {
    number: "02",
    title: "Practise with purpose",
    copy: "Use organised notes, written work and graded questions to turn understanding into skill.",
  },
  {
    number: "03",
    title: "Test and review",
    copy: "Check progress regularly, identify weak areas and plan the next revision cycle.",
  },
  {
    number: "04",
    title: "Guide personally",
    copy: "Resolve doubts and help students stay realistic, consistent and confident.",
  },
];

export default function AboutPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="About Royal Classes"
        title="A dependable place to learn, practise and improve"
        description="For more than 25 years, Royal Classes has supported Science students in Jogeshwari with structured teaching, regular evaluation and approachable academic guidance."
      />

      <section className="bg-white">
        <div className="shell grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <Reveal>
            <span className="section-kicker">Our story</span>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-[810] leading-[1.05] tracking-[-0.045em] text-[var(--navy-900)]">
              Rooted in Jogeshwari, focused on the student
            </h2>
            <div className="mt-6 grid gap-4 text-[14px] leading-7 text-[var(--muted)]">
              <p>
                Royal Classes was built around a practical idea: students should
                receive clear subject teaching, enough guided practice and
                regular feedback close to home.
              </p>
              <p>
                The institute supports XI and XII Science, board examinations
                and entrance preparation for NEET, JEE and MHT-CET. Every
                programme follows the same core rhythm—teach, practise, test,
                review and guide.
              </p>
              <p>
                Parents can speak with the team about current progress and
                students have a clear place to bring their doubts. That
                consistency is the foundation of the Royal Classes approach.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="button button-primary" href="/courses">
                Explore Courses
              </Link>
              <Link className="button button-outline" href="/contact">
                Visit the Centre
              </Link>
            </div>
          </Reveal>

          <Reveal className="relative mx-auto w-full max-w-[570px]" delay={0.1}>
            <div className="overflow-hidden rounded-[4px_30px_4px_4px] shadow-[var(--shadow-lg)]">
              <img
                src="/images/about-institute.webp"
                alt="Students learning together in a Royal Classes-style classroom"
                className="aspect-[1.08] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-4 max-w-[245px] rounded-lg border border-white/20 bg-[var(--navy-900)] p-5 text-white shadow-xl sm:-left-7">
              <strong className="block text-3xl font-[820] text-[var(--gold-400)]">
                25+
              </strong>
              <span className="mt-1 block text-xs leading-5 text-white/[0.68]">
                years of commitment to coaching and student guidance
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--surface)]">
        <div className="shell py-20 lg:py-24">
          <SectionTitle
            eyebrow="Purpose & principles"
            title="What guides the institute"
            description="The strongest coaching relationships are built on clarity, discipline and honest academic support."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal
                  key={value.title}
                  className="rounded-[10px] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow-sm)]"
                  delay={index * 0.06}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-[var(--royal-100)] text-[var(--royal-700)]">
                    <Icon size={23} aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-xl font-[780] text-[var(--navy-900)]">
                    {value.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {value.copy}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy-950)] text-white">
        <div className="shell grid gap-12 py-20 lg:grid-cols-[0.78fr_1.22fr] lg:py-24">
          <Reveal>
            <span className="section-kicker light">Director’s message</span>
            <Quote className="mt-6 text-[var(--gold-400)]" size={38} />
            <blockquote className="mt-5 text-xl font-[620] leading-9 tracking-[-0.02em] text-white/[0.88] sm:text-2xl">
              “A student does not need more pressure. A student needs clarity,
              disciplined practice and a teacher who notices when a concept is
              still not understood.”
            </blockquote>
            <p className="mt-6 text-sm font-bold text-[var(--gold-400)]">
              Director, Royal Classes
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {teachingSteps.map((step, index) => (
              <Reveal
                key={step.number}
                className="rounded-lg border border-white/10 bg-white/[0.045] p-6"
                delay={index * 0.05}
              >
                <span className="text-xs font-extrabold tracking-[0.14em] text-[var(--gold-400)]">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/[0.58]">{step.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="shell py-20 lg:py-24">
          <SectionTitle
            eyebrow="The Royal Classes way"
            title="Support that covers the complete learning cycle"
            align="center"
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[10px] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {trustHighlights.map((item, index) => (
              <Reveal
                className="bg-white p-6"
                key={item.title}
                delay={index * 0.035}
              >
                <h3 className="text-sm font-bold text-[var(--navy-900)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-[var(--muted)]">
                  {item.copy}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--royal-100)] px-4 py-2 text-xs font-bold text-[var(--royal-700)]">
              <BookOpenCheck size={16} /> Structured study
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--gold-100)] px-4 py-2 text-xs font-bold text-[#76561b]">
              <Users size={16} /> Student-focused guidance
            </span>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </SiteFrame>
  );
}
