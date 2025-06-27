"use client"

import { useEffect, useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Journey from "@/components/journey"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Research from "@/components/research"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ThreeBackground from "@/components/3d/three-background"
import { fetchPortfolioData } from "@/lib/cms"
import type { PortfolioData } from "@/lib/types"
import LoadingScreen from "@/components/loading-screen"
import CursorEffects from "@/components/cursor-effects"

export default function Portfolio() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPortfolioData()
        setPortfolioData(data)
      } catch (error) {
        console.error("Failed to load portfolio data:", error)
      } finally {
        // Add a small delay to ensure smooth transition
        setTimeout(() => setLoading(false), 800)
      }
    }

    loadData()
  }, [])

  if (loading || !portfolioData) {
    return <LoadingScreen />
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="portfolio-theme">
      <CursorEffects />
      <div className="relative min-h-screen bg-background">
        <div className="fixed inset-0 z-0">
          <ThreeBackground />
        </div>
        <div className="relative z-10">
          <Header />
          <main>
            <Hero data={portfolioData.hero} />
            <About data={portfolioData.about} />
            <Journey data={portfolioData.journey} />
            <Skills data={portfolioData.skills} />
            <Projects data={portfolioData.projects} />
            <Research data={portfolioData.research} />
            <Contact data={portfolioData.contact} />
          </main>
          <Footer data={portfolioData.footer} />
        </div>
      </div>
    </ThemeProvider>
  )
}
