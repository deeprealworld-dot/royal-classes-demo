import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  Users,
} from "lucide-react";
import { CourseCard } from "@/components/course-card";
import { CtaBand, PageHero, Reveal } from "@/components/royal-sections";
import { SiteFrame } from "@/components/royal-shell";
import { courses } from "@/lib/royal-data";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return { title: "Course Not Found | Royal Classes" };
  }

  return {
    title: `${course.title} Coaching | Royal Classes`,
    description: course.short,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  if (!course) notFound();

  const related = courses
    .filter(
      (item) => item.slug !== course.slug && item.category === course.category,
    )
    .slice(0, 3);

  return (
    <SiteFrame>
      <div className="bg-[var(--navy-950)] pt-6">
        <div className="shell">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-xs font-bold text-white/[0.6] transition hover:text-[var(--gold-400)]"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            All Courses
          </Link>
        </div>
      </div>
      <PageHero
        eyebrow={course.category}
        title={course.title}
        description={course.short}
        primaryLabel={`Enquire for ${course.title}`}
        primaryHref={`/admission?course=${encodeURIComponent(course.title)}`}
      />

      <section className="bg-white">
        <div className="shell grid gap-12 py-20 lg:grid-cols-[1.35fr_0.65fr] lg:py-24">
          <div className="grid gap-12">
            <Reveal>
              <span className="section-kicker">Course overview</span>
              <h2 className="mt-3 text-3xl font-[810] tracking-[-0.04em] text-[var(--navy-900)]">
                About this programme
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-[var(--muted)]">
                {course.description}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl font-[790] tracking-[-0.03em] text-[var(--navy-900)]">
                What the programme includes
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {course.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-4 text-sm leading-6 text-[#46566d]"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-[var(--royal-700)]"
                      size={19}
                      aria-hidden="true"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl font-[790] tracking-[-0.03em] text-[var(--navy-900)]">
                Subjects and focus areas
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {course.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="rounded-full bg-[var(--royal-100)] px-4 py-2 text-xs font-bold text-[var(--royal-700)]"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="h-fit rounded-[10px] border border-[var(--line)] bg-[var(--surface)] p-7 shadow-[var(--shadow-sm)] lg:sticky lg:top-[130px]">
            <span className="section-kicker">At a glance</span>
            <h2 className="mt-3 text-2xl font-[790] tracking-[-0.03em] text-[var(--navy-900)]">
              Course details
            </h2>
            <div className="mt-6 grid gap-5">
              <div className="flex items-start gap-3">
                <Clock
                  className="mt-0.5 shrink-0 text-[var(--royal-700)]"
                  size={20}
                />
                <div>
                  <strong className="block text-xs text-[var(--navy-900)]">
                    Duration
                  </strong>
                  <span className="mt-1 block text-xs leading-5 text-[var(--muted)]">
                    {course.duration}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users
                  className="mt-0.5 shrink-0 text-[var(--royal-700)]"
                  size={20}
                />
                <div>
                  <strong className="block text-xs text-[var(--navy-900)]">
                    Batch options
                  </strong>
                  <span className="mt-1 block text-xs leading-5 text-[var(--muted)]">
                    {course.batches}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap
                  className="mt-0.5 shrink-0 text-[var(--royal-700)]"
                  size={20}
                />
                <div>
                  <strong className="block text-xs text-[var(--navy-900)]">
                    Ideal for
                  </strong>
                  <span className="mt-1 block text-xs leading-5 text-[var(--muted)]">
                    {course.idealFor}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen
                  className="mt-0.5 shrink-0 text-[var(--royal-700)]"
                  size={20}
                />
                <div>
                  <strong className="block text-xs text-[var(--navy-900)]">
                    Study support
                  </strong>
                  <span className="mt-1 block text-xs leading-5 text-[var(--muted)]">
                    Printed notes, regular practice and doubt-solving
                  </span>
                </div>
              </div>
            </div>
            <a
              className="button button-primary mt-7 w-full"
              href={`/admission?course=${encodeURIComponent(course.title)}`}
            >
              Apply for Admission
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <p className="mt-3 text-center text-[10px] leading-4 text-[var(--muted)]">
              Current timings and availability are confirmed during counselling.
            </p>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-[var(--surface)]">
          <div className="shell py-20">
            <Reveal className="mb-8">
              <span className="section-kicker">Continue exploring</span>
              <h2 className="mt-3 text-3xl font-[810] tracking-[-0.04em] text-[var(--navy-900)]">
                Related programmes
              </h2>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <CourseCard course={item} index={index} key={item.slug} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </SiteFrame>
  );
}
