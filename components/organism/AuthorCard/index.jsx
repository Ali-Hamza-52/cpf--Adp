import MainHeading from '@/components/atoms/heading/MainHeading'
import Card from '@/components/molecules/Card'
import React from 'react'

const AuthorCard = () => {
  return (
    <div className='bg-[#f4f8fb] p-8 rounded-2xl'>
      <MainHeading text="From This Author" />
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default AuthorCard
