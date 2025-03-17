"use client";
import {AnimatedTestimonialsDemo} from "@/components/testimonials";
import {AnimatedTooltip} from "@/components/ui/animated-tooltip";
import React from "react";

const people = [
    {
        id: 1,
        name: "Arshia",
        designation: "Founder",
        image:
            "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Profiles/arshia.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1Byb2ZpbGVzL2Fyc2hpYS53ZWJwIiwiaWF0IjoxNzM4Mzg3NDcwLCJleHAiOjMzMjQyODUxNDcwfQ.HBrd0KVzP7BKni4W1qw7ou99fkZBxPO3tMIEEUIEzJA",
    },
    {
        id: 2,
        name: "Dark killer",
        designation: "Co Owner",
        image:
            "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Profiles/darkkiller%20-coowner.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1Byb2ZpbGVzL2RhcmtraWxsZXIgLWNvb3duZXIud2VicCIsImlhdCI6MTc0MjIxODQ4MCwiZXhwIjozMzI0NjY4MjQ4MH0.1EiJ9pm9QyO29t2QgnRtfQu40RkWUxWCmAnnHJhsGpo",
    },
    {
        id: 3,
        name: "Carnoval",
        designation: "Head Developer",
        image:
            "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Profiles/carnoval.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1Byb2ZpbGVzL2Nhcm5vdmFsLndlYnAiLCJpYXQiOjE3MzgzODgxMzksImV4cCI6MzMyNDI4NTIxMzl9.gnvupHerjJv0WAlb31zVpnF96wsF47IZBUQhEooYxMQ",
    },
    {
        id: 4,
        name: "Melo",
        designation: "Head Moderator",
        image:
            "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Profiles/melo%20-head%20mod.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1Byb2ZpbGVzL21lbG8gLWhlYWQgbW9kLndlYnAiLCJpYXQiOjE3NDIyMTg2MjcsImV4cCI6MzMyNDY2ODI2Mjd9.euiyJHguaZRsIG9mn-lWzGL3iz9C59Ze0GJvBKaiOk4",
    },
    {
        id: 5,
        name: "Sina GP",
        designation: "Head Helper",
        image:
            "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Profiles/sinagp%20-head%20helper.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1Byb2ZpbGVzL3NpbmFncCAtaGVhZCBoZWxwZXIud2VicCIsImlhdCI6MTc0MjIxODc2NCwiZXhwIjozMzI0NjY4Mjc2NH0.MSF_sbiWnz2ToLDLO5fSZ8q4AsrmmPUsyN5ru4CZ64Q",
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

                    {/*<div className="flex flex-col py-[12rem] items-center justify-center">*/}
                    {/*    <AnimatedTestimonialsDemo/>*/}
                    {/*</div>*/}

                    <div
                        className="z-30 lg:h-screen md:h-screen sm:h-screen w-screen dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
                        {/* Radial gradient for the container to give a faded look */}
                        <div
                            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                        <div className="flex flex-col items-center justify-center z-20">
                            <h2 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                                RPGames <br/>
                            </h2>

                            <div className="flex flex-row items-center justify-center w-full">
                                <AnimatedTooltip items={people}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}