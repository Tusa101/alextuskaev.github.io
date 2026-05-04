// CV data — edit this file to update your CV. No other files need to change.
window.CV_DATA = {
  "personal": {
    "firstName": "Alexander",
    "lastName": "Tuskaev",
    "title": "Senior .NET Developer · System / Solution Architect · Team Lead",
    "location": "Central District, Israel",
    "locationFlag": "🇮🇱",
    "status": "Available for opportunities",
    "email": "amtuska@gmail.com",
    "phone": "+972 55 771 7906",
    "bio": "Backend engineer with 5+ years shaping distributed systems — from splitting legacy monoliths into domain-driven microservices to architecting event-driven AI integrations. I write code that scales, systems that survive, and pipelines that just ship — and I love sketching architectures with C4, UML, and sequence diagrams before a single line of code is written. I've also led teams: mentoring engineers, running technical interviews, and owning delivery end-to-end."
  },

  "social": {
    "linkedin": {
      "label": "linkedin.com/in/alextuskaev",
      "url": "https://www.linkedin.com/in/alextuskaev"
    },
    "github": {
      "label": "github.com/Tusa101",
      "url": "https://github.com/Tusa101"
    }
  },

  "terminal": {
    "role": "Senior .NET Developer",
    "experienceLabel": "5+ years",
    "openTo": ["System Architect", "Solution Architect", "Team Lead"],
    "stackPrimary": ["C#", "ASP.NET", ".NET Core", "EF Core"],
    "stackSecondary": ["Azure", "AWS", "Docker", "K8s", "RabbitMQ", "Service Bus"],
    "stackTertiary": ["PostgreSQL", "Redis", "RavenDB"],
    "highlights": [
      { "key": "delivery", "value": "CI/CD −30% build time" },
      { "key": "perf",     "value": "Critical paths +15% speed" },
      { "key": "dx",       "value": "NuGet pkgs → dev −30% time" }
    ]
  },

  "metrics": [
    { "value": "5",  "suffix": "+", "label": "Years of experience" },
    { "value": "4",  "suffix": "",  "label": "Companies" },
    { "value": "15", "suffix": "+", "label": "Devs led across teams" },
    { "value": "88", "suffix": "",  "label": "GPA · BCS Degree" }
  ],

  "experienceSummary": "5 yrs combined · since Jun 2021",
  "experience": [
    {
      "company": "movement-group",
      "url": "https://movement-group.com/",
      "period": "Feb 2025 – Present · 1 yr 2 mo",
      "role": "Senior .NET Developer",
      "industry": "Wellness · Health · On-site, Lod, Israel",
      "bullets": [
        "Decomposed main monolith into <span class=\"exp-highlight\">DDD-based microservices</span> to support internationalization and handle RPS growth.",
        "Developed NuGet packages (RavenDB, Postgres config) stored in Azure Feed — <span class=\"exp-highlight\">accelerated new project bootstrap by 30%</span>.",
        "Designed Azure App Service microservices connected to <span class=\"exp-highlight\">AI Agents via MCP</span>; architected SAGA-based distributed and async messaging via Service Bus.",
        "Led development of the event-driven system core; improved onboarding and interviewing flows."
      ]
    },
    {
      "company": "APPFOX",
      "url": "https://appfox.ru/",
      "period": "Feb 2024 – Feb 2025 · 1 yr",
      "role": "Senior .NET Developer",
      "industry": "Outsource · SaaS · Gamedev · EdTech · Remote, Russia",
      "bullets": [
        "Designed multithreaded ASP.NET microservices connected via RabbitMQ; administered PostgreSQL and wrote <span class=\"exp-highlight\">10+ stored procedures</span> in SQL/PL-SQL.",
        "Acted as DevOps: configured GitHub Actions, Docker, TeamCity pipelines — <span class=\"exp-highlight\">reduced build &amp; delivery by 30%</span>.",
        "Critical path optimization improved loaded services speed <span class=\"exp-highlight\">by up to 15%</span>.",
        "Mentored new hires and conducted technical interviews."
      ]
    },
    {
      "company": "Dacha Industries",
      "url": "https://di-finsim.tilda.ws/",
      "period": "Dec 2021 – Sep 2024 · 2 yr 10 mo",
      "role": ".NET Developer",
      "industry": "Startup · Stock Market Simulator · Hybrid, Russia",
      "bullets": [
        "Maintained 8 async ASP.NET services connected via RabbitMQ with Redis cache and Oracle DB.",
        "Developed a <span class=\"exp-highlight\">WPF desktop application</span>; configured CI/CD using TeamCity."
      ]
    },
    {
      "company": "ITIVITI (Broadridge)",
      "url": "https://www.broadridge.com/financial-services/capital-markets/trading-and-connectivity/",
      "period": "Jun 2021 – Nov 2021 · 6 mo",
      "role": ".NET Developer",
      "industry": "FinTech · Trading Tools · HFT · On-site, Russia",
      "bullets": [
        "Backend development on high-frequency trading tooling within a regulated FinTech environment."
      ]
    }
  ],

  "education": [
    {
      "period": "2020 – 2024",
      "degree": "BCS in Software Engineering",
      "school": "Peter the Great St. Petersburg Polytechnic University",
      "url": "https://english.spbstu.ru/",
      "gpa": "88"
    }
  ],

  "skills": [
    {
      "group": "Core Languages & Frameworks",
      "tags": [
        { "label": "C#",           "primary": true,  "icon": "csharp"  },
        { "label": "ASP.NET Core", "primary": true,  "icon": "aspnet"  },
        { "label": ".NET Core",    "primary": true  },
        { "label": "EF Core",      "primary": true  },
        { "label": "xUnit",        "primary": false },
        { "label": "Python",       "primary": false },
        { "label": "SQL / PL-SQL", "primary": false }
      ]
    },
    {
      "group": "Cloud & DevOps",
      "tags": [
        { "label": "Azure",          "primary": true,  "icon": "azure"   },
        { "label": "AWS",            "primary": true  },
        { "label": "Docker",         "primary": true,  "icon": "docker"  },
        { "label": "GitHub Actions", "primary": true  },
        { "label": "NuGet",          "primary": true,  "icon": "nuget"   },
        { "label": "Azure DevOps",   "primary": false },
        { "label": "TeamCity",       "primary": false },
        { "label": "Kubernetes",     "primary": false },
        { "label": "S3",             "primary": false },
        { "label": "Windows",        "primary": false },
        { "label": "Linux",          "primary": false }
      ]
    },
    {
      "group": "Messaging & Architecture",
      "tags": [
        { "label": "RabbitMQ",          "primary": true,  "icon": "rabbitmq" },
        { "label": "Azure Service Bus",  "primary": true  },
        { "label": "MCP / AI Agents",    "primary": false },
        { "label": "SAGAs",              "primary": false },
        { "label": "Microservices",      "primary": false },
        { "label": "Event-driven",       "primary": false },
        { "label": "DDD",                "primary": false }
      ]
    },
    {
      "group": "Databases",
      "tags": [
        { "label": "PostgreSQL", "primary": true,  "icon": "postgresql" },
        { "label": "Redis",      "primary": true,  "icon": "redis"      },
        { "label": "RavenDB",    "primary": false },
        { "label": "MongoDB",    "primary": false },
        { "label": "Oracle DB",  "primary": true,  "icon": "oracle"     }
      ]
    },
    {
      "group": "Protocols & Practices",
      "tags": [
        { "label": "REST API",      "primary": true  },
        { "label": "gRPC",          "primary": true,  "icon": "grpc"  },
        { "label": "Agile / Scrum", "primary": false },
        { "label": "Code Review",   "primary": false },
        { "label": "Mentoring",     "primary": false },
        { "label": "Refactoring",   "primary": false },
        { "label": "System Design", "primary": false }
      ]
    },
    {
      "group": "Languages",
      "tags": [
        { "label": "English — Fluent",   "primary": true  },
        { "label": "Russian — Native",   "primary": true  },
        { "label": "Hebrew — Beginner",  "primary": false }
      ]
    }
  ],

  "architecture": {
    "heading": "I think in <em>diagrams</em> before I think in code.",
    "paragraphs": [
      "Before a single endpoint gets written, I sketch the system — bounded contexts, message flows, failure modes, fan-out paths. Good architecture is a conversation, and diagrams are how it gets had.",
      "I lean on <span class=\"exp-highlight\">C4 models</span> for system context and containers, <span class=\"exp-highlight\">UML</span> for class and state machines, and <span class=\"exp-highlight\">sequence diagrams</span> to nail down async choreography across services. Tools of choice: PlantUML, Lucid, Miro, draw.io, Mermaid, Excalidraw.",
      "That's why I'm equally <span class=\"exp-highlight\">open to System Architect / Solution Architect roles</span> — designing the shape of a system is the part of the job I enjoy the most.",
      "And I'm just as comfortable <span class=\"exp-highlight\">leading the team that builds it</span> — mentoring engineers, running technical interviews, owning delivery and code-review culture, and translating architecture decisions into a roadmap the team actually wants to ship."
    ],
    "tags": [
      { "label": "C4 Model",          "primary": true  },
      { "label": "UML",               "primary": true  },
      { "label": "Sequence Diagrams", "primary": true  },
      { "label": "Team Leadership",   "primary": true  },
      { "label": "PlantUML",          "primary": false },
      { "label": "Lucid",             "primary": false },
      { "label": "Miro",              "primary": false },
      { "label": "Mermaid",           "primary": false },
      { "label": "Excalidraw",        "primary": false },
      { "label": "Mentoring",         "primary": false },
      { "label": "Tech Interviews",   "primary": false }
    ]
  },

  "contact": {
    "heading": "Let's build<br>something <em>great</em>.",
    "blurb": "Open to senior backend roles, team lead positions, and system / solution architect opportunities — anywhere distributed systems get interesting. Based in Israel, open to remote collaboration across time zones."
  },

  "footer": {
    "name": "Alexander Tuskaev"
  }
};
