import { ShoppingBag, Search, Menu, User, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ShopHeader() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                        </Button>
                        <div className="flex items-center gap-2 font-bold text-xl">
                            <ShoppingBag className="h-6 w-6" />
                            <span>StyleShop</span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-6 mx-4 flex-1 max-w-md">
                        <div className="relative w-full">
                            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input placeholder="Search products..." className="pl-8 w-full" />
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                            <User className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="relative">
                            <ShoppingCart className="h-5 w-5" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
