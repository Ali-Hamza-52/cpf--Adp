import SubHeading from '@/components/atoms/heading/SubHeading'
import Feedback from '@/components/molecules/Feeback'
import React from 'react'

const EasyOutline = () => {
  return (
    <div className='bg-[#f8fafc] p-8 rounded-xl my-2'>
      <SubHeading text="Outline" classes="py-4" />

      <SubHeading text="1-  Introduction" classes="text-gray-700" />
      <ul className='max-w-md space-y-1 px-4 text-gray-500 list-disc list-inside '>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>

      <Feedback/>      
    </div>
  )
}

export default EasyOutline
