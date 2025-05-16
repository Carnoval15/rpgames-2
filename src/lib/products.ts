export interface Product {
    id: number
    name: string
    price: number
    discount: number
    category: string
    image: string
    isNew: boolean
}

export const categories = ["Clothing", "Shoes", "Accessories", "Electronics", "Home & Kitchen"]

export const products: Product[] = [
    {
        id: 1,
        name: "Vnext Prime",
        price: 300000,
        discount: 0,
        category: "Rank",
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
    },
    {
        id: 2,
        name: "Vnext Classic",
        price: 130000,
        discount: 15,
        category: "Rank",
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
    },
    {
        id: 3,
        name: "Leather Sneakers",
        price: 1000000,
        discount: 0,
        category: "Shoes",
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
    },
    {
        id: 4,
        name: "Wireless Headphones",
        price: 129.99,
        discount: 20,
        category: "Electronics",
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
    },
    {
        id: 5,
        name: "Stainless Steel Watch",
        price: 199.99,
        discount: 10,
        category: "Accessories",
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
    },
    {
        id: 6,
        name: "Kitchen Blender",
        price: 79.99,
        discount: 0,
        category: "Home & Kitchen",
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
    },
    {
        id: 7,
        name: "Hooded Sweatshirt",
        price: 49.99,
        discount: 0,
        category: "Clothing",
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
    },
    {
        id: 8,
        name: "Running Shoes",
        price: 119.99,
        discount: 15,
        category: "Shoes",
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
    },
    {
        id: 9,
        name: "Leather Wallet",
        price: 39.99,
        discount: 0,
        category: "Accessories",
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
    },
    {
        id: 10,
        name: "Smart Speaker",
        price: 149.99,
        discount: 25,
        category: "Electronics",
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
    },
    {
        id: 11,
        name: "Coffee Maker",
        price: 89.99,
        discount: 0,
        category: "Home & Kitchen",
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
    },
    {
        id: 12,
        name: "Denim Jacket",
        price: 79.99,
        discount: 10,
        category: "Clothing",
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
    },
]
