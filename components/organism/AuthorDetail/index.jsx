import React from 'react'
import ali from '@/public/ali.png'
import UserImage from '@/components/atoms/images/UserImage'
import SubHeading from '@/components/atoms/heading/SubHeading'
import MainParagraph from '@/components/atoms/paragraph/MainParagraph'
import SocialLink from '@/components/atoms/links/SoicalLink'
import socialIcon from '@/icons/socialIcon'
const AuthorDetail = () => {
  return (
    <div className='bg-blue-[#f9fafc]'>
      <UserImage src={ali} classes="bg-blue-300"/>
      <SubHeading text="Ali Hamza" />
      <MainParagraph classes="line-clamp-3" mainParagraph="Founder of SAAS First - the Best A1 and Data-Driven Customer Engagement Tool" />

      <div className='flex gap-2'>
        <SocialLink icon={socialIcon.facebook} href="/" />
        <SocialLink icon={socialIcon.twitter} href="/" />
        <SocialLink icon={socialIcon.linkedin} href="/" />
      </div>

    </div>
  )
}

export default AuthorDetail
