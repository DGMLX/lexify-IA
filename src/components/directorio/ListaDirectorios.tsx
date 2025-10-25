'use client'

import { obtenerDirectorios } from '@/actions/directorios/directory-action';
import React, { useEffect, useState } from 'react'
import { IoCreateOutline } from "react-icons/io5";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { Button } from '../ui/button';
import { CgArrowsScrollV } from 'react-icons/cg';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import { CiTrash } from 'react-icons/ci';

type directorioDBType = {
     id: string,
    lenguaje_principal: string,
    lenguaje_traducir: string,
    nombre: string,
    created_at: Date,
    userId: string
}

const ListaDirectorios = () => {
  
    const [directorios,setDirectorios] = useState<directorioDBType[]>([])
    const [ isOpen,setIsOpen] = useState(false);
    const [ isOpen2,setIsOpen2] = useState(false);
    useEffect(()=>{
        const obtenerDirectoriosDB = async()=>{
            const directoriosDB = await obtenerDirectorios() 
            setDirectorios(directoriosDB.directorios || [])  
        }
        obtenerDirectoriosDB()
    },[])
    return(
        directorios.length === 0 ? (
            <>  
                <div className='flex justify-center mt-3'>
                    <IoCreateOutline className='text-2xl'/>
                </div>
                <p className='text-center '>Crea tu primer directorio de traducción.</p>
            </>
        ) : (
            directorios.map((direct:directorioDBType)=>(
                 <Collapsible
                    open={isOpen2}
                    onOpenChange={setIsOpen2}
                    className="flex w-full flex-col gap-2 mt-3"
                  >
                    <div className="flex items-center justify-between gap-4 px-4">
                      <h4 className="text-sm font-semibold">
                        {direct.nombre}
                      </h4>
                      <div className='flex'>

                      <CollapsibleTrigger asChild>
                        <Button  size="icon" variant="secondary" className="size-7">
                          <CgArrowsScrollV/>
                          <span className="sr-only">Toggle</span>
                        </Button>
                      </CollapsibleTrigger>
                       <AlertDialog>
                          <AlertDialogTrigger className='ml-2'><CiTrash className='text-xl'/></AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>¿Estás seguro de eliminar el directorio?</AlertDialogTitle>
                              <AlertDialogDescription>
                                Se eliminará todo el historial de conversaciones guardado. Se eliminará permanentemente de tu cuenta y no podrás recuperarlo.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction>Eliminar</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                   
                    <CollapsibleContent className="flex flex-col gap-2">
                     <div className="rounded-md border px-4 py-1  text-sm">
                      Historia de Francia...
                    </div>
                      <div className="rounded-md border px-4 py-1 text-sm">
                        Verbo to be pasado...
                      </div>
                      <div className="rounded-md border px-4 py-1 text-sm">
                        Prueba escrita Francés...
                      </div>
                    </CollapsibleContent>
                  </Collapsible> 
            ))
        )
    )

}

export default ListaDirectorios