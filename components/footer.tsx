"use client"

import { Github, Linkedin, Mail, ArrowRight, Code, MessageCircle } from "lucide-react"
import Link from "next/link"
import type { FooterData } from "@/lib/types"

interface FooterProps {
  data: FooterData
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="w-full border-t border-border bg-background mt-12" id="contact">
      <div className="max-w-[960px] mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left content */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif font-bold mb-2">
              Let's build something useful.
            </h2>
            <p className="text-muted-foreground font-sans mb-6">
              Open to opportunities in Frontend Engineering & AI.
            </p>
            <Link
              href={`mailto:${data.email}`}
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline font-sans group"
            >
              {data.email}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            <Link
              href={data.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="h-12 w-12 flex items-center justify-center rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
            >
              <Code className="h-5 w-5" />
            </Link>
            <Link
              href={data.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-12 w-12 flex items-center justify-center rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href={`mailto:${data.email}`}
              aria-label="Email"
              className="h-12 w-12 flex items-center justify-center rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground font-mono gap-4">
          <p>© {new Date().getFullYear()} Jayant Patel. All rights reserved.</p>
          <p>
            Designed with <span className="text-primary">♥</span> & Code.
          </p>
        </div>
      </div>
    </footer>
  )
}
