import MainHeading from '@/components/atoms/heading/MainHeading'
import SubHeading from '@/components/atoms/heading/SubHeading'
import NavigationLink from '@/components/atoms/links/NavigationLink'
import NormalParagraph from '@/components/atoms/paragraph/NormalParagraph'
import React from 'react'

const AdvertismentAds = () => {
    return (
        <>
            <div className='bg-[#f9f9f9] mt-2 p-8 rounded-t-2xl flex flex-col items-center'>
                <NormalParagraph text="Advertisment" classes="self-start" />
                <SubHeading text="Heading of the ad goes here" classes="self-start"/>
                <NormalParagraph text="Some text goes here" classes="text-gray-600 self-start"/>

                <NavigationLink href="/" text="Explore the course" classes="inline" />
            </div>
            <div className='bg-[#ebf3f9] px-8 py-3 flex justify-between items-center rounded-b-2xl'>
                <MainHeading mainHeading="CPF" classes="text-blue-600 uppercase"  />
                <NormalParagraph text="Advertise with us" />
            </div>
        </>
    )
}

export default AdvertismentAds