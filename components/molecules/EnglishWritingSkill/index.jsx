import Icons from '@/components/atoms/Icons'
import SubHeading from '@/components/atoms/heading/SubHeading'
import NavigationLink from '@/components/atoms/links/NavigationLink'
import NormalParagraph from '@/components/atoms/paragraph/NormalParagraph'
import socialIcon from '@/icons/socialIcon'
import React from 'react'

const EnglishWritingSkill = () => {
    return (
        <div className='bg-[#f9f9f9] p-9 flex items-center gap-6'>
            <Icons icon={socialIcon.edit} />
            <div className='flex flex-col gap-5'>
                <SubHeading text="Looking To Learn English Writing Skills?" />
                <NormalParagraph text="Sir Syed Kazim Ali helps you Learn writing skills to qualify for an exam or get
                global recognition." classes="text-gray-600" />
                <NavigationLink href="/" text="Explore the Course" classes="" />
            </div>

        </div>
    )
}

export default EnglishWritingSkill
