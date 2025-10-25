'use server'


import { authOptions } from "@/auth-config"
import { prisma } from "@/lib/db"
import { capitalize } from "@/utils/capitalizar"
import { getServerSession } from "next-auth"

export const obtenerDirectorios = async()=>{
    const session = await getServerSession(authOptions)

    try {
        if(!session?.user.id) return {ok:false,message:"Error en la autentificación al obtener los directorios de traducción"}
        
        const directoriosDB = await prisma.directory.findMany({
            where:{
                userId:session.user.id
            }
        })

        return{
            ok:true,
            message:"Directorios obtenidos exitosamente",
            directorios:directoriosDB
        }
        
    } catch (error) {
        console.log("error ",error)
        return {
            ok:false,
            message:"Error interno al obtener los directorios."
        }
    }    
}



export const crearDirectorio = async(idiomaPrincipal:string,idiomaTraduccion:string,titulo:string) =>{
    const session = await getServerSession(authOptions)
    console.log(session)
    try {
        let nombreDirectorio = ""
        if(titulo !== ""){
            nombreDirectorio = titulo
        }else{
            nombreDirectorio =`${capitalize(idiomaPrincipal)} - ${capitalize(idiomaTraduccion)}`
        }

        if(!session?.user.id) return {ok:false,message:"Error en la autentificación al generar nuevo directorio."}

        const directoryDB = await prisma.directory.create({
            data:{
                nombre:nombreDirectorio,
                lenguaje_principal:capitalize(idiomaPrincipal),
                lenguaje_traducir:capitalize(idiomaTraduccion),
                userId:session?.user.id
            }
        })
        return {
            ok:true,
            message:"Directorio creado correctamente."
        }
    } catch (error) {
        console.log("error ",error)
        return {
            ok:false,
            message:"Error interno al generar el directorio."
        }
    }
}


export const eliminarDirectorio = async() =>{
    try {
        console.log("eliminando directorio")
    } catch (error) {
        console.log("error ",error)
    }
}


