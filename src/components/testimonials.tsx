"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote:
                "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Sarah Chen",
            designation: "Product Manager at TechFlow",
            src: "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Profiles/PFPDec2023lessthan10-ezgif.com-png-to-webp-converter.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1Byb2ZpbGVzL1BGUERlYzIwMjNsZXNzdGhhbjEwLWV6Z2lmLmNvbS1wbmctdG8td2VicC1jb252ZXJ0ZXIud2VicCIsImlhdCI6MTczNzQ4MjA3OCwiZXhwIjozMzI0MTk0NjA3OH0.SuP0vY7a0H6wzj1YDbCkTUxA2LS-z8BJqDoTwtOQtL8&t=2025-01-21T17%3A54%3A39.120Z",
        },
        {
            quote:
                "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Michael Rodriguez",
            designation: "CTO at InnovateSphere",
            src: "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Profiles/PFPDec2023lessthan10-ezgif.com-png-to-webp-converter.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1Byb2ZpbGVzL1BGUERlYzIwMjNsZXNzdGhhbjEwLWV6Z2lmLmNvbS1wbmctdG8td2VicC1jb252ZXJ0ZXIud2VicCIsImlhdCI6MTczNzQ4MjA3OCwiZXhwIjozMzI0MTk0NjA3OH0.SuP0vY7a0H6wzj1YDbCkTUxA2LS-z8BJqDoTwtOQtL8&t=2025-01-21T17%3A54%3A39.120Z",
        },
        {
            quote:
                "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "Emily Watson",
            designation: "Operations Director at CloudScale",
            src: "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Profiles/PFPDec2023lessthan10-ezgif.com-png-to-webp-converter.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1Byb2ZpbGVzL1BGUERlYzIwMjNsZXNzdGhhbjEwLWV6Z2lmLmNvbS1wbmctdG8td2VicC1jb252ZXJ0ZXIud2VicCIsImlhdCI6MTczNzQ4MjA3OCwiZXhwIjozMzI0MTk0NjA3OH0.SuP0vY7a0H6wzj1YDbCkTUxA2LS-z8BJqDoTwtOQtL8&t=2025-01-21T17%3A54%3A39.120Z",
        },
        {
            quote:
                "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
            name: "James Kim",
            designation: "Engineering Lead at DataPro",
            src: "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Profiles/PFPDec2023lessthan10-ezgif.com-png-to-webp-converter.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1Byb2ZpbGVzL1BGUERlYzIwMjNsZXNzdGhhbjEwLWV6Z2lmLmNvbS1wbmctdG8td2VicC1jb252ZXJ0ZXIud2VicCIsImlhdCI6MTczNzQ4MjA3OCwiZXhwIjozMzI0MTk0NjA3OH0.SuP0vY7a0H6wzj1YDbCkTUxA2LS-z8BJqDoTwtOQtL8&t=2025-01-21T17%3A54%3A39.120Z",
        },
        {
            quote:
                "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
            name: "Lisa Thompson",
            designation: "VP of Technology at FutureNet",
            src: "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Profiles/PFPDec2023lessthan10-ezgif.com-png-to-webp-converter.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1Byb2ZpbGVzL1BGUERlYzIwMjNsZXNzdGhhbjEwLWV6Z2lmLmNvbS1wbmctdG8td2VicC1jb252ZXJ0ZXIud2VicCIsImlhdCI6MTczNzQ4MjA3OCwiZXhwIjozMzI0MTk0NjA3OH0.SuP0vY7a0H6wzj1YDbCkTUxA2LS-z8BJqDoTwtOQtL8&t=2025-01-21T17%3A54%3A39.120Z",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}
