import type { Metadata } from "next";
import { GalleryShowcase } from "@/components/gallery-showcase";
import { CtaBand, PageHero, Reveal } from "@/components/royal-sections";
import { SiteFrame } from "@/components/royal-shell";

export const metadata: Metadata = {
  title: "Gallery | Royal Classes",
  description:
    "Explore classroom learning, guided practice, testing and academic guidance at Royal Classes in Jogeshwari East.",
};

export default function GalleryPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Inside Royal Classes"
        title="Learning that stays active beyond the lecture"
        description="Classroom teaching, guided practice, testing and academic counselling all contribute to the student experience."
      />

      <section className="bg-[var(--surface)]">
        <div className="shell py-20 lg:py-24">
          <Reveal className="mb-10 grid gap-4 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <span className="section-kicker">Photo gallery</span>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-[810] leading-[1.05] tracking-[-0.045em] text-[var(--navy-900)]">
                A closer look at the learning environment
              </h2>
            </div>
            <p className="max-w-[610px] text-sm leading-7 text-[var(--muted)] md:justify-self-end">
              Select any image to view it larger. The gallery highlights the
              mix of teaching, focused study, testing and guidance represented
              across the Royal Classes experience.
            </p>
          </Reveal>
          <GalleryShowcase />
        </div>
      </section>

      <CtaBand
        title="Visit the centre in Jogeshwari East"
        copy="Call before visiting to confirm current counselling availability and batch timings."
      />
    </SiteFrame>
  );
}
