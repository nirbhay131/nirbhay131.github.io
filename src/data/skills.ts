export interface SkillCategory {
  id: string;
  label: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    description: "Core languages I write and think in.",
    skills: ["Java", "C++", "Python", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "development",
    label: "Development",
    description: "Building and shipping full-stack applications.",
    skills: ["React", "Node.js", "Express", "MySQL", "Vite"],
  },
  {
    id: "data",
    label: "Data",
    description: "Turning raw data into readable insight.",
    skills: ["Pandas", "Matplotlib", "Seaborn", "Power BI", "Tableau"],
  },
  {
    id: "core-cs",
    label: "Core CS",
    description: "Foundations that everything else is built on.",
    skills: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Dynamic Programming",
      "Trees & Graphs",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    id: "tools",
    label: "Tools",
    description: "The workflow I build inside every day.",
    skills: ["VS Code", "Git", "GitHub", "npm"],
  },
];
