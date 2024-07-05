import SubHeading from '@/components/atoms/heading/SubHeading'
import UserImage from '@/components/atoms/images/UserImage'
import Link from 'next/link'
import React from 'react'
import ali from '@/public/ali.png'
import NormalParagraph from '@/components/atoms/paragraph/NormalParagraph'
import NavigationLink from '@/components/atoms/links/NavigationLink'

const authors=[
    {
        image:ali,
        name:'Ali Hamza',
        desc:"Founder of azwebdevelopor"
    },
    {
        image:ali,
        name:'Ali Hamza',
        desc:"Founder of azwebdevelopor"
    },
    {
        image:ali,
        name:'Ali Hamza',
        desc:"Founder of azwebdevelopor"
    },
    {
        image:ali,
        name:'Ali Hamza',
        desc:"Founder of azwebdevelopor"
    }
]

const EasyDetailAuthorSection = () => {
  return (
    <div className='w-full'>
        <div className='flex justify-between'>
            <SubHeading text="Top Authors"/>
            <Link href={""} className='text-blue-600 text-sm'>
                View All
            </Link>
        </div>

        {
            authors.map((author, index) => (
                <div key={index} className='flex mb-3 gap-2 justify-between items-center'>
                    <UserImage src={author.image} classes="h-9 w-9 " />
                    <div>
                        <SubHeading subHeading={author.name} classes="text-center"/>
                        <NormalParagraph text={author.desc} classes="text-gray-700 line-clamp-1"/>
                    </div>
                    <NavigationLink text="View Articles" href="/" classes=""/>
                </div>
            ))
        }
        {/* <div className='flex justify-between gap-2 items-center'>
            <UserImage src={ali} classes="h-9 w-9" />
            <div>
                <SubHeading text="Ali Hamza"/>
                <NormalParagraph text="Founder of Howfive" classes="text-gray-700"/>
            </div>
            <NavigationLink text="View Articles" href="/" classes=""/>
        </div> */}
      
    </div>
  )
}

export default EasyDetailAuthorSection
