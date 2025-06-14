"use client"

interface LoadingAnimationProps {
  size?: "sm" | "md" | "lg"
  color?: string
}

export function LoadingAnimation({ size = "md", color = "primary" }: LoadingAnimationProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  return (
    <div className="flex items-center justify-center">
      <div className={`${sizeClasses[size]} animate-spin`}>
        <div className={`w-full h-full border-2 border-${color}/20 border-t-${color} rounded-full`}></div>
      </div>
    </div>
  )
}
