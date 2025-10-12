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
          <DialogTrigger className="cursor-pointer" asChild><Button className="cursor-pointer">Crear conversación</Button></DialogTrigger>
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
                        <SelectContent>
                            <SelectItem value="afrikaans">Afrikaans</SelectItem>
                            <SelectItem value="albanes">Albanés</SelectItem>
                            <SelectItem value="aleman">Alemán</SelectItem>
                            <SelectItem value="amharico">Amhárico</SelectItem>
                            <SelectItem value="arabe">Árabe</SelectItem>
                            <SelectItem value="armenio">Armenio</SelectItem>
                            <SelectItem value="azerbaiyano">Azerbaiyano</SelectItem>
                            <SelectItem value="bengali">Bengalí</SelectItem>
                            <SelectItem value="bielorruso">Bielorruso</SelectItem>
                            <SelectItem value="birmano">Birmano</SelectItem>
                            <SelectItem value="bosnio">Bosnio</SelectItem>
                            <SelectItem value="bulgaro">Búlgaro</SelectItem>
                            <SelectItem value="catalan">Catalán</SelectItem>
                            <SelectItem value="cebuano">Cebuano</SelectItem>
                            <SelectItem value="checo">Checo</SelectItem>
                            <SelectItem value="chino">Chino (Mandarín)</SelectItem>
                            <SelectItem value="coreano">Coreano</SelectItem>
                            <SelectItem value="croata">Croata</SelectItem>
                            <SelectItem value="danes">Danés</SelectItem>
                            <SelectItem value="eslovaco">Eslovaco</SelectItem>
                            <SelectItem value="esloveno">Esloveno</SelectItem>
                            <SelectItem value="español">Español</SelectItem>
                            <SelectItem value="estonio">Estonio</SelectItem>
                            <SelectItem value="filipino">Filipino</SelectItem>
                            <SelectItem value="finlandes">Finlandés</SelectItem>
                            <SelectItem value="frances">Francés</SelectItem>
                            <SelectItem value="gallego">Gallego</SelectItem>
                            <SelectItem value="georgiano">Georgiano</SelectItem>
                            <SelectItem value="griego">Griego</SelectItem>
                            <SelectItem value="guarani">Guaraní</SelectItem>
                            <SelectItem value="gujarati">Gujarati</SelectItem>
                            <SelectItem value="haitiano">Haitiano</SelectItem>
                            <SelectItem value="hausa">Hausa</SelectItem>
                            <SelectItem value="hebreo">Hebreo</SelectItem>
                            <SelectItem value="hindi">Hindi</SelectItem>
                            <SelectItem value="holandes">Holandés</SelectItem>
                            <SelectItem value="hungaro">Húngaro</SelectItem>
                            <SelectItem value="indonesio">Indonesio</SelectItem>
                            <SelectItem value="ingles">Inglés</SelectItem>
                            <SelectItem value="irlandes">Irlandés</SelectItem>
                            <SelectItem value="islandes">Islandés</SelectItem>
                            <SelectItem value="italiano">Italiano</SelectItem>
                            <SelectItem value="japones">Japonés</SelectItem>
                            <SelectItem value="javanes">Javanés</SelectItem>
                            <SelectItem value="kazajo">Kazajo</SelectItem>
                            <SelectItem value="khmer">Khmer</SelectItem>
                            <SelectItem value="kirguis">Kirguis</SelectItem>
                            <SelectItem value="lao">Lao</SelectItem>
                            <SelectItem value="latin">Latín</SelectItem>
                            <SelectItem value="leton">Letón</SelectItem>
                            <SelectItem value="lituano">Lituano</SelectItem>
                            <SelectItem value="macedonio">Macedonio</SelectItem>
                            <SelectItem value="malayo">Malayo</SelectItem>
                            <SelectItem value="malgache">Malgache</SelectItem>
                            <SelectItem value="malayalam">Malayalam</SelectItem>
                            <SelectItem value="maltés">Maltés</SelectItem>
                            <SelectItem value="marathi">Marathi</SelectItem>
                            <SelectItem value="mongol">Mongol</SelectItem>
                            <SelectItem value="nepali">Nepalí</SelectItem>
                            <SelectItem value="noruego">Noruego</SelectItem>
                            <SelectItem value="oriya">Oriya</SelectItem>
                            <SelectItem value="pashto">Pashto</SelectItem>
                            <SelectItem value="persa">Persa (Farsi)</SelectItem>
                            <SelectItem value="polaco">Polaco</SelectItem>
                            <SelectItem value="portugues">Portugués</SelectItem>
                            <SelectItem value="punjabi">Punjabi</SelectItem>
                            <SelectItem value="quechua">Quechua</SelectItem>
                            <SelectItem value="rumano">Rumano</SelectItem>
                            <SelectItem value="ruso">Ruso</SelectItem>
                            <SelectItem value="samoano">Samoano</SelectItem>
                            <SelectItem value="serbio">Serbio</SelectItem>
                            <SelectItem value="sesotho">Sesotho</SelectItem>
                            <SelectItem value="sinhala">Sinhala</SelectItem>
                            <SelectItem value="somali">Somalí</SelectItem>
                            <SelectItem value="suajili">Suajili</SelectItem>
                            <SelectItem value="sueco">Sueco</SelectItem>
                            <SelectItem value="tailandes">Tailandés</SelectItem>
                            <SelectItem value="tamil">Tamil</SelectItem>
                            <SelectItem value="telugu">Telugu</SelectItem>
                            <SelectItem value="turco">Turco</SelectItem>
                            <SelectItem value="ucraniano">Ucraniano</SelectItem>
                            <SelectItem value="urdu">Urdu</SelectItem>
                            <SelectItem value="uzbeko">Uzbeko</SelectItem>
                            <SelectItem value="vietnamita">Vietnamita</SelectItem>
                            <SelectItem value="xhosa">Xhosa</SelectItem>
                            <SelectItem value="yoruba">Yoruba</SelectItem>
                            <SelectItem value="zulú">Zulú</SelectItem>
                        </SelectContent>

                    </Select>
                </div>
                <IoArrowForwardCircleOutline className="text-2xl"/>
                <div>
                    <p className=" mb-2">Idioma a traducir</p>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Idioma" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="afrikaans">Afrikaans</SelectItem>
                            <SelectItem value="albanes">Albanés</SelectItem>
                            <SelectItem value="aleman">Alemán</SelectItem>
                            <SelectItem value="amharico">Amhárico</SelectItem>
                            <SelectItem value="arabe">Árabe</SelectItem>
                            <SelectItem value="armenio">Armenio</SelectItem>
                            <SelectItem value="azerbaiyano">Azerbaiyano</SelectItem>
                            <SelectItem value="bengali">Bengalí</SelectItem>
                            <SelectItem value="bielorruso">Bielorruso</SelectItem>
                            <SelectItem value="birmano">Birmano</SelectItem>
                            <SelectItem value="bosnio">Bosnio</SelectItem>
                            <SelectItem value="bulgaro">Búlgaro</SelectItem>
                            <SelectItem value="catalan">Catalán</SelectItem>
                            <SelectItem value="cebuano">Cebuano</SelectItem>
                            <SelectItem value="checo">Checo</SelectItem>
                            <SelectItem value="chino">Chino (Mandarín)</SelectItem>
                            <SelectItem value="coreano">Coreano</SelectItem>
                            <SelectItem value="croata">Croata</SelectItem>
                            <SelectItem value="danes">Danés</SelectItem>
                            <SelectItem value="eslovaco">Eslovaco</SelectItem>
                            <SelectItem value="esloveno">Esloveno</SelectItem>
                            <SelectItem value="español">Español</SelectItem>
                            <SelectItem value="estonio">Estonio</SelectItem>
                            <SelectItem value="filipino">Filipino</SelectItem>
                            <SelectItem value="finlandes">Finlandés</SelectItem>
                            <SelectItem value="frances">Francés</SelectItem>
                            <SelectItem value="gallego">Gallego</SelectItem>
                            <SelectItem value="georgiano">Georgiano</SelectItem>
                            <SelectItem value="griego">Griego</SelectItem>
                            <SelectItem value="guarani">Guaraní</SelectItem>
                            <SelectItem value="gujarati">Gujarati</SelectItem>
                            <SelectItem value="haitiano">Haitiano</SelectItem>
                            <SelectItem value="hausa">Hausa</SelectItem>
                            <SelectItem value="hebreo">Hebreo</SelectItem>
                            <SelectItem value="hindi">Hindi</SelectItem>
                            <SelectItem value="holandes">Holandés</SelectItem>
                            <SelectItem value="hungaro">Húngaro</SelectItem>
                            <SelectItem value="indonesio">Indonesio</SelectItem>
                            <SelectItem value="ingles">Inglés</SelectItem>
                            <SelectItem value="irlandes">Irlandés</SelectItem>
                            <SelectItem value="islandes">Islandés</SelectItem>
                            <SelectItem value="italiano">Italiano</SelectItem>
                            <SelectItem value="japones">Japonés</SelectItem>
                            <SelectItem value="javanes">Javanés</SelectItem>
                            <SelectItem value="kazajo">Kazajo</SelectItem>
                            <SelectItem value="khmer">Khmer</SelectItem>
                            <SelectItem value="kirguis">Kirguis</SelectItem>
                            <SelectItem value="lao">Lao</SelectItem>
                            <SelectItem value="latin">Latín</SelectItem>
                            <SelectItem value="leton">Letón</SelectItem>
                            <SelectItem value="lituano">Lituano</SelectItem>
                            <SelectItem value="macedonio">Macedonio</SelectItem>
                            <SelectItem value="malayo">Malayo</SelectItem>
                            <SelectItem value="malgache">Malgache</SelectItem>
                            <SelectItem value="malayalam">Malayalam</SelectItem>
                            <SelectItem value="maltés">Maltés</SelectItem>
                            <SelectItem value="marathi">Marathi</SelectItem>
                            <SelectItem value="mongol">Mongol</SelectItem>
                            <SelectItem value="nepali">Nepalí</SelectItem>
                            <SelectItem value="noruego">Noruego</SelectItem>
                            <SelectItem value="oriya">Oriya</SelectItem>
                            <SelectItem value="pashto">Pashto</SelectItem>
                            <SelectItem value="persa">Persa (Farsi)</SelectItem>
                            <SelectItem value="polaco">Polaco</SelectItem>
                            <SelectItem value="portugues">Portugués</SelectItem>
                            <SelectItem value="punjabi">Punjabi</SelectItem>
                            <SelectItem value="quechua">Quechua</SelectItem>
                            <SelectItem value="rumano">Rumano</SelectItem>
                            <SelectItem value="ruso">Ruso</SelectItem>
                            <SelectItem value="samoano">Samoano</SelectItem>
                            <SelectItem value="serbio">Serbio</SelectItem>
                            <SelectItem value="sesotho">Sesotho</SelectItem>
                            <SelectItem value="sinhala">Sinhala</SelectItem>
                            <SelectItem value="somali">Somalí</SelectItem>
                            <SelectItem value="suajili">Suajili</SelectItem>
                            <SelectItem value="sueco">Sueco</SelectItem>
                            <SelectItem value="tailandes">Tailandés</SelectItem>
                            <SelectItem value="tamil">Tamil</SelectItem>
                            <SelectItem value="telugu">Telugu</SelectItem>
                            <SelectItem value="turco">Turco</SelectItem>
                            <SelectItem value="ucraniano">Ucraniano</SelectItem>
                            <SelectItem value="urdu">Urdu</SelectItem>
                            <SelectItem value="uzbeko">Uzbeko</SelectItem>
                            <SelectItem value="vietnamita">Vietnamita</SelectItem>
                            <SelectItem value="xhosa">Xhosa</SelectItem>
                            <SelectItem value="yoruba">Yoruba</SelectItem>
                            <SelectItem value="zulú">Zulú</SelectItem>
                        </SelectContent>

                    </Select>
                </div>
            </div>
            <DialogFooter className="mt-2">
                <DialogClose asChild>
                    <Button variant="outline">Cancelar</Button>
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