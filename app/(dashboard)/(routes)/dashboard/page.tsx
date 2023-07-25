"use client"

import { Card } from "@/components/ui/card";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-700",
        bgColor: "bg-pink-700/10"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-700",
        bgColor: "bg-orange-700/10"
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10"
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: "text-green-700",
        bgColor: "bg-green-700/10"
    }
]

export default function DashboardPage() {

    const router = useRouter();

    return (
        <div>
            <div>
                <h2 className="font-extrabold text-2xl ml-4 md:ml-20 lg:ml-32">Explore the Power of AI</h2>
                <p className="text-sm ml-4 md:ml-20 lg:ml-32 mt-2 mb-10">Chat with the smartest - Experiance the power of AI</p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                {tools.map((tool) => (
                    <Card
                        onClick={() => router.push(tool.href)}
                        key={tool.href}
                        className="p-4 boder-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
                    >
                        <div className="flex items-center gap-x-4">
                            <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                <tool.icon className={cn("w-6 h-6", tool.color)}/>
                            </div>
                            <div className="font-semibold">
                                {tool.label}
                            </div>
                        </div>
                        <ArrowRight className="h-5 w-5"/>
                    </Card>
                ))}
            </div>
        </div>
    )
}
