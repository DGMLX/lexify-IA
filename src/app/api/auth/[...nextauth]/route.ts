import { prisma } from "@/lib/db"
import bcrypt from "bcryptjs"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions={
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
            
                email:{label:"Email",type:"email",placeholder:"example@correo.com"},
                password:{label:"Contraseña",type:"password",placeholder:"*******"}
            },
            async authorize(credentials,req){
                const userFound = await prisma.user.findUnique({
                    where:{
                        email:credentials?.email
                    }
                })

                if(!userFound) return null
                if(!credentials?.password) return null
                const passwordMatch =await bcrypt.compare(credentials.password,userFound.password)
                console.log(passwordMatch)
                if(!passwordMatch) return null

                return {
                    id:userFound.id.toString(),
                    email:userFound.email
                }
            }
        })
    ]
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}