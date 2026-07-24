"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Atom,
  Award,
  BarChart3,
  BookOpen,
  BookOpenCheck,
  Calculator,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Compass,
  FileText,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Pill,
  Quote,
  Send,
  Star,
  Stethoscope,
  Target,
  Trophy,
  UserCheck,
  Users,
  X,
} from "lucide-react";

const PHONE_DISPLAY = "+91 9930707708";
const PHONE_HREF = "tel:+919930707708";
const EMAIL = "info@royalclasses.com";
const EMAIL_HREF = "mailto:info@royalclasses.com";
const ADDRESS =
  "31 A, Satellite Shopping Centre, Opp. JES College, Station Road, Near I. Y. College, Jogeshwari East, Mumbai - 400060";
const WHATSAPP_NUMBER = "919930707708";
const WHATSAPP_HREF =
  "https://wa.me/919930707708?text=Hello%20Royal%20Classes%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20for%202026%E2%80%932027.";
const RESULTS_WHATSAPP_HREF =
  "https://wa.me/919930707708?text=Hello%20Royal%20Classes%2C%20please%20share%20your%20latest%20verified%20results%20and%20course%20details.";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=31%20A%20Satellite%20Shopping%20Centre%20Station%20Road%20Jogeshwari%20East%20Mumbai%20400060";
const MAP_EMBED =
  "https://www.google.com/maps?q=31%20A%20Satellite%20Shopping%20Centre%20Station%20Road%20Jogeshwari%20East%20Mumbai%20400060&output=embed";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Results", href: "/results" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Admission", href: "/admission" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

type Course = {
  slug: string;
  title: string;
  category: string;
  copy: string;
  details: string[];
  icon: LucideIcon;
};

const courses: Course[] = [
  {
    slug: "xi-science",
    title: "XI Science",
    category: "Foundation",
    copy: "Build strong concepts in Physics, Chemistry, Mathematics and Biology from the start.",
    details: [
      "Concept-first classroom teaching",
      "Chapter-wise tests and revision",
      "Early entrance-exam orientation",
    ],
    icon: FlaskConical,
  },
  {
    slug: "xii-science",
    title: "XII Science",
    category: "Boards + Entrance",
    copy: "Complete HSC preparation with regular practice for board and entrance-style questions.",
    details: [
      "Board-pattern answer writing",
      "Syllabus tracking and prelim practice",
      "Support for PCM and PCB groups",
    ],
    icon: GraduationCap,
  },
  {
    slug: "neet",
    title: "NEET",
    category: "Medical Entrance",
    copy: "NCERT-aligned Physics, Chemistry and Biology preparation with focused MCQ practice.",
    details: [
      "Biology, Physics and Chemistry",
      "Chapter-wise MCQs and tests",
      "Revision and doubt-solving support",
    ],
    icon: HeartPulse,
  },
  {
    slug: "jee",
    title: "JEE",
    category: "Engineering Entrance",
    copy: "Concept depth and structured problem-solving for JEE Main and advanced-level readiness.",
    details: [
      "Physics, Chemistry and Mathematics",
      "Graded problem sets",
      "Exam strategy and mock practice",
    ],
    icon: Atom,
  },
  {
    slug: "mht-cet",
    title: "MHT-CET",
    category: "State Entrance",
    copy: "State-board-aligned PCM or PCB preparation with emphasis on speed and accuracy.",
    details: [
      "PCM and PCB options",
      "Timed MCQ practice",
      "CET-pattern revision tests",
    ],
    icon: Target,
  },
  {
    slug: "boards",
    title: "Boards",
    category: "SSC + HSC",
    copy: "Syllabus coverage, answer presentation and repeated board-pattern exam practice.",
    details: [
      "Important-question practice",
      "Paper presentation guidance",
      "Regular prelim examinations",
    ],
    icon: BookOpenCheck,
  },
  {
    slug: "engineering",
    title: "Engineering",
    category: "Career Pathway",
    copy: "An integrated path combining Science coaching with engineering entrance guidance.",
    details: [
      "Board + entrance coordination",
      "Engineering pathway counselling",
      "College and branch orientation",
    ],
    icon: Calculator,
  },
  {
    slug: "medical",
    title: "Medical",
    category: "Career Pathway",
    copy: "A guided pathway for aspiring medical students from XI Science through NEET preparation.",
    details: [
      "XI–XII + NEET planning",
      "Biology-focused support",
      "Medical pathway guidance",
    ],
    icon: Stethoscope,
  },
  {
    slug: "pharmacy",
    title: "Pharmacy",
    category: "Career Pathway",
    copy: "Science and MHT-CET preparation for students considering B.Pharm or D.Pharm.",
    details: [
      "PCM or PCB preparation",
      "MHT-CET focus",
      "Pharmacy course guidance",
    ],
    icon: Pill,
  },
];

const trustHighlights: Array<{
  title: string;
  copy: string;
  icon: LucideIcon;
}> = [
  {
    title: "25+ Years Excellence",
    copy: "A long-standing commitment to Science education in Jogeshwari.",
    icon: Award,
  },
  {
    title: "Experienced Faculty",
    copy: "Subject-focused teaching with clear explanations and exam context.",
    icon: Users,
  },
  {
    title: "Weekly Tests",
    copy: "Regular checks help students stay consistent and identify weak areas.",
    icon: ClipboardCheck,
  },
  {
    title: "Doubt Solving",
    copy: "Dedicated support so questions are addressed before topics move ahead.",
    icon: MessageCircle,
  },
  {
    title: "Printed Notes",
    copy: "Organised study material for classroom learning and revision.",
    icon: FileText,
  },
  {
    title: "Career Guidance",
    copy: "Practical support for exam choices, streams and college pathways.",
    icon: Compass,
  },
  {
    title: "Personal Attention",
    copy: "Student progress stays visible through guidance and regular follow-up.",
    icon: UserCheck,
  },
  {
    title: "Board + Entrance Prep",
    copy: "A coordinated plan for HSC, NEET, JEE and MHT-CET preparation.",
    icon: Layers,
  },
];

const examProgrammes = [
  {
    name: "NEET",
    focus: "NCERT mastery + disciplined MCQ practice",
    copy: "Structured preparation across Physics, Chemistry and Biology with revision, testing and doubt support.",
    subjects: ["Physics", "Chemistry", "Biology"],
    icon: HeartPulse,
  },
  {
    name: "JEE",
    focus: "Concept depth + problem-solving ability",
    copy: "A progressive approach from core concepts to application-based questions across PCM subjects.",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    icon: Atom,
  },
  {
    name: "MHT-CET",
    focus: "Speed + accuracy for the state pattern",
    copy: "Board-aligned preparation with timed practice, targeted revision and exam-pattern tests.",
    subjects: ["PCM option", "PCB option", "Mock practice"],
    icon: Target,
  },
];

const feedback = [
  {
    quote:
      "The weekly tests made it easier to stay regular instead of studying only before examinations.",
    role: "Student experience",
    context: "Entrance preparation",
  },
  {
    quote:
      "Clear progress discussions helped us understand where our child needed more support.",
    role: "Parent experience",
    context: "XII Science",
  },
  {
    quote:
      "Doubt-solving sessions made it easier to ask questions and fix weak concepts early.",
    role: "Student experience",
    context: "Science programme",
  },
];

const galleryItems = [
  {
    src: "/images/gallery-classroom.webp",
    alt: "A classroom lecture with Science students",
    title: "Classroom Learning",
  },
  {
    src: "/images/gallery-lab.webp",
    alt: "Students learning through a laboratory activity",
    title: "Applied Science",
  },
  {
    src: "/images/gallery-library.webp",
    alt: "Students studying in a quiet learning space",
    title: "Focused Self-Study",
  },
  {
    src: "/images/gallery-seminar.webp",
    alt: "An academic guidance seminar for students",
    title: "Guidance Sessions",
  },
  {
    src: "/images/gallery-test.webp",
    alt: "Students writing a structured classroom test",
    title: "Regular Testing",
  },
  {
    src: "/images/gallery-awards.webp",
    alt: "A student being recognised at an academic event",
    title: "Student Recognition",
  },
];

const batchGroups = [
  {
    title: "XI & XII Science",
    timing: "Morning and evening batch options",
    note: "Subject schedule shared during counselling",
  },
  {
    title: "NEET, JEE & MHT-CET",
    timing: "Weekday teaching with planned test sessions",
    note: "Integrated and target-exam options",
  },
  {
    title: "Boards & Career Pathways",
    timing: "Course-specific weekday batches",
    note: "Confirm the current schedule before visiting",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [enquiryLink, setEnquiryLink] = useState(WHATSAPP_HREF);
  const reduceMotion = useReducedMotion();

  function chooseCourse(course: string) {
    setSelectedCourse(course);
    setSubmitted(false);
    document.getElementById("admission")?.scrollIntoView({ behavior: "smooth" });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const studentName = String(formData.get("studentName") || "");
    const parentName = String(formData.get("parentName") || "");
    const phone = String(formData.get("phone") || "");
    const currentStandard = String(formData.get("currentStandard") || "");
    const message = String(formData.get("message") || "");
    const enquiryMessage = [
      "Hello Royal Classes, I would like to enquire about admissions for 2026–2027.",
      `Student: ${studentName}`,
      `Parent: ${parentName}`,
      `Phone: ${phone}`,
      `Course: ${selectedCourse}`,
      `Current standard: ${currentStandard}`,
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiryMessage)}`;
    setEnquiryLink(link);
    setSubmitted(true);
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <main id="home">
      <header className="site-header">
        <div className="admission-ribbon">
          <div className="shell ribbon-inner">
            <p>
              <span>Admissions open 2026–2027</span>
              <span className="ribbon-detail">
                XI, XII Science · NEET · JEE · MHT-CET
              </span>
            </p>
            <a href={PHONE_HREF} aria-label={`Call Royal Classes at ${PHONE_DISPLAY}`}>
              <Phone size={14} aria-hidden="true" />
              {PHONE_DISPLAY}
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
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="nav-phone" href={PHONE_HREF}>
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
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.nav
              className="mobile-nav"
              aria-label="Mobile navigation"
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.24,
                ease: "easeOut",
              }}
            >
              <div className="shell">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a href={PHONE_HREF}>Call {PHONE_DISPLAY}</a>
                <a
                  className="mobile-enquire"
                  href="/admission"
                  onClick={() => setMenuOpen(false)}
                >
                  Enquire for Admission
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid shell">
          <motion.div
            className="hero-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="eyebrow">
              <span aria-hidden="true" />
              Science coaching in Jogeshwari East
            </div>
            <h1 id="hero-title">
              Shaping bright futures in
              <em> Science, Engineering &amp; Medical</em>
            </h1>
            <p className="hero-lead">
              Structured coaching for XI, XII Science, NEET, JEE, MHT-CET and
              board exams with experienced faculty, regular tests, doubt-solving
              and personal guidance.
            </p>

            <div className="hero-actions" aria-label="Admission enquiry actions">
              <a className="button button-gold" href="/admission">
                Enquire Now
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-outline-light" href={PHONE_HREF}>
                <Phone size={18} aria-hidden="true" />
                Call Now
              </a>
              <a
                className="text-action"
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp us
              </a>
            </div>

            <ul className="hero-checks" aria-label="Royal Classes highlights">
              <li>
                <Check size={15} aria-hidden="true" />
                Weekly tests
              </li>
              <li>
                <Check size={15} aria-hidden="true" />
                Printed notes
              </li>
              <li>
                <Check size={15} aria-hidden="true" />
                Personal attention
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97, x: 18 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.72,
              delay: reduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="hero-photo-frame">
              <img
                src="/images/hero-classroom.webp"
                alt="A Royal Classes science lecture in progress"
              />
              <div className="image-shade" aria-hidden="true" />
              <div className="photo-caption">
                <span>Focused classrooms</span>
                <strong>Concepts first. Practice every week.</strong>
              </div>
            </div>
            <div className="experience-card">
              <strong>25+</strong>
              <span>Years of excellence in coaching</span>
            </div>
            <div className="attention-card">
              <Users size={20} aria-hidden="true" />
              <span>
                <strong>Personal guidance</strong>
                Every student stays visible
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="admission-band">
        <div className="shell admission-band-inner">
          <div>
            <span className="band-label">Admissions 2026–2027</span>
            <strong>New batches are now forming</strong>
          </div>
          <p>
            Speak with our team to choose the right board and entrance
            preparation plan.
          </p>
          <a href="#admission">
            Check availability
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="trust-strip" aria-label="Royal Classes trust highlights">
        <div className="shell trust-strip-grid">
          <div>
            <strong>25+</strong>
            <span>Years in coaching</span>
          </div>
          <div>
            <Users size={21} aria-hidden="true" />
            <span>Experienced faculty</span>
          </div>
          <div>
            <ClipboardCheck size={21} aria-hidden="true" />
            <span>Weekly evaluation</span>
          </div>
          <div>
            <Layers size={21} aria-hidden="true" />
            <span>Boards + entrance prep</span>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell about-grid">
          <div className="about-image-wrap">
            <img
              src="/images/about-institute.webp"
              alt="Students learning together in a Royal Classes study session"
            />
            <div className="about-image-note">
              <BookOpen size={21} aria-hidden="true" />
              <span>
                <strong>Structured learning</strong>
                Teaching, practice, testing and feedback
              </span>
            </div>
          </div>

          <div className="about-copy">
            <span className="section-kicker">About Royal Classes</span>
            <h2>Clear teaching. Consistent practice. Personal guidance.</h2>
            <p>
              Royal Classes is a Science coaching institute in Jogeshwari East,
              Mumbai, supporting students across board examinations and
              competitive entrances. The focus is practical: teach concepts
              clearly, test regularly, solve doubts and keep every student&apos;s
              progress visible.
            </p>
            <p>
              Programmes are designed for students and parents who want one
              organised academic plan for XI–XII Science, NEET, JEE, MHT-CET and
              career-focused preparation.
            </p>

            <div className="about-points">
              <div>
                <CheckCircle2 size={18} aria-hidden="true" />
                Board-focused answer writing
              </div>
              <div>
                <CheckCircle2 size={18} aria-hidden="true" />
                Entrance-pattern practice
              </div>
              <div>
                <CheckCircle2 size={18} aria-hidden="true" />
                Regular parent guidance
              </div>
              <div>
                <CheckCircle2 size={18} aria-hidden="true" />
                Revision and doubt support
              </div>
            </div>

            <a className="inline-link" href="#courses">
              Explore our programmes
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="director-section">
        <div className="shell director-card">
          <div className="director-mark" aria-hidden="true">
            <Quote size={36} />
          </div>
          <div className="director-copy">
            <span className="section-kicker light">Director&apos;s message</span>
            <blockquote>
              “Our responsibility goes beyond completing a syllabus. We work to
              build strong concepts, disciplined study habits and the confidence
              to ask questions. Every student deserves clear guidance and a
              practical plan for the goal ahead.”
            </blockquote>
            <div className="director-signoff">
              <strong>Director</strong>
              <span>Royal Classes, Jogeshwari East</span>
            </div>
          </div>
          <div className="director-principles">
            <div>
              <span>01</span>
              <p>Teach for understanding</p>
            </div>
            <div>
              <span>02</span>
              <p>Test for improvement</p>
            </div>
            <div>
              <span>03</span>
              <p>Guide every student</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section courses-section" id="courses">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <span className="section-kicker">Courses &amp; pathways</span>
              <h2>Choose a programme around the student&apos;s next goal</h2>
            </div>
            <p>
              From XI Science foundations to entrance preparation and career
              pathways, every programme combines teaching, practice and
              evaluation.
            </p>
          </div>

          <div className="course-grid">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <motion.article
                  className="course-card"
                  key={course.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.45,
                    delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.2),
                  }}
                >
                  <div className="course-top">
                    <div className="course-icon">
                      <Icon size={23} aria-hidden="true" />
                    </div>
                    <span>{course.category}</span>
                  </div>
                  <h3>{course.title}</h3>
                  <p>{course.copy}</p>
                  <a
                    className="course-page-link"
                    href={`/courses/${course.slug}`}
                    aria-label={`View ${course.title} course details`}
                  >
                    View Details
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="shell">
          <div className="section-intro">
            <span className="section-kicker">Why Royal Classes</span>
            <h2>The support students need to stay consistent</h2>
            <p>
              A dependable coaching experience is built through clear teaching,
              frequent practice and accessible guidance—not unnecessary
              complexity.
            </p>
          </div>

          <div className="why-grid">
            {trustHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <Icon size={22} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section exam-section">
        <div className="shell">
          <div className="section-heading-row exam-heading">
            <div>
              <span className="section-kicker light">Entrance preparation</span>
              <h2>Focused preparation for competitive examinations</h2>
            </div>
            <p>
              Each exam has a different pattern. The teaching plan, practice
              style and testing rhythm should reflect that.
            </p>
          </div>

          <div className="exam-grid">
            {examProgrammes.map((programme) => {
              const Icon = programme.icon;
              return (
                <article className="exam-card" key={programme.name}>
                  <div className="exam-card-head">
                    <Icon size={26} aria-hidden="true" />
                    <span>{programme.name}</span>
                  </div>
                  <h3>{programme.focus}</h3>
                  <p>{programme.copy}</p>
                  <ul>
                    {programme.subjects.map((subject) => (
                      <li key={subject}>{subject}</li>
                    ))}
                  </ul>
                  <button type="button" onClick={() => chooseCourse(programme.name)}>
                    Ask about {programme.name}
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section results-section" id="results">
        <div className="shell results-grid">
          <div className="results-copy">
            <span className="section-kicker">Results &amp; progress</span>
            <h2>Results parents can verify, progress students can understand</h2>
            <p>
              Royal Classes tracks learning through chapter tests, exam-pattern
              practice and regular feedback. Latest board marks and entrance
              scores are shared as verified records, with student consent.
            </p>
            <div className="verified-note">
              <Trophy size={25} aria-hidden="true" />
              <div>
                <strong>Latest topper records</strong>
                <span>
                  Visit the Jogeshwari centre or message our team to view the
                  latest available result sheets.
                </span>
              </div>
            </div>
            <a
              className="button button-primary"
              href={RESULTS_WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
            >
              Request Latest Results
              <MessageCircle size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="result-cards">
            <article>
              <BarChart3 size={23} aria-hidden="true" />
              <span>Board preparation</span>
              <h3>Track syllabus, tests and answer-writing progress</h3>
              <p>Useful feedback throughout the academic year.</p>
            </article>
            <article>
              <Target size={23} aria-hidden="true" />
              <span>Entrance readiness</span>
              <h3>Practice exam patterns before the real examination</h3>
              <p>Timed MCQs, revision and performance review.</p>
            </article>
            <article>
              <Award size={23} aria-hidden="true" />
              <span>Verified outcomes</span>
              <h3>Result records shared clearly, without inflated claims</h3>
              <p>Ask the centre team for the latest available records.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section testimonials-section" id="testimonials">
        <div className="shell">
          <div className="section-intro">
            <span className="section-kicker">Student &amp; parent experience</span>
            <h2>What families value in the learning process</h2>
            <p>
              Consistency, clear communication and approachable teachers are the
              themes students and parents value most.
            </p>
          </div>

          <div className="testimonial-grid">
            {feedback.map((item) => (
              <article key={item.quote}>
                <div className="testimonial-top">
                  <Quote size={25} aria-hidden="true" />
                  <div aria-label="5 star feedback">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={13} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <blockquote>“{item.quote}”</blockquote>
                <footer>
                  <strong>{item.role}</strong>
                  <span>{item.context}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section admission-section" id="admission">
        <div className="shell admission-layout">
          <div className="batch-panel">
            <span className="section-kicker light">Admissions 2026–2027</span>
            <h2>Find the right course and batch</h2>
            <p>
              Share the student&apos;s current standard and target exam. Our team
              will help you understand the suitable programme and current batch
              availability.
            </p>

            <div className="batch-list">
              {batchGroups.map((batch) => (
                <article key={batch.title}>
                  <Clock size={20} aria-hidden="true" />
                  <div>
                    <h3>{batch.title}</h3>
                    <strong>{batch.timing}</strong>
                    <span>{batch.note}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="batch-note">
              <Phone size={18} aria-hidden="true" />
              <p>
                Exact timings can change by course and term. Please call{" "}
                <a href={PHONE_HREF}>{PHONE_DISPLAY}</a> before visiting.
              </p>
            </div>
          </div>

          <div className="form-card">
            <div className="form-heading">
              <span>Admission enquiry</span>
              <h2>Request course details</h2>
              <p>Complete the form and send the enquiry directly on WhatsApp.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>
                  <span>Student Name *</span>
                  <input
                    type="text"
                    name="studentName"
                    placeholder="Student's full name"
                    autoComplete="name"
                    required
                  />
                </label>
                <label>
                  <span>Parent Name *</span>
                  <input
                    type="text"
                    name="parentName"
                    placeholder="Parent / guardian name"
                    autoComplete="name"
                    required
                  />
                </label>
                <label>
                  <span>Phone Number *</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="10-digit mobile number"
                    autoComplete="tel"
                    inputMode="tel"
                    pattern="[0-9+\s-]{10,15}"
                    required
                  />
                </label>
                <label>
                  <span>Course Interested In *</span>
                  <select
                    name="course"
                    value={selectedCourse}
                    onChange={(event) => setSelectedCourse(event.target.value)}
                    required
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option value={course.title} key={course.title}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="full-field">
                  <span>Current Standard *</span>
                  <select name="currentStandard" defaultValue="" required>
                    <option value="" disabled>
                      Select current standard
                    </option>
                    <option>Std. X</option>
                    <option>Std. XI</option>
                    <option>Std. XII</option>
                    <option>Repeater / gap year</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="full-field">
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about the student's goals or questions"
                  />
                </label>
              </div>

              <button className="form-submit" type="submit">
                Send Enquiry
                <Send size={17} aria-hidden="true" />
              </button>
              <p className="privacy-copy">
                The details you enter are used only to prepare your WhatsApp
                enquiry to Royal Classes.
              </p>

              {submitted && (
                <div className="form-success" role="status" aria-live="polite">
                  <CheckCircle2 size={21} aria-hidden="true" />
                  <div>
                    <strong>Your enquiry is ready.</strong>
                    <span>
                      Complete sending it in WhatsApp. If it did not open,{" "}
                      <a href={enquiryLink} target="_blank" rel="noreferrer">
                        open WhatsApp here
                      </a>
                      .
                    </span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="section gallery-section" id="gallery">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <span className="section-kicker">Inside Royal Classes</span>
              <h2>Learning that stays active beyond the lecture</h2>
            </div>
            <p>
              Classroom teaching, guided practice, testing and academic
              counselling are all part of the student experience.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <figure className={index === 0 ? "gallery-featured" : ""} key={item.src}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="shell contact-grid">
          <div className="contact-copy">
            <span className="section-kicker">Visit Royal Classes</span>
            <h2>Conveniently located in Jogeshwari East</h2>
            <p>
              Visit the centre for course counselling, current batch timings and
              the latest available academic records.
            </p>

            <address>
              <div>
                <span>
                  <MapPin size={20} aria-hidden="true" />
                </span>
                <p>
                  <strong>Address</strong>
                  {ADDRESS}
                </p>
              </div>
              <div>
                <span>
                  <Phone size={20} aria-hidden="true" />
                </span>
                <p>
                  <strong>Phone</strong>
                  <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                </p>
              </div>
              <div>
                <span>
                  <Mail size={20} aria-hidden="true" />
                </span>
                <p>
                  <strong>Email</strong>
                  <a href={EMAIL_HREF}>{EMAIL}</a>
                </p>
              </div>
            </address>

            <div className="contact-actions">
              <a className="button button-primary" href={PHONE_HREF}>
                <Phone size={17} aria-hidden="true" />
                Call Now
              </a>
              <a
                className="button button-ghost"
                href={MAP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="map-frame">
            <iframe
              src={MAP_EMBED}
              title="Royal Classes location in Jogeshwari East, Mumbai"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

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
            <a className="footer-whatsapp" href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
              <MessageCircle size={17} aria-hidden="true" />
              Enquire on WhatsApp
            </a>
          </div>

          <nav aria-label="Footer quick links">
            <h3>Quick Links</h3>
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <nav aria-label="Footer course links">
            <h3>Courses</h3>
            {courses.slice(0, 6).map((course) => (
              <a href={`/courses/${course.slug}`} key={course.slug}>
                {course.title}
              </a>
            ))}
          </nav>

          <div className="footer-contact">
            <h3>Contact</h3>
            <a href={PHONE_HREF}>
              <Phone size={16} aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a href={EMAIL_HREF}>
              <Mail size={16} aria-hidden="true" />
              {EMAIL}
            </a>
            <a href={MAP_LINK} target="_blank" rel="noreferrer">
              <MapPin size={16} aria-hidden="true" />
              Jogeshwari East, Mumbai
            </a>
          </div>
        </div>

        <div className="shell footer-bottom">
          <p>
            © {new Date().getFullYear()} Royal Classes. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
            <span>Admissions open for 2026–2027</span>
          </div>
        </div>
      </footer>

      <div className="floating-actions" aria-label="Quick contact actions">
        <a href={PHONE_HREF} aria-label="Call Royal Classes">
          <Phone size={20} aria-hidden="true" />
        </a>
        <a
          className="floating-whatsapp"
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noreferrer"
          aria-label="Enquire with Royal Classes on WhatsApp"
        >
          <MessageCircle size={21} aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </div>
    </main>
  );
}
