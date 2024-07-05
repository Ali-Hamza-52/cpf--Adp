import React from 'react'
import Image from 'next/image'
import { cn } from '@/utils/Cn'

const UserImage = ({ src, classes }) => {
  return (
    <Image className={cn('rounded-full max-w-28 max-h-28 object-fill', classes)} src={src} alt="User" />
  )
}

export default UserImage
