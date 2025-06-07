import { Code, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import type { FooterData } from "@/lib/types"

interface FooterProps {
  data: FooterData
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Code className="h-6 w-6" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">{data.copyright}</p>
        </div>
        <div className="flex gap-4">
          <Link
            href={data.githubUrl}
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href={data.linkedinUrl}
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href={`mailto:${data.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
