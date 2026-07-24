import type { Metadata } from "next";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { PageHero, Reveal, SectionTitle } from "@/components/royal-sections";
import { SiteFrame } from "@/components/royal-shell";
import { site } from "@/lib/royal-data";

export const metadata: Metadata = {
  title: "Contact Royal Classes | Jogeshwari East",
  description:
    "Call, WhatsApp, email or visit Royal Classes at Satellite Shopping Centre, Station Road, Jogeshwari East, Mumbai.",
};

export default function ContactPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Contact Royal Classes"
        title="Visit, call or send an admission enquiry"
        description="The centre is located on Station Road in Jogeshwari East. Contact the team before visiting to confirm current course counselling and batch information."
        primaryLabel="Get Directions"
        primaryHref={site.mapHref}
      />

      <section className="bg-white">
        <div className="shell py-20 lg:py-24">
          <SectionTitle
            eyebrow="Speak with the team"
            title="Choose the contact option that is easiest for you"
            description="For a faster course enquiry, include the student’s current standard and target examination."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Phone,
                title: "Call",
                copy: site.phoneDisplay,
                href: site.phoneHref,
                label: "Call now",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                copy: "Send a course enquiry",
                href: site.whatsappHref,
                label: "Open WhatsApp",
              },
              {
                icon: Mail,
                title: "Email",
                copy: site.email,
                href: site.emailHref,
                label: "Write an email",
              },
              {
                icon: MapPin,
                title: "Directions",
                copy: "Jogeshwari East, Mumbai",
                href: site.mapHref,
                label: "Open Maps",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal
                  className="group flex flex-col rounded-[10px] border border-[var(--line)] bg-[var(--surface)] p-6"
                  key={item.title}
                  delay={index * 0.05}
                >
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-[var(--royal-100)] text-[var(--royal-700)]">
                    <Icon size={21} />
                  </span>
                  <h2 className="mt-5 text-lg font-bold text-[var(--navy-900)]">
                    {item.title}
                  </h2>
                  <p className="mt-2 flex-1 break-words text-xs leading-6 text-[var(--muted)]">
                    {item.copy}
                  </p>
                  <a
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[var(--royal-700)]"
                    href={item.href}
                    target={
                      item.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("http") ? "noreferrer" : undefined
                    }
                  >
                    {item.label}
                    <ArrowUpRight
                      size={15}
                      className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)]">
        <div className="shell grid gap-12 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:py-24">
          <Reveal>
            <span className="section-kicker">Visit Royal Classes</span>
            <h2 className="mt-3 text-3xl font-[810] tracking-[-0.04em] text-[var(--navy-900)]">
              Conveniently located in Jogeshwari East
            </h2>
            <address className="mt-7 grid gap-5 not-italic">
              <div className="flex items-start gap-4">
                <MapPin
                  className="mt-0.5 shrink-0 text-[var(--royal-700)]"
                  size={21}
                />
                <div>
                  <strong className="text-xs text-[var(--navy-900)]">
                    Full address
                  </strong>
                  <p className="mt-1 text-xs leading-6 text-[var(--muted)]">
                    {site.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock
                  className="mt-0.5 shrink-0 text-[var(--royal-700)]"
                  size={21}
                />
                <div>
                  <strong className="text-xs text-[var(--navy-900)]">
                    Before visiting
                  </strong>
                  <p className="mt-1 text-xs leading-6 text-[var(--muted)]">
                    Please call to confirm current office hours, counselling
                    availability and batch timings.
                  </p>
                </div>
              </div>
            </address>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="button button-primary" href={site.mapHref} target="_blank" rel="noreferrer">
                Get Directions
              </a>
              <a className="button button-outline" href="/admission">
                Admission Form
              </a>
            </div>
          </Reveal>

          <Reveal className="map-frame min-h-[480px]" delay={0.08}>
            <iframe
              src={site.mapEmbed}
              title="Royal Classes location in Jogeshwari East, Mumbai"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>
    </SiteFrame>
  );
}
