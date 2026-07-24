import type { Metadata } from "next";
import {
  Award,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  MessageCircle,
  ShieldCheck,
  Target,
  Trophy,
} from "lucide-react";
import { CtaBand, PageHero, Reveal, SectionTitle } from "@/components/royal-sections";
import { SiteFrame } from "@/components/royal-shell";
import { site } from "@/lib/royal-data";

export const metadata: Metadata = {
  title: "Results & Student Progress | Royal Classes",
  description:
    "See how Royal Classes tracks board preparation, entrance readiness and student progress through regular testing and verified result records.",
};

const progressAreas = [
  {
    icon: ClipboardCheck,
    title: "Chapter checks",
    copy: "Short, regular tests show whether a recently taught topic is understood.",
  },
  {
    icon: BarChart3,
    title: "Progress review",
    copy: "Performance patterns help students decide what to revise next.",
  },
  {
    icon: Target,
    title: "Exam-pattern practice",
    copy: "Timed papers build familiarity with board and entrance formats.",
  },
  {
    icon: Award,
    title: "Verified outcomes",
    copy: "Latest available result records can be requested directly from the centre.",
  },
];

export default function ResultsPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Results & progress"
        title="Results parents can verify, progress students can understand"
        description="Royal Classes uses regular evaluation to keep learning visible. For the latest board marks and entrance outcomes, families can request the available verified records directly from the centre."
        primaryLabel="Request Latest Results"
        primaryHref={site.resultsWhatsappHref}
      />

      <section className="bg-white">
        <div className="shell grid items-center gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <Reveal>
            <span className="section-kicker">An honest approach</span>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-[810] leading-[1.05] tracking-[-0.045em] text-[var(--navy-900)]">
              Clear evidence matters more than headline claims
            </h2>
            <p className="mt-5 text-[15px] leading-8 text-[var(--muted)]">
              Student results should be presented with context and consent. The
              website therefore does not publish unverified topper names,
              percentages or ranks. Parents can contact the centre to review the
              latest result sheets that are available to share.
            </p>
            <a
              className="button button-primary mt-7"
              href={site.resultsWhatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} aria-hidden="true" />
              Ask for Verified Records
            </a>
          </Reveal>

          <Reveal
            className="rounded-[4px_28px_4px_4px] bg-[var(--navy-950)] p-7 text-white shadow-[var(--shadow-lg)] sm:p-10"
            delay={0.1}
          >
            <div className="flex items-start gap-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-[var(--gold-500)] text-[var(--navy-950)]">
                <Trophy size={28} aria-hidden="true" />
              </span>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[var(--gold-400)]">
                  Latest topper records
                </span>
                <h2 className="mt-2 text-2xl font-[790] tracking-[-0.03em]">
                  Available through the Jogeshwari centre
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/[0.6]">
                  Message or visit Royal Classes to ask which recent board and
                  entrance records are currently available for review.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Board marks", "Entrance scores", "Progress reports"].map(
                (label) => (
                  <span
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.045] p-3 text-xs text-white/[0.7]"
                    key={label}
                  >
                    <CheckCircle2
                      size={15}
                      className="text-[var(--gold-400)]"
                    />
                    {label}
                  </span>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--surface)]">
        <div className="shell py-20 lg:py-24">
          <SectionTitle
            eyebrow="How progress is tracked"
            title="A repeatable cycle of teaching, testing and improvement"
            description="Results improve when students receive feedback early enough to act on it."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {progressAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Reveal
                  className="rounded-[10px] border border-[var(--line)] bg-white p-6"
                  key={area.title}
                  delay={index * 0.055}
                >
                  <Icon
                    size={24}
                    className="text-[var(--royal-700)]"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-lg font-bold text-[var(--navy-900)]">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {area.copy}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="shell grid gap-10 py-20 lg:grid-cols-3 lg:py-24">
          <Reveal className="lg:col-span-1">
            <span className="section-kicker">What parents receive</span>
            <h2 className="mt-3 text-3xl font-[810] tracking-[-0.04em] text-[var(--navy-900)]">
              Better conversations about performance
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {[
              {
                icon: ShieldCheck,
                title: "Specific feedback",
                copy: "Discuss subjects and chapters that need attention instead of relying only on an overall mark.",
              },
              {
                icon: Target,
                title: "A next-step plan",
                copy: "Turn test performance into a practical revision priority for the following week.",
              },
              {
                icon: BarChart3,
                title: "Visible consistency",
                copy: "Use repeated checks to understand whether performance is improving over time.",
              },
              {
                icon: Trophy,
                title: "Verified records",
                copy: "Request recent result documentation from the centre instead of relying on unsupported claims.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal
                  className="rounded-lg border border-[var(--line)] p-6"
                  key={item.title}
                  delay={index * 0.04}
                >
                  <Icon size={22} className="text-[var(--royal-700)]" />
                  <h3 className="mt-4 font-bold text-[var(--navy-900)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-[var(--muted)]">
                    {item.copy}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to see the latest available records?"
        copy="Message Royal Classes before visiting and ask which verified board and entrance results can currently be shared."
      />
    </SiteFrame>
  );
}
