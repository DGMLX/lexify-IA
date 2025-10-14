import { Button } from "@/components/ui/button";

import Link from "next/link";

import { IoArrowRedoOutline } from "react-icons/io5";



export default function Home() {
  return (
    <main className="my-20">
      <div>
        <h1 className="text-center text-5xl sm:text-8xl sm:px-56 font-thin leading-tight">Con <span className="font-medium bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">Lexify</span> traduce con <span className="font-medium">inteligencia</span> y comprende el sentido de cada frase.</h1>
        <div className="flex justify-center mt-5">
          <Button className="bg-gradient-lexify text-lg hover:bg-gradient-lexify-hover transition-all cursor-pointer ">
            <Link href="/planes" className="flex items-center"><IoArrowRedoOutline className="text-2xl  mr-2"/>Más información</Link></Button>
        </div>
      </div>
    </main>
  );
}
