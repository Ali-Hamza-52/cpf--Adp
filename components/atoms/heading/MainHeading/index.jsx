import { cn } from '@/utils/Cn'
import React from 'react'

const MainHeading = ({text,classes}) => {
  return (
    <h1 className={cn('text-2xl md:text-4xl leading-9 font-bold md:leading-[54px]',classes)}>
      {text}
    </h1>

  )
}

export default MainHeading