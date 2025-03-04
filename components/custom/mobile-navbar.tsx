"use client";
import { X } from "lucide-react";
import { Link } from "next-view-transitions";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex min-h-svh flex-col overflow-y-auto bg-[#f5710c] text-[#000000]">
      <div className="flex justify-end p-6">
        <button onClick={onClose} className="text-[#ffffff]">
          <X className="h-8 w-8" />
        </button>
      </div>

      <div className="flex flex-col items-center pb-12">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src="/apubcc-horizontal.png"
              alt="APUBCC Logo"
              className="h-[4.75rem] w-[15.625rem] object-contain"
            />
          </div>
        </div>
      </div>

      <nav className="flex flex-col items-center gap-9 px-6 py-4">
        <Link
          href="/events"
          onClick={onClose}
          className="text-2xl font-extrabold active:text-white"
        >
          Events
        </Link>
        <Link
          href="/resources"
          onClick={onClose}
          className="text-2xl font-extrabold active:text-white"
        >
          Resources
        </Link>
        <Link
          href="/our-team"
          onClick={onClose}
          className="text-2xl font-extrabold active:text-white"
        >
          Our Team
        </Link>
        <Link
          href="/#faq"
          onClick={onClose}
          className="text-2xl font-extrabold active:text-white"
        >
          FAQ
        </Link>
        <Link
          href="/contact-us"
          onClick={onClose}
          className="text-2xl font-extrabold active:text-white"
        >
          Contact Us
        </Link>
      </nav>
    </div>
  );
}
