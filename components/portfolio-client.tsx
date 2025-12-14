"use client"

import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Journey from "@/components/journey"
import Projects from "@/components/projects"
import Research from "@/components/research"
import Footer from "@/components/footer"
import CursorEffects from "@/components/cursor-effects"
import type { PortfolioData } from "@/lib/types"

interface PortfolioClientProps {
    data: PortfolioData
}

export default function PortfolioClient({ data }: PortfolioClientProps) {
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
                            <Hero data={data.hero} />
                            <Skills data={data.skills} />
                            <Journey data={data.journey} />
                            <Projects data={data.projects} />
                            <Research data={data.research} />
                        </main>
                        <Footer data={data.footer} />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}
