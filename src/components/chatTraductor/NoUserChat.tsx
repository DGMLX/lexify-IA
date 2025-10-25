import React from 'react'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '../ui/empty'
import { TbUserOff } from 'react-icons/tb'

const NoUserChat = () => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <TbUserOff />
        </EmptyMedia>
        <EmptyTitle>Usuario no autenticado</EmptyTitle>
        <EmptyDescription>
            Inicia sesión y prueba las funcionalidades de nuestro plan gratis de Lexify.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}

export default NoUserChat