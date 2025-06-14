"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/lib/animations"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  hoverEffect?: boolean
}

export function AnimatedCard({ children, className = "", delay = 0, hoverEffect = true }: AnimatedCardProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  const hoverClasses = hoverEffect ? "hover:scale-105 hover:shadow-xl hover:-translate-y-2" : ""

  return (
    <Card
      ref={ref}
      className={`
        transition-all duration-500 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${hoverClasses}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Card>
  )
}
