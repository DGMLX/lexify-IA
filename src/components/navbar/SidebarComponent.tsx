'use client'

import React, { useState } from 'react'

import { CgArrowsScrollV } from "react-icons/cg";
import { CiTrash } from "react-icons/ci";
import { IoAddSharp } from "react-icons/io5";



import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Badge } from '../ui/badge'
import Link from 'next/link'
import EmptyConversations from '../chatTraductor/EmptyConversations'
import Image from 'next/image'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '../ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Select, SelectTrigger, SelectValue } from '../ui/select';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import SelectLanguages from '../chatTraductor/SelectLanguages';




const SidebarComponent = () => {

  const conversaciones = false;
  const [ isOpen,setIsOpen] = useState(false);
  const [ isOpen2,setIsOpen2] = useState(false);

   return (
    <Sidebar className='' collapsible='offcanvas'>
      <SidebarHeader>
          <SidebarMenu className='py-[17px]'>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/" className='py-5'>
                                <Image src="/logo.png" alt="logotipo" width={50} height={50}/>
                                <span>Lexify</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
      </SidebarHeader>
    <hr />
      <SidebarContent>

        <SidebarGroup>
          <SidebarGroupLabel><Badge variant="secondary">Plan básico</Badge></SidebarGroupLabel>
          
          
          <SidebarGroupContent>
            <SidebarMenu>
              {
                !conversaciones ? (
                  <SidebarMenuItem>
                    <EmptyConversations/>
                  </SidebarMenuItem>
                ) :
                (
                  <>
                  <Dialog >
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
                  <Collapsible
                    open={isOpen}
                    onOpenChange={setIsOpen}
                    className="flex w-full flex-col gap-2 mt-3"
                    >
                    <div className="flex items-center justify-between gap-4 px-4">
                      <div className='flex'>

                        <h4 className="text-sm font-semibold">
                          Español - Inglés
                        </h4>
                      
                      </div>
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
                     <div className="rounded-md border px-4 py-1 text-sm">
                      Traducción de historia...
                    </div>
                      <div className="rounded-md border px-4 py-1  text-sm">
                        Verbo to be pasado...
                      </div>
                      <div className="rounded-md border px-4 py-1 text-sm">
                        Prueba escrita inglés...
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                  
                  
                  <Collapsible
                    open={isOpen2}
                    onOpenChange={setIsOpen2}
                    className="flex w-full flex-col gap-2 mt-3"
                  >
                    <div className="flex items-center justify-between gap-4 px-4">
                      <h4 className="text-sm font-semibold">
                        Español - Francés
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


                  </>
                )
              }
             
            </SidebarMenu>
          </SidebarGroupContent>
        
        </SidebarGroup>
        

      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default SidebarComponent



