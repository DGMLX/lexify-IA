'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { IoKeyOutline } from 'react-icons/io5'
import { SubmitHandler, useForm} from "react-hook-form"

type FormInputs = {
    email: string;
    password:string;
}

const Login = () => {

    const [errorMessage,setErrorMessage] = useState('')
    const {register,handleSubmit,formState:{errors}} = useForm<FormInputs>()

    const onSubmit : SubmitHandler<FormInputs> = async(data) =>{
        setErrorMessage('')
        console.log(data)
        
    }

  return (
     <DropdownMenuItem className='cursor-pointer' onSelect={(e) => e.preventDefault()}>
            <Dialog>
  
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
            </div>

            <div className="grid gap-3">
              <Label htmlFor="password"><IoKeyOutline className='text-lg' />Contraseña</Label>
              <Input id="password" type='password' {...register('password', { required: true })} />
            </div>

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
}

export default Login