export const portfolioData = {
  personalInfo: {
    name: "Alex Developer",
    role: "Frontend Architect",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    bio: "I build fast, scalable, and visually stunning web applications with modern tools. Minimalist at heart, obsessive about user experience.",
    socialLinks: {
      github: "https://github.com/example",
      linkedin: "https://linkedin.com/in/example",
      telegram: "https://t.me/example"
    },
    introVideoUrl: "" // Keeping empty or adding URL if needed, but the original plan had it. Let's keep it.
  },
  skills: [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue", "Node.js", "Tailwind CSS", "GraphQL", "Framer Motion", "Jest"
  ],
  languages: [
    { name: "English", level: "Native or Bilingual Proficiency" },
    { name: "Ukrainian", level: "Native Proficiency" },
    { name: "Spanish", level: "Professional Working Proficiency" }
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
