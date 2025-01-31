"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"
import { useAppDispatch } from "@/redux/hooks"
import { HandleChangeCategory } from "@/redux/ProductSlice"
import { useRouter } from "next/navigation"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string 
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const Dispatch = useAppDispatch()
  const router = useRouter()
  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton 
                onClick={()=>{
                  router.push(item.url)
                }}
                tooltip={item.title}>
                  {  item.icon&& <item.icon />}
                  <span>{item.title}</span>
                  { (item.items&&item.items?.length >= 1 ) &&<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />}
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                <RadioGroup onValueChange={(e:any)=> Dispatch(HandleChangeCategory(e))} className="accent-purple-500" defaultValue="all category">
                  {(item.items&&item.items?.length >= 1 )? item.items?.map((subItem,idx) => (
                     <div key={idx} className="flex items-center space-x-2">
                       <RadioGroupItem  value={subItem.title} id={`r${idx}`} />
                       <Label htmlFor={`r${idx}`}>{subItem.title}</Label>
                     </div>
                    
                  )):<></>}
                  
                  </RadioGroup>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
