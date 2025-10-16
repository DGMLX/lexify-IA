'use server'

import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs"

type InfoUserRegistro ={
    name: string;
    email: string;
    password:string;
    rePassword:string;
}

const registerAction = async(data:InfoUserRegistro) =>{
    try {
        const {name,email,password,rePassword} = data
        const userDB = await prisma.user.findFirst({
            where:{email}
        })
        if(userDB) return {ok:false,message:"Usuario ya existe."}
        if(password !== rePassword) return {ok:false,message:"Las contraseñas no coinciden."}

        const passwordCrypt = bcrypt.hashSync(password,10);
        await prisma.user.create({
            data:{
                nombre:name,
                email,
                password:passwordCrypt
            }
        }
        )
        return {
            ok:true,
            message:"Usuario registrado exitosamente"
        }
    } catch (error) {
        console.log(error)
        return {
            ok:false,
            message:"Error al registrar el usuario."
        }
    }
}

export default registerAction