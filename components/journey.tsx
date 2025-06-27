"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, BookOpen, MapPin, Calendar, Trophy } from "lucide-react"
import type { JourneyData } from "@/lib/types"

interface JourneyProps {
    data: JourneyData
}

export default function Journey({ data }: JourneyProps) {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "graduation-cap":
                return <GraduationCap className="h-6 w-6" />
            case "briefcase":
                return <Briefcase className="h-6 w-6" />
            case "book-open":
                return <BookOpen className="h-6 w-6" />
            default:
                return <Briefcase className="h-6 w-6" />
        }
    }

    const getGradientColor = (type: string) => {
        switch (type) {
            case "internship":
                return "from-blue-500 to-purple-600"
            case "education":
                return "from-green-500 to-teal-600"
            case "project":
                return "from-orange-500 to-red-600"
            default:
                return "from-blue-500 to-purple-600"
        }
    }

    return (
        <section id="journey" className="container space-y-6 py-8 md:py-12 lg:py-24">
            <motion.div
                className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">{data.title}</h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">{data.description}</p>
            </motion.div>

            <div className="mx-auto max-w-4xl">
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block" />

                    <div className="space-y-12">
                        {data.steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                className="relative"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-background border-4 border-primary z-10 hidden md:block" />

                                {/* Content card */}
                                <div className={`md:ml-20 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-20'}`}>
                                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-2 hover:border-primary/50">
                                        <CardContent className="p-0">
                                            {/* Header with gradient */}
                                            <div className={`bg-gradient-to-r ${getGradientColor(step.type)} p-6 text-white`}>
                                                <div className="flex items-start justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                                            {getIcon(step.icon)}
                                                        </div>
                                                        <div>
                                                            <h3 className="text-xl font-bold">{step.role}</h3>
                                                            <p className="text-white/90 font-medium">{step.company}</p>
                                                        </div>
                                                    </div>
                                                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                                                        {step.type.charAt(0).toUpperCase() + step.type.slice(1)}
                                                    </Badge>
                                                </div>

                                                <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/90">
                                                    <div className="flex items-center space-x-1">
                                                        <Calendar className="h-4 w-4" />
                                                        <span>{step.duration}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <MapPin className="h-4 w-4" />
                                                        <span>{step.location}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 space-y-6">
                                                <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                                                {/* Achievements */}
                                                <div>
                                                    <div className="flex items-center space-x-2 mb-3">
                                                        <Trophy className="h-5 w-5 text-yellow-500" />
                                                        <h4 className="font-semibold">Key Achievements</h4>
                                                    </div>
                                                    <ul className="space-y-2">
                                                        {step.achievements.map((achievement, achievementIndex) => (
                                                            <motion.li
                                                                key={achievementIndex}
                                                                className="flex items-start space-x-2 text-sm"
                                                                initial={{ opacity: 0, x: -20 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 0.3, delay: achievementIndex * 0.1 }}
                                                            >
                                                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                                <span className="text-muted-foreground">{achievement}</span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Technologies */}
                                                <div>
                                                    <h4 className="font-semibold mb-3">Technologies & Skills</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {step.technologies.map((tech) => (
                                                            <motion.div
                                                                key={tech}
                                                                whileHover={{ scale: 1.05 }}
                                                                whileTap={{ scale: 0.95 }}
                                                            >
                                                                <Badge variant="outline" className="transition-colors hover:bg-primary hover:text-primary-foreground">
                                                                    {tech}
                                                                </Badge>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}