// Path: growth-portfolio-main/src/portfolioData.ts

import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Cloud, 
  Terminal, 
  Cpu, 
  Layers, 
  Github, 
  Linkedin, 
  Mail, 
  Twitter 
} from "lucide-react"; 

export const personalDetails = {
  name: "Anant Tripathi",
  tagline: "Eat | Code | Sleep | Repeat",
  role: "Full-Stack Developer (MERN) & System Designer",
  bio: "I’m a tech enthusiast and continuous learner with strong fundamentals in core CS subjects, hands-on experience in full-stack development, and a growing passion for open-source and scalable systems.",
  email: "gammadeveloper5114@gmail.com",
  location: "Greater Noida, India",
  social: {
    github: "https://github.com/GammaAT96",
    linkedin: "https://www.linkedin.com/in/anant-tripathi-202157325",
    leetcode: "https://leetcode.com/u/Anant_Tripathi/",
    twitter: "https://twitter.com/anantdev5114",
  }
};

export const projects = [
  {
    title: "MERN Stack Application",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    description: "A complete full-stack web application built from scratch featuring user authentication and database integration.",
    learnings: "Mastered the MERN architecture, REST API design, and frontend-backend integration.",
    github: "https://github.com/GammaAT96", 
    gradient: "bg-gradient-lavender",
  },
  {
    title: "REST API with Authentication",
    techStack: ["Node.js", "Express", "JWT", "MongoDB"],
    description: "Secure backend API implementation with CRUD operations, user authentication, and authorization.",
    learnings: "Deepened understanding of backend security, JWT, and database management.",
    github: "https://github.com/GammaAT96",
    gradient: "bg-gradient-mint",
  },
  {
    title: "Python Automation Scripts",
    techStack: ["Python", "File Handling", "Automation"],
    description: "A collection of scripts for automating daily tasks, file organization, and data processing.",
    learnings: "Improved scripting proficiency and problem-solving with Python.",
    github: "https://github.com/GammaAT96",
    gradient: "bg-gradient-cream",
  },
  {
    title: "DSA Practice Repository",
    techStack: ["C++", "Algorithms", "Data Structures"],
    description: "My solutions to LeetCode and Codeforces problems, focusing on optimization and clean code.",
    learnings: "Strengthened core logic and algorithmic thinking.",
    github: "https://github.com/GammaAT96",
    gradient: "bg-gradient-sage",
  }
];

export const skillCategories = [
  {
    title: "Programming & DSA",
    gradient: "bg-gradient-lavender",
    skills: [
      { name: "C++ (Basics, OOP)", level: "practicing" },
      { name: "Data Structures & Algo", level: "practicing" },
      { name: "Competitive Programming", level: "practicing" },
      { name: "Python (Scripting)", level: "practicing" },
    ],
  },
  {
    title: "Web Development (MERN)",
    gradient: "bg-gradient-cream",
    skills: [
      { name: "React.js", level: "practicing" },
      { name: "Node.js & Express.js", level: "learning" },
      { name: "MongoDB & Atlas", level: "learning" },
      { name: "JavaScript (ES6+)", level: "practicing" },
      { name: "HTML5 & CSS3", level: "practicing" },
    ],
  },
  {
    title: "CS Fundamentals (GATE)",
    gradient: "bg-gradient-peach",
    skills: [
      { name: "Operating Systems", level: "learning" },
      { name: "DBMS", level: "learning" },
      { name: "Computer Networks", level: "learning" },
      { name: "Theory of Computation", level: "learning" },
    ],
  },
  {
    title: "DevOps & Tools",
    gradient: "bg-gradient-sage",
    skills: [
      { name: "Git & GitHub", level: "practicing" },
      { name: "Docker (Basics)", level: "learning" },
      { name: "AWS (EC2, S3)", level: "exploring" },
      { name: "Postman", level: "practicing" },
    ],
  },
];