'use client'

import React, { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'

import { IoAddSharp, IoArrowForwardCircleOutline } from 'react-icons/io5'
import { MdOutlineCancel } from "react-icons/md";

import SelectLanguages from '../chatTraductor/SelectLanguages'
import { crearDirectorio } from '@/actions/directorios/directory-action'
import { Input } from '../ui/input'
import { Label } from '../ui/label'


const CrearDirectorio = () => {

    const [error,setError] = useState<string | null>(null)
    const [titulo,setTitulo] = useState("")
    const [idiomaPrincipal,setIdiomaPrincipal] = useState("")
    const [idiomaTraduccion,setIdiomaTraduccion] = useState("")

    const creacionDeDirectorio = async() =>{
        if(idiomaPrincipal === "" || idiomaTraduccion === ""){
            return setError("Los campos de idioma son obligatorios.")
        }
        if(idiomaPrincipal === idiomaTraduccion){
            return setError("No puedes escoger idiomas iguales.")
        }
        await crearDirectorio(idiomaPrincipal,idiomaTraduccion,titulo)
        setError(null)
        setIdiomaPrincipal("")
        setIdiomaTraduccion("")
    }

  return (
     <Dialog>
          <DialogTrigger className="cursor-pointer my-4" asChild><Button className="cursor-pointer"><IoAddSharp className='text-xl'/>Crear directorio de traducción</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader>
                <DialogTitle>Crea tu entorno de traducción</DialogTitle>
                <DialogDescription>
                    Crea tu carpeta en donde se guardarán las traducciones según el idioma escogido.
                </DialogDescription>
            </DialogHeader>
            <div className='mx-2'>
                <Label className='mb-2'>Nombre de directorio <span className='text-gray-500'>(opcional)</span></Label>
                <DialogDescription className='mb-3'>
                        Si no escoges un nombre para tu directorio, por defecto se nombrará con lo seleccionado: Idioma principal - Idioma a traducir
                    </DialogDescription>
                <Input value={titulo} onChange={(e)=>setTitulo(e.target.value)} className='w-full' placeholder='Pon un nombre a tu directorio'/>
            </div>
            <div className="flex justify-around items-center">
                <div>
                    <p className=" mb-2">Idioma principal</p>
                    <SelectLanguages setIdioma={setIdiomaPrincipal} />
                </div>
                <IoArrowForwardCircleOutline className="text-2xl"/>
                <div>
                    <p className=" mb-2">Idioma a traducir</p>                    
                    <SelectLanguages setIdioma={setIdiomaTraduccion}/>
                </div>
            </div>
            {
                error && <p className='text-red-500  px-5 flex items-center'><MdOutlineCancel className='text-lg mr-2'/>{error}</p>
            }
            <DialogFooter className="mt-2">
                <DialogClose asChild>
                    <Button variant="secondary" className='cursor-pointer'>Cancelar</Button>
                </DialogClose>
                <Button onClick={()=>creacionDeDirectorio()} className='cursor-pointer'>Crear</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
  )
}

export default CrearDirectorio