import React from 'react'
import Image from 'next/image'
import { cn } from '@/utils/Cn'

const BannerImage =({ src, classes }) => {
  return (
    <Image className={cn('w-[750px] h-[450px] rounded-2xl object-contain bg-blue-100', classes)} src={src} alt="User" />
  )
}

export default BannerImage
