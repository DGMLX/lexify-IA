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
import CrearDirectorio from "../directorio/CrearDirectorio";

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
      <CrearDirectorio/>
      </EmptyContent>
    
    </Empty>
  )
}

export default EmptyConversations