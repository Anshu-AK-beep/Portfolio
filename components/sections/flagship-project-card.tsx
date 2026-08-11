"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, FileText, Lightbulb } from "lucide-react"
import type { ReactNode } from "react"

interface Metric {
  value: string
  label: string
}

interface FlagshipProjectCardProps {
  eyebrow: string
  title: string
  pitch: string
  metrics: Metric[]
  diagram: ReactNode
  tags: string[]
  github: string
  readmeNote?: string
  engineeringNoteHeading: string
  engineeringNoteBody: string
}

export function FlagshipProjectCard({
  eyebrow,
  title,
  pitch,
  metrics,
  diagram,
  tags,
  github,
  readmeNote,
  engineeringNoteHeading,
  engineeringNoteBody,
}: FlagshipProjectCardProps) {
  return (
    <Card className="overflow-hidden border-primary/20">
      <CardContent className="p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <Badge variant="secondary" className="text-xs tracking-wide uppercase">
            {eyebrow}
          </Badge>
          <h3 className="text-2xl sm:text-3xl font-bold">{title}</h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">{pitch}</p>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <div key={i} className="rounded-lg border border-border bg-muted/40 px-3 py-3 text-center">
              <div className="text-lg sm:text-xl font-bold text-primary leading-tight">{m.value}</div>
              <div className="text-xs text-muted-foreground mt-1 leading-snug">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Diagram */}
        <div className="rounded-lg border border-border bg-muted/20 p-4">
          {diagram}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <Badge key={i} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Engineering note */}
        <div className="rounded-lg bg-primary/5 border border-primary/15 p-4 flex gap-3">
          <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-semibold">{engineeringNoteHeading}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{engineeringNoteBody}</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View Code
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={`${github}#readme`} target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Read the README
            </a>
          </Button>
        </div>
        {readmeNote && (
          <p className="text-xs text-muted-foreground pt-1">{readmeNote}</p>
        )}
      </CardContent>
    </Card>
  )
}
