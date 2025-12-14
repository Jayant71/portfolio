"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Code, Grid3X3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { ProjectsData } from "@/lib/types"

interface ProjectsProps {
  data: ProjectsData
}

type FilterCategory = "all" | "ai" | "fullstack" | "tools"

export default function Projects({ data }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all")

  const filters: { key: FilterCategory; label: string }[] = [
    { key: "all", label: "All Work" },
    { key: "ai", label: "AI & ML" },
    { key: "fullstack", label: "Full Stack" },
    { key: "tools", label: "Tools" },
  ]

  // Categorize projects based on technologies
  const categorizeProject = (technologies: string[]): FilterCategory[] => {
    const categories: FilterCategory[] = ["all"]
    const techLower = technologies.map((t) => t.toLowerCase())

    if (
      techLower.some((t) =>
        ["machine learning", "deep learning", "yolo", "pytorch", "computer vision", "ai", "ml", "object detection"].includes(t)
      )
    ) {
      categories.push("ai")
    }

    if (
      techLower.some((t) =>
        ["react", "next.js", "node.js", "flask", "tailwind css", "flutter"].includes(t)
      )
    ) {
      categories.push("fullstack")
    }

    if (
      techLower.some((t) =>
        ["canvas api", "automation", "python"].includes(t)
      )
    ) {
      categories.push("tools")
    }

    return categories
  }

  const filteredProjects =
    activeFilter === "all"
      ? data.projects
      : data.projects.filter((project) =>
        categorizeProject(project.technologies).includes(activeFilter)
      )

  // Determine grid layout - featured projects span 2 columns
  const getGridClass = (index: number) => {
    if (index === 0 || index === 3) {
      return "md:col-span-2"
    }
    return ""
  }

  return (
    <section className="w-full max-w-[960px] mx-auto px-4 py-16" id="projects">
      {/* Header with filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <motion.h2
          className="text-2xl md:text-3xl font-serif font-bold flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Grid3X3 className="h-6 w-6 text-primary" />
          Scalable Project Gallery
        </motion.h2>

        {/* Filter tabs */}
        <motion.div
          className="flex gap-2 p-1 bg-muted rounded-full overflow-x-auto w-full md:w-auto shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-full text-xs font-sans font-bold whitespace-nowrap transition-colors ${activeFilter === filter.key
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-primary"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 h-80 shadow-subtle hover:shadow-medium ${getGridClass(
                index
              )}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              layout
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                style={{
                  backgroundImage: project.imageUrl
                    ? `url('${project.imageUrl}')`
                    : "linear-gradient(135deg, hsl(var(--primary) / 0.2) 0%, hsl(var(--muted)) 100%)",
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.slice(0, 2).map((tech, idx) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-[10px] font-mono uppercase tracking-wider rounded-md border ${idx === 0
                          ? "bg-primary/20 text-primary border-primary/20"
                          : "bg-muted text-muted-foreground border-border"
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3
                  className={`font-serif font-bold mb-2 ${getGridClass(index) ? "text-2xl" : "text-xl"
                    }`}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm font-sans line-clamp-2 max-w-lg">
                  {project.description}
                </p>

                {/* Links - show on hover */}
                <div className="mt-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors flex items-center gap-1 text-sm font-sans font-bold"
                    >
                      {project.githubUrl.includes("vercel") ||
                        project.githubUrl.includes("http") ? (
                        <>
                          View Demo{" "}
                          <ExternalLink className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          View Code <Code className="h-4 w-4" />
                        </>
                      )}
                    </Link>
                  )}
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors flex items-center gap-1 text-sm font-sans font-bold"
                    >
                      Live Demo <ExternalLink className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
