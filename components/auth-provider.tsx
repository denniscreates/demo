"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  email: string
  name: string
  avatar?: string
  provider: "google" | "apple" | "facebook" | "email"
}

interface Quote {
  id: string
  serviceType: string
  projectDetails: string
  status: "pending" | "reviewed" | "approved" | "completed"
  submittedAt: string
  estimatedCost?: string
  notes?: string
}

interface AuthContextType {
  user: User | null
  quotes: Quote[]
  isLoading: boolean
  login: (
    provider: "google" | "apple" | "facebook" | "email",
    credentials?: { email: string; password: string },
  ) => Promise<void>
  signup: (credentials: { email: string; password: string; name: string }) => Promise<void>
  logout: () => void
  addQuote: (quote: Omit<Quote, "id" | "submittedAt" | "status">) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    try {
      const savedUser = localStorage.getItem("termo-glob-user")
      if (savedUser) {
        const userData = JSON.parse(savedUser)
        setUser(userData)

        // Load user's quotes
        const savedQuotes = localStorage.getItem(`quotes_${userData.id}`)
        if (savedQuotes) {
          setQuotes(JSON.parse(savedQuotes))
        }
      }
    } catch (error) {
      console.error("Error loading user data:", error)
      // Clear corrupted data
      localStorage.removeItem("termo-glob-user")
    }

    setIsLoading(false)
  }, [])

  const login = async (
    provider: "google" | "apple" | "facebook" | "email",
    credentials?: { email: string; password: string },
  ) => {
    setIsLoading(true)

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      let userData: User

      switch (provider) {
        case "google":
          userData = {
            id: "google_" + Date.now(),
            email: "john.doe@gmail.com",
            name: "John Doe",
            avatar: "/placeholder.svg?height=40&width=40",
            provider: "google",
          }
          break

        case "apple":
          userData = {
            id: "apple_" + Date.now(),
            email: "john.doe@icloud.com",
            name: "John Doe",
            provider: "apple",
          }
          break

        case "facebook":
          userData = {
            id: "facebook_" + Date.now(),
            email: "john.doe@facebook.com",
            name: "John Doe",
            avatar: "/placeholder.svg?height=40&width=40",
            provider: "facebook",
          }
          break

        case "email":
          if (!credentials) throw new Error("Email and password required")

          // Simple validation for demo
          if (credentials.email.length < 5) {
            throw new Error("Invalid email address")
          }
          if (credentials.password.length < 6) {
            throw new Error("Password must be at least 6 characters")
          }

          userData = {
            id: "email_" + Date.now(),
            email: credentials.email,
            name: credentials.email.split("@")[0].replace(/[^a-zA-Z]/g, " "),
            provider: "email",
          }
          break

        default:
          throw new Error("Invalid provider")
      }

      setUser(userData)
      localStorage.setItem("termo-glob-user", JSON.stringify(userData))

      // Load user's quotes
      const userQuotes = JSON.parse(localStorage.getItem(`quotes_${userData.id}`) || "[]")
      setQuotes(userQuotes)

      console.log("Login successful:", userData)
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (credentials: { email: string; password: string; name: string }) => {
    setIsLoading(true)

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simple validation for demo
      if (credentials.email.length < 5) {
        throw new Error("Invalid email address")
      }
      if (credentials.password.length < 6) {
        throw new Error("Password must be at least 6 characters")
      }
      if (credentials.name.length < 2) {
        throw new Error("Name must be at least 2 characters")
      }

      const userData: User = {
        id: "email_" + Date.now(),
        email: credentials.email,
        name: credentials.name,
        provider: "email",
      }

      setUser(userData)
      localStorage.setItem("termo-glob-user", JSON.stringify(userData))
      setQuotes([])

      console.log("Signup successful:", userData)
    } catch (error) {
      console.error("Signup failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    console.log("Logging out user:", user?.email)
    setUser(null)
    setQuotes([])
    localStorage.removeItem("termo-glob-user")
    // Don't remove quotes, keep them for when user logs back in
  }

  const addQuote = (quoteData: Omit<Quote, "id" | "submittedAt" | "status">) => {
    if (!user) {
      console.log("No user logged in, cannot add quote")
      return
    }

    const newQuote: Quote = {
      ...quoteData,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
      status: "pending",
    }

    const updatedQuotes = [...quotes, newQuote]
    setQuotes(updatedQuotes)
    localStorage.setItem(`quotes_${user.id}`, JSON.stringify(updatedQuotes))

    console.log("Quote added:", newQuote)
  }

  return (
    <AuthContext.Provider value={{ user, quotes, isLoading, login, signup, logout, addQuote }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
