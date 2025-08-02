import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transform hover:scale-105 active:scale-95",
        destructive:
          "bg-destructive text-destructive-foreground shadow-lg hover:bg-destructive/90 hover:shadow-xl hover:shadow-destructive/30",
        outline:
          "border border-primary/30 bg-transparent text-foreground shadow-lg hover:bg-primary/10 hover:border-primary/50 backdrop-blur-sm",
        secondary:
          "bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/80 hover:shadow-xl",
        ghost: 
          "hover:bg-primary/10 hover:text-primary transition-all duration-300",
        link: 
          "text-primary underline-offset-4 hover:underline hover:text-primary/80",
        hero:
          "bg-gradient-to-r from-primary to-rose text-background shadow-xl hover:shadow-2xl hover:shadow-primary/40 transform hover:scale-105 active:scale-95 font-medium",
        glass:
          "glass border-primary/30 text-foreground hover:border-primary/50 hover:bg-primary/5 backdrop-blur-md",
        neumorphic:
          "neumorphic text-foreground hover:shadow-xl hover:shadow-primary/20 transform hover:scale-105"
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-11 w-11",
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
