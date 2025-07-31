"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import type { ResearchData } from "@/lib/types"

interface ResearchProps {
  data: ResearchData
}

export default function Research({ data }: ResearchProps) {
  return (
    <section
      id="research"
      className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50 dark:bg-muted/10 rounded-lg"
    >
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

      <div className="mx-auto max-w-[980px] space-y-6">
        {data.publications.map((publication, index) => (
          <motion.div
            key={publication.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="transition-all hover:shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{publication.title}</h3>
                    <p className="text-muted-foreground mb-2">{publication.conference}</p>
                    <p className="text-sm text-muted-foreground">{publication.description}</p>
                  </div>
                  {publication.paperUrl && publication.paperUrl !== "#" && (
                    <a href={publication.paperUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="shrink-0">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Paper
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
