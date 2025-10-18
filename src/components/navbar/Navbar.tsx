'use client'

import React from 'react'

import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { CiUser } from "react-icons/ci";
import { MdTranslate } from "react-icons/md";
import { PiMagicWandLight } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";


import Image from 'next/image';
import { ModeToggle } from './ModeButton';
import Link from 'next/link';

import { RiGitRepositoryPrivateLine } from "react-icons/ri";

import Login from './auth/Login'
import Register from './auth/Register'
import { useSession } from 'next-auth/react';



const Navbar = () => {

    const session = useSession()


  return (
    <>
        <header className='mt-3 flex justify-between mx-1 sm:mx-10 items-center '>
            <div className='flex items-center'>
                <Link href="/">
                    <Image src="/logo.png" alt='logotipo' height={70} width={70}/>
                </Link>
                <p className='font-thin text-2xl hidden sm:block'>Lexify</p>
            </div>
            <div className='gap-2 flex'>
                <Button className='cursor-pointer flex items-center' variant="outline"><MdTranslate className='text-xl'/><Link href="/traductor">Traductor</Link></Button>
                <Button className='cursor-pointer flex items-center bg-gradient-lexify hover:bg-gradient-lexify-hover transition-all'><PiMagicWandLight className='text-xl'/><span className='hidden sm:block'>Lexify</span> PRO</Button>
                <ModeToggle/>
                {
                    session.data?.user?.email ?
                        <Tooltip>
                            <TooltipTrigger><Button onClick={()=>console.log("cerrando sesion...")} className='cursor-pointer' variant="outline"><IoIosLogOut className=''/></Button></TooltipTrigger>
                            <TooltipContent>
                                Cerrar sesión
                            </TooltipContent>
                        </Tooltip>
                    
                    : (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className='cursor-pointer' size="icon">
                                <CiUser/>
                            
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent sideOffset={10}>
                            <DropdownMenuLabel className='flex items-center'><RiGitRepositoryPrivateLine className='text-xl mr-2'/>Acceso</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                        <Login/>
                        <Register/>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    )

                }
                
            </div>
            
        </header>
        <hr  className='mt-2'/>
    </>
  )
}

export default Navbar
