"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
const router = useRouter()

  return (
    <div className="flex justify-center items-center p-3 h-full">
         <div className="w-1/3 mx-auto  mt-5">
             <h1 className="text-3xl font-black p-1 mb-2 ">Mobil<span className="text-orange-600">exo</span></h1>
             <p className="p-1 mb-2"> The best site to manage your store at the lowest cost and fastest completion</p>
             <Button className=""  >more</Button>
         </div>
    </div>
  );
}
