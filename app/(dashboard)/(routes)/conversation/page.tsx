import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";

export default function ConversationPage() {
    return (
        <div>
            <Heading
                title="conversation"
                description="this is my page conversation"
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="bg-violet-500/10"
            />
        </div>
    )
}
