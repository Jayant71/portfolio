// Simple CMS client that fetches data from local JSON files
// This can be replaced with a real CMS client (Contentful, Sanity, etc.)

import type { PortfolioData } from "./types"

// Portfolio data - this is static and can be pre-rendered at build time
export const portfolioData: PortfolioData = {
  hero: {
    title: "Hi, I'm Jayant Patel",
    subtitle: "Software and AI Agent Developer",
    resumeUrl: "/resume.pdf",
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
  journey: {
    title: "My Journey so Far",
    description: "From research labs to tech companies, here's how I've grown as a developer and researcher.",
    steps: [
      {
        id: "clone-futura",
        company: "Clonefutura",
        role: "Software Developer Intern",
        duration: "August 2025 – Present",
        location: "Remote",
        description: "Building production-ready Fullstack AI agent features and integrations, focusing on reliable multi-agent workflows, LLM connectors, and observability to enable robust automation and research iterations.",
        achievements: [
          "Designing and developing a Check-in/Check-out web application at Online Live Learning (OLL), currently in production and used to track 50+ educators."
        ],
        technologies: ["AI Agents", "React", "Next.js", "Supabase", "Clean Code", "Vercel", "CI/CD", "n8n", "Github Copilot"],
        type: "internship",
        icon: "briefcase"
      },
      {
        id: "iron-willed",
        company: "Iron Willed Tech Ltd",
        role: "Software Developer Intern",
        duration: "January 2025 – June 2025",
        location: "Remote",
        description: "Developed core features for a lifestyle fashion app using modern Android technologies and ML integration for virtual try-on capabilities.",
        achievements: [
          "Built responsive UI/UX with Kotlin and Jetpack Compose",
          "Integrated Firebase APIs for authentication and dynamic content",
          "Implemented Google MediaPipe ML model for real-time face mesh generation",
          "Applied Clean Architecture principles for scalable, production-ready code"
        ],
        technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Google MediaPipe", "Clean Architecture", "Git", "Github", "Android", "ML Integration", "Software Engineering"],
        type: "internship",
        icon: "briefcase"
      },
      {
        id: "iit-jammu",
        company: "Indian Institute of Technology (IIT) Jammu",
        role: "Research Intern",
        duration: "February 2024 - July 2024",
        location: "Hybrid - Jammu, India",
        description: "Conducted cutting-edge research in computer vision and machine learning, focusing on object detection and model optimization for real-world applications.",
        achievements: [
          "Optimized YOLO models achieving 80.95% size reduction with minimal accuracy loss",
          "Developed PPE detection system with 83.75% parameter reduction",
          "Published research findings on model compression techniques",
          "Collaborated with PhD researchers on advanced computer vision projects"
        ],
        technologies: ["Python", "PyTorch", "YOLO", "Computer Vision", "Model Optimization", "Deep Learning"],
        type: "internship",
        icon: "graduation-cap"
      },
      {
        id: "education",
        company: "University Teaching Department - CSVTU",
        role: "Bachelor of Technology in Computer Science",
        duration: "2021 - 2025",
        location: "Bhilai, Chhattisgarh, India",
        description: "Building a strong foundation in computer science principles while actively working on research projects and developing practical applications.",
        achievements: [
          "Specialized in Machine Learning and Computer Vision",
          "Developed multiple award-winning projects including plant disease detection app",
          "Active participant in coding competitions and hackathons",
          "Maintained excellent academic performance while pursuing practical projects"
        ],
        technologies: ["Data Structures", "Algorithms", "Machine Learning", "Programming", "DBMS", "Research Methodology", "Software Engineering",],
        type: "education",
        icon: "book-open"
      }
    ]
  },
  skills: {
    title: "Skills & Technologies",
    description: "A comprehensive toolkit for modern development and research.",
    categories: [
      {
        name: "Programming Languages",
        skills: ["Python", "Javascript", "Kotlin"],
      },
      {
        name: "Frameworks & Libraries",
        skills: ["PyTorch", "OpenCV", "LangChain", "n8n", "Flask", "React"],
      },
      {
        name: "Technologies",
        skills: ["AI Agent", "Automation", "Machine Learning", "Deep Learning", "Computer Vision", "Android", "Data Analysis"],
      },
      {
        name: "Tools",
        skills: ["Git", "Jupyter Notebooks", "VS Code", "Android Studio", "Firebase", "Docker"],
      },
    ],
  },
  projects: {
    title: "Featured Projects",
    description: "A selection of projects that showcase my development and research capabilities.",
    projects: [
      {
        title: "Text Behind Photo",
        description: "Text Behind Photo is a dynamic web application that allows users to creatively integrate text within their images.Built with a modern frontend stack of Vite, React, TypeScript, and Tailwind CSS, the application provides a seamless user experience for uploading photos.The powerful FastAPI backend then processes the image, utilizing a YOLO model for person detection and a SAM2 model for precise segmentation through the Ultralytics framework.After automatically separating the subject from the background, the application returns the distinct layers to the user.From there, users can add multiple text elements, each individually customizable, and cleverly place them either in front of or behind the main subject to create visually striking compositions.",
        imageUrl: "/images/p3.webp",
        technologies: ["React", "Tailwind CSS", "YOLO", "Object Detection"],
        githubUrl: "https://text-behind-photo-dwxw.vercel.app/",
      },
      {
        title: "Real-time Book Reading Attention Monitoring System",
        description:
          "This project is a real-time attention monitoring system for readers. Using a webcam, it employs a YOLO model to detect the user's face and the book they are reading, while the L2CS-Net model analyzes their gaze to determine if they are paying attention.The system, built entirely in Python, can generate session reports with attention metrics and can be configured for different monitoring durations.For optimal performance, a CUDA- enabled GPU is recommended.",
        imageUrl: "/images/p4.webp",
        technologies: ["Python", "Machine Learning", "Computer Vision", "YOLO", "Object Detection"],
        githubUrl: "https://github.com/Jayant71/Book-Reading_Attentiton-Monitor.git",
      },
      {
        title: "Model Comparison and Compression",
        description:
          "Optimized YOLO models for PPE detection, achieving 80.95% size reduction while maintaining high accuracy. Highlights: Analyzed 6 YOLO object detection models for PPE detection on the CHV Dataset. Optimized YOLOv8n models, achieving an 80.95% reduction in model size and an 83.75% reduction in parameters, with minimal drop in precision and recall compared with YOLOv8n. Executed rigorous testing protocols to evaluate YOLOv8 effectiveness against real-world ppe datasets, identifying critical areas for improvement which led to more accurate PPE identification within operational environments.",
        imageUrl: "/images/p2.webp",
        technologies: ["Machine Learning", "Computer Vision", "YOLO", "Object Detection"],
        githubUrl: "https://github.com/Jayant71/Eff-Yolov8.git",
      },
      {
        title: "Plant Disease Recognition Using Machine Learning",
        description:
          "AI-powered mobile app for plant disease detection with 98.45% accuracy and integrated chatbot for farmer support. Highlights: Fine-tuned a pre-trained MobileNetV3 CNN model, achieving 98.45% training accuracy and 97.69% validation accuracy for plant disease recognition. Engineered an intuitive Android application leveraging Flutter, designed specifically for farmers; integrated a plant-specific chatbot, resulting in over 100 unique queries answered during testing.",
        imageUrl: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=500&q=80",
        technologies: ["Python", "Machine Learning", "Flutter"],
        githubUrl: "https://github.com/Jayant71/Plant-Disease-Prediction--MobileNetV3-.git",
      },
    ],
  },
  research: {
    title: "Research & Publications",
    description: "Contributing to the advancement of computer science through research and publications.",
    publications: [
      {
        title: "AI Powered Attention Monitoring System For Book Reading",
        conference: "High Technology Letters, Volume 31, Issue 7, July 2025",
        description: "",
        paperUrl: "#",
      },
      {
        title: "Attention Monitoring Systems in Book Reading: A Comprehensive Review",
        conference: "10th International Conference 'Shaastrarth-2025', Rungta College of Engineering and Technology, Bhilai",
        description: "",
        paperUrl: "#",
      },
      {
        title: "Development of Mobile Application for Sickle Cell Anemia Treatment Support System",
        conference: "YMER, Volume 23, Issue 06 (June 2024)",
        description: "",
        paperUrl: "https://ymerdigital.com/archives/?cpage=1&issId=%202306",
      },
    ],
  },
  contact: {
    title: "Get In Touch",
    description:
      "Interested in collaboration, research opportunities, or just want to chat about technology? I'd love to hear from you.",
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

// Get data synchronously for SSR - no async needed since data is static
export function getPortfolioData(): PortfolioData {
  return portfolioData
}

// Keep async version for backwards compatibility
export async function fetchPortfolioData(): Promise<PortfolioData> {
  return portfolioData
}
