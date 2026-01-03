"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code2, Briefcase, Award } from "lucide-react"
import Image from "next/image"

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.Sc. (H) Computer Science",
    detail: "Expected Graduation: 2026 • CGPA: 7.23/10"
  },
  {
    icon: Code2,
    title: "System & Data-Driven Projects",
    description: "Agentic Trading System",
    detail: "Disaster Relief Resource Allocation System"
  },
  {
    icon: Briefcase,
    title: "Academic Experience",
    description: "Software systems development",
    detail: "Full-stack & data-oriented work"
  },
  {
    icon: Award,
    title: "Hackathon",
    description: "Smart India Hackathon (SIH)",
    detail: "Team Leader & Team Member • Internal Hackathon"
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A quick overview of my journey and what drives me
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image/Avatar Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform rotate-6"></div>
              <div className="relative w-full h-full bg-muted rounded-2xl overflow-hidden border-2 border-border">
                {/* Replace with your actual image */}
                <Image
                src="/Anshu_image.png"   // place image in /public folder
                alt="Anshu"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                 style={{ objectPosition: "center 18%" }}
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="text-2xl font-semibold">
              Turning Ideas into Digital Reality
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I design and build well-structured software systems that solve complex, real-world problems.
              My interest in technology began with understanding how applications work behind the scenes
              and gradually evolved into a focus on building reliable, impactful software through
              thoughtful engineering.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I have a strong foundation in data structures, algorithms, and software engineering principles,
              which I apply while working on system-oriented and decision-focused projects.
              I enjoy working across the stack to turn ideas into practical,
              end-to-end solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I’ve participated in my college internal hackathon under Smart India Hackathon (SIH) as both a team member and
              team leader, gaining experience in collaboration and real-world problem solving.
            </p>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}