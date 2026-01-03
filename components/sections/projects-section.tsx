"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "KrishiSaathi – AI-Powered Smart Farming Assistant",
    description: "An AI-powered smart farming platform that delivers crop yield predictions, weather-based insights, and intelligent irrigation and fertilization recommendations with multilingual and voice support for Indian farmers.",
    image: "/projects/krishi-saathi-cover.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "AI/ML", "OpenWeather API", "Clerk Auth"],
    github: "https://github.com/Anshu-AK-beep/KrishiSaathi",
    live: "https://krishi-saathi-green.vercel.app/",
    featured: true
  },
  {
    title: "Agentic Trading System",
    description: "A multi-agent AI trading system that analyzes markets, manages risk, and simulates trades using real-time data and technical indicators.",
    image: "/projects/agentic_trading_1.png",
    tags: ["Python", "Multi-Agent Systems", "Streamlit", "Finance", "Algorithmic Trading"],
    github: "https://github.com/Anshu-AK-beep/agentic-trading-system",
    live: "https://agentic-trading-system-007.streamlit.app/",
    featured: true
  },
  {
    title: "Disaster Relief Resource Allocation System",
    description: "An AI-powered decision-support system for disaster response that prioritizes affected locations, optimizes delivery routes using graph algorithms, and intelligently allocates resources with automatic air-drop detection for unreachable areas.",
    image: "/projects/disaster_relief_1.png",
    tags: ["Python", "Streamlit", "Graph Algorithms", "Dijkstra’s Algorithm", "AI Priority Scoring", "Data Visualization"],
    github: "https://github.com/Anshu-AK-beep/disaster-relief-system",
    live: "https://disaster-relief-system-007.streamlit.app/",
    featured: false
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="p-0">
                {/* Project Image */}
                <div className="relative h-48 w-full bg-muted rounded-t-lg overflow-hidden">
                  {/* Placeholder - replace with actual images */}
                  <div className="relative h-48 w-full bg-muted rounded-t-lg overflow-hidden">
                    <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {project.featured && (
                    <Badge className="absolute top-3 right-3">
                    Featured
                    </Badge>
                  )}
                </div>
              </div>
              </CardHeader>

              <CardContent className="flex-1 pt-6">
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                {project.live && (
                  <Button
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <a
              href="https://github.com/Anshu-AK-beep"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}