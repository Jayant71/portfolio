"use client"

import { motion } from "framer-motion"
import type { SkillsData } from "@/lib/types"
import { Code, Terminal, Palette, Brain, Cpu, Sparkles } from "lucide-react"

interface SkillsProps {
  data: SkillsData
}

// Map of tech names to their brand colors and icons
const techConfig: Record<string, { color: string; icon: React.ReactNode }> = {
  React: { color: "#61DAFB", icon: <Code className="h-8 w-8" /> },
  TypeScript: { color: "#3178C6", icon: <Code className="h-8 w-8" /> },
  "Next.js": { color: "#FFFFFF", icon: <Terminal className="h-8 w-8" /> },
  Tailwind: { color: "#38B2AC", icon: <Palette className="h-8 w-8" /> },
  PyTorch: { color: "#EE4C2C", icon: <Brain className="h-8 w-8" /> },
  Python: { color: "#3776AB", icon: <Code className="h-8 w-8" /> },
  Javascript: { color: "#F7DF1E", icon: <Code className="h-8 w-8" /> },
  Kotlin: { color: "#7F52FF", icon: <Code className="h-8 w-8" /> },
  "AI Agent": { color: "#FFD700", icon: <Sparkles className="h-8 w-8" /> },
  "Machine Learning": { color: "#FF6B6B", icon: <Cpu className="h-8 w-8" /> },
  "Deep Learning": { color: "#FF6B6B", icon: <Brain className="h-8 w-8" /> },
  "Computer Vision": { color: "#00CED1", icon: <Cpu className="h-8 w-8" /> },
  LangChain: { color: "#00FF00", icon: <Sparkles className="h-8 w-8" /> },
  OpenCV: { color: "#5C3EE8", icon: <Cpu className="h-8 w-8" /> },
  Flask: { color: "#000000", icon: <Terminal className="h-8 w-8" /> },
  Docker: { color: "#2496ED", icon: <Terminal className="h-8 w-8" /> },
  Git: { color: "#F05032", icon: <Code className="h-8 w-8" /> },
  Firebase: { color: "#FFCA28", icon: <Terminal className="h-8 w-8" /> },
}

// Get top technologies to display
const getTopTechnologies = (data: SkillsData) => {
  const allSkills: string[] = []
  data.categories.forEach((category) => {
    category.skills.forEach((skill) => {
      if (!allSkills.includes(skill)) {
        allSkills.push(skill)
      }
    })
  })
  // Return first 6 skills that have config
  return allSkills.filter((skill) => techConfig[skill]).slice(0, 6)
}

export default function Skills({ data }: SkillsProps) {
  const topTechnologies = getTopTechnologies(data)

  return (
    <section className="w-full max-w-[960px] mx-auto px-4 py-8">
      <motion.div
        className="glass-panel rounded-xl p-6 md:p-8 shadow-subtle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-6 text-center text-sm font-sans font-semibold uppercase tracking-widest text-muted-foreground">
          Core Technologies
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-80 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
          {topTechnologies.map((tech, index) => {
            const config = techConfig[tech] || { color: "#888888", icon: <Code className="h-8 w-8" /> }

            return (
              <motion.div
                key={tech}
                className="flex flex-col items-center gap-2 group cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div
                  className="transition-transform group-hover:scale-110"
                  style={{ color: config.color }}
                >
                  {config.icon}
                </div>
                <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech}
                </span>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
