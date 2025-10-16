import { ChatOpenAI } from "@langchain/openai";

export async function POST(req:Request){

    const model = new ChatOpenAI({ model: "gpt-4" });
    
}