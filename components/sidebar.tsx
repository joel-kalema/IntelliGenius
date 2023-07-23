"use client"
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react"

import { cn } from "@/lib/utils";

const   montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
})

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-700"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-700"
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        color: "text-emerald-500"
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: "text-green-700"
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
    }
]

const Sidebar = () => {
    return(
        <div className="hidden md:w-72 h-full md:fixed md:flex md:flex-col text-white bg-gray-900 z-[80] md:inset-y-0">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center mb-14 pl-3">
                    <div className="relative w-8 h-8 mr-4">
                        <Image fill alt="logo" src="/logo.png" />
                    </div>
                    <h1 className={cn("font-extrabold text-2xl", montserrat.className)}>Genous</h1>
                </Link>
                <div className="space-y-1">
                    {
                        routes.map((route) => (
                            <Link
                                href = {route.href}
                                key={route.href}
                                className="groupe text-sm flex p-3 w-full justify-start font-medium
                                           cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
                            >
                                <div className="flex items-center flex-1">
                                    <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                    {route.label}
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar;