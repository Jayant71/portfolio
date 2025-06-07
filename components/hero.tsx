"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FileText, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import type { HeroData } from "@/lib/types"

interface HeroProps {
  data: HeroData
}

export default function Hero({ data }: HeroProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="container relative z-10 space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <motion.h1
          className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {data.title}
        </motion.h1>
        <motion.p
          className="max-w-[750px] text-lg text-muted-foreground sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {data.subtitle}
        </motion.p>
        <motion.div
          className="flex gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild>
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={data.resumeUrl} target="_blank">
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </Link>
          </Button>
        </motion.div>
        <motion.div
          className="flex gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {data.socialLinks.map((link) => (
            <Link
              key={link.platform}
              href={link.url}
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.platform === "github" && <Github className="h-5 w-5" />}
              {link.platform === "linkedin" && <Linkedin className="h-5 w-5" />}
              {link.platform === "email" && <Mail className="h-5 w-5" />}
              <span className="sr-only">{link.platform}</span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
