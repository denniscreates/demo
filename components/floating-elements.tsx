"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/10 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-primary/5 rounded-full animate-float-medium"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/15 rounded-full animate-float-fast"></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-primary/8 rounded-full animate-float-slow"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary/12 rounded-full animate-float-medium"></div>
      <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-primary/6 rounded-full animate-float-fast"></div>
    </div>
  )
}
