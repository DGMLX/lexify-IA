import React from 'react'

import { RiRobot2Line } from "react-icons/ri";


import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const PlanesPage = () => {
  return (
    <>
     <h1 className="text-center text-5xl   md:text-8xl sm:px-56 font-thin leading-tight mt-20">Conoce los <span className="font-medium bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">planes</span> y sus <span className='font-medium'>características</span>.</h1>
     <Card className='mx-2 md:mx-20 lg:mx-72   my-10'>
        <CardContent className='text-center px-5 text-lg font-thin leading-8'>
            Con el modo gratuito, puedes traducir texto en varios idiomas y entender las bases detrás de cada frase.
            ¿Quieres ir más allá? El modo Pro te da acceso a traducciones ilimitadas, explicaciones profundas sobre gramática y contexto, ejemplos culturales, correcciones inteligentes y una experiencia sin límites, todo con la ayuda de nuestra IA lingüística.
        </CardContent>
        <div className='flex justify-center'>
            <Button className='w-5/6 sm:w-1/3 bg-gradient-lexify  hover:bg-gradient-lexify-hover transition-all cursor-pointer'><Link href="/traductor"  className='flex items-center text-lg'><RiRobot2Line className='text-2xl mr-2'/>Probar plan gratuito</Link></Button>
        </div>
     </Card>
    <div className='flex justify-center gap-7 mt-5'>

        <Card className='w-1/3'>
    <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
    </CardHeader>
    <CardContent>
        <p>Card Content</p>
    </CardContent>
    <CardFooter>
        <p>Card Footer</p>
    </CardFooter>
    </Card>

    
        <Card className='w-1/3'>
    <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
    </CardHeader>
    <CardContent>
        <p>Card Content</p>
    </CardContent>
    <CardFooter>
        <p>Card Footer</p>
    </CardFooter>
    </Card>
    </div>
    </>
  )
}

export default PlanesPage