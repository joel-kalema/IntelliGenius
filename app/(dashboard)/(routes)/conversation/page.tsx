"use client"

import * as z from "zod"
import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { formShema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

export default function ConversationPage() {

    const form = useForm<z.infer<typeof formShema>>({
        resolver: zodResolver(formShema),
        defaultValues:{
            prompt: ""
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async ( value: z.infer<typeof formShema>) =>{
        console.log(value)
    }

    return (
        <div>
            <Heading
                title="conversation"
                description="this is my page conversation"
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="bg-violet-500/10"
            />
            <div className="p-2 lg:p-8">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}
                        className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
                    >
                        <FormField
                            name="prompt"
                            render={({ field }) => (
                                <FormItem className="col-span-12 lg:col-span-10">
                                    <FormControl className="m-0 p-0">
                                        <Input 
                                            className="border-0 outline-none focus-visible:ring-transparent"
                                            disabled={isLoading}
                                            placeholder="how"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        >

                        </FormField>
                        <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>Generate</Button>
                    </form>
                </Form>
                <div className="space-y-4">
                    <h1>This is the message</h1>
                </div>
            </div>
        </div>
    )
}
