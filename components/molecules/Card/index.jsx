import CardImage from '@/components/atoms/images/CardImage'
import React from 'react'
import ali from "@/public/ali.png"
import SubHeading from '@/components/atoms/heading/SubHeading'
import CardParagraph from '@/components/atoms/paragraph/CardParagraph'
import UserImage from '@/components/atoms/images/UserImage'
import NormalParagraph from '@/components/atoms/paragraph/NormalParagraph'

let randomText ="You can get nearly complete dietary protein from plant sources like grains, seeds, and meat substitutes. A food must contain all nine essential amino acids to be a complete protein source."

const Card = () => {
  return (
    <div className='flex gap-4 mt-3'>
      <CardImage src={ali} />
      <div className='flex flex-col gap-5'>
        <SubHeading text="13 Complete Protein Sources for Vegetarians" />
        <CardParagraph text={randomText}/>
        
        <div className='flex gap-4 items-center'>
          <UserImage src={ali} classes="max-h-9 max-w-9 rounded-full" />
          <NormalParagraph text="Ali Hamza" classes="text-gray-600" />
          <NormalParagraph text="July 3, 2024" classes="text-gray-600"/>
        </div>

      </div>
    </div>
  )
}

export default Card
