"use client";
import Image from "next/image";
import {BackgroundBeamsWithCollision} from "@/components/ui/background-beams-with-collision";
import {ImagesSlider} from "@/components/ui/images-slider";
import {AnimatedTestimonialsDemo} from "@/components/testimonials";
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";
import {Cover} from "@/components/ui/cover";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import {motion} from "framer-motion";
import React from "react";

//test
const images = [
    "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Communitypic01.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L0NvbW11bml0eXBpYzAxLndlYnAiLCJpYXQiOjE3MTYwMTUyNzcsImV4cCI6MzMyMjA0NzkyNzd9.x1T6qlvUr9M0ibafMhqM46TEhZlrMjvY3SRZu9LHvXA&t=2024-05-18T06%3A54%3A37.269Z",
    "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Communitypic02.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L0NvbW11bml0eXBpYzAyLndlYnAiLCJpYXQiOjE3MTYwMTUzMTAsImV4cCI6MzMyMjA0NzkzMTB9.QzmZNSB7Pve5PbGtnX0bz1P56EZpmUpJ4O0pRKAZdYY&t=2024-05-18T06%3A55%3A10.379Z",
    "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Communitypic03.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L0NvbW11bml0eXBpYzAzLndlYnAiLCJpYXQiOjE3MTYwMTUzMjgsImV4cCI6MzMyMjA0NzkzMjh9.qRyd4_6eh4gtjbekgxZXWuplpzabZ5srFmMGnsTrhLw&t=2024-05-18T06%3A55%3A29.134Z",
    "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Communitypic04.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L0NvbW11bml0eXBpYzA0LndlYnAiLCJpYXQiOjE3MTc2NjQyODEsImV4cCI6MzMyMjIxMjgyODF9.csOKROUeM-C0PYjy_7aP5BLF_vo08zxfFD-xO9WC8ng&t=2024-06-06T08%3A58%3A01.664Z",
    "https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Communitypic05.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L0NvbW11bml0eXBpYzA1LndlYnAiLCJpYXQiOjE3MTc2NjQzNjksImV4cCI6MzMyMjIxMjgzNjl9.0FjFLJNAAXM1KGg4lCZqIwwKvy8btkC2n0l7B1tYrw0&t=2024-06-06T08%3A59%3A29.289Z",
];
const Skeleton = () => (
    <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
        title: "Shooting Interactions",
        description: "Shoot the card scanners and see the magic happen.",
        header: (
            <Image
                src="https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Shoot.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1Nob290LmdpZiIsImlhdCI6MTczOTMzNDc3NCwiZXhwIjozMzI0Mzc5ODc3NH0.pLp5y6Nixw_iJvfHz8SMHmf7g390Kl2IF7IJLoMsheU"
                alt="Shooting Interactions"
                unoptimized={true}
                width={400}
                height={200}
                className="object-cover w-full h-[200px] rounded-t-xl"
            />
        ),
        // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "Remote Keycard",
        description: "Open any keycard required doors without the need to take out your keycard.",
        header: (
            <Image
                src="https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Keyless.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L0tleWxlc3MuZ2lmIiwiaWF0IjoxNzM5MzM0NDI0LCJleHAiOjMzMjQzNzk4NDI0fQ.77XULe3plBecs67gfyX_b_iXR2Vbmxu4lcz4JwKSiBE"
                alt="Remote Keycard"
                unoptimized={true}
                width={400}
                height={200}
                className="object-cover w-full h-[200px] rounded-t-xl"
            />
        ),
        // icon: <IconFileBroken className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "Localized server",
        description: "We are the one and only Persian server recognized by Northwood.",
        header: (
            <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Localized server"
                width={400}
                height={200}
                className="object-cover w-full h-[200px] rounded-t-xl"
            />
        ),
        // icon: <IconSignature className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "Mapping",
        description:
            "We have multiple developers working on custom server mappings! expect changes from time to time!",
        header: (
            <Image
                src="https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/mapping.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L21hcHBpbmcud2VicCIsImlhdCI6MTczODQyMTM2MSwiZXhwIjozMzI0Mjg4NTM2MX0.LYnxti6NnIWq5-2KWajXzvWlum4RPM1W1zB4eb92Xt4&t=2025-02-01T14%3A49%3A22.075Z"
                alt="Mapping"
                width={800}
                height={200}
                className="object-cover w-full h-[200px] rounded-t-xl"
            />
        ),
        // icon: <IconTableColumn className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "UIU Team",
        description: "Tired of just spawning as a normal MTF? We got you covered!",
        header: (
            <Image
                src="https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/UIU.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1VJVS53ZWJwIiwiaWF0IjoxNzM4NDIxNzY0LCJleHAiOjMzMjQyODg1NzY0fQ.NayLg3Qx7CQBHj5ec5vzu9qxxlzJsbz565maLwcXCkE&t=2025-02-01T14%3A56%3A04.270Z"
                alt="A UIU Operative"
                width={400}
                height={200}
                className="object-cover w-full h-[200px] rounded-t-xl"
            />
        ),
        // icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "Serpeant's hand team",
        description: "What if they were the real cause of the containment breach?",
        header: (
            <Image
                src="https://yqxicxlxliqzxrzajydh.supabase.co/storage/v1/object/sign/Gallery/Serpeants.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHYWxsZXJ5L1NlcnBlYW50cy53ZWJwIiwiaWF0IjoxNzM4NDIyMTYxLCJleHAiOjMzMjQyODg2MTYxfQ.AjPkbZ9C32sCM8HBczEaCSSAfp8Sp7ileMg6v4nfclI&t=2025-02-01T15%3A02%3A41.950Z"
                alt="Creation"
                width={400}
                height={200}
                className="object-cover w-full h-[200px] rounded-t-xl"
            />
        ),
        // icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
        header: (
            <Image
                src="/placeholder.svg?height=200&width=800"
                alt="Adventure"
                width={800}
                height={200}
                className="object-cover w-full h-[200px] rounded-t-xl"
            />
        ),
        // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500"/>,
    },
];

export default function Home() {
    return (
        <div className="dark">
            <BackgroundBeamsWithCollision className="h-screen w-full">
                <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl px-3 font-bold text-center text-black dark:text-white font-sans tracking-tight">
                    RPGames <br/> Your new favorite SCP:SL {" "}
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
            <ImagesSlider className="h-screen max-h-screen" images={images}>
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
                        The first localized Iranian server in the game! <br/>
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
            <div
                className="h-[150rem] lg:h-[70rem] md:h-[70rem] sm:h-[200rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>


                <BentoGrid className="max-w-5xl mx-auto">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            // icon={item.icon}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>

            </div>
            <div
                className="z-30 h-[45rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div>
                    <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                        Wanna know more about us? <br/> <a href={"/about"}> <Cover>Click here</Cover> </a>
                    </h1>
                </div>

            </div>

        </div>

    )
        ;
}
