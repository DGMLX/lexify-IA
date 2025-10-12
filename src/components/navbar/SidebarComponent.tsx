'use client'

import React from 'react'
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"


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
} from "@/components/ui/sidebar"
import { Badge } from '../ui/badge'
import Link from 'next/link'
import EmptyConversations from '../chatTraductor/EmptyConversations'

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
 
]


const SidebarComponent = () => {
   return (
    <Sidebar className='mt-[91px]' collapsible='offcanvas'>
      <SidebarHeader />
      <SidebarContent>

        <SidebarGroup>
          <SidebarGroupLabel><Badge variant="secondary">Plan básico</Badge></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* {items.map((item)=>(
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href="/#">
                      <item.icon/>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))} */}
              <SidebarMenuItem>
                <EmptyConversations/>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        
        </SidebarGroup>
        

      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default SidebarComponent




