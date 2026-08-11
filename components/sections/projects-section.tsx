"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { FlagshipProjectCard } from "@/components/sections/flagship-project-card"
import { EvalOpsDiagram, ICDDiagram } from "@/components/sections/architecture-diagrams"

const secondaryProjects = [
  {
    title: "KrishiSaathi – AI-Powered Smart Farming Assistant",
    description: "An AI-powered smart farming platform that delivers crop yield predictions, weather-based insights, and intelligent irrigation and fertilization recommendations with multilingual and voice support for Indian farmers.",
    image: "/projects/krishi-saathi-cover.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "AI/ML", "OpenWeather API", "Clerk Auth"],
    github: "https://github.com/Anshu-AK-beep/KrishiSaathi",
    live: "https://krishi-saathi-green.vercel.app/",
  },
  {
    title: "ThinkMate — AI Socratic Mentor",
    description: "A full-stack AI-powered learning platform that uses the Socratic method to build genuine critical thinking in students. Instead of giving direct answers, ThinkMate guides learners through adaptive questioning, detects misconceptions in real-time, and tracks reasoning improvement using spaced repetition based on the Ebbinghaus forgetting curve.",
    image: "/projects/thinkmate_1.png",
    tags: ["React", "TypeScript", "Node.js", "Express", "Groq AI", "Supabase", "AWS App Runner", "Tailwind CSS", "Vite"],
    github: "https://github.com/Anshu-AK-beep/thinkmate",
    live: "https://thinkmate-self.vercel.app",
  },
  {
    title: "Agentic Trading System",
    description: "A multi-agent AI trading system that analyzes markets, manages risk, and simulates trades using real-time data and technical indicators.",
    image: "/projects/agentic_trading_1.png",
    tags: ["Python", "Multi-Agent Systems", "Streamlit", "Finance", "Algorithmic Trading"],
    github: "https://github.com/Anshu-AK-beep/agentic-trading-system",
    live: "https://agentic-trading-system-007.streamlit.app/",
  },
  {
    title: "Disaster Relief Resource Allocation System",
    description: "An AI-powered decision-support system for disaster response that prioritizes affected locations, optimizes delivery routes using graph algorithms, and intelligently allocates resources with automatic air-drop detection for unreachable areas.",
    image: "/projects/disaster_relief_1.png",
    tags: ["Python", "Streamlit", "Graph Algorithms", "Dijkstra's Algorithm", "AI Priority Scoring", "Data Visualization"],
    github: "https://github.com/Anshu-AK-beep/disaster-relief-system",
    live: "https://disaster-relief-system-007.streamlit.app/",
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
            Systems I&apos;ve designed, built, and rigorously tested — not just shipped
          </p>
        </div>

        {/* Flagship Projects */}
        <div className="space-y-8 mb-16">
          <FlagshipProjectCard
            eyebrow="Flagship Project"
            title="EvalOps — LLM Evaluation Infrastructure"
            pitch="An async pipeline that scores LLM outputs across five quality dimensions, catches production quality regressions with real statistics, and gates CI/CD deployments — because traditional monitoring catches server errors, not a chatbot that quietly got worse."
            metrics={[
              { value: "87.5%", label: "judge/human agreement on 40-example calibration set" },
              { value: "100%", label: "agreement on unambiguous cases" },
              { value: "5", label: "quality dimensions, scored independently" },
              { value: "6", label: "containerized services, one-command self-host" },
            ]}
            diagram={<EvalOpsDiagram />}
            tags={[
              "FastAPI", "Celery", "Redis", "PostgreSQL", "pgvector", "pg_cron",
              "BRIN Indexing", "Docker", "LLM-as-Judge", "GitHub Actions", "React"
            ]}
            github="https://github.com/Anshu-AK-beep/evalops"
            readmeNote="No hosted live demo — the background workers that make EvalOps useful in production also make an always-on demo impractical for a portfolio project. The README walks through a one-command self-host with docker compose up."
            engineeringNoteHeading="Found mid-build: the judge doesn't always return what you ask for"
            engineeringNoteBody="Partway through the calibration run, the judge model started returning JSON strings where the schema expected numbers — strict validation broke on it. Fixed by widening the schema and coercing types on receipt, then re-ran calibration to confirm nothing else broke. Safety is modeled as a separate hard gate rather than an averaged score for the same reason: a 4.8/5 average can hide one violation that actually matters."
          />

          <FlagshipProjectCard
            eyebrow="Flagship Project"
            title="Intelligent Candidate Discovery"
            pitch="A retrieval-augmented pipeline built for Redrob's AI Hackathon that ranks 100,000 candidate profiles against a job description in 28 seconds, on CPU — combining semantic and lexical search with an LLM re-ranking stage that explains its own reasoning."
            metrics={[
              { value: "28s", label: "to rank 100,000 profiles, CPU-only" },
              { value: "0", label: "false positives on 26 adversarial profiles" },
              { value: "5", label: "stage retrieval → fusion → scoring pipeline" },
              { value: "40/35/25", label: "LLM / rule / semantic scoring blend" },
            ]}
            diagram={<ICDDiagram />}
            tags={[
              "FAISS", "BM25", "Reciprocal Rank Fusion", "TF-IDF/SVD",
              "LLM Re-ranking", "Explainable Scoring", "Python"
            ]}
            github="https://github.com/Anshu-AK-beep/intelligent-candidate-discovery"
            engineeringNoteHeading="Validated it against profiles designed to fool it"
            engineeringNoteBody="Ranking well on real resumes doesn't prove the scorer isn't just pattern-matching keywords. So before trusting it, I planted 26 adversarial profiles — ones that mention the right keywords but fail on deal-breakers a keyword match wouldn't catch — and confirmed zero false positives before calling the pipeline done."
          />
        </div>

        {/* Secondary Projects */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-muted-foreground mb-6">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryProjects.map((project, index) => (
              <Card
                key={index}
                className="flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="p-0">
                  <div className="relative h-40 w-full bg-muted rounded-t-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                </CardHeader>

                <CardContent className="flex-1 pt-6">
                  <CardTitle className="mb-2 text-base">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
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
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.live && (
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/Anshu-AK-beep" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
