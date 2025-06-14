"use client"

import { useState, useEffect } from "react"
import { useInView } from "@/lib/use-intersection-observer"

interface CounterProps {
  start: number
  end: number
  duration: number
  suffix?: string
  prefix?: string
}

const Counter = ({ start, end, duration, suffix = "", prefix = "" }: CounterProps) => {
  const [count, setCount] = useState(start)
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      let startTime: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        setCount(Math.floor(progress * (end - start) + start))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    } else {
      setCount(start) // Reset count when out of view
    }
  }, [inView, start, end, duration])

  return (
    <div ref={ref} className="text-4xl font-bold mb-2">
      {prefix}
      {count}
      {suffix}
    </div>
  )
}

interface AnimatedStatsProps {
  cadProjects: string
  hvacWorks: string
  clientSatisfaction: string
}

export function AnimatedStats({ cadProjects, hvacWorks, clientSatisfaction }: AnimatedStatsProps) {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="transform transition-all duration-300 hover:scale-105">
            <Counter start={0} end={5000} duration={2000} suffix="+" />
            <div className="text-lg opacity-90">{cadProjects}</div>
          </div>
          <div className="transform transition-all duration-300 hover:scale-105">
            <Counter start={0} end={2000} duration={2000} suffix="+" />
            <div className="text-lg opacity-90">{hvacWorks}</div>
          </div>
          <div className="transform transition-all duration-300 hover:scale-105">
            <Counter start={0} end={100} duration={2000} suffix="%" />
            <div className="text-lg opacity-90">{clientSatisfaction}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
