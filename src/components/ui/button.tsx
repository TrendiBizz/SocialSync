import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost";
  size?: "icon" | "sm" | "default";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "default", asChild = false, ...props },
    ref
  ) => {
    const Comp: any = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
          variant === "ghost" && "hover:bg-transparent hover:underline",
          variant === "outline" && "border border-input bg-transparent hover:bg-accent",
          size === "icon" && "h-10 w-10 p-2",
          size === "sm" && "h-8 px-3",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
