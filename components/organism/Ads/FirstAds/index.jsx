import SubHeading from '@/components/atoms/heading/SubHeading'
import NormalParagraph from '@/components/atoms/paragraph/NormalParagraph'
import React from 'react'

const FirstAds = () => {
  return (
    <div className='bg-[#60a5fa] text-center rounded-2xl my-2'>
        <SubHeading text="Ads" classes="text-white pt-4" />
        <NormalParagraph text="Agriculture has been the backbone of human sustenance since the dawn of civilization,
providing the vital link between the soil beneath his feet and the nourishment on his plate. As" classes="text-white p-8"/>
    </div>
  )
}

export default FirstAds
