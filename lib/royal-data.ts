export const site = {
  name: "Royal Classes",
  location: "Jogeshwari East, Mumbai",
  phoneDisplay: "+91 9930707708",
  phoneHref: "tel:+919930707708",
  whatsappNumber: "919930707708",
  whatsappHref:
    "https://wa.me/919930707708?text=Hello%20Royal%20Classes%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20for%202026%E2%80%932027.",
  resultsWhatsappHref:
    "https://wa.me/919930707708?text=Hello%20Royal%20Classes%2C%20please%20share%20your%20latest%20verified%20results%20and%20course%20details.",
  email: "info@royalclasses.com",
  emailHref: "mailto:info@royalclasses.com",
  address:
    "31 A, Satellite Shopping Centre, Opp. JES College, Station Road, Near I. Y. College, Jogeshwari East, Mumbai - 400060",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=31%20A%20Satellite%20Shopping%20Centre%20Station%20Road%20Jogeshwari%20East%20Mumbai%20400060",
  mapEmbed:
    "https://www.google.com/maps?q=31%20A%20Satellite%20Shopping%20Centre%20Station%20Road%20Jogeshwari%20East%20Mumbai%20400060&output=embed",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Results", href: "/results" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Admission", href: "/admission" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export type Course = {
  slug: string;
  title: string;
  category: "Foundation" | "Entrance Exam" | "Career Pathway";
  short: string;
  description: string;
  subjects: string[];
  highlights: string[];
  duration: string;
  batches: string;
  idealFor: string;
  icon:
    | "flask"
    | "graduation"
    | "heart"
    | "atom"
    | "target"
    | "book"
    | "calculator"
    | "stethoscope"
    | "pill";
};

export const courses: Course[] = [
  {
    slug: "xi-science",
    title: "XI Science",
    category: "Foundation",
    short:
      "Build strong concepts in Physics, Chemistry, Mathematics and Biology from the start.",
    description:
      "Std. XI is where Science students build the concepts they will rely on in boards and entrance examinations. This programme combines clear classroom teaching, organised notes, regular practice and doubt support so students enter Std. XII with a dependable foundation.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    highlights: [
      "Concept-first classroom teaching",
      "Chapter-wise tests and revision",
      "Printed notes and practice material",
      "Regular doubt-solving support",
      "Early entrance-exam orientation",
    ],
    duration: "Academic-year programme",
    batches: "Morning and evening options; confirm the current schedule",
    idealFor: "Students entering Std. XI Science",
    icon: "flask",
  },
  {
    slug: "xii-science",
    title: "XII Science",
    category: "Foundation",
    short:
      "Complete HSC preparation with regular board-pattern and entrance-style practice.",
    description:
      "The XII Science programme coordinates board preparation with entrance readiness. Students work through the syllabus systematically, practise answer presentation and complete regular tests designed to make progress visible throughout the academic year.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    highlights: [
      "Complete HSC syllabus planning",
      "Board-pattern answer-writing practice",
      "Regular prelim and revision tests",
      "PCM and PCB group support",
      "Parallel entrance-exam orientation",
    ],
    duration: "Academic-year programme",
    batches: "Course-specific morning and evening options",
    idealFor: "Students studying in Std. XII Science",
    icon: "graduation",
  },
  {
    slug: "neet",
    title: "NEET",
    category: "Entrance Exam",
    short:
      "NCERT-aligned Physics, Chemistry and Biology preparation with focused MCQ practice.",
    description:
      "The NEET programme follows a structured cycle of concept learning, NCERT-focused revision, question practice and exam-pattern testing. Students receive regular opportunities to identify weak chapters and resolve doubts before moving ahead.",
    subjects: ["Physics", "Chemistry", "Biology"],
    highlights: [
      "NCERT-aligned teaching and revision",
      "Chapter-wise MCQ practice",
      "Timed exam-pattern mock tests",
      "Test review and improvement planning",
      "Regular doubt-solving support",
    ],
    duration: "Integrated and target-year options",
    batches: "Weekday teaching with planned test sessions",
    idealFor: "Medical aspirants preparing for NEET-UG",
    icon: "heart",
  },
  {
    slug: "jee",
    title: "JEE",
    category: "Entrance Exam",
    short:
      "Concept depth and progressive problem-solving for engineering entrance preparation.",
    description:
      "The JEE programme moves from core concepts to application-based problems across Physics, Chemistry and Mathematics. Graded practice helps students build both accuracy and the confidence to attempt unfamiliar questions.",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    highlights: [
      "Fundamentals-to-application teaching",
      "Graded problem sets",
      "JEE-pattern question practice",
      "Mock tests and performance review",
      "Exam strategy and doubt support",
    ],
    duration: "Integrated and target-year options",
    batches: "Weekday teaching with planned test sessions",
    idealFor: "Students preparing for engineering entrance examinations",
    icon: "atom",
  },
  {
    slug: "mht-cet",
    title: "MHT-CET",
    category: "Entrance Exam",
    short:
      "State-board-aligned PCM or PCB preparation with an emphasis on speed and accuracy.",
    description:
      "The MHT-CET programme coordinates state-board concepts with timed MCQ practice. The study plan focuses on repeated revision, question selection, speed and accuracy for students targeting engineering or pharmacy admissions in Maharashtra.",
    subjects: ["Physics", "Chemistry", "Mathematics / Biology"],
    highlights: [
      "PCM and PCB preparation options",
      "State-board-aligned concept revision",
      "Timed MCQ practice",
      "CET-pattern revision tests",
      "Practical exam strategy guidance",
    ],
    duration: "Integrated and target-year options",
    batches: "Course-specific weekday batches and test sessions",
    idealFor: "Students preparing for MHT-CET",
    icon: "target",
  },
  {
    slug: "boards",
    title: "Boards",
    category: "Foundation",
    short:
      "Syllabus coverage, answer presentation and repeated board-pattern examination practice.",
    description:
      "The Boards programme is built around disciplined syllabus coverage and written practice. Students learn how to structure answers, manage examination time and use regular prelims to identify the subjects that need more attention.",
    subjects: ["Science subjects", "Board-pattern writing", "Revision"],
    highlights: [
      "Complete syllabus tracking",
      "Important-question practice",
      "Answer presentation guidance",
      "Regular prelim examinations",
      "Revision support before boards",
    ],
    duration: "Academic-year programme",
    batches: "Course-specific weekday options",
    idealFor: "Students preparing for SSC or HSC board examinations",
    icon: "book",
  },
  {
    slug: "engineering",
    title: "Engineering",
    category: "Career Pathway",
    short:
      "An integrated Science path with engineering entrance and career guidance.",
    description:
      "This pathway helps students coordinate XI–XII Science with JEE or MHT-CET preparation. Counselling conversations help families understand entrance choices, engineering branches and the steps that follow the examination.",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    highlights: [
      "Board and entrance coordination",
      "JEE and MHT-CET orientation",
      "Structured PCM practice",
      "Engineering pathway counselling",
      "College and branch orientation",
    ],
    duration: "Programme depends on the student’s current standard",
    batches: "Integrated with the relevant Science and entrance batch",
    idealFor: "Students considering an engineering career",
    icon: "calculator",
  },
  {
    slug: "medical",
    title: "Medical",
    category: "Career Pathway",
    short:
      "A guided pathway from XI Science and Biology foundations to NEET preparation.",
    description:
      "The Medical pathway brings together XI–XII Science planning, Biology support and NEET preparation. The focus remains on consistent academic work while helping students and parents understand the medical entrance journey.",
    subjects: ["Physics", "Chemistry", "Biology"],
    highlights: [
      "XI–XII and NEET planning",
      "Biology-focused support",
      "NCERT-oriented revision",
      "Regular MCQ and mock practice",
      "Medical pathway guidance",
    ],
    duration: "Programme depends on the student’s current standard",
    batches: "Integrated with the relevant Science and NEET batch",
    idealFor: "Students considering medicine and allied health pathways",
    icon: "stethoscope",
  },
  {
    slug: "pharmacy",
    title: "Pharmacy",
    category: "Career Pathway",
    short:
      "Science and MHT-CET preparation for students considering B.Pharm or D.Pharm.",
    description:
      "This pathway combines the relevant XII Science subjects with MHT-CET preparation and basic course guidance. Students can discuss whether a PCM or PCB route fits their current subjects and intended pharmacy programme.",
    subjects: ["Physics", "Chemistry", "Mathematics / Biology"],
    highlights: [
      "PCM or PCB preparation options",
      "MHT-CET focus",
      "Board and entrance coordination",
      "Timed MCQ practice",
      "Pharmacy course guidance",
    ],
    duration: "Programme depends on the student’s current standard",
    batches: "Integrated with the relevant Science and CET batch",
    idealFor: "Students considering B.Pharm or D.Pharm",
    icon: "pill",
  },
];

export const trustHighlights = [
  {
    title: "25+ Years Excellence",
    copy: "A long-standing commitment to Science education in Jogeshwari.",
    icon: "award",
  },
  {
    title: "Experienced Faculty",
    copy: "Subject-focused teaching with clear explanations and exam context.",
    icon: "users",
  },
  {
    title: "Weekly Tests",
    copy: "Regular checks help students stay consistent and identify weak areas.",
    icon: "clipboard",
  },
  {
    title: "Doubt Solving",
    copy: "Dedicated support so questions are addressed before topics move ahead.",
    icon: "message",
  },
  {
    title: "Printed Notes",
    copy: "Organised study material for classroom learning and revision.",
    icon: "file",
  },
  {
    title: "Career Guidance",
    copy: "Practical support for exam choices, streams and college pathways.",
    icon: "compass",
  },
  {
    title: "Personal Attention",
    copy: "Student progress stays visible through guidance and regular follow-up.",
    icon: "user",
  },
  {
    title: "Board + Entrance Prep",
    copy: "A coordinated plan for HSC, NEET, JEE and MHT-CET preparation.",
    icon: "layers",
  },
] as const;

export const testimonials = [
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
] as const;

export const galleryItems = [
  {
    src: "/images/gallery-classroom.webp",
    alt: "A classroom lecture with Science students",
    title: "Classroom Learning",
    category: "Teaching",
  },
  {
    src: "/images/gallery-lab.webp",
    alt: "Students learning through a laboratory activity",
    title: "Applied Science",
    category: "Learning",
  },
  {
    src: "/images/gallery-library.webp",
    alt: "Students studying in a quiet learning space",
    title: "Focused Self-Study",
    category: "Study",
  },
  {
    src: "/images/gallery-seminar.webp",
    alt: "An academic guidance seminar for students",
    title: "Guidance Sessions",
    category: "Guidance",
  },
  {
    src: "/images/gallery-test.webp",
    alt: "Students writing a structured classroom test",
    title: "Regular Testing",
    category: "Evaluation",
  },
  {
    src: "/images/gallery-awards.webp",
    alt: "A student being recognised at an academic event",
    title: "Student Recognition",
    category: "Milestones",
  },
] as const;

export const batchGroups = [
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
] as const;
