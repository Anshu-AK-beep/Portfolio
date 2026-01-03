"use client"

import { useState } from "react"
import emailjs from '@emailjs/browser'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Send email to yourself (you receive the message)
      await emailjs.send(
        'service_scw1xvz',          // Replace with your EmailJS Service ID
        'template_irrc4ru',         // Replace with your Contact Form Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'a69448190@gmail.com'
        },
        'Z6xeaakeCljBRIq_T'           // Replace with your EmailJS Public Key
      )

      // Send auto-reply to the visitor (they receive confirmation)
      await emailjs.send(
        'service_scw1xvz',          // Same Service ID
        'template_3urizvt', // Replace with your Auto-Reply Template ID
        {
          to_name: formData.name,
          to_email: formData.email,
          from_name: 'Anshu'  // Your name
        },
        'Z6xeaakeCljBRIq_T'           // Same Public Key
      )

      console.log('Emails sent successfully')
      alert("Thank you for your message! I'll get back to you soon.")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error('Failed to send email:', error)
      alert("Failed to send message. Please try again or email me directly at a69448190@gmail.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "a69448190@gmail.com",
      href: "mailto:a69448190@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 99534 48555",
      href: "tel:+919953448555"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ghaziabad, Uttar Pradesh, India",
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Anshu-AK-beep"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/anshu-ak-dev"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:a69448190@gmail.com"
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Info Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  You can also reach me through these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
                <CardDescription>
                  Find me on these platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        asChild
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <p className="font-semibold text-lg">Available for Opportunities</p>
                  <p className="text-sm opacity-90">
                    I&apos;m currently seeking internship and full-time positions in software development. 
                    Let&apos;s discuss how I can contribute to your team!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}