import { error } from "console"
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export async function POST(
    req : Request
) {
    try{

    } catch {
        console.log("CONVERSATION ERROR", error);
        return new NextResponse("internal erro", { status: 500})
    }
}