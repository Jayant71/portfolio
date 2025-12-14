import { getPortfolioData } from "@/lib/cms"
import PortfolioClient from "@/components/portfolio-client"
import type { Metadata } from "next"

// This makes the page static and pre-rendered at build time (SSG)
// Great for SEO as search engines see the full content
export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Jayant Patel | Frontend Engineer & AI Researcher",
  description: "Building Intelligent Interfaces & AI Agents. Frontend Engineer and AI Researcher specializing in React, TypeScript, PyTorch, and Machine Learning.",
  keywords: [
    "Jayant Patel",
    "Frontend Engineer",
    "AI Researcher",
    "React Developer",
    "TypeScript",
    "PyTorch",
    "Machine Learning",
    "Computer Vision",
    "Next.js",
    "Portfolio"
  ],
  authors: [{ name: "Jayant Patel", url: "https://github.com/Jayant71" }],
  creator: "Jayant Patel",
  openGraph: {
    title: "Jayant Patel | Frontend Engineer & AI Researcher",
    description: "Building Intelligent Interfaces & AI Agents. Specializing in React, TypeScript, and Machine Learning.",
    type: "website",
    locale: "en_US",
    siteName: "Jayant Patel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayant Patel | Frontend Engineer & AI Researcher",
    description: "Building Intelligent Interfaces & AI Agents.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// Generate JSON-LD structured data for better SEO
function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jayant Patel",
    url: "https://jayantpatel.dev",
    jobTitle: "Frontend Engineer & AI Researcher",
    description: "Building Intelligent Interfaces & AI Agents",
    email: "jayant.07124@gmail.com",
    sameAs: [
      "https://github.com/Jayant71",
      "https://linkedin.com/in/jayantpatel71"
    ],
    knowsAbout: [
      "React",
      "TypeScript",
      "Next.js",
      "PyTorch",
      "Machine Learning",
      "Computer Vision",
      "AI Agents"
    ]
  }
}

export default function Home() {
  // Fetch data on the server - this runs at build time
  const portfolioData = getPortfolioData()

  return (
    <>
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd()) }}
      />

      {/* Pass data to client component */}
      <PortfolioClient data={portfolioData} />
    </>
  )
}
