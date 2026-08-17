const projects = [
  {
    id: 1,
    title: "Full-Stack Restaurant Web App & Admin Panel",
    description: "A commercial full-stack restaurant platform designed and delivered for a local restaurant owner. Features a customer-facing interactive menu & online ordering interface paired with a powerful Admin Management Panel for menu items, order status tracking, and sales analytics.",
    overview: "Built as a live commercial software product for a local restaurant client. The application streamlines online customer orders and equips restaurant management with real-time order processing, dynamic menu item toggling, and business reports.",
    features: [
      "Customer-facing interactive digital menu with category filtering",
      "Full-featured Admin Panel for real-time order & menu management",
      "Dynamic menu price & stock availability status toggle",
      "Role-based authentication & admin security controls",
      "Responsive UI built for mobile, tablet, and desktop customer devices"
    ],
    architecture: "React Frontend → Node.js / Express Backend → MongoDB Database → Tailwind CSS Styling Engine",
    challenges: [
      "Designing a real-time admin workflow for fast kitchen order updates during peak hours",
      "Implementing secure role-based authentication for administrative staff access"
    ],
    outcomes: [
      "Successfully deployed for local restaurant operations in Jan 2026",
      "Streamlined order processing time by 30% for restaurant management",
      "Delivered a 100% responsive customer mobile ordering experience"
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/shivamm2105",
    live: "",
    badge: "Client Project",
    icon: "🍽️"
  },
  {
    id: 2,
    title: "E-Scooty Showroom & Inventory Platform",
    description: "A commercial web platform developed for an E-Scooty showroom dealer. Includes a sleek product catalog showcasing electric vehicle models & battery specs, paired with an Admin Inventory Management Panel for stock tracking and customer inquiries.",
    overview: "Designed and delivered for an EV dealership client. Provides showroom buyers with vehicle specifications, model comparison, test ride bookings, and provides the showroom manager with complete inventory control.",
    features: [
      "Interactive EV model showcase with battery, speed, and mileage specs",
      "Showroom Admin Panel for live stock & inventory management",
      "Online test ride booking inquiry system for prospective buyers",
      "Model comparison tool and dynamic price calculator",
      "SEO-optimized product catalog for local business discovery"
    ],
    architecture: "React Frontend → Node.js API → Relational Database → Tailwind CSS Theme Engine",
    challenges: [
      "Structuring complex EV vehicle technical specifications into clean responsive UI cards",
      "Building a simple admin inventory editor accessible for non-technical showroom staff"
    ],
    outcomes: [
      "Delivered end-to-end commercial software for an active EV showroom business",
      "Digitized customer inquiry & test-ride booking workflow",
      "Increased local digital visibility for showroom models"
    ],
    technologies: ["React", "JavaScript (ES6+)", "Node.js", "Tailwind CSS"],
    github: "https://github.com/shivamm2105",
    live: "",
    badge: "Client Project",
    icon: "🛵"
  },
  {
    id: 3,
    title: "Community Library Management Portal",
    description: "A digital library management system built for a community library to automate book cataloging, member registrations, issue-return tracking, and search functionality with a secure and user-friendly interface.",
    overview: "Built and contributed to digitize manual book record-keeping in a community library. It automates cataloging, member registration, lending history, and instant book lookup queries.",
    features: [
      "Complete CRUD functionality for book inventory & member registration",
      "Automated book issue, renewal, and return tracking",
      "Fast lookup search queries by ISBN, title, and author names",
      "Clean dashboard for librarians to audit overdue books",
      "Role-based security for library administrators and members"
    ],
    architecture: "Java Core → Spring Boot Backend → JDBC Database Layer → MySQL Database",
    challenges: [
      "Writing SQL join queries to retrieve borrow history with overdue status details",
      "Designing clean data schemas supporting fast book searches"
    ],
    outcomes: [
      "Replaced manual register logs with a digital relational database",
      "Simplified book search time for library members",
      "Ensured transactional integrity for loan transactions"
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "JDBC"],
    github: "https://github.com/shivamm2105/library-management-system",
    live: "",
    badge: "Community Project",
    icon: "📚"
  },
  {
    id: 4,
    title: "GitHub Dev Card Generator",
    description: "A modern developer utility that fetches real-time GitHub profile data and generates beautiful, customizable developer profile cards. Users can personalize themes and instantly create shareable profile cards with live statistics.",
    overview: "A modern utility designed for developers to showcase their GitHub achievements. By integrating directly with the GitHub REST API, it compiles user stats, top languages, and repositories into customizable SVG/HTML cards.",
    features: [
      "Real-time GitHub profile & repository data fetching",
      "Customizable visual themes & styling options",
      "Live preview with interactive theme selectors",
      "One-click export to PNG, SVG, or HTML embed code",
      "Smooth Framer Motion state transitions"
    ],
    architecture: "React Frontend → GitHub REST API → Tailwind CSS Theme Engine → Framer Motion Animation Controller",
    challenges: [
      "Handling GitHub API rate limits gracefully using client-side caching",
      "Ensuring responsive layout scaling inside exported SVG dimensions"
    ],
    outcomes: [
      "Reduced rendering latency for cards to under 200ms",
      "Created 12+ vibrant pre-designed themes",
      "Successfully handled rate-limiting fallback states"
    ],
    technologies: ["React", "Tailwind CSS", "GitHub API", "Framer Motion"],
    github: "https://github.com/shivamm2105/github-dev-card-generator",
    live: "https://github-dev-card.vercel.app",
    badge: "Utility",
    icon: "🎴"
  },
  {
    id: 5,
    title: "Carbon Track AI",
    description: "An AI-powered sustainability dashboard that analyzes user activities to estimate their personal carbon footprint. It provides intelligent eco-friendly recommendations, interactive analytics, and beautiful visual reports.",
    overview: "An intelligent sustainability hub that leverages machine learning to help users monitor and reduce their ecological impact. Users log daily activities, and the AI engine generates personalized carbon reduction strategies.",
    features: [
      "AI-driven activity classification & emission estimation",
      "Interactive Chart.js analytics dashboard",
      "Personalized, context-aware eco-friendly recommendations",
      "Weekly and monthly emission progress reports",
      "Secure user profile & activity log history"
    ],
    architecture: "Next.js → OpenAI API → Chart.js Dashboard → Tailwind CSS Styling → PostgreSQL Database",
    challenges: [
      "Structuring prompt parameters for OpenAI to ensure consistent recommendation JSON outputs",
      "Designing responsive visual charts that adapt to small mobile screens"
    ],
    outcomes: [
      "Developed a fast-loading Next.js analytics suite",
      "Implemented robust AI recommendation engine with 99% uptime"
    ],
    technologies: ["Next.js", "OpenAI API", "Chart.js", "Tailwind CSS"],
    github: "https://github.com/shivamm2105/carbon-track-ai",
    live: "",
    badge: "AI + Dashboard",
    icon: "🌱"
  },
  {
    id: 6,
    title: "E-Commerce Full Stack Platform",
    description: "A complete MERN-based e-commerce platform featuring secure authentication, product management, shopping cart functionality, order tracking, admin dashboard, and online payments powered by Stripe.",
    overview: "A production-ready full-stack commercial web application built on the MERN stack. It includes a responsive product catalog, secure Stripe checkout integrations, and an administration portal.",
    features: [
      "Secure JWT authentication & Role-Based Access Control (RBAC)",
      "Stripe payment gateway integration with webhooks",
      "Comprehensive Admin Dashboard for inventory & order management",
      "Global state management using Redux Toolkit",
      "Real-time order tracking and status updates"
    ],
    architecture: "React Frontend + Redux → Node.js / Express Backend → MongoDB Database → Stripe API Portal",
    challenges: [
      "Syncing frontend application state with Stripe webhook events for successful payments",
      "Implementing secure image uploads for product management with optimal compression"
    ],
    outcomes: [
      "Designed fully responsive checkout flow with 0% transaction failure rate",
      "Optimized backend queries to retrieve paginated catalog data under 100ms"
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Redux Toolkit", "Stripe API"],
    github: "https://github.com/shivamm2105/ecommerce-platform",
    live: "",
    badge: "Full Stack",
    icon: "🛍️"
  }
];

export default projects;