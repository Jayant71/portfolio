"use client"

import { motion } from "framer-motion"
import { ExternalLink, FileText, Beaker } from "lucide-react"
import Link from "next/link"
import type { ResearchData } from "@/lib/types"

interface ResearchProps {
  data: ResearchData
}

export default function Research({ data }: ResearchProps) {
  return (
    <section className="w-full max-w-[960px] mx-auto px-4 py-16" id="research">
      <motion.h2
        className="text-2xl md:text-3xl font-serif font-bold mb-8 flex items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Beaker className="h-6 w-6 text-primary" />
        Research & Publications
      </motion.h2>

      <div className="grid grid-cols-1 gap-4">
        {data.publications.map((publication, index) => (
          <motion.div
            key={publication.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={publication.paperUrl || "#"}
              target={publication.paperUrl && publication.paperUrl !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-xl hover:border-primary/50 transition-all group flex items-start gap-4 shadow-subtle block"
            >
              {/* Icon */}
              <div className="bg-muted p-3 rounded-lg text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors shadow-sm flex-shrink-0">
                <FileText className="h-5 w-5" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-serif font-bold group-hover:text-primary transition-colors">
                  {publication.title}
                </h3>
                <p className="text-muted-foreground text-sm font-sans mt-1 mb-2">
                  {publication.conference}
                </p>
                {publication.description && (
                  <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                    {publication.description}
                  </p>
                )}
              </div>

              {/* External link indicator */}
              {publication.paperUrl && publication.paperUrl !== "#" && (
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-4 w-4 text-primary" />
                </div>
              )}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
