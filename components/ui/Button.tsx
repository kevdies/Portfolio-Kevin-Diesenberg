import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-smooth focus-brand-offset disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "gradient-brand text-white hover:opacity-90 hover:shadow-lg shadow-md mobile-hover",
        secondary:
          "bg-surface-secondary border border-surface-border text-hierarchy-primary hover:bg-surface-tertiary hover:border-surface-border-light shadow-sm hover:shadow-md mobile-hover",
        ghost: "bg-transparent text-hierarchy-primary hover:bg-surface-secondary",
        link: "underline-offset-4 hover:underline text-brand-primary",
      },
      size: {
        default: "h-11 px-6 py-2 touch-target",
        sm: "h-10 px-4 text-sm touch-target",
        lg: "h-12 px-8 text-base touch-target-lg",
        icon: "h-11 w-11 p-0 touch-target",
        "icon-sm": "h-10 w-10 p-0 text-sm touch-target",
        "icon-lg": "h-12 w-12 p-0 text-base touch-target-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function ButtonComponent(
  { className, variant, size, asChild = false, ...props }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
}

const Button = React.forwardRef(ButtonComponent);
Button.displayName = "Button";

export { Button, buttonVariants };
