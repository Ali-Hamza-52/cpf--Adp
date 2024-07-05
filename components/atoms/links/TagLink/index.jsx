import React from 'react'

const TagLink = ({tagLinkData,tagLinkHref}) =>
  <Link href={tagLinkHref} className='text-base text-purple-600 px-5 py-3 '> {tagLinkData}</Link>


export default TagLink
