"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { useTheme } from "next-themes"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const isMobile = useMobile()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
  ]

  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank")
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 flex justify-center w-full">
      <header
        className={`glass-panel flex w-full max-w-[960px] items-center justify-between rounded-full px-6 py-3 shadow-subtle transition-all duration-300 ${isScrolled ? "bg-card/95 backdrop-blur-md" : "bg-card/80 backdrop-blur-sm"
          }`}
      >
        {/* Logo and Name */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-black text-sm tracking-tighter">
            JP
          </div>
          <h2 className="hidden md:block text-base font-bold tracking-tight font-sans">
            Jayant Patel
          </h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full h-9 w-9 hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
              ) : (
                <Moon className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
              )}
            </Button>
          )}

          {/* Mobile contact link */}
          <Link
            href="#contact"
            className="md:hidden text-sm font-medium hover:text-primary text-foreground"
          >
            Contact
          </Link>

          {/* Mobile menu */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-card border-border">
                <nav className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium transition-colors hover:text-primary font-serif"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="#contact"
                    className="text-lg font-medium transition-colors hover:text-primary font-serif"
                  >
                    Contact
                  </Link>
                  <Button
                    onClick={handleResumeClick}
                    className="rounded-full bg-primary text-primary-foreground font-bold mt-4"
                  >
                    Resume
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          )}

          {/* Resume button (desktop) */}
          <Button
            onClick={handleResumeClick}
            className="hidden md:flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
          >
            Resume
          </Button>
        </div>
      </header>
    </div>
  )
}
