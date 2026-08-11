"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Backend & Infrastructure",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "Celery",
      "Redis",
      "Docker",
      "GitHub Actions (CI/CD)"
    ]
  },
  {
    category: "Data & Retrieval",
    skills: [
      "PostgreSQL",
      "pgvector",
      "pg_cron & Partitioning",
      "BRIN Indexing",
      "FAISS",
      "BM25",
      "Reciprocal Rank Fusion"
    ]
  },
  {
    category: "AI / ML Engineering",
    skills: [
      "LLM-as-Judge Evaluation",
      "RAG",
      "Prompt Engineering",
      "Statistical Drift Detection",
      "Multi-Agent Systems"
    ]
  },
  {
    category: "Frontend & Core",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Data Structures & Algorithms",
      "System Design"
    ]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tools and technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Picked up mostly by building things that needed to actually work in production, not just in a notebook
          </p>
        </div>
      </div>
    </section>
  )
}