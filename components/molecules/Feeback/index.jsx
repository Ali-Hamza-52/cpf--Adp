import SocialLink from '@/components/atoms/links/SoicalLink'
import SocialIcon from '@/icons/socialIcon'
import React from 'react'

const Feedback = () => {
  return (
    <div className='mt-3 flex justify-center items-center gap-3'>

      <p>Was this helpful ? </p>
      <SocialLink href="/" icon={SocialIcon.like} classes="rounded-full bg-white text-gray-600 border-2 border-gray-600 hover:bg-gray-600 hover:text-white p-2 h-9 w-9" />
      <SocialLink href="/" icon={SocialIcon.dislike} classes="rounded-full bg-white text-gray-600 border-2 border-gray-600 hover:bg-gray-600 hover:text-white p-2 h-9 w-9" />
      <p>(12,300 found it helpful)</p>

    </div>
  )
}

export default Feedback
