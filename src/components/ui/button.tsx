import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-lg font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:shadow-float hover:scale-105 active:scale-95",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-warm",
        outline:
          "border-2 border-primary bg-background text-primary hover:bg-gradient-warm hover:text-primary-foreground hover:border-transparent",
        secondary:
          "bg-gradient-trust text-secondary-foreground hover:shadow-float hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        service: "bg-card text-card-foreground border-2 border-border hover:border-primary hover:shadow-card hover:scale-102 active:scale-98 min-h-[120px] flex-col p-6",
        emergency: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-warm animate-pulse",
      },
      size: {
        default: "h-12 px-6 py-3 text-senior-base",
        sm: "h-10 rounded-md px-4 text-senior-base",
        lg: "h-16 rounded-xl px-8 text-senior-lg",
        xl: "h-20 rounded-xl px-10 text-senior-xl",
        icon: "h-12 w-12",
        service: "min-h-[140px] p-8 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
