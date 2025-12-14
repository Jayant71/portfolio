"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, BookOpen } from "lucide-react"
import type { JourneyData } from "@/lib/types"

interface JourneyProps {
    data: JourneyData
}

export default function Journey({ data }: JourneyProps) {
    const getIcon = (iconName: string, isCurrent: boolean) => {
        const className = "h-6 w-6"
        switch (iconName) {
            case "graduation-cap":
                return <GraduationCap className={className} />
            case "briefcase":
                return <Briefcase className={className} />
            case "book-open":
                return <BookOpen className={className} />
            default:
                return <Briefcase className={className} />
        }
    }

    return (
        <section className="w-full max-w-[960px] mx-auto px-4 py-16" id="experience">
            <motion.h2
                className="text-2xl md:text-3xl font-serif font-bold mb-8 flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <Briefcase className="h-6 w-6 text-primary" />
                Experience
            </motion.h2>

            {/* Timeline */}
            <div className="relative pl-6 border-l-2 border-border ml-3">
                {data.steps.map((step, index) => {
                    const isCurrent = index === 0

                    return (
                        <motion.div
                            key={step.id}
                            className="mb-10 relative"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Timeline dot */}
                            <div
                                className={`absolute -left-[31px] top-1 h-4 w-4 rounded-full ring-4 ring-background shadow-sm ${isCurrent ? "bg-primary" : "bg-muted-foreground"
                                    }`}
                            />

                            {/* Content card */}
                            <div className="glass-panel p-6 rounded-xl hover:border-primary/30 transition-colors group cursor-default shadow-subtle">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <h3 className="text-xl font-serif font-bold group-hover:text-primary transition-colors">
                                        {step.role}
                                    </h3>
                                    <span
                                        className={`font-mono text-xs px-3 py-1 rounded-full w-fit mt-2 md:mt-0 ${isCurrent
                                                ? "text-primary bg-primary/10"
                                                : "text-muted-foreground bg-muted"
                                            }`}
                                    >
                                        {step.duration}
                                    </span>
                                </div>

                                <p className="text-muted-foreground text-sm font-sans font-medium mb-4">
                                    @ {step.company}
                                </p>

                                {/* Description or Achievements */}
                                {step.achievements && step.achievements.length > 0 ? (
                                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2 font-sans marker:text-primary">
                                        {step.achievements.slice(0, 3).map((achievement, idx) => (
                                            <li key={idx}>{achievement}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-muted-foreground text-sm font-sans">
                                        {step.description}
                                    </p>
                                )}

                                {/* Technologies */}
                                {step.technologies && step.technologies.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {step.technologies.slice(0, 5).map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="outline"
                                                className="text-xs font-mono"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                        {step.technologies.length > 5 && (
                                            <Badge variant="outline" className="text-xs font-mono">
                                                +{step.technologies.length - 5} more
                                            </Badge>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}