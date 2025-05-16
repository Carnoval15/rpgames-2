"use client"

import { useState } from "react"
import { CreditCard } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Product } from "@/lib/products"
import { motion } from "framer-motion"

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    const handleBuyNow = (productId: number) => {
        // Redirect to your payment API endpoint with the product ID
        window.location.href = `/api/payment?productId=${productId}`
    }

    // Use explicit dark mode colors instead of CSS variables
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -5 }}
        >
            <div
                className={cn(
                    "overflow-hidden rounded-lg transition-all duration-300 bg-[#1e1e1e]/50 backdrop-blur-sm border border-[#333333]",
                    "hover:border-[#f8f9fa]/20 hover:shadow-lg hover:shadow-[#f8f9fa]/5",
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative aspect-square overflow-hidden bg-[#2a2a2a]/30">
                    <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className={cn(
                            "object-cover w-full h-full transition-transform duration-500",
                            isHovered ? "scale-110" : "scale-100",
                        )}
                    />
                    {product.isNew && (
                        <div className="absolute top-2 right-2">
                            <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-emerald-500/80 hover:bg-emerald-500 backdrop-blur-md text-white border-0">
                                New
                            </div>
                        </div>
                    )}
                    {product.discount > 0 && (
                        <div className="absolute top-2 left-2">
                            <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-rose-500/80 hover:bg-rose-500 backdrop-blur-md text-white border-0">
                                {product.discount}% OFF
                            </div>
                        </div>
                    )}
                </div>
                <div className="p-4">
                    <div className="text-sm text-[#a0a0a0] mb-1">{product.category}</div>
                    <h3 className="font-medium text-lg mb-1 line-clamp-1 text-[#f8f9fa]">{product.name}</h3>
                    <div className="flex items-center gap-2">
            <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#f8f9fa] to-[#a0a0a0]">
              ريال{(product.price * (1 - product.discount / 100)).toFixed(0)}
            </span>
                        {product.discount > 0 && (
                            <span className="text-[#a0a0a0] line-through text-sm">ريال{product.price.toFixed(2)}</span>
                        )}
                    </div>
                </div>
                <div className="p-4 pt-0">
                    <button
                        className="w-full flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-gradient-to-r from-[#f8f9fa] to-[#f8f9fa]/80 text-[#121212] hover:from-[#f8f9fa]/90 hover:to-[#f8f9fa] transition-all duration-300"
                        onClick={() => handleBuyNow(product.id)}
                    >
                        <CreditCard className="h-4 w-4" />
                        Buy Now
                    </button>
                </div>
            </div>
        </motion.div>
    )
}
