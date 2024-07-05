import { cn } from '@/utils/Cn'
import React from 'react'

const NormalParagraph = ({ text,classes }) => {
    return (
        <p className={cn('text-sm text-gray-900 font-normal',classes)}>
            {text}
        </p>
    )
}

export default NormalParagraph
