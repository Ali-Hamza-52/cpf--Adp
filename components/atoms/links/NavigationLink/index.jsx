import React from 'react'
import Link from 'next/link'
import { cn } from '@/utils/Cn'
const NavigationLink = ({href , text , classes}) => {
  return (
    <Link href={href} className={cn("px-3 py-2 text-xs inline-block h-8 text-center text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300",classes)}>
      {text}      
    </Link>
  )
}

export default NavigationLink
