'use client'

import React, { FormEvent, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AiOutlineMail } from 'react-icons/ai'
import { IoKeyOutline } from 'react-icons/io5'
import { CiUser } from 'react-icons/ci'
import { SubmitHandler, useForm} from "react-hook-form"

type FormInputs = {
    name: string;
    email: string;
    password:string;
    rePassword:string;
}

const Register = () => {

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
                Crear cuenta
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className='text-center'>Crea tu cuenta</DialogTitle>
                    <DialogDescription className='text-center'>
                    Regístrate y usa las funcionalidades como usuario de Lexify.
                    </DialogDescription>
                </DialogHeader>
                 <form onSubmit={handleSubmit(onSubmit)} >
                <div className="grid gap-4">
                        <div className="grid gap-3">
                    <Label htmlFor="name" ><CiUser className='text-lg'/>Nombre</Label>
                    <Input id="name" type='text' defaultValue="" {...register('name',{required:true})} />
                    </div>
                    <div className="grid gap-3">
                    <Label htmlFor="email" ><AiOutlineMail className='text-lg'/>Correo electrónico</Label>
                    <Input id="email" type='email' defaultValue=""  {...register('email',{required:true})} />
                    </div>
                    <div className="grid gap-3">
                    <Label htmlFor="password"><IoKeyOutline className='text-lg'/>Contraseña</Label>
                    <Input id="password" defaultValue="" type='password'  {...register('password',{required:true})} />
                    </div>
                        <div className="grid gap-3">
                    <Label htmlFor="rePassword"><IoKeyOutline className='text-lg'/>Reingresa tu Contraseña</Label>
                    <Input id="rePassword"  defaultValue="" type='password'  {...register('rePassword',{required:true})} />
                    </div>
                </div>
                <DialogFooter className='mt-5'>
                    <DialogClose asChild>
                    <Button variant="outline" className='cursor-pointer'>Cancel</Button>
                    </DialogClose>
                    <Button type="submit" className='cursor-pointer'>Ingresar</Button>
                </DialogFooter>
                  </form>
                </DialogContent>
          
        </Dialog>
    </DropdownMenuItem>
  )
}

export default Register