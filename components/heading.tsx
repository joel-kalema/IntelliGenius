import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react"

interface HeadingPropos {
    title: string;
    description: string;
    icon: any;
    iconColor: string;
    bgColor: string;
}

export const Heading = ({
    title,
    description,
    icon: Icon,
    iconColor,
    bgColor,
}: HeadingPropos) => {
    return (
        <>
            <div className="px-4 lg:p-8 flex items-center gap-x-3 mb-8">
                <div className={cn("p-2 w-fit rounded-md", bgColor)}>
                    <Icon className={cn("w-10 h-10", iconColor)}/>
                </div>
                <div>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <p className="text-xs">{description}</p>
                </div>
            </div>
        </>
    )
}
