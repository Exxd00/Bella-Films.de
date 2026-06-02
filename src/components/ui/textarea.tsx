import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[140px] w-full rounded-sm border border-[hsl(30,15%,88%)] bg-white/60 px-4 py-3 text-base text-[hsl(220,10%,15%)] transition-all duration-300 placeholder:text-[hsl(30,5%,55%)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(220,10%,15%)] focus-visible:border-[hsl(220,10%,15%)/50] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
