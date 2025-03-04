import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";

export interface NavbarProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export interface NavbarItemProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "nav";
    return (
      <Comp
        className={cn(className, "flex items-center justify-between bg-black")}
        ref={ref}
        {...props}
      />
    );
  },
);
Navbar.displayName = "Navbar";

const NavbarItem = React.forwardRef<HTMLAnchorElement, NavbarItemProps>(
  ({ href, className, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, "text-sm font-bold leading-normal text-white")}
        {...props}
      />
    );
  },
);
NavbarItem.displayName = "NavbarItem";

export { Navbar, NavbarItem };
