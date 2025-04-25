"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"

export interface GridPatternProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: number
    height?: number
    x?: number
    y?: number
    squares?: number[][]
}

export function GridPattern({
                                width = 100,
                                height = 100,
                                x = 0,
                                y = 0,
                                squares = [[0, 0]],
                                className,
                                ...props
                            }: GridPatternProps) {
    return (
        <div className={cn("absolute inset-0 z-0", className)} {...props}>
            <svg
                className="absolute inset-0 h-full w-full stroke-current"
                fill="none"
                viewBox={`${x} ${y} ${width} ${height}`}
                width="100%"
                height="100%"
            >
                <defs>
                    <pattern id="grid" width={width} height={height} patternUnits="userSpaceOnUse">
                        <path
                            d={`M ${width} 0 V ${height} H 0 V 0 H ${width}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeOpacity="0.2"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                {squares.map(([x, y], index) => (
                    <rect
                        key={index}
                        width={width}
                        height={height}
                        x={x * width}
                        y={y * height}
                        fill="currentColor"
                        fillOpacity="0.05"
                    />
                ))}
            </svg>
        </div>
    )
}
