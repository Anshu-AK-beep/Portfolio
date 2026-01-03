"use client"

import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/Anshu-AK-beep"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/anshu-ak-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:a69448190@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <Separator className="w-24" />

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Made with dedication by Anshu
            </p>
            <p className="text-xs text-muted-foreground">
              © {currentYear} Anshu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}