  'use client'

  import { Button } from '@/components/ui/button'
  import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
  import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
  import { Input } from '@/components/ui/input'
  import { Label } from '@/components/ui/label'
  import React, { useState } from 'react'
  import { AiOutlineMail } from 'react-icons/ai'
  import { IoKeyOutline } from 'react-icons/io5'
  import { FaUserXmark } from "react-icons/fa6";
  import { FiUser, FiUserCheck } from "react-icons/fi";

  import { SubmitHandler, useForm} from "react-hook-form"

  import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
  import { Spinner } from '@/components/ui/spinner'
  import { toast } from "sonner"
  
  import {signIn} from "next-auth/react"	

  import { useRouter } from 'next/navigation'
  
  import { sleep } from '@/utils/sleep'
  

  type FormInputs = {
      email: string;
      password:string;
  }

  const Login = () => {

      const router = useRouter()
      const [error,setError] = useState(false)
      const [loading,setLoading] = useState(false)
      const {register,handleSubmit,formState:{errors},reset} = useForm<FormInputs>()
      const [loginSuccess,setLoginSuccess] = useState(false)

      const onSubmit : SubmitHandler<FormInputs> = async(data) =>{
          setError(false)
          setLoading(true)
          const resp = await signIn("credentials",{
            email:data.email,
            password:data.password,
            redirect:false
          })
          await sleep(1000)
          if(!resp?.ok){
            setError(true)
            setLoading(false)
          }else{
            setLoginSuccess(true)
            setError(false)
            setLoading(false)
            router.push("/traductor")
            reset()
          }
        
          
      
      }

    return (

      
        loginSuccess ? (
          toast.success("Inicio de sesión exitoso")
        ): (
      <DropdownMenuItem className='cursor-pointer' onSelect={(e) => {
          e.preventDefault()
          setError(false)
        }}>
              <Dialog >
    
                      <DialogTrigger className='cursor-pointer'>
                      Iniciar sesión
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                          <DialogTitle className='text-center'>Iniciar sesión</DialogTitle>
                          <DialogDescription className='text-center'>
                          Inicia sesión y usa las funcionalidades como usuario de Lexify.
                          </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="email"><AiOutlineMail className='text-lg' />Correo electrónico</Label>
                <Input id="email" type='email' {...register('email', { required: true })} />
                {
                  errors.email && 
                    <Alert variant="destructive">
                      
                  
                      <AlertDescription>
                        El email es un campo obligatorio.
                      </AlertDescription>
                    </Alert>
                }
              </div>

              <div className="grid gap-3">
                <Label htmlFor="password"><IoKeyOutline className='text-lg' />Contraseña</Label>
                <Input id="password" type='password' {...register('password', { required: true })} />
                {   errors.password && 
                    <Alert variant="destructive">
                      
                  
                      <AlertDescription>
                        El contraseña es un campo obligatorio.
                      </AlertDescription>
                    </Alert>
                }
              </div>

              {
                      loading && 
                      <div className='flex justify-center mt-5'>
                          <Spinner/>
                      </div>
                  }

              {
                    error &&
                    <Alert className='mt-3' variant="destructive">       
                        <AlertTitle className='flex items-center'><FaUserXmark className='text-lg text-red-500 mr-1'/>Error</AlertTitle>                
                        <AlertDescription>
                        Email o contraseña inválida
                        </AlertDescription>
                    </Alert>
                }

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" className='cursor-pointer'>Cancelar</Button>
                </DialogClose>
                

                <Button type="submit" className='cursor-pointer'>Ingresar</Button>
            
              </DialogFooter>
            </form>
                  
                      </DialogContent>
                
              </Dialog>
          </DropdownMenuItem>
        )   
      
    )
  }

  export default Login