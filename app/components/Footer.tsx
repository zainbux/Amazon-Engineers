'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaMailBulk } from 'react-icons/fa';

type Props = {};

const Footer = (props: Props) => {

  const router = useRouter()

  return (
    <div className=' bg-black md:h-[20vh] justify-center flex flex-col items-center gap-3 md:flex-row md:gap-20 py-3 px-5'>
        <div className='flex gap-5'>
          <FaMailBulk className='text-5xl text-white'/>
        
          <h1 className='md:text-1xl lg:text-3xl font-bold text-white mb-5 md:mb-0'>Interest in starting or scaling your FBA storefront? Contact us now.</h1>
        </div>

        <Link className='bg-slate-200 text-black font-bold py-2 px-5 rounded-full hover:opacity-75 transition hover:cursor-pointer w-40 ' href='mailto:amazonxengineers@gmail.com'>
          CONTACT US
        </Link>

    </div>
  )
}

export default Footer;
