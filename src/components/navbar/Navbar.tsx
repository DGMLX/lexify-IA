'use client'

import React from 'react'

import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { CiUser } from "react-icons/ci";
import { MdTranslate } from "react-icons/md";
import { PiMagicWandLight } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { IoKeyOutline } from "react-icons/io5";


import Image from 'next/image';
import { ModeToggle } from './ModeButton';
import Link from 'next/link';

import { Input } from '../ui/input'
import { Label } from '../ui/label'

import { RiGitRepositoryPrivateLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
        <header className='mt-3 flex justify-between mx-10 items-center'>
            <div className='flex items-center'>
                <Link href="/">
                    <Image src="/logo.png" alt='logotipo' height={70} width={70}/>
                </Link>
                <p className='font-thin text-2xl'>Lexify</p>
            </div>
            <div className='gap-2 flex'>
                <Button className='cursor-pointer flex items-center' variant="outline"><MdTranslate className='text-xl'/><Link href="/traductor">Traductor</Link></Button>
                <Button className='cursor-pointer flex items-center bg-gradient-lexify hover:bg-gradient-lexify-hover transition-all'><PiMagicWandLight className='text-xl'/>Lexify PRO</Button>
                <ModeToggle/>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className='cursor-pointer' size="icon">
                            <CiUser/>
                           
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuLabel className='flex items-center'><RiGitRepositoryPrivateLine className='text-xl mr-2'/>Acceso</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='cursor-pointer' onSelect={(e) => e.preventDefault()}>
                            <Dialog>
                                <form>
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
                                    <div className="grid gap-4">
                                        <div className="grid gap-3">
                                        <Label htmlFor="email" ><AiOutlineMail className='text-lg'/>Correo electrónico</Label>
                                        <Input id="email" name="email" type='email' defaultValue="" />
                                        </div>
                                        <div className="grid gap-3">
                                        <Label htmlFor="password"><IoKeyOutline className='text-lg'/>Contraseña</Label>
                                        <Input id="password" name="password" defaultValue="" type='password' />
                                        </div>
                                    </div>
                                    <DialogFooter >
                                        <DialogClose asChild>
                                        <Button variant="outline" className='cursor-pointer'>Cancel</Button>
                                        </DialogClose>
                                        <Button type="submit" className='cursor-pointer'>Ingresar</Button>
                                    </DialogFooter>
                                    </DialogContent>
                                </form>
                            </Dialog>
                        </DropdownMenuItem>


                       <DropdownMenuItem className='cursor-pointer' onSelect={(e) => e.preventDefault()}>
                            <Dialog>
                                <form>
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
                                    <div className="grid gap-4">
                                         <div className="grid gap-3">
                                        <Label htmlFor="name" ><CiUser className='text-lg'/>Nombre</Label>
                                        <Input id="name" name="name" type='text' defaultValue="" />
                                        </div>
                                        <div className="grid gap-3">
                                        <Label htmlFor="email" ><AiOutlineMail className='text-lg'/>Correo electrónico</Label>
                                        <Input id="email" name="email" type='email' defaultValue="" />
                                        </div>
                                        <div className="grid gap-3">
                                        <Label htmlFor="password"><IoKeyOutline className='text-lg'/>Contraseña</Label>
                                        <Input id="password" name="password" defaultValue="" type='password' />
                                        </div>
                                         <div className="grid gap-3">
                                        <Label htmlFor="password2"><IoKeyOutline className='text-lg'/>Reingresa tu Contraseña</Label>
                                        <Input id="password2" name="password2" defaultValue="" type='password' />
                                        </div>
                                    </div>
                                    <DialogFooter >
                                        <DialogClose asChild>
                                        <Button variant="outline" className='cursor-pointer'>Cancel</Button>
                                        </DialogClose>
                                        <Button type="submit" className='cursor-pointer'>Ingresar</Button>
                                    </DialogFooter>
                                    </DialogContent>
                                </form>
                            </Dialog>
                        </DropdownMenuItem>
                  
                        
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            
        </header>
        <hr  className='mt-2'/>
    </>
  )
}

export default Navbar
