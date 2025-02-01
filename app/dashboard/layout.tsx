"use client"
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ProjectMobile } from "@/db";
import { useEffect } from "react";
import ProviderComponent from "../_lib/providers/ProviderComponent";
import CartStore from "@/components/products/CartStore";



// export const metadata: Metadata = {
//   title: "dashboard",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(()=>{
localStorage.setItem("projects",JSON.stringify(ProjectMobile))

  },[])
  return (
    <ProviderComponent>
    <div>
     
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-5">
        <div>
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        </div>

         <div className="grow"></div>

      <CartStore />
        
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 ">

          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
    </div>
    </ProviderComponent>
  );
}
