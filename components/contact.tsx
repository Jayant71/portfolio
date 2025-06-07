"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Github } from "lucide-react"
import Link from "next/link"
import type { ContactData } from "@/lib/types"

interface ContactProps {
  data: ContactData
}

export default function Contact({ data }: ContactProps) {
  return (
    <section id="contact" className="container space-y-6 py-8 md:py-12 lg:py-24">
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
        className="mx-auto max-w-[980px] flex flex-col items-center justify-center space-y-8 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <Button size="lg" asChild className="min-w-[200px]">
            <Link href={`mailto:${data.email}`}>
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="min-w-[200px]">
            <Link href={data.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="min-w-[200px]">
            <Link href={data.githubUrl || "#"} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Link>
          </Button>
        </div>

        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold mb-2">Response Time</h3>
          <p className="text-muted-foreground max-w-[600px]">
            I typically respond to all inquiries within 24-48 hours. Looking forward to connecting with you!
          </p>
        </div>
      </motion.div>
    </section>
  )
}
