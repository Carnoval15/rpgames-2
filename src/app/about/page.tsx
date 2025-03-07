"use client";
import {AnimatedTestimonialsDemo} from "@/components/testimonials";
import {AnimatedTooltip} from "@/components/ui/animated-tooltip";
import React from "react";

const people = [
    {
        id: 1,
        name: "Arya",
        designation: "Head Manager",
        image:
            "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Profiles/Arya%20H-Manager.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1Byb2ZpbGVzL0FyeWEgSC1NYW5hZ2VyLndlYnAiLCJpYXQiOjE3NDEzNjI0NzIsImV4cCI6MzMyNDU4MjY0NzJ9.y4kfkSmNewJ1P641wV1Vp6_JrPyHSVu7Y32hYyXVwMo",
    },
    {
        id: 2,
        name: "White Shadow",
        designation: "Manager",
        image:
            "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Profiles/White%20Shadow%20Manager.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1Byb2ZpbGVzL1doaXRlIFNoYWRvdyBNYW5hZ2VyLndlYnAiLCJpYXQiOjE3NDEzNjQxMDYsImV4cCI6MzMyNDU4MjgxMDZ9.2loH18OZ0pnjJHAlD-pwb89GO02GWv1tTu1fRuUorHY",
    },
    {
        id: 3,
        name: "Mahan",
        designation: "Head Admin",
        image:
            "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Profiles/Mahan%20SMW%20H-Admin.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1Byb2ZpbGVzL01haGFuIFNNVyBILUFkbWluLndlYnAiLCJpYXQiOjE3NDEzNjI1MTcsImV4cCI6MzMyNDU4MjY1MTd9.YN_KpAwBjrbf_kKAGnNCOMNS2kAAyaBgx4pK7vYX-1w",
    },
    {
        id: 4,
        name: "Melo",
        designation: "Head Moderator",
        image:
            "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Profiles/melo%20H-Mod.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1Byb2ZpbGVzL21lbG8gSC1Nb2Qud2VicCIsImlhdCI6MTc0MTM2MzM4NCwiZXhwIjozMzI0NTgyNzM4NH0.SseyRMBDoRJ6ZjEwovSpdOoG5Q4Jb0E-bAQ1A8GwAZw",
    },
    {
        id: 5,
        name: "Sina GP",
        designation: "Head Helper",
        image:
            "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Profiles/Sina%20GP%20H-Helper.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1Byb2ZpbGVzL1NpbmEgR1AgSC1IZWxwZXIud2VicCIsImlhdCI6MTc0MTM2NDE2NSwiZXhwIjozMzI0NTgyODE2NX0.sSyIw0I0sg-gzPoPwSRJuUc-PNvvBYsDkUsUuK20-xU",
    },
    {
        id: 6,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image:
            "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Communitypic01.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L0NvbW11bml0eXBpYzAxLndlYnAiLCJpYXQiOjE3MTYwMTUyNzcsImV4cCI6MzMyMjA0NzkyNzd9.x1T6qlvUr9M0ibafMhqM46TEhZlrMjvY3SRZu9LHvXA&t=2024-05-18T06%3A54%3A37.269Z",
    },
];

export default function About() {
    return (
        <div className="dark">
            <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">

                <div
                    className="z-30  lg:h-screen md:h-screen sm:h-screen w-screen dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative items-center justify-center">
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