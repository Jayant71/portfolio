"use client"

import { useEffect, useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Journey from "@/components/journey"
import Projects from "@/components/projects"
import Research from "@/components/research"
import Footer from "@/components/footer"
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
        setTimeout(() => setLoading(false), 800)
      }
    }

    loadData()
  }, [])

  if (loading || !portfolioData) {
    return <LoadingScreen />
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="portfolio-theme">
      {/* Keep the cursor effects as requested */}
      <CursorEffects />

      <div className="relative min-h-screen bg-background">
        {/* Main content */}
        <div className="relative z-10">
          <Header />

          {/* Layout container - centered content */}
          <div className="flex flex-col items-center pt-24 w-full">
            <main>
              <Hero data={portfolioData.hero} />
              <Skills data={portfolioData.skills} />
              <Journey data={portfolioData.journey} />
              <Projects data={portfolioData.projects} />
              <Research data={portfolioData.research} />
            </main>
            <Footer data={portfolioData.footer} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
