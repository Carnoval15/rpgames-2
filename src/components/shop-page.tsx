"use client"

import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { GridPattern } from "@/components/ui/grid-pattern"

export function ShopPage() {
    // Apply dark mode styles directly to this component
    return (
        <div className="min-h-screen bg-[#121212] text-[#f8f9fa] relative overflow-hidden">

            {/* Content */}
            <div className="container relative z-10 mx-auto px-5 pt-32 pb-12">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#f8f9fa] to-[#a0a0a0]">
                        Rank Shop
                    </h1>
                    <p className="text-[#a0a0a0] max-w-2xl mx-auto">
                        Discover what our supporters enjoy.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}
