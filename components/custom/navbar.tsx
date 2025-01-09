import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"


export interface NavbarProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

export interface NavbarItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "nav"
    return (
      <Comp
        className={cn(className, "bg-black rounded-[1.25rem] hidden lg:flex justify-between px-[2.125rem]")}
        ref={ref}
        {...props}
      />
    )
  }
)
Navbar.displayName = "Navbar"

const NavbarItem = React.forwardRef<HTMLButtonElement, NavbarItemProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(className, "text-white text-xl font-bold leading-normal")}
        ref={ref}
        {...props}
      />
    )
  }
)
NavbarItem.displayName = "NavbarItem"


export { Navbar, NavbarItem }
