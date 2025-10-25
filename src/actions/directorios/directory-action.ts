import { capitalize } from "@/utils/capitalizar"


export const crearDirectorio = async(idiomaPrincipal:string,idiomaTraduccion:string,titulo:string) =>{
    try {
        if(titulo !== ""){
            console.log(`creando directorio llamado ${titulo} traduciendo de ${idiomaPrincipal} a ${idiomaTraduccion}`)
        }else{
            console.log(`creando directorio llamado ${capitalize(idiomaPrincipal)} - ${capitalize(idiomaTraduccion)} traduciendo de ${idiomaPrincipal} a ${idiomaTraduccion}`)
        }
    } catch (error) {
        console.log("error ",error)
    }
}


export const eliminarDirectorio = async() =>{
    try {
        console.log("eliminando directorio")
    } catch (error) {
        console.log("error ",error)
    }
}


