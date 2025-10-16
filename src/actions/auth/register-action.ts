

export async function POST(req:Request){
    try {
        console.log("registro....")
    } catch (error) {
        console.log(error)
        return Response.json({mensaje:"Error interno al registrarse"},{status:500})
    }
}