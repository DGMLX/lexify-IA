import React from 'react'

import { TbUserOff } from "react-icons/tb";

const NoRegisterDirectory = () => {
  return (
    <div className='mt-5'>
        <div className='flex justify-center'>
            <TbUserOff className='text-3xl text-center'/>
        </div>
        <p className='text-center leading-7 mt-3'>Inicia sesión y prueba la demo de Lexify con nuestro plan gratuito.</p>
    </div>
  )
}

export default NoRegisterDirectory