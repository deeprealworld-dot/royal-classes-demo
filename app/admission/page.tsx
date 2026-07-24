import type { Metadata } from "next";
import {
  CheckCircle2,
  Clock,
  FileText,
  MessageCircle,
  Phone,
  UserCheck,
} from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero, Reveal, SectionTitle } from "@/components/royal-sections";
import { SiteFrame } from "@/components/royal-shell";
import { batchGroups, site } from "@/lib/royal-data";

export const metadata: Metadata = {
  title: "Admission 2026–2027 | Royal Classes",
  description:
    "Enquire for Royal Classes admissions for XI, XII Science, NEET, JEE, MHT-CET, Boards and career pathways in Jogeshwari East.",
};

export default async function AdmissionPage({
  searchParams,
}: {
  searchParams: Promise<{ course?: string }>;
}) {
  const { course = "" } = await searchParams;

  return (
    <SiteFrame>
      <PageHero
        eyebrow="Admissions open 2026–2027"
        title="Find the right course and batch for the student"
        description="Share the student’s current standard, subject group and target examination. The Royal Classes team will explain the suitable programme and current batch availability."
        primaryLabel="WhatsApp Admissions"
        primaryHref={site.whatsappHref}
      />

      <section className="bg-[var(--navy-950)]">
        <div className="shell grid gap-12 py-20 lg:grid-cols-[0.72fr_1.28fr] lg:py-24">
          <div className="text-white">
            <Reveal>
              <span className="section-kicker light">Batch guidance</span>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3.35rem)] font-[810] leading-[1.05] tracking-[-0.045em]">
                Current options are confirmed during counselling
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/[0.6]">
                Exact timings can change by course and term. Call before
                visiting so the team can confirm the latest schedule and seat
                availability.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-3">
              {batchGroups.map((batch, index) => (
                <Reveal
                  className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/[0.045] p-5"
                  key={batch.title}
                  delay={index * 0.05}
                >
                  <Clock
                    className="mt-0.5 shrink-0 text-[var(--gold-400)]"
                    size={20}
                  />
                  <div>
                    <h3 className="text-sm font-bold">{batch.title}</h3>
                    <strong className="mt-1 block text-xs font-semibold text-white/[0.7]">
                      {batch.timing}
                    </strong>
                    <span className="mt-1 block text-[11px] leading-5 text-white/[0.45]">
                      {batch.note}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-6 flex items-start gap-3 rounded-lg bg-[var(--gold-500)] p-4 text-[var(--navy-950)]">
              <Phone size={19} className="mt-0.5 shrink-0" />
              <p className="text-xs leading-5">
                Confirm the latest timings by calling{" "}
                <a className="font-extrabold underline" href={site.phoneHref}>
                  {site.phoneDisplay}
                </a>
                .
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <EnquiryForm initialCourse={course} />
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="shell py-20 lg:py-24">
          <SectionTitle
            eyebrow="Simple admission process"
            title="From enquiry to the right classroom"
            description="The first conversation is about fit—current standard, subjects, target examination and available schedule."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: MessageCircle,
                step: "01",
                title: "Send an enquiry",
                copy: "Call, WhatsApp or complete the form with the student’s current standard and course interest.",
              },
              {
                icon: UserCheck,
                step: "02",
                title: "Discuss the programme",
                copy: "Understand the course structure, current batch option and what the student should prepare for.",
              },
              {
                icon: CheckCircle2,
                step: "03",
                title: "Confirm admission",
                copy: "The centre team will explain the current admission requirements and next steps.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal
                  className="relative rounded-[10px] border border-[var(--line)] bg-[var(--surface)] p-7"
                  key={item.step}
                  delay={index * 0.06}
                >
                  <span className="absolute right-5 top-4 text-4xl font-[850] text-[var(--navy-900)]/[0.06]">
                    {item.step}
                  </span>
                  <Icon size={25} className="text-[var(--royal-700)]" />
                  <h3 className="mt-5 text-xl font-bold text-[var(--navy-900)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {item.copy}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)]">
        <div className="shell grid gap-12 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
          <Reveal>
            <span className="section-kicker">Before you visit</span>
            <h2 className="mt-3 text-3xl font-[810] tracking-[-0.04em] text-[var(--navy-900)]">
              Bring the information needed for a useful discussion
            </h2>
            <div className="mt-6 flex items-start gap-4 rounded-lg border border-[var(--line)] bg-white p-5">
              <FileText
                className="mt-0.5 shrink-0 text-[var(--royal-700)]"
                size={22}
              />
              <p className="text-sm leading-7 text-[var(--muted)]">
                Keep the student’s current standard, subject group, target exam
                and recent academic performance in mind. The centre will confirm
                whether any specific documents are required for admission.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid gap-3">
              {[
                {
                  q: "Can I enquire before deciding on a course?",
                  a: "Yes. Share the student’s current standard and goal; the team can explain the relevant options before you decide.",
                },
                {
                  q: "Are morning and evening batches available?",
                  a: "Options vary by programme and term. Please call to confirm the current schedule.",
                },
                {
                  q: "Can I ask about fees on WhatsApp?",
                  a: "Yes. The centre can share the current course details and explain the applicable fee structure directly.",
                },
                {
                  q: "Does submitting the form confirm admission?",
                  a: "No. The form creates an enquiry. Admission is confirmed only after the centre discusses availability and completes its process with you.",
                },
              ].map((item) => (
                <details
                  className="group rounded-lg border border-[var(--line)] bg-white p-5"
                  key={item.q}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-[var(--navy-900)]">
                    {item.q}
                    <span className="text-xl font-normal text-[var(--royal-700)] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 pr-8 text-xs leading-6 text-[var(--muted)]">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </SiteFrame>
  );
}
