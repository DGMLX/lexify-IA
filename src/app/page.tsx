import { Button } from "@/components/ui/button";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="my-20">
      <div>
        <h1 className="text-center text-8xl px-56 font-thin leading-tight">Con <span className="font-medium bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">Lexify</span> traduce con inteligencia y comprende el sentido de cada frase.</h1>
        <div className="flex justify-center mt-5">
          <Button className="bg-gradient-lexify text-lg hover:bg-gradient-lexify-hover transition-all cursor-pointer ">
            <Link href="/planes">Más información</Link></Button>
        </div>
      </div>
    </main>
  );
}
