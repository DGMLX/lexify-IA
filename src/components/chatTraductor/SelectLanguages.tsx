import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

type Props = {
  setIdioma: React.Dispatch<React.SetStateAction<string>>;
};

const SelectLanguages = ({ setIdioma }: Props) => {
  return (
    <Select onValueChange={(value) => setIdioma(value)}>
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
  )
}

export default SelectLanguages