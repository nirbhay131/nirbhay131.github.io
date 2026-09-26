export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  accent: string;
  idea: string;
  problem: string;
  approach: string;
  features: ProjectFeature[];
  learned: string;
}

export const projects: Project[] = [
  {
    id: "careersphere",
    number: "01",
    name: "CareerSphere",
    category: "Career Technology — Concept",
    tagline: "A structured path from student to hireable engineer.",
    description:
      "A career guidance and skill-development platform concept helping students understand career paths, identify skill gaps, discover opportunities and follow structured career roadmaps.",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    accent: "#6a63ff",
    idea:
      "Most students don't lack ambition, they lack a clear map. CareerSphere is a concept for a platform that turns a vague goal like \"become a software developer\" into a structured, trackable roadmap.",
    problem:
      "Students often can't see the gap between where they are and where a target role needs them to be — which skills matter, which projects to build, and what order to build them in.",
    approach:
      "The interface is designed around a single readiness score built from concrete skill areas, paired with a linear roadmap (Foundation → Skills → Projects → DSA → Interviews) so progress always has a next step attached to it.",
    features: [
      { title: "Career readiness overview", description: "A single dashboard view of target role, skill coverage and open next steps." },
      { title: "Skill gap analysis", description: "Skill areas broken out individually instead of one vague score." },
      { title: "Learning roadmap", description: "A stage-based path from foundations through to interview preparation." },
      { title: "Opportunity tracking", description: "A dedicated space for surfacing and tracking relevant opportunities." },
    ],
    learned:
      "Designing this concept pushed me to think about dashboards as decision tools rather than data dumps — every number on screen needed to answer \"what should I do next?\"",
  },
  {
    id: "croppulse",
    name: "CropPulse",
    number: "02",
    category: "Agriculture Technology — Concept",
    tagline: "Turning field conditions into decisions.",
    description:
      "An agriculture-focused technology concept centered around crop monitoring, agricultural insights and data-driven decision support.",
    technologies: ["React", "Python", "Pandas"],
    accent: "#5fd0a8",
    idea:
      "CropPulse imagines a monitoring layer for small and mid-size farms — one screen that turns environment readings into plain recommendations instead of raw numbers.",
    problem:
      "Environmental data (temperature, humidity, soil condition) is only useful if it's translated into an action. Raw sensor dashboards rarely do that translation for the person actually working the field.",
    approach:
      "The interface pairs a live-feeling environmental panel with a crop health indicator and a short, direct recommendation panel, so the data and the decision sit next to each other.",
    features: [
      { title: "Crop health visualization", description: "A single glanceable indicator built from multiple field signals." },
      { title: "Environmental conditions panel", description: "Temperature, humidity and soil condition shown together." },
      { title: "Growth timeline", description: "A simple visual timeline of the crop cycle." },
      { title: "Recommendations panel", description: "Short, direct suggestions tied to current conditions." },
    ],
    learned:
      "This project was about restraint — resisting the urge to show every possible chart, and instead deciding which three numbers a farmer would actually act on.",
  },
  {
    id: "food-waste",
    number: "03",
    name: "Food Waste Management System",
    category: "Social Impact Platform — Concept",
    tagline: "Connecting surplus food with people who can use it.",
    description:
      "A social-impact platform concept focused on reducing food waste by connecting surplus food with people or organizations that can make use of it.",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    accent: "#e8b25a",
    idea:
      "Restaurants, hostels and events regularly have surplus food with nowhere to go. This concept is a coordination layer between sources of surplus food and the organizations that can redistribute it.",
    problem:
      "Surplus food and the people who need it exist in the same city but rarely at the same time or place — the missing piece is usually just visibility and coordination.",
    approach:
      "The design treats each surplus listing as a card with a status (available, claimed, picked up), with a simple claim-and-pickup flow so coordination doesn't require phone calls back and forth.",
    features: [
      { title: "Food availability cards", description: "Source, food type, quantity and status shown together." },
      { title: "Claim & pickup flow", description: "A direct action path from listing to pickup coordination." },
      { title: "Request tracking", description: "Visibility into which listings are claimed and by whom." },
      { title: "Activity timeline", description: "A running view of donation and pickup activity." },
    ],
    learned:
      "Working on this concept reinforced how much of a social-impact product is coordination UX, not algorithms — the hard part is making handoffs simple.",
  },
  {
    id: "traffic-lights",
    number: "04",
    name: "Modern Traffic Lights",
    category: "Smart City Systems — Concept",
    tagline: "Rethinking intersections as adaptive systems.",
    description:
      "A smart traffic-management concept exploring automated and adaptive traffic-light control and improved traffic flow.",
    technologies: ["C++", "Python", "Algorithms"],
    accent: "#5aa9e8",
    idea:
      "Fixed-timer traffic lights don't respond to actual conditions. This concept explores a control-room view of a single intersection where signal timing adapts to traffic density.",
    problem:
      "Static signal timing wastes time at empty approaches and creates backups at busy ones, especially at uneven intersections.",
    approach:
      "The visualization is built around a stylized four-way intersection with live density per approach, so the logic driving signal changes is visible rather than hidden.",
    features: [
      { title: "Intersection visualization", description: "North, South, East and West approaches shown with live state." },
      { title: "Traffic density readout", description: "A relative density indicator per approach." },
      { title: "Signal state logic", description: "Clear visualization of which approach currently has priority and why." },
      { title: "Flow analytics", description: "A simple summary of flow across the intersection over time." },
    ],
    learned:
      "This project was a good exercise in applying core algorithmic thinking — greedy prioritization and simple decision rules — to a visual, real-world feeling system.",
  },
];
