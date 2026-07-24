import type { Metadata } from "next";
import { CourseCard } from "@/components/course-card";
import { CtaBand, PageHero, Reveal } from "@/components/royal-sections";
import { SiteFrame } from "@/components/royal-shell";
import { courses } from "@/lib/royal-data";

export const metadata: Metadata = {
  title: "Courses | Royal Classes, Jogeshwari East",
  description:
    "Explore XI and XII Science, NEET, JEE, MHT-CET, Boards, Engineering, Medical and Pharmacy programmes at Royal Classes.",
};

const categories = ["Foundation", "Entrance Exam", "Career Pathway"] as const;

const categoryCopy = {
  Foundation:
    "Build the subject understanding, written practice and study discipline needed for board and entrance preparation.",
  "Entrance Exam":
    "Prepare around the actual demands of NEET, JEE and MHT-CET with targeted practice and evaluation.",
  "Career Pathway":
    "Coordinate Science coaching, entrance choices and practical guidance around the student’s intended field.",
};

export default function CoursesPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Courses & pathways"
        title="Choose a programme around the student’s next goal"
        description="From XI Science foundations to entrance preparation and career pathways, every programme combines teaching, practice, testing and guidance."
      />

      <section className="bg-[var(--surface)]">
        <div className="shell grid gap-16 py-20 lg:py-24">
          {categories.map((category) => {
            const categoryCourses = courses.filter(
              (course) => course.category === category,
            );
            return (
              <section key={category} aria-labelledby={`${category}-heading`}>
                <Reveal className="mb-8 grid gap-4 border-b border-[var(--line)] pb-7 md:grid-cols-[0.7fr_1.3fr] md:items-end">
                  <div>
                    <span className="section-kicker">Programme group</span>
                    <h2
                      id={`${category}-heading`}
                      className="mt-3 text-3xl font-[810] tracking-[-0.04em] text-[var(--navy-900)]"
                    >
                      {category}
                    </h2>
                  </div>
                  <p className="max-w-[650px] text-sm leading-7 text-[var(--muted)] md:justify-self-end">
                    {categoryCopy[category]}
                  </p>
                </Reveal>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryCourses.map((course, index) => (
                    <CourseCard course={course} index={index} key={course.slug} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <CtaBand
        title="Not sure which programme fits?"
        copy="Share the student’s current standard, subject group and target examination. The team can explain the closest available option."
      />
    </SiteFrame>
  );
}
