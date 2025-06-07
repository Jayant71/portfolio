import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, FileText, Code, Beaker, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">Portfolio</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#research" className="transition-colors hover:text-foreground/80">
                Research
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" size="sm" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl lg:leading-[1.1]">
              Hi, I'm Alex Johnson
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Full-Stack Developer & Research Engineer specializing in cutting-edge technologies, machine learning, and
              innovative software solutions.
            </p>
            <div className="flex gap-4 mt-4">
              <Button asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
            </div>
            <div className="flex gap-4 mt-6">
              <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:alex@example.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">About Me</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              I'm a passionate developer with over 5 years of experience in software development and research. My work
              focuses on bridging the gap between theoretical research and practical applications, particularly in areas
              of artificial intelligence, distributed systems, and emerging technologies.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Beaker className="h-12 w-12" />
                <div className="space-y-2">
                  <h3 className="font-bold">Research & Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Exploring cutting-edge technologies and contributing to open-source research projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Code className="h-12 w-12" />
                <div className="space-y-2">
                  <h3 className="font-bold">Full-Stack Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Building scalable applications with modern frameworks and cloud technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Lightbulb className="h-12 w-12" />
                <div className="space-y-2">
                  <h3 className="font-bold">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Turning complex problems into elegant solutions through creative thinking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50">
          <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Skills & Technologies</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              A comprehensive toolkit for modern development and research.
            </p>
          </div>
          <div className="mx-auto max-w-[980px] space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "JavaScript", "TypeScript", "Go", "Rust", "C++", "Java", "R"].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "FastAPI", "TensorFlow", "PyTorch", "Docker", "Kubernetes"].map(
                  (skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ),
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Research Areas</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Machine Learning",
                  "Computer Vision",
                  "NLP",
                  "Distributed Systems",
                  "Blockchain",
                  "Quantum Computing",
                ].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Featured Projects</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              A selection of projects that showcase my development and research capabilities.
            </p>
          </div>
          <div className="mx-auto grid max-w-[980px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="AI Research Platform"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">AI Research Platform</CardTitle>
                <CardDescription className="mb-4">
                  A comprehensive platform for machine learning researchers to collaborate, experiment, and deploy
                  models at scale.
                </CardDescription>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TensorFlow
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Docker
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://demo.com">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Distributed Computing Framework"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Distributed Computing Framework</CardTitle>
                <CardDescription className="mb-4">
                  High-performance distributed computing framework for processing large-scale datasets across multiple
                  nodes.
                </CardDescription>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Go
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Kubernetes
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    gRPC
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://docs.com">
                      <FileText className="mr-2 h-4 w-4" />
                      Docs
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blockchain Analytics Tool"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Blockchain Analytics Tool</CardTitle>
                <CardDescription className="mb-4">
                  Real-time blockchain transaction analysis and visualization tool with advanced pattern recognition.
                </CardDescription>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Web3
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://app.com">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live App
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50">
          <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Research & Publications</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Contributing to the advancement of computer science through research and publications.
            </p>
          </div>
          <div className="mx-auto max-w-[980px] space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">
                      "Efficient Distributed Machine Learning with Federated Optimization"
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      International Conference on Machine Learning (ICML) 2024
                    </p>
                    <p className="text-sm text-muted-foreground">
                      A novel approach to federated learning that reduces communication overhead by 40% while
                      maintaining model accuracy.
                    </p>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://arxiv.org">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Paper
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">
                      "Quantum-Inspired Algorithms for Classical Optimization Problems"
                    </h3>
                    <p className="text-muted-foreground mb-2">Nature Quantum Information 2023</p>
                    <p className="text-sm text-muted-foreground">
                      Exploring how quantum computing principles can enhance classical optimization algorithms for
                      real-world applications.
                    </p>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://nature.com">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Paper
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">
                      "Scalable Graph Neural Networks for Large-Scale Social Network Analysis"
                    </h3>
                    <p className="text-muted-foreground mb-2">ACM SIGKDD Conference 2023</p>
                    <p className="text-sm text-muted-foreground">
                      A framework for analyzing billion-node social networks using distributed graph neural networks.
                    </p>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://dl.acm.org">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Paper
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Get In Touch</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Interested in collaboration, research opportunities, or just want to chat about technology? I'd love to
              hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" asChild>
                <Link href="mailto:alex@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://linkedin.com">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Code className="h-6 w-6" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with Next.js and Tailwind CSS. © {new Date().getFullYear()} Alex Johnson.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:alex@example.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
