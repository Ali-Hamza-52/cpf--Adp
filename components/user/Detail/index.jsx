import React from 'react'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import SocialLink from '@/components/atoms/links/SoicalLink';
import SocialIcon from '@/icons/socialIcon';
import Feedback from '@/components/molecules/Feeback';
import CardParagraph from '@/components/atoms/paragraph/CardParagraph';
import NormalParagraph from '@/components/atoms/paragraph/NormalParagraph';
import NavigationLink from '@/components/atoms/links/NavigationLink';
import UserImage from '@/components/atoms/images/UserImage';
import ali from '@/public/ali.png'
import BannerImage from '@/components/atoms/images/BannerImage';
import CardImage from '@/components/atoms/images/CardImage';
import EasyDetailAuthorSection from '@/components/organism/EasyDetailAuthorSection';
import AuthorDetail from '@/components/organism/AuthorDetail';
import FirstAds from '@/components/organism/Ads/FirstAds';
import SecondAds from '@/components/organism/Ads/SecondAds';
import EasyOutline from '@/components/organism/EasyOutline';
import EnglishWritingSkill from '@/components/molecules/EnglishWritingSkill';
import AdvertismentAds from '@/components/organism/Ads/AdvertismentAds';
import AuthorCard from '@/components/organism/AuthorCard';

const data = [
  "Economics of Agriculture",
  "Economics of Agriculture",
  "Economics of Agriculture",
  "Economics of Agriculture",
  "Economics of Agriculture",
  "Economics of Agriculture",
  "Economics of Agriculture",
  "Economics of Agriculture",
  "Economics of Agriculture",
  "Economics of Agriculture",
  "Economics of Agriculture",
  "Economics of Agriculture",
  "Economics of Agriculture"
]

const Detail = () => {
  return (
    <div className='max-w-[1100px] mx-auto bpx-6 py-4'>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xs px-3 py-2.5 text-center">Default</button>
      <button type="button" className="px-3 py-2.5 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
        <span className="w-3 h-3 text-white me-2">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
          </svg>
        </span>

        Extra small
      </button>
      <p className='font-normal text-base leading-6'> i am ali hamza</p>
      <p className='font-normal text-sm leading-6'> i am ali hamza</p>
      <label></label>

      {/* <div id='links'>
        {
          data.map((data, index) => (
            <Link href="" key={index} className='text-base text-purple-600 px-5 py-3 '> {data}</Link>

          ))
        }
      </div>

      <Link href={'/'} className='text-white bg-[#787878] w-6 h-6 p-1 rounded-md inline-block'>
        <FaFacebookF size={16}/>
      </Link>
      <Link href={'/'} className='text-white bg-[#787878] w-6 h-6 p-1 rounded-md inline-block m-2'>
       {
        SocialIcon.facebook
       }
      </Link> */}

      {/* <Feedback/> */}
      {/* <CardParagraph cardText="Hi, i am ali Hamza"/>
      <NormalParagraph text="hi i am ali" />
      <NavigationLink href="/" text="Ali Hamza"/> */}
      {/* <SocialLink href="/" /> */}
      {/* <EasyDetailAuthorSection/> */}
      {/* <UserImage src={ali} classes="bg-gray-800"/>
      <UserImage src={ali} classes="bg-gray-800 w-16 h-16"/>
      <BannerImage src={ali} />
      <CardImage src={ali}/> */}
      {/* <UserImage src={ali} classes="bg-gray-800 w-[750px] h-[450px] rounded-2xl"/> */}
      {/* <AuthorDetail/> */}
      <FirstAds/>
      <SecondAds/>
      <EasyOutline/>
      <EnglishWritingSkill/>
      <AdvertismentAds/>
      <AuthorCard/>

    </div>
  )
}

export default Detail
