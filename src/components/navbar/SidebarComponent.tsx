'use client'

import React, { useState } from 'react'

import { CgArrowsScrollV } from "react-icons/cg";
import { CiTrash } from "react-icons/ci";
import { IoAddSharp } from "react-icons/io5";



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
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Badge } from '../ui/badge'
import Link from 'next/link'
import EmptyConversations from '../chatTraductor/EmptyConversations'
import Image from 'next/image'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '../ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Select, SelectTrigger, SelectValue } from '../ui/select';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import SelectLanguages from '../chatTraductor/SelectLanguages';
import { useSession } from 'next-auth/react';
import NoRegisterDirectory from './NoRegisterDirectory';
import CrearDirectorio from '../directorio/CrearDirectorio';
import ListaDirectorios from '../directorio/ListaDirectorios';




const SidebarComponent = () => {

  const session = useSession()
  console.log(session)

  const conversaciones = true;


   return (
    <Sidebar className='' collapsible='offcanvas'>
      <SidebarHeader>
          <SidebarMenu className='py-[17px]'>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/" className='py-5'>
                                <Image src="/logo.png" alt="logotipo" width={50} height={50}/>
                                <span>Lexify</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
      </SidebarHeader>
    <hr />
      <SidebarContent>

        <SidebarGroup>
          {
            !session.data ? (
                  <SidebarGroupLabel><Badge variant="secondary">Usuario no autenticado</Badge></SidebarGroupLabel>
            ) : (
              <>
                <SidebarGroupLabel><Badge variant="secondary">Plan gratuito</Badge></SidebarGroupLabel>
              </>
            )
            
          }
          <SidebarGroupContent>
            <SidebarMenu>
              {
                !session.data ? (
                  <NoRegisterDirectory/>
                ) :


                !conversaciones ? (
                  <SidebarMenuItem>
                    <EmptyConversations/>
                  </SidebarMenuItem>
                ) :
                (
                  <>
                  <CrearDirectorio/>
                  <ListaDirectorios/>
                  </>
                )
              }
             
            </SidebarMenu>
          </SidebarGroupContent>
        
        </SidebarGroup>
        

      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default SidebarComponent



