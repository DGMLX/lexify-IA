import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import { randomUUID } from "crypto";

export async function POST(req:Request){
    try {   
        const {message} = await req.json()
        console.log(message)
        const model = new ChatOpenAI({
            model: "gpt-4",
            temperature:0.3
        });

        const messages = [
            new SystemMessage("Eres un asistente IA que traduce el texto proporcionado por el usuario de Español a Ingles y ayuda con problemas gramaticales de idioma de forma resumida y facil de entender y aparte dame 3 sugerencias o conceptos de la explicacion que me estas dando si es que no es una traduccion que desee hacer el usuario, pero que sean  muy resumidas y breves, pero a la vez explicativas y utiles para aprender."),
            new HumanMessage(message)
        ]

        const resp = await model.invoke(messages)
        console.log(resp.content)
        return Response.json({message:{
            key:randomUUID(),
            value:resp.content,
            name:"AI Assistant",
            avatar:"/logo.png",
            from:"assistant"
        }})
    } catch (error) {
        console.log(error)
        return Response.json({message:"Error interno al generar el texto"},{status:500})    
    }
    
}