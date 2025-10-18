import React from 'react'

import { RiRobot2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Badge } from "@/components/ui/badge"

import Link from 'next/link'

const PlanesPage = () => {
  return (
    <main className='mb-20'>
     <h1 className="text-center text-5xl   md:text-8xl sm:px-56 font-thin leading-tight mt-20">Conoce los <span className="font-medium bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">planes</span> y sus <span className='font-medium'>características</span>.</h1>
     <Card className='mx-2 md:mx-20 lg:mx-72   my-10'>
        <CardContent className='text-center px-5 text-lg font-thin leading-8'>
            Con el modo gratuito, puedes traducir texto en varios idiomas y entender las bases detrás de cada frase.
            ¿Quieres ir más allá? El modo Pro te da acceso a traducciones ilimitadas, explicaciones profundas sobre gramática y contexto, ejemplos culturales, correcciones inteligentes y una experiencia sin límites, todo con la ayuda de nuestra IA lingüística.
        </CardContent>
        <div className='flex justify-center'>
            <Button className='w-5/6 sm:w-1/3 bg-gradient-lexify  hover:bg-gradient-lexify-hover transition-all cursor-pointer'><Link href="/demo"  className='flex items-center text-lg'><RiRobot2Line className='text-2xl mr-2'/>Probar plan gratuito</Link></Button>
        </div>
     </Card>
    <div className='flex justify-center gap-7 mt-5'>

        <Card className='w-1/4 relative'>
    <CardHeader>
        <Badge variant="secondary">GRATIS</Badge>
        <CardTitle className='mt-2'>Lexify versión gratuita</CardTitle>
        <CardDescription className='text-5xl text-center mt-3'>$0</CardDescription>
        <hr className='mt-5'/>
    </CardHeader>
    <CardContent>
         <p className='flex items-center'><FaCheck className='mr-4'/>Card Content</p>
        <p className='flex items-center my-2'><FaCheck className='mr-4'/>Card Content</p>
        <p className='flex items-center my-2'><FaCheck className='mr-4'/>Card Content</p>
      
    </CardContent>
    <CardFooter className='absolute bottom-0 w-full mb-5'>
        <Button className='w-full cursor-pointer' asChild >
            <Link href="/demo">Probar plan gratuito</Link>
            </Button>
    </CardFooter>
    </Card>

    
        <Card className='w-1/4 '>
    <CardHeader>
        <Badge >PRO</Badge>
        <CardTitle className='mt-2'>Lexify versión PRO mensual</CardTitle>
        <CardDescription className='text-5xl text-center mt-3'>$5 <span className='text-2xl'>US</span></CardDescription>
        <hr className='mt-5'/>
    </CardHeader>
    <CardContent>
         <p className='flex items-center'><FaCheck className='mr-4'/>Card Content</p>
        <p className='flex items-center my-2'><FaCheck className='mr-4'/>Card Content</p>
        <p className='flex items-center my-2'><FaCheck className='mr-4'/>Card Content</p>
        <p className='flex items-center'><FaCheck className='mr-4'/>Card Content</p>
    </CardContent>
    <CardFooter className=' '>
        <Button className='w-full cursor-pointer'>Iniciar plan PRO mensual</Button>
    </CardFooter>
    </Card>

    <Card className='w-1/4'>
    <CardHeader>
        <Badge >PRO</Badge>
        <CardTitle className='mt-2'>Lexify versión PRO anual</CardTitle>
        <CardDescription className='text-5xl text-center mt-3'>$50 <span className='text-2xl'>US</span></CardDescription>
        <hr className='mt-5'/>
    </CardHeader>
    <CardContent>
        <p className='flex items-center'><FaCheck className='mr-4'/>Card Content</p>
        <p className='flex items-center my-2'><FaCheck className='mr-4'/>Card Content</p>
        <p className='flex items-center my-2'><FaCheck className='mr-4'/>Card Content</p>
        <p className='flex items-center'><FaCheck className='mr-4'/>Card Content</p>
    </CardContent>
    <CardFooter>
        <Button className='w-full cursor-pointer'>Iniciar plan PRO anual</Button>
    </CardFooter>
    </Card>
    </div>
    </main>
  )
}

export default PlanesPage