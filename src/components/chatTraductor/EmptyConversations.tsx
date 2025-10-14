'use client'

import { RiChatOffLine } from "react-icons/ri";
import { IoArrowForwardCircleOutline } from "react-icons/io5";


import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import SelectLanguages from "./SelectLanguages";

const EmptyConversations=()=> {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <RiChatOffLine />
        </EmptyMedia>
        <EmptyTitle>No hay conversaciones</EmptyTitle>
        <EmptyDescription>
            No hay registro de conversaciones. Crea tu primera interacción.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Dialog>
          <DialogTrigger className="cursor-pointer" asChild><Button className="cursor-pointer">Crear directorio de traducción</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader>
                <DialogTitle>Crea tu entorno de traducción</DialogTitle>
                <DialogDescription>
                    Crea tu carpeta en donde se guardarán las traducciones según el idioma escogido.
                </DialogDescription>
            </DialogHeader>
            <div className="flex justify-around items-center">
                <div>
                    <p className="text-sm sm:text-md mb-2">Idioma principal</p>
                    <Select>
                        <SelectTrigger className="w-[100px] md:w-[180px]">
                            <SelectValue placeholder="Idioma" />
                        </SelectTrigger>
                        <SelectLanguages/>

                    </Select>
                </div>
                <IoArrowForwardCircleOutline className="text-2xl"/>
                <div>
                    <p className="text-sm sm:text-md mb-2">Idioma a traducir</p>
                    <Select>
                        <SelectTrigger className="w-[100px] md:w-[180px]">
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
      </EmptyContent>
    
    </Empty>
  )
}

export default EmptyConversations