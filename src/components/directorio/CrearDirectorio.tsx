import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { Select, SelectTrigger, SelectValue } from '../ui/select'
import { IoAddSharp, IoArrowForwardCircleOutline } from 'react-icons/io5'
import SelectLanguages from '../chatTraductor/SelectLanguages'

const CrearDirectorio = () => {
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
            <div className="flex justify-around items-center">
                <div>
                    <p className=" mb-2">Idioma principal</p>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Idioma" />
                        </SelectTrigger>
                        <SelectLanguages/>

                    </Select>
                </div>
                <IoArrowForwardCircleOutline className="text-2xl"/>
                <div>
                    <p className=" mb-2">Idioma a traducir</p>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Idioma" />
                        </SelectTrigger>
                        <SelectLanguages/>

                    </Select>
                </div>
            </div>
            <DialogFooter className="mt-2">
                <DialogClose asChild>
                    <Button variant="secondary">Cancelar</Button>
                </DialogClose>
                <Button>Crear</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
  )
}

export default CrearDirectorio