import Image from 'next/image'
import React from 'react'
import interviewImage from '@/assets/images/event.png';
import { RiCalendarCheckFill } from "react-icons/ri";
import PrimaryButton from './UI/PrimaryButton';
import SecondaryButton from './UI/SecondaryButton';

export default function EventCard() {
  return (
    <div className='border border-borderColor rounded-sm'>
<div className='w-full h-[240px]'>
<Image
                src={interviewImage}
                alt="page header image"
                className="w-full h-full object-cover rounded-sm"
            />
</div>
<div className='p-4'>
<div className='flex gap-3 items-center'>
    <div className='flex gap-1 rounded-sm items-center py-1 px-2 border border-text/30 w-max text-xs font-medium'>
<RiCalendarCheckFill/>
Events
    </div>
<p className="py-1 px-2 rounded-sm border text-secondary border-text/30 w-max text-xs font-medium">
November 7, 2024
            </p>
</div>
<p className='text-secondary text-xl font-semibold py-2'>Info Session on Fleming College</p>
<p className='text-text line-clamp-3'>We are excited to announce that we are organizing an insightful study abroad session where you can explore opportunities in the USA, the UK, Australia, Canada, Denmark, Germany, and Japan. You will gain valuable insights on what and how to study abroad. Additionally, you have us to answer all your queries. This is your chance to get all your doubts cleared and plan your future with expert guidance.</p>
<div className='w-full flex pt-3 gap-3 items-center'>
<PrimaryButton text='Register' className='w-[48%]'/>
<SecondaryButton text='View Details' className='w-[48%]'/>
</div>
</div>
    </div>
  )
}
