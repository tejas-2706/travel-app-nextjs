"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center space-x-2">
      <Button 
        variant="outline" 
        size="icon" 
        onClick={() => setTheme("light")}
        className={theme === "light" ? "bg-gray-200" : ""}
        aria-pressed={theme === "light"}
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Light mode</span>
      </Button>
      
      <Button 
        variant="outline" 
        size="icon" 
        onClick={() => setTheme("dark")}
        className={theme === "dark" ? "bg-gray-800 text-white" : ""}
        aria-pressed={theme === "dark"}
      >
        <Moon className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Dark mode</span>
      </Button>
    </div>
  )
}
