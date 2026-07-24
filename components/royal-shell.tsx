"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { courses, navItems, site } from "@/lib/royal-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="admission-ribbon">
        <div className="shell ribbon-inner">
          <p>
            <span>Admissions open 2026–2027</span>
            <span className="ribbon-detail">
              XI, XII Science · NEET · JEE · MHT-CET
            </span>
          </p>
          <a
            href={site.phoneHref}
            aria-label={`Call Royal Classes at ${site.phoneDisplay}`}
          >
            <Phone size={14} aria-hidden="true" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="shell nav-row">
        <Link className="brand" href="/" aria-label="Royal Classes home">
          <span className="brand-mark" aria-hidden="true">
            RC
          </span>
          <span className="brand-copy">
            <strong>Royal Classes</strong>
            <small>Jogeshwari East, Mumbai</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "active" : undefined}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <a className="nav-phone" href={site.phoneHref}>
            <Phone size={16} aria-hidden="true" />
            Call
          </a>
          <a className="button button-small" href="/admission">
            Enquire
          </a>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.24, ease: "easeOut" }}
          >
            <div className="shell">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a href={site.phoneHref}>Call {site.phoneDisplay}</a>
              <Link
                className="mobile-enquire"
                href="/admission"
                onClick={() => setMenuOpen(false)}
              >
                Enquire for Admission
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <Link className="brand footer-logo" href="/">
              <span className="brand-mark" aria-hidden="true">
                RC
              </span>
              <span className="brand-copy">
                <strong>Royal Classes</strong>
                <small>Jogeshwari East, Mumbai</small>
              </span>
            </Link>
            <p>
              Structured coaching for XI, XII Science, NEET, JEE, MHT-CET and
              board examinations.
            </p>
            <a
              className="footer-whatsapp"
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} aria-hidden="true" />
              Enquire on WhatsApp
            </a>
          </div>

          <nav aria-label="Footer quick links">
            <h3>Quick Links</h3>
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <nav aria-label="Footer course links">
            <h3>Courses</h3>
            {courses.slice(0, 6).map((course) => (
              <Link href={`/courses/${course.slug}`} key={course.slug}>
                {course.title}
              </Link>
            ))}
          </nav>

          <div className="footer-contact">
            <h3>Contact</h3>
            <a href={site.phoneHref}>
              <Phone size={16} aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <a href={site.emailHref}>
              <Mail size={16} aria-hidden="true" />
              {site.email}
            </a>
            <a href={site.mapHref} target="_blank" rel="noreferrer">
              <MapPin size={16} aria-hidden="true" />
              Jogeshwari East, Mumbai
            </a>
          </div>
        </div>

        <div className="shell footer-bottom">
          <p>© {new Date().getFullYear()} Royal Classes. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <span>Admissions open 2026–2027</span>
          </div>
        </div>
      </footer>

      <div className="floating-actions" aria-label="Quick contact actions">
        <a href={site.phoneHref} aria-label="Call Royal Classes">
          <Phone size={20} aria-hidden="true" />
        </a>
        <a
          className="floating-whatsapp"
          href={site.whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Enquire with Royal Classes on WhatsApp"
        >
          <MessageCircle size={21} aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
