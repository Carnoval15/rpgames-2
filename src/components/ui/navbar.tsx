"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
    const pathname = usePathname()
    const [isMounted, setIsMounted] = React.useState(false)

    // Prevent hydration mismatch
    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "Contact", href: "/contact" },
    ]

    // Helper function to conditionally join class names
    const cn = (...classes: string[]) => {
        return classes.filter(Boolean).join(" ")
    }

    return (
        <header className="fixed left-1/2 -translate-x-1/2 top-0 md:top-4 z-40 rounded-b-lg md:rounded-full w-full md:max-w-md bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 border-b md:border border-border/40">
            <div className="flex h-16 items-center justify-center relative">
                {/* Mobile Menu Button - Fixed to the left edge */}
                <div className="absolute left-4 md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="transition-all duration-200 ease-in-out hover:bg-primary/10 hover:scale-105"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="left"
                            className="w-[240px] sm:w-[300px] bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 border-r border-border rounded-r-lg"
                        >
                            <nav className="flex flex-col gap-4 mt-8">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={cn(
                                                "text-sm font-medium px-3 py-2 rounded-md transition-all duration-200 ease-in-out hover:bg-primary/10 hover:text-primary hover:translate-x-1",
                                                isActive && "bg-primary/15 text-primary font-semibold border-l-4 border-primary pl-2",
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                })}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Desktop Navigation - Centered */}
                <div className="px-6">
                    <nav className="hidden md:flex gap-6">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-medium relative px-2 py-1 transition-all duration-200 ease-in-out hover:text-primary group",
                                        isActive && "text-primary font-semibold",
                                    )}
                                >
                                    {item.name}
                                    <span
                                        className={cn(
                                            "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                                            isActive ? "w-full" : "w-0 group-hover:w-full",
                                        )}
                                    ></span>
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </header>
    )
}

