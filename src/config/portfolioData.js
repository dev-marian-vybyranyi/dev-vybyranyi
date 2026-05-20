export const portfolioData = {
  personalInfo: {
    name: "Marian Vybyranyi",
    role: "Full-Stack Developer",
    avatarUrl: "public/avatar.jpg",
    bio: "I'm a Full-Stack JavaScript/TypeScript developer with 4  years of experience building scalable web applications for startups and SaaS platforms. I work across both frontend and backend development, delivering responsive user interfaces, reliable APIs, and maintainable production systems.",
    socialLinks: {
      github: "https://github.com/dev-marian-vybyranyi",
    },
    introVideoUrl: "hhttps://youtu.be/ytz0ce00COY"
  },
  skills: [
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript"]
    },
    {
      category: "Front-End Development",
      items: [
        "Next.JS", "React.JS", "Redux", "Redux-Toolkit", "Material UI",
        "Ant Design", "TailwindCSS", "Shadcn UI", "styled-components",
        "SCSS/Less/Sass", "HTML5/CSS3", "chart.js", "ApexCharts",
        "Highcharts", "Webflow"
      ]
    },
    {
      category: "Back-End Development",
      items: [
        "Node.js", "Express.js", "Nest.js", "Firebase", "Supabase",
        "GraphQL", "Sequelize", "TypeORM", "Stripe", "Twilio",
        "SendGrid", "RabbitMQ", "socket.io", "Websockets", "Auth0",
        "JWT", "Actions (CI/CD)", "Mocha", "Jest", "Docker",
        "Algolia", "Kafka", "ElasticSearch"
      ]
    },
    {
      category: "Servers/Databases",
      items: ["MongoDB", "Firebase", "PostgreSQL", "MySQL", "Pinecone DB", "Neo4j"]
    },
    {
      category: "Cloud Platforms",
      items: ["AWS (EC2, Lambda, API Gateway, S3, RDS, Cognito, Elastic Beanstalk)"]
    },
    {
      category: "Source Control Systems",
      items: ["GitHub", "GitLab", "BitBucket"]
    },
    {
      category: "Tracking System",
      items: ["Jira", "Trello"]
    }
  ],
  languages: [
    { 
      name: "English", 
      level: "B2",
      spoken: "Upper-Intermediate",
      written: "Upper-Intermediate"
    },
    { 
      name: "Ukrainian", 
      level: "Native",
      spoken: "Native",
      written: "Native"
    }
  ],
  employment: [
    {
      id: "emp-1",
      role: "IT Academy Teacher",
      company: "Redmonkey IT Academy, Chernivtsi",
      period: "SEPTEMBER 2024 - PRESENT",
      description: "- Teach HTML, CSS, JavaScript, React, Python, PHP, WordPress\n- Explain core concepts such as SPA architecture, REST APIs, and Git\n- Mentor students during projects and conduct regular code reviews"
    },
    {
      id: "emp-2",
      role: "IT Support Specialist",
      company: "MTA, Chernivtsi (digital equipment store)",
      period: "FEBRUARY 2025 - JUNE 2025",
      description: "- Maintained stable operation of the local network, routers and printers.\n- Provided technical support to users and quick troubleshooting.\n- Administered computers, networks and office equipment."
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "Bachelor, Computer Science",
      institution: "Chernivtsi National University",
      period: "2023 - PRESENT",
      description: ""
    },
    {
      id: "edu-2",
      degree: "Junior Bachelor, Software Engineering",
      institution: "Gusyatyn Vocational College of TNTU",
      period: "2021 - 2023",
      description: ""
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "SaaS AI Powered Platform",
      role: "Full-Stack Developer",
      description: "An accounting and forecasting platform tailormade for SaaS/Fintech/Marketplace businesses. The company started from scratch and built an accounting engine that delivers what a digital business needs and stripped away everything you don't need. Crispa has a pre-defined account structure, designed to provide you with exactly the kind of reporting and metrics you need to run your business and keep your stakeholders informed. Forecasting is done in the exact same structure as your reporting, so your actuals and forecast scenarios will always match and your key metrics will be in sync.",
      tags: ["Next.js", "Redux", "Tailwind CSS", "Chart.js", "Material UI", "Open AI API"
      ],
      screenshots: [
        "public/projects/project-1.png",
      ],
    },
    {
      id: "project-2",
      title: "SaaS Telematics platform",
      role: "Full-Stack Developer",
      description: "Fleet management and telematics platform for monitoring vehicles, routes, and operational activity in real time. The system helps fleet operators track vehicle locations on interactive maps, review vehicle status and telemetry data, replay historical routes, receive operational notifications, and manage fleet performance through data-heavy dashboards. \nThe platform is designed for logistics, transportation, and field operations teams that need clear visibility into vehicle movement, driver activity, asset status, and route history. It combines real-time tracking, map-based monitoring, reporting, alerts, and role-based access into one operational web portal.",
      tags: ["React", "Next.js", "NestJS", "TypeScript", "Prisma / TypeORM", "PostgreSQL / Amazon RDS", "AWS EC2", "S3", "WebSocket / Socket.IO", "Elasticsearch", "Google Maps API / Mapbox", "Passport / OAuth2", "Stripe"],
      screenshots: [
        "public/projects/project-2.png",
      ],
    },
    {
      id: "project-3",
      title: "Car Insurance provider YDE Insurance",
      role: "Full-Stack Developer",
      description: "High load dealer portal for managing insurance claims, agreements, and vehicle estimates with complex multi step workflows and real time status tracking.",
      tags: ["React", "Next.js", "App Router", "TypeScript", "TanStack Query", "Zustand", "React Hook", "Form", "Zod", "Tailwind CSS v4", "Radix UI", "shadcn/ui", "Material UI"],
      screenshots: [
        "public/projects/project-3.png"
      ],
    },
    {
      id: "project-4",
      title: "B2B AI-powered platform",
      role: "Full-Stack Developer",
      description: "AI-powered enterprise SaaS platform for organizational change management and digital transformation. This B2B platform helps companies automate operational workflows, manage transformation initiatives, generate AI-assisted business assets, and coordinate enterprise-wide process execution through centralized dashboards and collaboration tools.",
      tags: ["Next.js", "React", "NestJS", "Chart.js", "Stripe", "Automation tools", "Open AI API", "Material UI", "TailwindCSS", "Shadcn UI"],
      screenshots: [
        "public/projects/project-4.png"
      ],
    }
  ]
};
