// Simple CMS client that fetches data from local JSON files
// This can be replaced with a real CMS client (Contentful, Sanity, etc.)

import type { PortfolioData } from "./types"

// Simulated CMS data
const portfolioData: PortfolioData = {
  hero: {
    title: "Hi, I'm Jayant Patel",
    subtitle: "Research & Software Development Engineer",
    resumeUrl: "/resume.pdf", // Kept from original cms.ts as not in config.js
    socialLinks: [
      { platform: "github", url: "https://github.com/Jayant71" },
      { platform: "linkedin", url: "https://linkedin.com/in/jayantpatel71" },
      { platform: "email", url: "mailto:jayant.07124@gmail.com" },
    ],
  },
  about: {
    title: "About Me",
    description:
      "I am Jayant Patel, a Research & Software Development Engineer based in Korba, Chhattisgarh 495452. My experience includes roles such as Software Developer Intern at Iron Willed Tech Ltd and Research Intern at Indian Institute of Technology (IIT) Jammu, focusing on areas like object detection and model optimization.",
    features: [
      {
        icon: "beaker",
        title: "Research & Development",
        description: "Exploring cutting-edge technologies and contributing to open-source research projects.",
      },
      {
        icon: "code",
        title: "Full-Stack Development",
        description: "Building scalable applications with modern frameworks and cloud technologies.",
      },
      {
        icon: "lightbulb",
        title: "Innovation",
        description: "Turning complex problems into elegant solutions through creative thinking.",
      },
    ],
  },
  skills: {
    title: "Skills & Technologies",
    description: "A comprehensive toolkit for modern development and research.", // Kept from original cms.ts
    categories: [
      {
        name: "Programming Languages",
        skills: ["Python", "C/C++", "Kotlin"],
      },
      {
        name: "Frameworks & Libraries",
        skills: ["TensorFlow", "PyTorch", "OpenCV"],
      },
      {
        name: "Technologies",
        skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Android", "Data Analysis"],
      },
      {
        name: "Tools",
        skills: ["Git", "Linux", "Jupyter Notebooks", "VS Code", "Android Studio", "Firebase", "Docker"],
      },
    ],
  },
  projects: {
    title: "Featured Projects",
    description: "A selection of projects that showcase my development and research capabilities.", // Kept from original cms.ts
    projects: [
      {
        title: "Model Comparison and Compression",
        description:
          "Optimized YOLO models for PPE detection, achieving 80.95% size reduction while maintaining high accuracy. Highlights: Analyzed 6 YOLO object detection models for PPE detection on the CHV Dataset. Optimized YOLOv8n models, achieving an 80.95% reduction in model size and an 83.75% reduction in parameters, with minimal drop in precision and recall compared with YOLOv8n. Executed rigorous testing protocols to evaluate YOLOv8 effectiveness against real-world ppe datasets, identifying critical areas for improvement which led to more accurate PPE identification within operational environments.",
        imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&q=80",
        technologies: ["Machine Learning", "Computer Vision", "YOLO"],
        githubUrl: "https://github.com/Jayant71", // Defaulted as project link in config.js was "#"
      },
      {
        title: "Plant Disease Recognition Using Machine Learning",
        description:
          "AI-powered mobile app for plant disease detection with 98.45% accuracy and integrated chatbot for farmer support. Highlights: Fine-tuned a pre-trained MobileNetV3 CNN model, achieving 98.45% training accuracy and 97.69% validation accuracy for plant disease recognition. Engineered an intuitive Android application leveraging Flutter, designed specifically for farmers; integrated a plant-specific chatbot, resulting in over 100 unique queries answered during testing.",
        imageUrl: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=500&q=80",
        technologies: ["Python", "Machine Learning", "Flutter"],
        githubUrl: "https://github.com/Jayant71", // Defaulted as project link in config.js was "#"
      },
    ],
  },
  research: {
    title: "Research & Publications",
    description: "Contributing to the advancement of computer science through research and publications.", // Kept from original cms.ts
    publications: [
      {
        title: "Development of Mobile Application for Sickle Cell Anemia Treatment Support System",
        conference: "YMER, Volume 23, Issue 06 (June 2024)",
        description: "", // No specific description in config.js for this publication
        paperUrl: "#", // From config.js publication link
      },
    ],
  },
  contact: {
    title: "Get In Touch",
    description:
      "Interested in collaboration, research opportunities, or just want to chat about technology? I'd love to hear from you.", // Kept from original cms.ts
    email: "jayant.07124@gmail.com",
    linkedinUrl: "https://linkedin.com/in/jayantpatel71",
    githubUrl: "https://github.com/Jayant71",
  },
  footer: {
    copyright: "Built with Next.js and Three.js. © 2025 Jayant Patel.",
    githubUrl: "https://github.com/Jayant71",
    linkedinUrl: "https://linkedin.com/in/jayantpatel71",
    email: "jayant.07124@gmail.com",
  },
}

// Simulate API call with delay
export async function fetchPortfolioData(): Promise<PortfolioData> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800))
  return portfolioData
}

// Function to update portfolio data (would connect to a real CMS API)
export async function updatePortfolioData(data: Partial<PortfolioData>): Promise<PortfolioData> {
  // In a real implementation, this would send data to a CMS API
  console.log("Updating portfolio data:", data)

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Return the updated data
  return { ...portfolioData, ...data }
}
