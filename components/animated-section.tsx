"use client"

import type React from "react"

import { useScrollAnimation } from "@/lib/animations"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn"
  delay?: number
  duration?: number
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
  duration = 600,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration} ease-out`

    if (!isVisible) {
      switch (animation) {
        case "fadeInUp":
          return `${baseClasses} opacity-0 translate-y-8`
        case "fadeInLeft":
          return `${baseClasses} opacity-0 -translate-x-8`
        case "fadeInRight":
          return `${baseClasses} opacity-0 translate-x-8`
        case "scaleIn":
          return `${baseClasses} opacity-0 scale-95`
        default:
          return `${baseClasses} opacity-0 translate-y-8`
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
