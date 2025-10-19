import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";

export async function POST(req:Request){
    try {   
        const {message} = await req.json()
        console.log(message)
        const model = new ChatOpenAI({
            model: "gpt-4",
            temperature:0.3
        });

        const messages = [
            new SystemMessage("Traduce lo siguiente de Español a Ingles"),
            new HumanMessage(message)
        ]

        const resp = await model.invoke(messages)
        return Response.json({message:resp.content})

    } catch (error) {
        console.log(error)
        return Response.json({message:"Error interno al generar el texto"},{status:500})    
    }
    
}