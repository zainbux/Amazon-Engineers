import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <div className=''>
        <Link href={'/'}>
        <div className='flex gap-3 items-center justify-center font-bold text-3xl'>
         <h1 className='text-white'>AMAZON</h1><span className='text-slate-500'>ENGINEERS</span>
        </div>
        <p className='font-bold text-center text-white'>FBA WHOLESALE STORES</p>
        </Link>
    </div>
  )
}

export default Logo