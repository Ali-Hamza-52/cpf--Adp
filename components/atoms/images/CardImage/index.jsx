import { cn } from '@/utils/Cn'
import Image from 'next/image'
import React from 'react'

const CardImage = ({ src, classes }) => {
  return (
    <Image className={cn('rounded-2xl w-[207px] h-[149px] object-cover bg-blue-100', classes)} src={src} alt="User" />
  )
}

export default CardImage
