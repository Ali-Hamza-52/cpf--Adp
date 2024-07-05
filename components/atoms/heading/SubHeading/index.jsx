import { cn } from '@/utils/Cn'
import React from 'react'

const SubHeading = ({text,classes}) => {
  return (
    <h1 className={cn('text-xl md:text-2xl leading-7 font-bold',classes)}>{text}</h1>

  )
}

export default SubHeading
