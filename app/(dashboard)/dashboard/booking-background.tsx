import { cn } from "@/lib/utils"
import type React from "react"

interface BookingBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function BookingBackground({ children, className }: BookingBackgroundProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-background",
        "before:absolute before:inset-0 before:bg-[radial-gradient(circle_800px_at_100%_200px,var(--gradient-color),transparent_100%)]",
        "after:absolute after:inset-0 after:bg-[radial-gradient(circle_800px_at_0%_80%,var(--gradient-color),transparent_100%)]",
        "dark:before:opacity-20 dark:after:opacity-20",
        "before:opacity-30 after:opacity-30",
        className,
      )}
    >
      <style jsx>{`
        :root {
          --gradient-color: hsl(var(--primary));
        }
        .dark {
          --gradient-color: hsl(var(--primary));
        }
      `}</style>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

