import { Card } from "@/components/ui/card";
import { ArrowRight, Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const tools = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
        bgColor: "text-sky-500/10"
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
        bgColor: "text-violet-500/10"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-700",
        bgColor: "text-pink-700/10"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-700",
        bgColor: "text-orange-700/10"
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
    }
]

export default function DashboardPage() {
    return (
        <div>
            <div>
                <h2 className="font-extrabold text-2xl ml-10">Explore the Power of AI</h2>
                <p className="text-sm ml-10 mt-2 mb-4">Chat with the smartest - Experiance the power of AI</p>
            </div>
            <div className="px-10 space-y-4">
                {tools.map((tool) => (
                    <Card
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
