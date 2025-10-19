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
      <h1 className="text-center text-5xl md:text-8xl sm:px-6 font-thin leading-tight mt-20">
        Conoce los <span className="font-medium bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">planes</span> y sus <span className='font-medium'>características</span>.
      </h1>

      <Card className='mx-2 md:mx-20 lg:mx-72 my-10'>
        <CardContent className='text-center px-5 text-lg font-thin leading-8'>
          Con el modo gratuito, puedes traducir texto en varios idiomas y entender las bases detrás de cada frase.
          ¿Quieres ir más allá? El modo Pro y Premium te da acceso a traducciones ilimitadas, explicaciones profundas sobre gramática y contexto, ejemplos culturales, correcciones inteligentes y una experiencia sin límites, todo con la ayuda de nuestra IA lingüística.
        </CardContent>
        <div className='flex justify-center'>
          <Button className='w-5/6 sm:w-1/3 bg-gradient-lexify hover:bg-gradient-lexify-hover transition-all cursor-pointer'>
            <Link href="/demo" className='flex items-center text-lg'><RiRobot2Line className='text-2xl mr-2'/>Probar plan gratuito</Link>
          </Button>
        </div>
      </Card>

      <div className='flex flex-col px-5 md:px-0 sm:flex-row flex-wrap justify-center gap-7 mt-5'>
        {/* Card Gratis */}
        <Card className=' w-full md:w-1/2 lg:w-1/4 relative'>
          <CardHeader>
            <Badge variant="secondary">GRATIS</Badge>
            <CardTitle className='mt-2'>Lexify versión gratuita</CardTitle>
            <CardDescription className='text-5xl text-center mt-3'>$0</CardDescription>
            <hr className='mt-5'/>
          </CardHeader>
          <CardContent className='mb-14'>
            <p className='flex items-center'><FaCheck className='mr-4'/>Traducciones limitadas</p>
            <p className='flex items-center my-2'><FaCheck className='mr-4'/>Traducción básica de varios idiomas</p>
            <p className='flex items-center my-2'><FaCheck className='mr-4'/>Acceso a interfaz IA modo demo</p>
            <p className='flex items-center my-2'><FaCheck className='mr-4'/>Correción básica de errores gramaticales</p>
            <p className='flex items-center '><FaCheck className='mr-4'/>Historial limitado de conversaciones</p>
          </CardContent>
          <CardFooter className='absolute bottom-0 w-full mb-5'>
            <Button className='w-full cursor-pointer' variant="secondary" asChild>
              <Link href="/demo">Probar plan gratuito</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Card Pro */}
        <Card className='w-full md:w-1/2 lg:w-1/4  relative shadow-lg shadow-gray-500'>
          <CardHeader>
            <Badge>PRO</Badge>
            <CardTitle className='mt-2'>Lexify versión PRO mensual / anual</CardTitle>
            <CardDescription className='text-5xl text-center mt-3'>$5 <span className='text-2xl'>US</span></CardDescription>
            <hr className='mt-5'/>
          </CardHeader>
          <CardContent className='mb-14'>
            <p className='flex items-center'><FaCheck className='mr-4'/>Traducciones ilimitadas</p>
            <p className='flex items-center my-2'><FaCheck className='mr-4'/>Explicaciones detalladas de gramática y contexto</p>
            <p className='flex items-center my-2'><FaCheck className='mr-4'/>Ejemplos y recomendaciones de uso</p>
            <p className='flex items-center my-2'><FaCheck className='mr-4'/>Correciones y sugerencias de mejora</p>
            <p className='flex items-center'><FaCheck className='mr-4'/>Historial completo de conversaciones</p>
          </CardContent>
          <CardFooter className='absolute bottom-0 w-full mb-5 '>
            <Button className='w-full cursor-pointer'>Iniciar plan PRO</Button>
          </CardFooter>
        </Card>

        {/* Card Premium */}
        <Card className='w-full md:w-1/2 lg:w-1/4  relative shadow-xl shadow-gray-500'>
          <CardHeader>
            <Badge className='bg-gradient-lexify'>PREMIUM</Badge>
            <CardTitle className='mt-2'>Lexify versión PREMIUM mensual / anual</CardTitle>
            <CardDescription className='text-5xl text-center mt-3'>$8 <span className='text-2xl'>US</span></CardDescription>
            <hr className='mt-5'/>
          </CardHeader>
          <CardContent className='mb-14'>
            <p className='flex items-center'><FaCheck className='mr-4'/>Traducciones ilimitadas</p>
            <p className='flex items-center my-2'><FaCheck className='mr-4'/>Explicaciones detalladas de gramática y contexto</p>
            <p className='flex items-center my-2'><FaCheck className='mr-4'/>Ejemplos y recomendaciones de uso</p>
            <p className='flex items-center my-2'><FaCheck className='mr-4'/>Correciones y sugerencias de mejora</p>
            <p className='flex items-center my-2'><FaCheck className='mr-4'/>Historial completo de conversaciones</p>
            <p className='flex items-center my-2'><FaCheck className='mr-4'/>Exportaciones de PDF para traducciones</p>
            <p className='flex items-center my-2'><FaCheck className='mr-4'/>Traducción según perfil de formalidad</p>
            <p className='flex items-center'><FaCheck className='mr-4'/>Recomendaciones inteligentes según historial de uso</p>
          </CardContent>
          <CardFooter className='absolute bottom-0 w-full mb-5'>
            <Button className='w-full cursor-pointer bg-gradient-lexify hover:bg-gradient-lexify-hover transition-all'>Accede a funciones PREMIUM</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}

export default PlanesPage
