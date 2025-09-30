"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Train } from "lucide-react";

const navigation = [
  { name: "TRAIN TYPES", href: "/" },
  { name: "TRACKER", href: "/tracker" },
  { name: "ROUTES", href: "/routes" },
  { name: "GALLERY", href: "/gallery" },
  { name: "COMMUNITY", href: "/community" },
];

export default function NavigationHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sidebar-border bg-sidebar text-sidebar-foreground">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10">
              <img
                src="/generated/trainspotter-hub-logo.png"
                alt="TrainSpotter Hub"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold nav-accent">TRAINSPOTTER</span>
              <span className="text-xs text-sidebar-foreground/70 tracking-wider">HUB</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-sidebar-foreground hover:text-accent transition-colors duration-200 tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-sidebar-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-sidebar border-sidebar-border">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-sidebar-foreground hover:text-accent transition-colors duration-200 tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}