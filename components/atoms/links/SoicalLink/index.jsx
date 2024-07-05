import { cn } from '@/utils/Cn';
import Link from 'next/link';
import React from 'react';

const SocialLink = ({ href, icon, classes }) => {
  return (
    <Link href={href} className={cn("text-white bg-[#787878] w-6 h-6 p-1 rounded-md inline-block", classes)}>
      {icon}
    </Link>
  );
};

export default SocialLink;
