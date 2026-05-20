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
    { name: "English", level: "Upper-Intermediate" },
    { name: "Ukrainian", level: "Native Speaker" },
  ],
  employment: [
    {
      id: "emp-1",
      role: "Senior Frontend Engineer",
      company: "TechNova Solutions",
      period: "Jan 2022 - Present",
      description: "Led the frontend migration to Next.js, reducing load times by 40%. Architected a scalable component library using Radix UI and Tailwind CSS, adopted by 3 different product teams."
    },
    {
      id: "emp-2",
      role: "Frontend Developer",
      company: "Creative Spark",
      period: "Mar 2019 - Dec 2021",
      description: "Developed interactive data dashboards for enterprise clients using React and D3.js. Improved test coverage from 20% to 85%."
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "B.S. in Computer Science",
      institution: "State University",
      period: "2015 - 2019",
      description: "Graduated with honors. Specialized in Human-Computer Interaction and web technologies."
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "Neon Finance",
      description: "A modern fintech dashboard built with Next.js, featuring real-time websocket data and intricate data visualizations.",
      tags: ["React", "TypeScript", "Tailwind", "D3.js"],
      screenshots: [
        "https://picsum.photos/seed/neon1/800/500"
      ],
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/example/neon-finance"
    },
    {
      id: "project-2",
      title: "Aura Commerce",
      description: "Headless e-commerce platform with ultra-fast page transitions, intelligent search, and dynamic cart management.",
      tags: ["Next.js", "Shopify", "Framer Motion"],
      screenshots: [
        "https://picsum.photos/seed/aura1/800/500"
      ],
      demoUrl: "https://example.com/aura",
      githubUrl: "https://github.com/example/aura-commerce"
    },
    {
      id: "project-3",
      title: "Nova Workspace",
      description: "Collaborative canvas for remote teams to sketch, plan, and execute projects in real-time.",
      tags: ["React", "Zustand", "WebSockets", "Canvas API"],
      screenshots: [
        "https://picsum.photos/seed/nova1/800/500"
      ],
      demoUrl: "https://example.com/nova",
      githubUrl: "https://github.com/example/nova-workspace"
    }
  ]
};
