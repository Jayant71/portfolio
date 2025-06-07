// Type definitions for portfolio data

export interface SocialLink {
  platform: string
  url: string
}

export interface HeroData {
  title: string
  subtitle: string
  resumeUrl: string
  socialLinks: SocialLink[]
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface AboutData {
  title: string
  description: string
  features: Feature[]
}

export interface SkillCategory {
  name: string
  skills: string[]
}

export interface SkillsData {
  title: string
  description: string
  categories: SkillCategory[]
}

export interface Project {
  title: string
  description: string
  imageUrl: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  docsUrl?: string
}

export interface ProjectsData {
  title: string
  description: string
  projects: Project[]
}

export interface Publication {
  title: string
  conference: string
  description: string
  paperUrl: string
}

export interface ResearchData {
  title: string
  description: string
  publications: Publication[]
}

export interface ContactData {
  title: string
  description: string
  email: string
  linkedinUrl: string
  githubUrl?: string
}

export interface FooterData {
  copyright: string
  githubUrl: string
  linkedinUrl: string
  email: string
}

export interface PortfolioData {
  hero: HeroData
  about: AboutData
  skills: SkillsData
  projects: ProjectsData
  research: ResearchData
  contact: ContactData
  footer: FooterData
}
