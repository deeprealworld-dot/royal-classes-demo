import type { Metadata } from "next";
import {
  BookOpenCheck,
  ClipboardCheck,
  MessageCircle,
  Quote,
  Star,
  UserCheck,
} from "lucide-react";
import { CtaBand, PageHero, Reveal, SectionTitle } from "@/components/royal-sections";
import { SiteFrame } from "@/components/royal-shell";
import { testimonials } from "@/lib/royal-data";

export const metadata: Metadata = {
  title: "Student & Parent Experiences | Royal Classes",
  description:
    "Read the learning experiences students and parents value at Royal Classes, including regular tests, progress discussions and doubt support.",
};

const themes = [
  {
    icon: ClipboardCheck,
    title: "Consistency",
    copy: "Regular tests make it easier to study throughout the term instead of only before an examination.",
  },
  {
    icon: MessageCircle,
    title: "Approachable support",
    copy: "Students benefit when they can ask questions without hesitation and revisit weak concepts.",
  },
  {
    icon: UserCheck,
    title: "Visible guidance",
    copy: "Progress conversations help students and parents understand where attention is needed.",
  },
  {
    icon: BookOpenCheck,
    title: "Practical material",
    copy: "Organised notes and exam-pattern practice give revision a clear structure.",
  },
];

export default function TestimonialsPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Student & parent experience"
        title="What families value in the learning process"
        description="The strongest feedback is usually about the everyday experience: clear teaching, consistent testing, accessible doubt support and honest progress conversations."
      />

      <section className="bg-[var(--surface)]">
        <div className="shell py-20 lg:py-24">
          <SectionTitle
            eyebrow="Learning experiences"
            title="Feedback centred on the process—not exaggerated promises"
            description="These experience summaries reflect the themes highlighted across the Royal Classes website. Ask the centre directly for any current references or result documentation available to share."
            align="center"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal
                className="flex min-h-[300px] flex-col rounded-[10px] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow-sm)]"
                key={item.quote}
                delay={index * 0.07}
              >
                <div className="flex items-center justify-between">
                  <Quote size={28} className="text-[var(--royal-700)]" />
                  <div className="flex gap-1 text-[var(--gold-500)]" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star size={13} fill="currentColor" key={star} />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-8 flex-1 text-lg font-[630] leading-8 tracking-[-0.018em] text-[var(--navy-900)]">
                  “{item.quote}”
                </blockquote>
                <footer className="mt-8 border-t border-[var(--line)] pt-5">
                  <strong className="block text-xs text-[var(--navy-900)]">
                    {item.role}
                  </strong>
                  <span className="mt-1 block text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">
                    {item.context}
                  </span>
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="shell grid gap-12 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:py-24">
          <Reveal>
            <span className="section-kicker">What builds trust</span>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-[810] leading-[1.05] tracking-[-0.045em] text-[var(--navy-900)]">
              A coaching experience parents can understand
            </h2>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
              Trust grows from reliable academic routines and communication—not
              from promises about a specific rank or percentage.
            </p>
            <a className="button button-primary mt-7" href="/contact">
              Speak with the Team
            </a>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {themes.map((theme, index) => {
              const Icon = theme.icon;
              return (
                <Reveal
                  className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6"
                  key={theme.title}
                  delay={index * 0.05}
                >
                  <Icon size={23} className="text-[var(--royal-700)]" />
                  <h3 className="mt-4 text-lg font-bold text-[var(--navy-900)]">
                    {theme.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {theme.copy}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="Experience the teaching approach yourself"
        copy="Visit the Jogeshwari centre, discuss the student’s goals and ask about the current course and batch options."
      />
    </SiteFrame>
  );
}
