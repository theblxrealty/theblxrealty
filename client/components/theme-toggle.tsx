"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-10 w-10 rounded-full bg-white dark:bg-slate-700 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600 hover:text-navy-600 dark:hover:text-gold-400 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {mounted && theme === "dark" ? (
        <Sun className="h-5 w-5 transition-transform duration-300 hover:rotate-90" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-300 hover:rotate-90" />
      )}
    </Button>
  )
} 