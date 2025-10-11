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

import { CiUser } from "react-icons/ci";
import { MdTranslate } from "react-icons/md";
import { PiMagicWandLight } from "react-icons/pi";
import Image from 'next/image';
import { ModeToggle } from './ModeButton';


const Navbar = () => {
  return (
    <>
        <header className='mt-3 flex justify-between mx-10 items-center'>
            <div className='flex items-center'>

                <Image src="/logo.png" alt='logotipo' height={70} width={70}/>
                <p className='font-thin text-2xl'>Lexify</p>
            </div>
            <div className='gap-2 flex'>
                <Button className='cursor-pointer flex items-center' variant="outline"><MdTranslate className='text-xl'/>Traductor</Button>
                <Button className='cursor-pointer flex items-center bg-gradient-lexify hover:bg-gradient-lexify-hover transition-all'><PiMagicWandLight className='text-xl'/>Traductor PRO</Button>
                <ModeToggle/>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className='cursor-pointer' size="icon">
                            <CiUser/>
                           
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuLabel>Acceso</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='cursor-pointer'>
                            Iniciar sesión
                        </DropdownMenuItem>
                        <DropdownMenuItem className='cursor-pointer'>
                            Crear cuenta
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