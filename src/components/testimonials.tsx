"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote:
                "At first, It was nothing and nothing at all, until god created assembly.  ",
            name: "Carnoval15",
            designation: "Developer at RPGames",
            src: "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Profiles/carnoval.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1Byb2ZpbGVzL2Nhcm5vdmFsLndlYnAiLCJpYXQiOjE3MzgzODgxMzksImV4cCI6MzMyNDI4NTIxMzl9.gnvupHerjJv0WAlb31zVpnF96wsF47IZBUQhEooYxMQ",
        },
        {
            quote:
                "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Arshia",
            designation: "Founder at RPGames",
            src: "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Profiles/arshia.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1Byb2ZpbGVzL2Fyc2hpYS53ZWJwIiwiaWF0IjoxNzM4Mzg3NDcwLCJleHAiOjMzMjQyODUxNDcwfQ.HBrd0KVzP7BKni4W1qw7ou99fkZBxPO3tMIEEUIEzJA",
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
