"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm">
              Open to Internships & Full-time Opportunities
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Hi, I&apos;m{" "}
            <span className="text-primary">Anshu</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
            Building intelligent systems for real-world decisions
          </p>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            Passionate about building scalable software systems and solving complex, real-world problems. 
            Focused on engineering reliable, end-to-end solutions using modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => scrollToSection("#projects")}
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <a href="/Resume/Anshu_BSc_CS_2023-26.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
              <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>

          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-6">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              asChild
            >
              <a
                href="https://github.com/Anshu-AK-beep"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              asChild
            >
              <a
                href="https://linkedin.com/in/anshu-ak-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              asChild
            >
              <a
                href="mailto:a69448190@gmail.com.com"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <button
              onClick={() => scrollToSection("#about")}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Scroll to about section"
            >
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}