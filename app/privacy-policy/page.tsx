import type { Metadata } from "next";
import { PageHero, Reveal } from "@/components/royal-sections";
import { SiteFrame } from "@/components/royal-shell";
import { site } from "@/lib/royal-data";

export const metadata: Metadata = {
  title: "Privacy Policy | Royal Classes",
  description:
    "Privacy information for enquiries submitted through the Royal Classes website.",
};

export default function PrivacyPolicyPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Website information"
        title="Privacy Policy"
        description="This page explains how information entered into the Royal Classes website enquiry form is handled."
        compact
      />
      <section className="bg-white">
        <Reveal className="shell max-w-[850px] py-16 lg:py-20">
          <div className="legal-copy">
            <p className="legal-updated">Last updated: 23 July 2026</p>
            <h2>Information you provide</h2>
            <p>
              The admission form asks for a student name, parent or guardian
              name, phone number, course interest, current standard and an
              optional message.
            </p>
            <h2>How the form works</h2>
            <p>
              The website uses the details you enter to prepare a WhatsApp
              message addressed to Royal Classes. You review and send that
              message through WhatsApp. The website does not represent the form
              as a confirmed admission.
            </p>
            <h2>How information may be used</h2>
            <p>
              Information received by Royal Classes may be used to respond to
              your enquiry, explain programmes, discuss batch availability and
              assist with admission-related communication.
            </p>
            <h2>Third-party services</h2>
            <p>
              Phone, email, WhatsApp and Google Maps links open services
              operated by their respective providers. Their own privacy terms
              apply when you use those services.
            </p>
            <h2>Your choices</h2>
            <p>
              You can choose not to submit the online form and contact the
              centre directly instead. To ask about enquiry information you
              have shared, contact Royal Classes at{" "}
              <a href={site.emailHref}>{site.email}</a> or{" "}
              <a href={site.phoneHref}>{site.phoneDisplay}</a>.
            </p>
          </div>
        </Reveal>
      </section>
    </SiteFrame>
  );
}
