"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3"
    ]
  },
  {
    category: "Backend Development",
    skills: [
      "Node.js",
      "Python",
      "System Logic",
      "MySQL"
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "VS Code",
      "Vercel"
    ]
  },
  {
    category: "Core Concepts",
    skills: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "System Design",
      "Database Design",
      "Problem Solving"
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
            Always learning and exploring new technologies to stay current in the ever-evolving tech landscape
          </p>
        </div>
      </div>
    </section>
  )
}