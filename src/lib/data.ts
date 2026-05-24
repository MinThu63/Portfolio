export const personalInfo = {
  name: "Kyaw Min Thu",
  headline:
    "Final-year Financial Technology student at Republic Polytechnic, Singapore.",
  bio: "A final-year Financial Technology student with experience in team-based web and app development seeks an internship position with a forward-thinking tech or fintech company. Equipped with strong programming, data management, and problem-solving skills, able to contribute in web development, data analysis, and user-focused application design.",
  journey: "",
  focus: "",
  approach: "",
  personal: "",
  cta: "Open to internship opportunities in AI, software development, or fintech. Let's connect.",
  currentlyLearning:
    "Leading my FYP team with Green Link Digital Bank, competing in RobotX Challenge 2026 and Whitehacks 2026 CTF, and building AI strategy blueprints for the IMDA × Google challenge.",
};

export interface Skill {
  name: string;
  category:
    | "Languages"
    | "Frameworks"
    | "Tools & Platforms"
    | "Databases"
    | "Data & Analytics"
    | "Blockchain & Fintech"
    | "Communication"
    | "Problem Solving"
    | "Leadership & Teamwork";
  type: "technical" | "soft";
  featured?: boolean;
}

export const skills: Skill[] = [
  // Technical — Languages
  { name: "Python", category: "Languages", type: "technical", featured: true },
  { name: "JavaScript", category: "Languages", type: "technical", featured: true },
  { name: "Solidity", category: "Languages", type: "technical" },
  { name: "SQL", category: "Languages", type: "technical", featured: true },
  // Technical — Frameworks
  { name: "React", category: "Frameworks", type: "technical", featured: true },
  { name: "Next.js", category: "Frameworks", type: "technical" },
  { name: "Express.js", category: "Frameworks", type: "technical" },
  { name: "FastAPI", category: "Frameworks", type: "technical" },
  { name: "Three.js", category: "Frameworks", type: "technical" },
  { name: "scikit-learn", category: "Frameworks", type: "technical", featured: true },
  { name: "TensorFlow", category: "Frameworks", type: "technical", featured: true },
  // Technical — Tools & Platforms
  { name: "Git & GitHub", category: "Tools & Platforms", type: "technical", featured: true },
  { name: "Truffle & Ganache", category: "Tools & Platforms", type: "technical" },
  { name: "Streamlit", category: "Tools & Platforms", type: "technical" },
  { name: "AWS", category: "Tools & Platforms", type: "technical" },
  { name: "SAP S/4HANA", category: "Tools & Platforms", type: "technical" },
  { name: "Unmanned Aircraft Operation", category: "Tools & Platforms", type: "technical" },
  // Technical — Databases
  { name: "MySQL", category: "Databases", type: "technical" },
  { name: "PostgreSQL", category: "Databases", type: "technical" },
  // Technical — Data & Analytics
  { name: "Power BI", category: "Data & Analytics", type: "technical", featured: true },
  { name: "Tableau Public 2025.3", category: "Data & Analytics", type: "technical" },
  { name: "Microsoft Excel", category: "Data & Analytics", type: "technical" },
  { name: "Pandas", category: "Data & Analytics", type: "technical" },
  // Technical — Blockchain & Fintech
  { name: "Ethereum & Smart Contracts", category: "Blockchain & Fintech", type: "technical", featured: true },
  { name: "MetaMask & Web3.js", category: "Blockchain & Fintech", type: "technical" },
  { name: "Payment APIs (Stripe, PayPal, NETS)", category: "Blockchain & Fintech", type: "technical" },
  { name: "ERC20 Token Development", category: "Blockchain & Fintech", type: "technical" },
  // Soft — Communication
  { name: "Technical Documentation", category: "Communication", type: "soft" },
  // Soft — Problem Solving
  { name: "Design Thinking & Prototyping", category: "Problem Solving", type: "soft", featured: true },
  { name: "Agile & SDLC Methodology", category: "Problem Solving", type: "soft", featured: true },
  { name: "Entrepreneurial Mindset", category: "Problem Solving", type: "soft" },
  { name: "IT Project Management", category: "Problem Solving", type: "soft", featured: true },
  { name: "AI Essentials & Innovations", category: "Problem Solving", type: "soft" },
  { name: "Robotics Fundamentals", category: "Problem Solving", type: "soft" },
  // Soft — Leadership & Teamwork
  { name: "Team Collaboration & Code Reviews", category: "Leadership & Teamwork", type: "soft" },
  { name: "Community Volunteering & Teaching", category: "Leadership & Teamwork", type: "soft" },
];

export interface Activity {
  title: string;
  date: string;
  description: string;
  whatILearned?: string;
  featured?: boolean;
}

export const activities: Activity[] = [
  {
    title: "SG Perspectives Dialogue with SMS Zaqy Mohamad",
    date: "11 May 2026",
    description:
      "Participated in a dialogue session with Mr. Zaqy Mohamad, Senior Minister of State (Ministry of Defence & Ministry of Sustainability and the Environment). Topics covered global disruption, Singapore's response to hybrid threats and disinformation, and building youth resilience to lead through future discontinuities.",
    whatILearned:
      "Gained awareness of Singapore's unique geopolitical challenges — particularly how the breakdown of the international rules-based order affects a small nation. Understood how Singapore responds to foreign influence and hostile information campaigns. Developed confidence in articulating perspectives on national resilience and the role of youth in shaping Singapore's future.",
    featured: true,
  },
  {
    title: "DBS Masterclass — RP x ACCESS Accelerate MentorConnect Series",
    date: "8 May 2026",
    description:
      "Attended the 'Save, Grow & Plan Your Career in Banking' Masterclass at *SCAPE, organised by RP x ACCESS Accelerate in partnership with DBS Bank and WSG. Programme included career sharing sessions by professionals from various DBS business units, financial planning tips from DBS experts, a networking segment with DBS professionals, and a career planning board game hosted by WSG.",
    whatILearned:
      "Gained first-hand career insights from DBS professionals across multiple business units. Learned practical financial planning strategies relevant to early-career professionals. Built connections with industry mentors through the networking segment, and understood how banking technology roles intersect with AI and fintech — reinforcing my interest in building financial technology solutions.",
  },
  {
    title: "BuildingBloCS December Conference: Web Development",
    date: "8–10 & 15 December 2025",
    description:
      "Attended Singapore's biggest student-led computing conference at SMU. Participated in hands-on workshops covering Git & GitHub, HTML/CSS, UI/UX with Figma, JavaScript, Tailwind CSS, SQL Databases, Anime.js, and React & Next.js — culminating in a web development hackathon.",
    whatILearned:
      "Strengthened my full-stack web development fundamentals in a compressed timeframe. Learned professional Git workflows (branching, PRs, deployment), gained practical Figma prototyping skills, and built a complete React/Next.js app deployed on Vercel by the end of the conference. The hackathon taught me to scope features under time pressure and collaborate with strangers effectively.",
    featured: true,
  },
  {
    title: "Youth Action Forum — LEGO® SERIOUS PLAY® Workshop",
    date: "8 November 2025",
    description:
      "Attended a full-day youth leadership event at Republic Polytechnic featuring fireside chats with youth leaders, thematic breakout sessions using LEGO® SERIOUS PLAY® methodology, team bonding, networking, and collaborative idea sharing.",
    whatILearned:
      "Developed facilitation and active listening skills through the LEGO® SERIOUS PLAY® methodology — a structured approach to expressing complex ideas through physical models. Learned how to articulate abstract concepts visually, give constructive feedback in group settings, and connect with youth leaders from diverse backgrounds. Reinforced the importance of cross-disciplinary thinking when approaching community problems.",
  },
];

// Representation involvement records
export interface InvolvementRecord {
  level: string;
  event: string;
  academicYear: string;
  volunteer?: boolean;
}

export const representationRecords: InvolvementRecord[] = [
  {
    level: "Community",
    event: "CY2026-195- Proposal for Trekking With A Purpose - Reservoir Quest Edition",
    academicYear: "AY2026",
    volunteer: true,
  },
  {
    level: "RP Internal",
    event: "Responders Plus Programme by SCDF - May 2026",
    academicYear: "AY2026",
  },
  {
    level: "RP Internal",
    event: "SG Perspective Dialogue 2026 with SMS Zaqy Mohamad",
    academicYear: "AY2026",
  },
  {
    level: "RP Internal",
    event: "Ground Deployment Exercise 2026 with SPF and SCDF - Briefing and Technical Rehearsal 1 - May 2026",
    academicYear: "AY2026",
  },
  {
    level: "RP Internal",
    event: "iDARE Entrepreneurial Challenge 2026 submissions",
    academicYear: "AY2026",
  },
  {
    level: "RP Internal",
    event: "SOI Webinar - Tips and Tricks for Successful Application To University - May 2026",
    academicYear: "AY2026",
  },
  {
    level: "Community",
    event: "CY2026-179-Be Cyber Safe Workshop for Seniors @ Fernvale Community Club",
    academicYear: "AY2026",
    volunteer: true,
  },
  {
    level: "School",
    event: "AI Product Bootcamp - 13 & 14 Apr 2026",
    academicYear: "AY2025",
  },
  {
    level: "Community",
    event: "CY2026-178-CapCut - Prototyping for Video Editing for Greenwood Primary School",
    academicYear: "AY2025",
    volunteer: true,
  },
  {
    level: "School",
    event: "FBI* Programme @ Artbox Youth",
    academicYear: "AY2025",
  },
  {
    level: "Community",
    event: "CY2026-032 - ILP Festival 2026",
    academicYear: "AY2025",
    volunteer: true,
  },
  {
    level: "Community",
    event: "CY2025-208 - YCLP Group 5 - The Little Learner's Initiative",
    academicYear: "AY2025",
    volunteer: true,
  },
  {
    level: "National",
    event: "Youth Action Forum",
    academicYear: "AY2025",
  },
  {
    level: "RP Internal",
    event: "SG Perspective Dialogue with MOS Jasmin Lau",
    academicYear: "AY2025",
  },
  {
    level: "Club and IG",
    event: "Service-Learning Club (SLC) Welcome Day",
    academicYear: "AY2025",
  },
  {
    level: "Club and IG",
    event: "SOI Club Welcome Tea 2024",
    academicYear: "AY2024",
  },
  {
    level: "Club and IG",
    event: "CREATE Dialogue (2024)",
    academicYear: "AY2024",
  },
  {
    level: "School",
    event: "AY2024 Year 1 International Orientation Programme (Session 2)",
    academicYear: "AY2023",
  },
  {
    level: "RP Internal",
    event: "Orientation Programme 2024",
    academicYear: "AY2023",
  },
  {
    level: "School",
    event: "AY2024 Year 1 International Orientation Programme (Session 1)",
    academicYear: "AY2023",
  },
];

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  featured?: boolean;
  skillsAcquired: string[];
  image?: string | string[];
}

// Academic Awards
export interface AcademicAward {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image?: string;
}

export const academicAwards: AcademicAward[] = [
  {
    title: "Module Prize — Distributed Ledger Technologies",
    issuer: "Republic Polytechnic",
    date: "AY2025",
    description:
      "Awarded the Module Prize for achieving the highest distinction in Distributed Ledger Technologies. Award monies credited as recognition of outstanding academic performance.",
  },
  {
    title: "Director's Roll of Honour",
    issuer: "Republic Polytechnic",
    date: "AY2024 Semester 2",
    description:
      "Awarded for outstanding academic performance, placing in the top percentile of the cohort for the semester.",
    image: "/certs/DROH 1.jpg",
  },
  {
    title: "Director's Roll of Honour",
    issuer: "Republic Polytechnic",
    date: "AY2025 Semester 1",
    description:
      "Awarded for outstanding academic performance, placing in the top percentile of the cohort for the semester.",
    image: "/certs/DROH 2.jpg",
  },
];

export const certifications: Certification[] = [
  {
    title: "Google AI Professional Certificate",
    issuer: "Google (via Coursera)",
    date: "April 2026",
    featured: true,
    image: "/certs/GAI2.jpg",
    skillsAcquired: [
      "AI Fundamentals",
      "AI for Brainstorming and Planning",
      "AI for Research and Insights",
      "AI for Writing and Communicating",
      "AI for Content Creation",
      "AI for Data Analysis",
      "AI for App Building",
    ],
  },
  {
    title: "AeroSIM RC — Remotely Piloted Aircraft Operation",
    issuer: "AeroSIM RC",
    date: "May 2026",
    image: "/certs/Drone.jpg",
    skillsAcquired: [
      "Completion of drone pilot training program",
      "Demonstrated skills in Multirotor Basic operation",
      "DJI Phantom flight simulation proficiency",
    ],
  },
  {
    title: "NETS QR Payment Gateway Integration",
    issuer: "Republic Polytechnic & NETS",
    date: "2025",
    featured: true,
    image: "/certs/NET QRS.jpg",
    skillsAcquired: [
      "NETS QR payment gateway integration in sandbox environment",
      "Proficiency in payment APIs and secure transaction workflows",
      "Part of module C372 Payment Technologies",
    ],
  },
  {
    title: "SAP S/4HANA FIORI 3.0",
    issuer: "SAP & Republic Polytechnic",
    date: "October 2025 – March 2026",
    featured: true,
    image: "/certs/SAP.jpg",
    skillsAcquired: [
      "SAP S/4HANA Fiori 3.0 enterprise system navigation",
      "Conducted by Diploma in Financial Technology, School of Infocomm",
    ],
  },
  {
    title: "You've Got This! Youth Action Forum",
    issuer: "Republic Polytechnic, NYC & SG Youth Plan",
    date: "8 November 2025",
    image: "/certs/Youth Action Forum.jpg",
    skillsAcquired: [
      "Youth leadership and community engagement",
      "SG60 Signature Event participation",
    ],
  },
  {
    title: "BuildingBloCS 2025 June Conference — Workshops",
    issuer: "BuildingBloCS (supported by SUTD, MOE, NTU, Yubico, RevenueCat, OKX)",
    date: "10–14 June 2025",
    image: "/certs/BuildingBlocs.png",
    skillsAcquired: [
      "Computing workshops and hands-on coding sessions",
      "Student-led conference participation",
    ],
  },
  {
    title: "Matriculation Examinations",
    issuer: "Ministry of Education",
    date: "2023",
    image: ["/certs/Matri-Exam1.jpg", "/certs/Matri-Exam2.jpg"],
    skillsAcquired: [
      "Passed with 5 Distinctions out of 6 subjects",
    ],
  },
];

export type ProjectCategory =
  | "AI & Machine Learning"
  | "Full-Stack Web Apps"
  | "Blockchain & Web3"
  | "Productivity Tools";

export const projectCategories: ProjectCategory[] = [
  "AI & Machine Learning",
  "Full-Stack Web Apps",
  "Blockchain & Web3",
  "Productivity Tools",
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  link?: string;
  demo?: string;
  partnerLink?: { name: string; url: string };
  label?: string;
  team?: boolean;
  school?: boolean;
  teamRole?: string;
  featured?: boolean;
  inProgress?: boolean;
  process?: string;
  whatILearned?: string;
}

export const projects: Project[] = [
  {
    title: "Automated Regulatory Monitoring and Compliance Management System",
    description:
      "A full-stack compliance management platform designed for Green Link Digital Bank (GLDB), licensed by MAS. Automates monitoring of regulatory changes from 7 major international authorities (MAS, FATF, FinCEN, ECB, FCA, BIS, HKMA), detects and assesses regulatory updates with severity scoring, and provides compliance officers with a professional dashboard for task management, gap analysis, and audit-ready reporting.",
    tags: ["Node.js", "Express.js", "MySQL", "Chart.js", "Bootstrap 5", "Web Scraping"],
    category: "AI & Machine Learning",
    partnerLink: { name: "GLDB", url: "https://www.glbank.com/" },
    label: "FYP",
    featured: true,
    inProgress: true,
    school: true,
    team: true,
    teamRole:
      "Team Leader — leading full-stack development, coordinating task allocation across team members, managing stakeholder communication with GLDB, and overseeing the integration of automated regulatory scraping with the compliance dashboard.",
    process:
      "Working with GLDB stakeholders to understand MAS compliance requirements. Built automated scraping of 7 regulatory authorities using cheerio and node-cron for biweekly change detection. Designed a decoupled architecture with RESTful backend and responsive frontend featuring real-time alerts, task workflows, audit trails, and CSV export.",
    whatILearned:
      "Gaining real-world experience working with a MAS-licensed digital bank on a production-grade compliance system. Learning about RegTech, automated regulatory monitoring, impact assessment workflows, and how to build secure audit-ready systems with proper authentication and historical archiving.",
  },
  {
    title: "ScamGuard",
    description:
      "A privacy-first web app that helps Singapore seniors detect scams. Paste any suspicious SMS, WhatsApp, or email and get a gentle, jargon-free verdict powered by a local LLM — no data ever leaves the device. Supports English, Chinese, Malay, and Tamil with built-in accessibility features.",
    tags: ["LLM", "Privacy", "Multilingual", "Accessibility", "Web App"],
    category: "AI & Machine Learning",
    link: "https://github.com/MinThu63/ScamGuard",
    process:
      "Started by interviewing seniors at a community club to understand their pain points with scam messages. Initial prototype used a cloud API, but privacy concerns led me to pivot to a fully local LLM approach. Iterated through 3 prompt engineering strategies before achieving reliable multilingual detection without sending data externally.",
    whatILearned:
      "Learned that user-centred design must come before technical decisions. The pivot from cloud to local inference taught me about model quantization, browser-based ML inference limits, and the trade-offs between accuracy and privacy. Also deepened my understanding of prompt engineering for multilingual contexts.",
  },
  {
    title: "DonateBot",
    description:
      "A smart donation kiosk that merges fintech and robotics. Donors pick a charity, pay via PayPal, and a 3D robot dances in response — bigger donations unlock bigger moves. Built with React, Three.js, and real-time WebSocket events, simulating a deployable robot kiosk for public spaces.",
    tags: ["React", "Three.js", "WebSocket", "PayPal", "Robotics"],
    category: "Full-Stack Web Apps",
    link: "https://github.com/MinThu63/DonateBot",
    process:
      "Began with paper sketches of the kiosk interaction flow. First prototype was a static 3D model — then I added WebSocket events to trigger animations in real-time based on payment confirmations. The biggest challenge was synchronizing PayPal webhook callbacks with Three.js animation states without lag.",
    whatILearned:
      "Gained hands-on experience with real-time event-driven architecture, 3D rendering pipelines in the browser, and payment gateway integration. Understood how physical robotics concepts (servo timing, movement sequences) translate into digital 3D animation keyframes.",
  },
  {
    title: "Transaction Analysis & Fraud Detection",
    description:
      "Full-stack fraud detection dashboard (React + FastAPI) that analyzes transaction data using Z-score anomaly detection, DBSCAN clustering, and Benford's Law forensics. Features composite risk scoring, account profiling, interactive network graphs, and AI-generated analyst reports.",
    tags: ["React", "FastAPI", "DBSCAN", "Z-score", "Data Visualization"],
    category: "AI & Machine Learning",
    link: "https://github.com/MinThu63/Transaction-Analysis-Fraud-Detection",
    featured: true,
    process:
      "Research phase involved studying forensic accounting techniques (Benford's Law) and statistical anomaly detection methods. Built the backend first with FastAPI, testing each detection algorithm independently before combining them into a composite risk score. The network graph visualization went through 3 iterations before achieving readable layouts for large datasets.",
    whatILearned:
      "Deepened my understanding of statistical methods for anomaly detection, particularly how combining multiple weak signals (Z-score, clustering, digit analysis) creates a robust detection system. Learned to build interactive data visualizations that make complex analytical results accessible to non-technical users.",
  },
  {
    title: "KampungConnect",
    description:
      "A senior-friendly web app that helps Singapore's elderly discover and join community events at nearby CCs and RCs. Supports 4 languages, shows MRT/bus routes, lets users register, save favourites, and share events with family — designed with large text and simple navigation.",
    tags: ["Accessibility", "Multilingual", "Community", "Web App"],
    category: "Full-Stack Web Apps",
    link: "https://github.com/MinThu63/KampungConnect",
    process:
      "Conducted user research with elderly residents at a nearby RC. Initial wireframes were too complex — seniors struggled with multi-step navigation. Simplified to a single-scroll design with large tap targets. Added multilingual support after observing that many seniors preferred Mandarin or Malay over English.",
    whatILearned:
      "Learned that accessibility is not just about WCAG compliance — it requires empathy-driven design. Understood the importance of testing with real users from the target demographic. Gained experience with i18n implementation and transport API integration.",
  },
  {
    title: "Credit Risk Scoring ML",
    description:
      "Machine learning pipeline that predicts loan applicant risk levels (low, medium, high). Compares Logistic Regression, Random Forest, and Gradient Boosting. Random Forest achieves 93% accuracy with debt-to-income ratio as the top predictor.",
    tags: ["Python", "scikit-learn", "MySQL", "Pandas", "Random Forest"],
    category: "AI & Machine Learning",
    link: "https://github.com/MinThu63/Credit-Risk-Scoring-ML",
    process:
      "Started with exploratory data analysis to identify feature correlations. First model (Logistic Regression) achieved only 78% accuracy. Iteratively tested Random Forest and Gradient Boosting with hyperparameter tuning via GridSearchCV. Feature importance analysis revealed debt-to-income ratio as the dominant predictor, which aligned with domain knowledge from financial literature.",
    whatILearned:
      "Understood the full ML pipeline from data preprocessing to model evaluation. Learned why ensemble methods outperform linear models on non-linear decision boundaries. Gained practical experience with cross-validation, feature engineering, and interpreting model outputs for business stakeholders.",
  },
  {
    title: "Fraud Detection ML",
    description:
      "Machine learning pipeline that detects fraudulent financial transactions. Includes data generation, SQL queries for analysis, feature engineering, and a Random Forest model achieving 98% accuracy with realistic imbalanced data patterns.",
    tags: ["Python", "scikit-learn", "MySQL", "Pandas", "Random Forest"],
    category: "AI & Machine Learning",
    link: "https://github.com/MinThu63/Fraud-Detection-ML",
    process:
      "The core challenge was class imbalance — fraud represents <1% of transactions. Initial models had high accuracy but terrible recall. Experimented with SMOTE oversampling, class weights, and threshold tuning. Also built a synthetic data generator to create realistic transaction patterns for testing.",
    whatILearned:
      "Learned that accuracy is a misleading metric for imbalanced datasets. Understood precision-recall trade-offs and how to select appropriate evaluation metrics (F1, AUC-ROC) for fraud detection. Gained experience with synthetic data generation and SQL-based feature engineering.",
  },
  {
    title: "Posterfy",
    description:
      "A free, browser-based event poster maker. Choose from 9 event types and 5 templates, customize colors, fonts, patterns, and stickers, then export as PNG, JPEG, or PDF — all without signing up. Everything runs client-side with no servers or accounts.",
    tags: ["React", "Canvas API", "Client-side", "Design Tool"],
    category: "Productivity Tools",
    link: "https://github.com/MinThu63/Posterfy",
    demo: "https://minthu63.github.io/Posterfy/",
    process:
      "Designed the template system first, then built the Canvas API rendering layer. Biggest challenge was maintaining visual fidelity between the React preview and the exported image. Went through multiple approaches before settling on a dual-render strategy (React for editing, Canvas for export).",
    whatILearned:
      "Mastered the HTML5 Canvas API and understood the differences between DOM rendering and pixel-based rendering. Learned about client-side file generation (Blob API) and how to build complex UIs without any backend dependency.",
  },
  {
    title: "StudyBuddy",
    description:
      "A browser-based study companion. Watch videos, read PDFs, and browse articles with side-by-side note-taking. Features flashcards with spaced repetition (SM-2), Pomodoro timer, study analytics, focus sounds, and markdown support. Zero backend — all data stored locally.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Spaced Repetition"],
    category: "Productivity Tools",
    link: "https://github.com/MinThu63/StydyBuddy",
    demo: "https://minthu63.github.io/StydyBuddy/",
    process:
      "Built as a personal tool first — I needed a better study system. Researched the SM-2 spaced repetition algorithm and implemented it from the academic paper. Added features incrementally based on my own usage patterns over several weeks.",
    whatILearned:
      "Learned to implement algorithms from academic papers (SM-2 by Piotr Wozniak). Understood localStorage limitations and IndexedDB for larger datasets. Gained experience building productivity tools that solve personal pain points.",
  },
  {
    title: "Shift-Swap",
    description:
      "A full-stack shift scheduling platform where managers post open shifts, workers grab them first-come-first-served, and swap requests go through an approval workflow. Features real-time SSE notifications, transactional conflict detection, and role-based access control.",
    tags: ["Node.js", "Express", "MySQL", "SSE", "RBAC"],
    category: "Full-Stack Web Apps",
    link: "https://github.com/MinThu63/Shift-Swap",
    process:
      "Designed the database schema first to handle concurrent shift claims without race conditions. Used MySQL transactions with row-level locking. SSE was chosen over WebSockets for simplicity since notifications are server-to-client only.",
    whatILearned:
      "Learned about concurrency control in databases, race condition prevention, and the trade-offs between SSE and WebSockets. Understood role-based access control patterns and how to design approval workflows.",
  },
  {
    title: "Gemini Chat",
    description:
      "A conversational AI chatbot powered by Google Gemini and built with Streamlit. Features persistent conversation storage, multiple chat threads, search, and export to Markdown and PDF.",
    tags: ["Python", "Streamlit", "Google Gemini", "AI Chatbot"],
    category: "AI & Machine Learning",
    link: "https://github.com/MinThu63/Gemini-Chat",
    process:
      "Started as a simple API wrapper, then evolved into a full conversation management system. Added thread persistence, search, and export after realizing I needed to reference past conversations for study purposes.",
    whatILearned:
      "Gained experience with LLM API integration, conversation state management, and building rapid prototypes with Streamlit. Understood token limits, context window management, and how to structure multi-turn conversations.",
  },
  {
    title: "C372 Bookstore",
    description:
      "A full-stack e-commerce bookstore with role-based access for buyers, sellers, and admins. Features book browsing, cart, wishlist, payments (Stripe, PayPal, NETS), reviews, refunds, notifications, and admin dashboards.",
    tags: ["Node.js", "Express", "MySQL", "EJS", "Stripe", "PayPal"],
    category: "Full-Stack Web Apps",
    link: "https://github.com/Dangchoithuoc/C372-FA-Bookstore",
    team: true,
    school: true,
    featured: true,
    teamRole:
      "Led the payment integration module — implemented Stripe, PayPal, and NETS payment gateways with webhook handling, refund logic, and transaction logging. Also designed the database schema for orders and payment records, and coordinated API contracts with teammates building the frontend cart and admin dashboard.",
    process:
      "Team of 4 using Agile sprints. I owned the payment and order subsystem end-to-end. We used GitHub Projects for task tracking and conducted code reviews on every PR. Biggest challenge was handling payment edge cases (partial refunds, webhook retries, idempotency).",
    whatILearned:
      "Learned how to work effectively in a team with clear ownership boundaries. Understood payment gateway integration patterns, webhook reliability, and idempotent API design. Improved my code review skills and learned to write documentation that teammates could follow independently.",
  },
  {
    title: "Supermarket MVC Payments",
    description:
      "A Node.js/Express supermarket web app with user authentication, product management, shopping cart, order processing, and payments via PayPal, NETS QR, and MetaMask (crypto). Uses MySQL, EJS templates, and supports admin/user roles.",
    tags: ["Node.js", "Express", "MySQL", "EJS", "PayPal", "MetaMask"],
    category: "Full-Stack Web Apps",
    link: "https://github.com/MinThu63/Supermarket-mvc-payments",
    school: true,
    teamRole:
      "Responsible for the MetaMask crypto payment integration and the MVC architecture setup. Built the wallet connection flow, transaction signing, and on-chain payment verification. Also set up the Express routing structure and middleware that the team built upon.",
    process:
      "Team of 3. I established the MVC architecture early so teammates could work on features independently. The MetaMask integration required learning Web3.js and handling asynchronous blockchain confirmations gracefully in the UI.",
    whatILearned:
      "Learned to set up project architecture that enables parallel development. Gained practical Web3 integration experience — connecting wallets, signing transactions, and waiting for on-chain confirmations. Understood how to bridge traditional web apps with blockchain payments.",
  },
  {
    title: "MetaShop DApp",
    description:
      "A decentralized e-commerce marketplace built with Express.js and Ethereum smart contracts. Features escrow-based payments, on-chain product listings, order tracking, dual buyer/seller roles, MetaMask wallet integration, and an ERC20 loyalty token reward system. Powered by Truffle and Ganache.",
    tags: ["Ethereum", "Solidity", "Express.js", "Truffle", "MetaMask", "ERC20"],
    category: "Blockchain & Web3",
    link: "https://github.com/MinThu63/metashop-dapp",
    team: true,
    school: true,
    featured: true,
    process:
      "Designed the smart contract architecture first — escrow contract for payments, ERC20 for loyalty tokens. Tested extensively on Ganache before integrating with the Express frontend. The escrow release mechanism went through 3 iterations to handle dispute scenarios.",
    whatILearned:
      "Understood smart contract design patterns (escrow, token standards). Learned Solidity security best practices (reentrancy guards, access control). Gained experience with the full DApp development lifecycle from contract deployment to frontend integration.",
  },
];

// Downloadable documents
export interface DownloadableDoc {
  title: string;
  filename: string;
  description: string;
}

export const downloadableDocs: DownloadableDoc[] = [
  {
    title: "Academic CV",
    filename: "/resume.pdf",
    description: "Full academic-focused curriculum vitae",
  },
  {
    title: "Google AI Professional Certificate",
    filename: "/certs/google-ai-cert.pdf",
    description: "Certificate of completion — April 2026",
  },
  {
    title: "TensorFlow Developer Certificate",
    filename: "/certs/tensorflow-cert.pdf",
    description: "Certificate of completion — 2025",
  },
  {
    title: "AWS Cloud Practitioner",
    filename: "/certs/aws-cloud-cert.pdf",
    description: "Certificate of completion — 2024",
  },
];

// Academic Records (Unofficial SOR)
export interface ModuleRecord {
  academicYear: string;
  semester: number;
  code: string;
  name: string;
  credits: number;
  grade: string;
}

export const academicRecords: ModuleRecord[] = [
  { academicYear: "2024", semester: 1, code: "A113", name: "Mathematics", credits: 4, grade: "B" },
  { academicYear: "2024", semester: 1, code: "C110", name: "Programming Fundamentals I", credits: 4, grade: "B" },
  { academicYear: "2024", semester: 1, code: "C227", name: "Computer System Technologies", credits: 4, grade: "C+" },
  { academicYear: "2024", semester: 1, code: "G107", name: "Communication in the Global Workplace", credits: 4, grade: "B" },
  { academicYear: "2024", semester: 1, code: "G122", name: "Critical Thinking and Problem Solving Skills", credits: 2, grade: "B" },
  { academicYear: "2024", semester: 1, code: "G123", name: "Singapore, the World and I", credits: 2, grade: "Pass" },
  { academicYear: "2024", semester: 1, code: "G952", name: "Life Skills II", credits: 1, grade: "Pass" },
  { academicYear: "2024", semester: 2, code: "C109", name: "IT in Business Processes", credits: 4, grade: "C+" },
  { academicYear: "2024", semester: 2, code: "C207", name: "Database Systems", credits: 4, grade: "B+" },
  { academicYear: "2024", semester: 2, code: "C210", name: "Programming Fundamentals II", credits: 4, grade: "DIST" },
  { academicYear: "2024", semester: 2, code: "C235", name: "IT Security and Management", credits: 4, grade: "A" },
  { academicYear: "2024", semester: 2, code: "G121", name: "Innovation and Practice", credits: 2, grade: "Pass" },
  { academicYear: "2024", semester: 2, code: "G951", name: "Life Skills I", credits: 2, grade: "Pass" },
  { academicYear: "2024", semester: 2, code: "G961", name: "ECG I: Exploring the Future of Work", credits: 1, grade: "Pass" },
  { academicYear: "2025", semester: 1, code: "C206", name: "Software Development Process", credits: 4, grade: "A" },
  { academicYear: "2025", semester: 1, code: "C237", name: "Software Application Development", credits: 4, grade: "A" },
  { academicYear: "2025", semester: 1, code: "C368", name: "Financial Ecosystem", credits: 4, grade: "B+" },
  { academicYear: "2025", semester: 1, code: "C369", name: "Financial Technologies", credits: 4, grade: "A" },
  { academicYear: "2025", semester: 1, code: "C370", name: "Distributed Ledger Technologies", credits: 4, grade: "DIST" },
  { academicYear: "2025", semester: 1, code: "G953", name: "Life Skills III", credits: 1, grade: "Pass" },
  { academicYear: "2025", semester: 2, code: "B101", name: "Entrepreneurship", credits: 4, grade: "B" },
  { academicYear: "2025", semester: 2, code: "C355", name: "Business Intelligence", credits: 4, grade: "B+" },
  { academicYear: "2025", semester: 2, code: "C360", name: "Enterprise Solutions for Business", credits: 4, grade: "A" },
  { academicYear: "2025", semester: 2, code: "C372", name: "Payment Technologies", credits: 4, grade: "B" },
  { academicYear: "2025", semester: 2, code: "C373", name: "Distributed Ledger Technology Solutioning", credits: 4, grade: "B+" },
  { academicYear: "2025", semester: 2, code: "G962", name: "ECG II: Becoming Future-Ready", credits: 1, grade: "Pass" },
  // Current semester — In Progress
  { academicYear: "2026", semester: 1, code: "C303", name: "IT Project Management", credits: 4, grade: "In Progress" },
  { academicYear: "2026", semester: 1, code: "C204", name: "AI Essentials & Innovations", credits: 4, grade: "In Progress" },
  { academicYear: "2026", semester: 1, code: "E001", name: "Discovering Robotics", credits: 2, grade: "In Progress" },
  { academicYear: "2026", semester: 1, code: "E004", name: "Unmanned Aircraft Operation", credits: 2, grade: "In Progress" },
  { academicYear: "2026", semester: 1, code: "C300", name: "Final Year Project (GLDB)", credits: 4, grade: "In Progress" },
];

export const cGPA = 3.43;

// Competitions
export interface Competition {
  title: string;
  organiser: string;
  status: "In Progress" | "Completed" | "Upcoming";
  timeline: string;
  description: string;
  highlights: string[];
}

export const competitions: Competition[] = [
  {
    title: "iDARE Entrepreneurial Challenge 2026",
    organiser: "Republic Polytechnic",
    status: "Completed",
    timeline: "AY2026",
    description:
      "An entrepreneurial challenge encouraging students to ideate, develop, and pitch innovative solutions to real-world problems. Submitted a proposal demonstrating entrepreneurial thinking and practical application of technology.",
    highlights: [
      "Developed and submitted an entrepreneurial proposal",
      "Applied design thinking to a real-world problem",
      "Strengthened pitching and presentation skills",
    ],
  },
  {
    title: "RobotX Challenge 2026",
    organiser: "Republic of Singapore Navy (RSN) & Future Systems and Technology Directorate (FSTD)",
    status: "In Progress",
    timeline: "2026 (Grand Finale: November 2026)",
    description:
      "A premier robotics competition where teams of 3–4 design and deploy autonomous systems on open water. Each team receives a baseline modular robotics kit including an Unmanned Surface Vessel (USV) and an Underwater Remotely Operated Vehicle (ROV).",
    highlights: [
      "Designing autonomous navigation systems for maritime environments",
      "Assembling and programming USV and ROV kits",
      "Networking with engineers from RSN and FSTD",
      "Competing against polytechnics, ITEs, JCs, and secondary schools",
    ],
  },
  {
    title: "Skills Ignition SG AI Challenge 2026 — 2-Week Strategy Sprint",
    organiser: "IMDA & Google (via Love Frankie)",
    status: "In Progress",
    timeline: "May 2026 (Submission: 22 May 2026)",
    description:
      "After completing the AI training phase, now competing in the 2-Week Challenge — building a 5-slide AI Strategy Blueprint for an assigned real-world business problem. Top 50 participants advance to a mentorship phase with industry leaders in June.",
    highlights: [
      "Applying AI fluency to a real business problem statement",
      "Designing an end-to-end AI workflow using Google Gemini and NotebookLM",
      "Competing for Top 50 selection and cash prizes up to $5,000",
      "Evaluated on Problem, Solution, Output, Governance, and Adoption",
    ],
  },
  {
    title: "Whitehacks 2026 — Capture The Flag (CTF)",
    organiser: "SMU Whitehat Society",
    status: "In Progress",
    timeline: "2026 (Sign-up by 15 June 2026)",
    description:
      "A beginner-friendly CTF competition by Singapore Management University designed for tertiary students to explore cybersecurity. Challenges include Cryptography, Reverse Engineering, Web exploitation, and Forensics — with in-house training workshops provided ahead of the competition.",
    highlights: [
      "Hands-on cybersecurity challenges across multiple domains",
      "Training workshops to build confidence with no prior experience required",
      "Networking with CSIT and DSO for scholarships and internships",
      "Attractive prizes for top performers",
    ],
  },
];
export interface WorkExperience {
  title: string;
  company: string;
  type: string;
  startDate: string;
  endDate: string;
  description: string;
}

export const workExperiences: WorkExperience[] = [
  {
    title: "Restaurant Server",
    company: "EN Group (Singapore) — Wa-EN & Ka-EN outlets",
    type: "Part-Time",
    startDate: "May 2024",
    endDate: "Present",
    description:
      "Serving customers, managing orders, and working in a fast-paced F&B environment. Developed strong communication, multitasking, and teamwork skills under pressure.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Competitions", href: "#competitions" },
  { label: "Projects", href: "#projects" },
  { label: "Academics", href: "#academics" },
  { label: "Certifications & Awards", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Activities", href: "#activities" },
  { label: "Documents", href: "#documents" },
  { label: "Contact", href: "#contact" },
];
