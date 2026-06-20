export const personal = {
  name: "Manick Raj",
  title: "Full Stack Developer",
  location: "Coimbatore, India",
  phone: "+91 78453 72432",
  email: "manickaraj0601@gmail.com",
  linkedin: "https://www.linkedin.com/in/manickaraj-a-255704402",
  github: "https://github.com/Manickaraj0601",
  summary:
    "Results-driven Full Stack Developer with hands-on experience building scalable REST APIs, enterprise systems, and interactive web applications. Proficient in Node.js, Express.js, React.js, MySQL, and RESTful API integrations, delivering performant end-to-end web products in production environments.",
};

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "10+", label: "Production APIs" },
  { value: "95%", label: "Lighthouse Performance" },
];

export const techMarquee = [
  "React.js", "Node.js", "Express.js", "MySQL", "REST APIs", "JavaScript",
  "Git", "HTML5", "CSS3", "Postman", "Responsive Design", "Performance Optimization"
];

export const skills = [
  {
    category: "Frontend",
    icon: "portal" as const,
    items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "EJS"],
  },
  {
    category: "Backend",
    icon: "code" as const,
    items: ["Node.js", "Express.js", "REST APIs", "C# (ASP.NET)"],
  },
  {
    category: "Database",
    icon: "database" as const,
    items: ["MySQL", "MS SQL Server", "MongoDB"],
  },
  {
    category: "Tools & Specialty",
    icon: "api" as const,
    items: ["Git", "VS Code", "Postman", "Performance Audits", "SEO Optimization"],
  },
];

export const experience = {
  role: "Software Developer",
  company: "Walaa Insurance (Client Projects)",
  period: "2022 – Present",
  highlights: [
    "Developed and maintained REST APIs using Node.js, Express.js, and SQL Server for motor and medical lines.",
    "Built and optimized backend policy issuance, renewal, and cancellation endpoints in high-load production environments.",
    "Created responsive customer-facing admin dashboards using React.js to streamline workshop workflow operations.",
    "Integrated third-party APIs (including CoverGo) with Node.js, ensuring secure communication and real-time syncing.",
    "Constructed an automated scheduler for customer notifications, reducing system overhead and increasing renewal rate.",
    "Engineered and refactored secure payment processing and validation subsystems using Express.js and MySQL."
  ],
};

export const keyProjects = [
  {
    title: "Motor Retail & Renewal System",
    icon: "insurance" as const,
    tech: ["Node.js", "Express.js", "MySQL"],
    description: "Enterprise policy issuance and automated renewal platform. Integrated secure REST APIs with high query performance.",
    image: "/images/dashboard.webp",
    year: "2024",
    status: "Production",
    demoUrl: "https://www.linkedin.com/in/manickaraj-a-255704402",
    githubUrl: "https://github.com/Manickaraj0601",
    featured: true,
  },
  {
    title: "Workshop Portal & Admin Dashboard",
    icon: "portal" as const,
    tech: ["React.js", "Node.js", "Express.js"],
    description: "Responsive workshop interface handling CRUD operations, interactive analytics reporting, and workflow queues.",
    image: "/images/app.webp",
    year: "2023",
    status: "Shipped",
    demoUrl: "https://www.linkedin.com/in/manickaraj-a-255704402",
    githubUrl: "https://github.com/Manickaraj0601",
    featured: true,
  },
  {
    title: "CoverGo API Gateway Integration",
    icon: "api" as const,
    tech: ["Node.js", "REST APIs", "MySQL"],
    description: "Bi-directional data synchronization pipeline securing communication with third-party insurance core APIs.",
    image: "/images/network.webp",
    year: "2023",
    status: "Production",
    demoUrl: "https://www.linkedin.com/in/manickaraj-a-255704402",
    githubUrl: "https://github.com/Manickaraj0601",
    featured: true,
  },
  {
    title: "Online Policy Cancellation System",
    icon: "insurance" as const,
    tech: ["Node.js", "Express.js", "REST APIs"],
    description: "Automated multi-product cancellation gateway validating terms and issuing real-time transaction updates.",
    image: "/images/network.webp",
    year: "2024",
    status: "Production",
    demoUrl: "https://www.linkedin.com/in/manickaraj-a-255704402",
    githubUrl: "https://github.com/Manickaraj0601",
    featured: false,
  },
];

export const additionalProjects = [
  {
    title: "Teams Management System",
    icon: "api" as const,
    tech: ["Node.js", "Express.js", "MySQL"],
    description: "Resource scheduling portal tracking employee workloads, task queues, and performance metrics.",
    image: "/images/app.webp",
    year: "2023",
    status: "Internal",
    demoUrl: "https://www.linkedin.com/in/manickaraj-a-255704402",
    githubUrl: "https://github.com/Manickaraj0601",
  },
  {
    title: "Life Claim Tracker Portal",
    icon: "portal" as const,
    tech: ["React.js", "REST APIs"],
    description: "Frontend-focused client dashboard displaying insurance claim progress and real-time document validation status.",
    image: "/images/dashboard.webp",
    year: "2023",
    status: "Shipped",
    demoUrl: "https://www.linkedin.com/in/manickaraj-a-255704402",
    githubUrl: "https://github.com/Manickaraj0601",
  },
];

export const education = [
  {
    degree: "Bachelor of Science – Computer Science",
    institution: "Bharathidasan University, Trichy",
  },
];

export const languages = ["Tamil (Native)", "English (Professional)"];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
