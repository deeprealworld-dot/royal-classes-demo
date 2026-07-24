"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { courses, site } from "@/lib/royal-data";

export function EnquiryForm({ initialCourse = "" }: { initialCourse?: string }) {
  const [selectedCourse, setSelectedCourse] = useState(initialCourse);
  const [submitted, setSubmitted] = useState(false);
  const [enquiryLink, setEnquiryLink] = useState(site.whatsappHref);
  const reduceMotion = useReducedMotion();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const lines = [
      "Hello Royal Classes, I would like to enquire about admissions for 2026–2027.",
      `Student: ${String(formData.get("studentName") || "")}`,
      `Parent: ${String(formData.get("parentName") || "")}`,
      `Phone: ${String(formData.get("phone") || "")}`,
      `Course: ${selectedCourse}`,
      `Current standard: ${String(formData.get("currentStandard") || "")}`,
      formData.get("message")
        ? `Message: ${String(formData.get("message"))}`
        : "",
    ].filter(Boolean);
    const link = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;

    setEnquiryLink(link);
    setSubmitted(true);
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
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
              placeholder="Student’s full name"
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
                <option value={course.title} key={course.slug}>
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
              placeholder="Tell us about the student’s goals or questions"
            />
          </label>
        </div>

        <button className="form-submit" type="submit">
          Send Enquiry
          <Send size={17} aria-hidden="true" />
        </button>
        <p className="privacy-copy">
          The details you enter are used only to prepare your WhatsApp enquiry
          to Royal Classes.
        </p>

        <AnimatePresence>
          {submitted && (
            <motion.div
              className="form-success"
              role="status"
              aria-live="polite"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
