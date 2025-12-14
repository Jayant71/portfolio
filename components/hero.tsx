"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
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
    <section className="w-full max-w-[960px] mx-auto px-4 py-12 md:py-20 pt-28" id="about">
      <div className="flex flex-col gap-10 md:flex-row md:items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-sans text-primary text-xs tracking-wider uppercase font-semibold">
              AI Software Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight tracking-tight">
              Building{" "}
              <span className="text-primary">Intelligent</span>{" "}
              Interfaces & AI Agents
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-md leading-relaxed font-sans">
              Crafting scalable software architectures and researching generative AI to bridge the gap between human intent and machine execution.
            </p>
          </motion.div>

          <motion.div
            className="flex gap-4 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              asChild
              className="rounded-full bg-primary px-6 py-3 text-base font-bold text-primary-foreground hover:bg-primary/90 transition-colors shadow-subtle"
            >
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border border-border bg-transparent px-6 py-3 text-base font-bold hover:bg-card hover:border-primary/50 transition-colors shadow-subtle"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
        </div>

        {/* Right Content - Code Editor */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative w-full rounded-xl bg-[#282828] p-4 shadow-medium border border-border overflow-hidden">
            {/* Window Controls */}
            <div className="flex gap-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>

            {/* Code Content */}
            <div className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto text-gray-300">
              <div className="text-gray-500">// Importing Intelligence...</div>
              <div>
                <span className="text-orange-400">const</span>{" "}
                <span className="text-cyan-400">engineer</span> = {"{"}
              </div>
              <div className="pl-4">
                <span className="text-orange-300">name</span>:{" "}
                <span className="text-green-400">'Jayant Patel'</span>,
              </div>
              <div className="pl-4">
                <span className="text-orange-300">skills</span>: [
                <span className="text-green-400">'React'</span>,{" "}
                <span className="text-green-400">'TypeScript'</span>,{" "}
                <span className="text-green-400">'PyTorch'</span>],
              </div>
              <div className="pl-4">
                <span className="text-orange-300">passion</span>:{" "}
                <span className="text-green-400">'Generative AI'</span>,
              </div>
              <div className="pl-4">
                <span className="text-orange-300">build</span>: (){" "}
                <span className="text-orange-400">=&gt;</span> {"{"}
              </div>
              <div className="pl-8">
                <span className="text-orange-400">return</span>{" "}
                <span className="text-yellow-300">AwesomeUI</span>.
                <span className="text-cyan-400">create</span>(
                <span className="text-green-400">'NextLevel'</span>);
              </div>
              <div className="pl-4">{"}"}</div>
              <div>{"}"};</div>
              <div className="mt-2 text-gray-500 animate-pulse">_</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
