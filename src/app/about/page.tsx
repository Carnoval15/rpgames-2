"use client";
import {AnimatedTestimonialsDemo} from "@/components/testimonials";
import {AnimatedTooltip} from "@/components/ui/animated-tooltip";
import React from "react";

const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image:
            "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Communitypic01.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L0NvbW11bml0eXBpYzAxLndlYnAiLCJpYXQiOjE3MTYwMTUyNzcsImV4cCI6MzMyMjA0NzkyNzd9.x1T6qlvUr9M0ibafMhqM46TEhZlrMjvY3SRZu9LHvXA&t=2024-05-18T06%3A54%3A37.269Z",
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:
            "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Communitypic01.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L0NvbW11bml0eXBpYzAxLndlYnAiLCJpYXQiOjE3MTYwMTUyNzcsImV4cCI6MzMyMjA0NzkyNzd9.x1T6qlvUr9M0ibafMhqM46TEhZlrMjvY3SRZu9LHvXA&t=2024-05-18T06%3A54%3A37.269Z",
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:
            "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Communitypic01.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L0NvbW11bml0eXBpYzAxLndlYnAiLCJpYXQiOjE3MTYwMTUyNzcsImV4cCI6MzMyMjA0NzkyNzd9.x1T6qlvUr9M0ibafMhqM46TEhZlrMjvY3SRZu9LHvXA&t=2024-05-18T06%3A54%3A37.269Z",
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image:
            "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Communitypic01.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L0NvbW11bml0eXBpYzAxLndlYnAiLCJpYXQiOjE3MTYwMTUyNzcsImV4cCI6MzMyMjA0NzkyNzd9.x1T6qlvUr9M0ibafMhqM46TEhZlrMjvY3SRZu9LHvXA&t=2024-05-18T06%3A54%3A37.269Z",
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image:
            "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Communitypic01.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L0NvbW11bml0eXBpYzAxLndlYnAiLCJpYXQiOjE3MTYwMTUyNzcsImV4cCI6MzMyMjA0NzkyNzd9.x1T6qlvUr9M0ibafMhqM46TEhZlrMjvY3SRZu9LHvXA&t=2024-05-18T06%3A54%3A37.269Z",
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image:
            "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Communitypic01.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L0NvbW11bml0eXBpYzAxLndlYnAiLCJpYXQiOjE3MTYwMTUyNzcsImV4cCI6MzMyMjA0NzkyNzd9.x1T6qlvUr9M0ibafMhqM46TEhZlrMjvY3SRZu9LHvXA&t=2024-05-18T06%3A54%3A37.269Z",
    },
];

export default function About() {
    return (
        <div className="dark">
            <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">

                <div
                    className="z-30 h-screen w-screen dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative items-center justify-center">
                    {/* Radial gradient for the container to give a faded look */}
                    <div
                        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                    <div className="flex flex-col py-[12rem] items-center justify-center">
                        <AnimatedTestimonialsDemo/>
                    </div>

                    <div className="flex flex-row items-center justify-center mb-10 w-full">
                        <AnimatedTooltip items={people}/>
                    </div>
                </div>
            </div>
        </div>
    );
}