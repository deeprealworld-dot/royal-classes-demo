import type { Metadata } from "next";
import { PageHero, Reveal } from "@/components/royal-sections";
import { SiteFrame } from "@/components/royal-shell";
import { site } from "@/lib/royal-data";

export const metadata: Metadata = {
  title: "Terms of Use | Royal Classes",
  description:
    "Terms for using the Royal Classes website and its admission enquiry features.",
};

export default function TermsPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Website information"
        title="Terms of Use"
        description="These terms explain the purpose and limitations of the Royal Classes website."
        compact
      />
      <section className="bg-white">
        <Reveal className="shell max-w-[850px] py-16 lg:py-20">
          <div className="legal-copy">
            <p className="legal-updated">Last updated: 23 July 2026</p>
            <h2>Website purpose</h2>
            <p>
              This website provides general information about Royal Classes,
              its coaching programmes, contact details and admission enquiry
              options.
            </p>
            <h2>Course and batch information</h2>
            <p>
              Programmes, schedules, seat availability, fees, study material
              and admission requirements can change. Confirm the current
              details directly with the Jogeshwari centre before making a
              decision.
            </p>
            <h2>Admissions</h2>
            <p>
              Submitting an enquiry, opening WhatsApp or contacting the centre
              does not itself confirm admission. Admission is confirmed only
              after Royal Classes completes its current process with the
              student or parent.
            </p>
            <h2>Results and outcomes</h2>
            <p>
              Academic and entrance outcomes depend on many factors, including
              student attendance, preparation and examination performance. The
              website does not guarantee a particular mark, percentile, rank or
              admission.
            </p>
            <h2>External links</h2>
            <p>
              The website includes links to phone, email, WhatsApp and Google
              Maps services. Royal Classes does not control the availability or
              terms of those third-party services.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about these terms can be directed to{" "}
              <a href={site.emailHref}>{site.email}</a> or{" "}
              <a href={site.phoneHref}>{site.phoneDisplay}</a>.
            </p>
          </div>
        </Reveal>
      </section>
    </SiteFrame>
  );
}
