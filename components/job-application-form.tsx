"use client"

import type React from "react"

import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"
import { CheckCircle, AlertCircle, Upload } from "lucide-react"

interface JobApplicationFormProps {
  formId: string
  jobTitle: string
}

export function JobApplicationForm({ formId, jobTitle }: JobApplicationFormProps) {
  const { t } = useLanguage()
  const [state, handleSubmit] = useForm(formId)
  const [fileName, setFileName] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name)
    } else {
      setFileName("")
    }
  }

  if (state.succeeded) {
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="job" value={jobTitle} />

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
          <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
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
          <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
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
        <ValidationError prefix="Email" field="email" errors={state.errors} />
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
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
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
        <ValidationError prefix="Resume" field="resume" errors={state.errors} />
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
        <ValidationError prefix="Cover Letter" field="coverLetter" errors={state.errors} />
      </div>

      {state.errors && state.errors.length > 0 && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-red-800 font-medium">There was a problem submitting your application</p>
            <p className="text-red-600 text-sm">Please check the fields above and try again.</p>
          </div>
        </div>
      )}

      <Button type="submit" className="w-full py-3 text-lg" disabled={state.submitting}>
        {state.submitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  )
}
