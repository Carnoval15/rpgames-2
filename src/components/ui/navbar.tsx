"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

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

    return (
        <div className="w-full flex justify-center sticky top-4 z-40">
            <header className="w-full md:w-auto md:rounded-full bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 md:px-6">
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
                                className="w-[240px] sm:w-[300px] bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 border-r"
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
                    <div className="max-w-md">
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
        </div>
    )
}

