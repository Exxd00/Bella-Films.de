import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-sm border border-[hsl(30,15%,88%)] bg-white/60 px-4 py-3 text-base text-[hsl(220,10%,15%)] transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[hsl(30,5%,55%)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(220,10%,15%)] focus-visible:border-[hsl(220,10%,15%)/50] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
