"use client";
import Image from "next/image";
import {BackgroundBeamsWithCollision} from "@/components/ui/background-beams-with-collision";
import {ImagesSlider} from "@/components/ui/images-slider";
import {motion} from "framer-motion";

//test
const images = [
    "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Communitypic01.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L0NvbW11bml0eXBpYzAxLndlYnAiLCJpYXQiOjE3MTYwMTUyNzcsImV4cCI6MzMyMjA0NzkyNzd9.x1T6qlvUr9M0ibafMhqM46TEhZlrMjvY3SRZu9LHvXA&t=2024-05-18T06%3A54%3A37.269Z",
    "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Communitypic02.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L0NvbW11bml0eXBpYzAyLndlYnAiLCJpYXQiOjE3MTYwMTUzMTAsImV4cCI6MzMyMjA0NzkzMTB9.QzmZNSB7Pve5PbGtnX0bz1P56EZpmUpJ4O0pRKAZdYY&t=2024-05-18T06%3A55%3A10.379Z",
    "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Communitypic03.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L0NvbW11bml0eXBpYzAzLndlYnAiLCJpYXQiOjE3MTYwMTUzMjgsImV4cCI6MzMyMjA0NzkzMjh9.qRyd4_6eh4gtjbekgxZXWuplpzabZ5srFmMGnsTrhLw&t=2024-05-18T06%3A55%3A29.134Z",
    "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Communitypic04.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L0NvbW11bml0eXBpYzA0LndlYnAiLCJpYXQiOjE3MTc2NjQyODEsImV4cCI6MzMyMjIxMjgyODF9.csOKROUeM-C0PYjy_7aP5BLF_vo08zxfFD-xO9WC8ng&t=2024-06-06T08%3A58%3A01.664Z",
    "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Communitypic05.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L0NvbW11bml0eXBpYzA1LndlYnAiLCJpYXQiOjE3MTc2NjQzNjksImV4cCI6MzMyMjIxMjgzNjl9.0FjFLJNAAXM1KGg4lCZqIwwKvy8btkC2n0l7B1tYrw0&t=2024-06-06T08%3A59%3A29.289Z",
];

export default function Home() {
    return (
        <div className="dark">
            <BackgroundBeamsWithCollision className="h-screen w-full">
                <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl px-3 font-bold text-center text-black dark:text-white font-sans tracking-tight">
                    RPGames <br/> Your new favorite SCP SL {" "}
                    <div
                        className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                        <div
                            className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-1 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                            <span className="">server</span>
                        </div>
                        <div
                            className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-1">
                            <span className="">server</span>
                        </div>
                    </div>
                </h2>
            </BackgroundBeamsWithCollision>
            <ImagesSlider className="h-[40rem] max-h-screen" images={images}>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -80,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="z-50 flex flex-col justify-center items-center"
                >
                    <motion.p
                        className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                        The first international gaming community based in Iran! <br/>
                    </motion.p>
                    <a href={"https://discord.gg/rpgames"} target="_blank" rel="noreferrer">
                        <button
                            className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                            <span>Join us in discord! →</span>
                            <div
                                className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent"/>
                        </button>
                    </a>
                </motion.div>
            </ImagesSlider>
        </div>

    )
        ;
}
