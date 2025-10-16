'use server'

type InfoUserLogin = {
    email:string
    password:string
}

const loginAction = async(data:InfoUserLogin) =>{
    try {
        console.log("----------")
        console.log(data)
        console.log("logueando...")
    } catch (error) {
        console.log(error)
        return {
            mensaje:"Error al iniciar sesión",
            status:500
        }
    }
}

export default loginAction