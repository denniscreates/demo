"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Upload } from "lucide-react"

interface JobApplicationFormHTMLProps {
  jobTitle: string
}

export function JobApplicationFormHTML({ jobTitle }: JobApplicationFormHTMLProps) {
  const [fileName, setFileName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name)
    } else {
      setFileName("")
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Let the form submit naturally to Formspree
    // We'll show a success message after a delay
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for applying for the {jobTitle} position. We'll review your application and contact you soon.
        </p>
        <Button onClick={() => window.location.reload()}>Back to Jobs</Button>
      </div>
    )
  }

  return (
    <form
      action="https://formspree.io/f/xjkrwkgw"
      method="POST"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="job" value={jobTitle} />
      <input type="hidden" name="_subject" value={`Job Application: ${jobTitle}`} />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="text-sm font-medium mb-2 block">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="text-sm font-medium mb-2 block">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium mb-2 block">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium mb-2 block">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          required
        />
      </div>

      <div>
        <label htmlFor="resume" className="text-sm font-medium mb-2 block">
          Resume/CV
        </label>
        <div className="relative">
          <input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
            required
          />
          <div className="flex items-center justify-between px-4 py-3 border border-input rounded-lg text-muted-foreground">
            <span className="truncate">{fileName || "Upload your resume (PDF, DOC, DOCX)"}</span>
            <Upload className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="coverLetter" className="text-sm font-medium mb-2 block">
          Cover Letter
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          rows={5}
          className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
          placeholder="Tell us why you're interested in this position and what makes you a good fit."
          required
        />
      </div>

      <Button type="submit" className="w-full py-3 text-lg">
        Submit Application
      </Button>
    </form>
  )
}
