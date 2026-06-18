export const personal = {
  name: "Manickaraj",
  title: "Full-Stack Developer",
  location: "Coimbatore, India",
  phone: "+91 78453 72432",
  email: "manickaraj0601@gmail.com",
  linkedin: "https://www.linkedin.com/in/manickaraj-a-255704402",
  summary:
    "Results-driven Full-Stack Developer with hands-on experience building scalable REST APIs, enterprise insurance platforms, and responsive web applications. Proficient in Node.js, React.js, ASP.NET (C#), and MS SQL Server. Proven ability to deliver end-to-end solutions across insurance policy management, payment gateways, and HR systems in production environments.",
};

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "10+", label: "Production APIs" },
  { value: "4", label: "Insurance Lines" },
];

export const techMarquee = [
  "React.js", "Node.js", "C#", "ASP.NET", ".NET Core", "MS SQL Server",
  "MongoDB", "Express.js", "REST APIs", "Git", "Bootstrap", "Axios",
];

export const skills = [
  {
    category: "Frontend",
    icon: "portal" as const,
    items: ["React.js", "HTML5", "CSS", "Bootstrap", "jQuery", "EJS"],
  },
  {
    category: "Backend",
    icon: "code" as const,
    items: [
      "Node.js",
      "Express.js",
      "ASP.NET",
      ".NET Core API",
      ".NET Framework API",
      "C#",
    ],
  },
  {
    category: "Database",
    icon: "database" as const,
    items: ["MS SQL Server", "MongoDB"],
  },
  {
    category: "Tools & Libraries",
    icon: "api" as const,
    items: ["Axios", "ClosedXML", "Git", "Visual Studio", "VS Code"],
  },
  {
    category: "Specialties",
    icon: "insurance" as const,
    items: [
      "REST API Development",
      "Database Design",
      "Excel Data Processing",
      "Debugging & Troubleshooting",
    ],
  },
];

export const experience = {
  role: "Software Developer",
  company: "Walaa Insurance (Client Projects)",
  period: "2022 – Present",
  highlights: [
    "Developed and maintained REST APIs using Node.js, Express.js, and ASP.NET (.NET Framework & .NET Core).",
    "Built and deployed insurance policy issuance, renewal, and cancellation modules for Motor, Medical, and Travel insurance lines.",
    "Designed and integrated MS SQL Server and MongoDB databases, optimizing queries to improve application performance.",
    "Developed responsive UI components and dashboards using React.js for Workshop Portal, Life Claim Portal, and Workshop Admin Portal.",
    "Implemented an automated email reminder scheduler for insurance policy renewal notifications, reducing lapse rates.",
    "Built a Centralized Payment Gateway in C# handling secure transaction processing, validation, and API integration.",
    "Integrated third-party CoverGo APIs with Node.js, implementing data synchronization and secure API communication.",
    "Developed an IBAN data entry and validation system using EJS and MS SQL Server.",
    "Delivered Employee Reimbursement System with multi-level approval workflows and validations in C#.",
  ],
};

export const keyProjects = [
  {
    title: "Motor Retail eBao & Renewal System",
    icon: "insurance" as const,
    tech: ["C#", ".NET Framework API", "MS SQL Server"],
    description:
      "Developed insurance policy issuance and renewal modules with complete business logic for motor insurance workflows. Built and managed backend APIs and policy data transactions in MS SQL Server.",
    featured: true,
  },
  {
    title: "Online Cancellation System",
    icon: "insurance" as const,
    tech: ["C#", ".NET Framework API", "MS SQL Server"],
    description:
      "Developed multi-product cancellation modules (Motor, Medical, Travel) with secure API endpoints, validation, and policy status updates.",
    featured: true,
  },
  {
    title: "Workshop Portal & Admin Portal",
    icon: "portal" as const,
    tech: ["React.js", "Node.js", "MS SQL Server"],
    description:
      "Built responsive UI for workshop operations; developed backend services and admin dashboard with CRUD operations and reporting.",
    featured: true,
  },
  {
    title: "Life Claim Portal",
    icon: "portal" as const,
    tech: ["React.js", "Node.js"],
    description:
      "Developed claim submission and tracking system with REST APIs for claim processing and a customer-facing interface.",
    featured: true,
  },
  {
    title: "Centralized Payment Gateway",
    icon: "payment" as const,
    tech: ["C#", ".NET Framework API"],
    description:
      "Built secure payment integration system handling transaction processing, validation, and payment workflow APIs.",
    featured: false,
  },
  {
    title: "CoverGo API Integration",
    icon: "api" as const,
    tech: ["Node.js", "MS SQL Server"],
    description:
      "Developed backend APIs for third-party integration with bi-directional data synchronization and secure communication.",
    featured: false,
  },
  {
    title: "Renewal Auto Notification System",
    icon: "mail" as const,
    tech: ["ASP.NET Web Application", "MS SQL Server"],
    description:
      "Implemented automated scheduler for policy renewal email reminders with customer data tracking.",
    featured: false,
  },
  {
    title: "IBAN Manual System",
    icon: "database" as const,
    tech: ["EJS", "MS SQL Server"],
    description:
      "Developed IBAN data entry and validation system with full database integration.",
    featured: false,
  },
];

export const additionalProjects = [
  {
    title: "AIT Teams Management System",
    icon: "api" as const,
    tech: [".NET Core API", "MS SQL Server"],
    description:
      "Developed backend APIs for team management; designed database structure and API endpoints.",
  },
  {
    title: "Green Apple HR Solution",
    icon: "hr" as const,
    tech: [".NET Core API", "MS SQL Server"],
    description:
      "Built HR management backend system with employee data handling and workflow management.",
  },
  {
    title: "Election Poll System",
    icon: "poll" as const,
    tech: ["Node.js"],
    description:
      "Developed polling system backend with voting logic and real-time data handling.",
  },
];

export const education = [
  {
    degree: "Bachelor of Science – Computer Science",
    institution: "Bharathidasan University, Trichy",
  },
  {
    degree: "Diploma in Mechanical Engineering",
    institution: "Bharathidasan University, Trichy",
  },
];

export const languages = ["Tamil (Native)", "English (Professional Working Proficiency)"];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
