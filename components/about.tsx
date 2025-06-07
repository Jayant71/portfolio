"use client"

import { motion } from "framer-motion"
import { Beaker, Code, Lightbulb } from "lucide-react"
import type { AboutData } from "@/lib/types"

interface AboutProps {
  data: AboutData
}

export default function About({ data }: AboutProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="container space-y-6 py-8 md:py-12 lg:py-24">
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

      <motion.div
        className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {data.features.map((feature) => (
          <motion.div
            key={feature.title}
            className="relative overflow-hidden rounded-lg border bg-background p-2"
            variants={item}
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              {feature.icon === "beaker" && <Beaker className="h-12 w-12" />}
              {feature.icon === "code" && <Code className="h-12 w-12" />}
              {feature.icon === "lightbulb" && <Lightbulb className="h-12 w-12" />}
              <div className="space-y-2">
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
