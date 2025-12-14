"use client"

import { motion } from "framer-motion"
import { Beaker, Code, Lightbulb } from "lucide-react"
import type { AboutData } from "@/lib/types"

interface AboutProps {
  data: AboutData
}

export default function About({ data }: AboutProps) {
  // In the new design, the About section is integrated into the Hero section
  // This component is kept for backwards compatibility but returns null
  return null
}
