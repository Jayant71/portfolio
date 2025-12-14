"use client"

import { motion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { ContactData } from "@/lib/types"

interface ContactProps {
  data: ContactData
}

export default function Contact({ data }: ContactProps) {
  return null // Contact is now part of Footer in the new design
}
