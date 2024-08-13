import React from 'react'
import ContactButton from './ContactButton'
import Logo from './Logo'

type Props = {}

export const NavBar = (props: Props) => {
  return (
    <div className='flex bg-black justify-center md:justify-between h-[100px]  drop-shadow-xl shadow-lg md:px-32 items-center'>
        <div>
            <Logo/>
        </div>
        <div className='hidden md:block space-x-3' >
            <ContactButton title={'Work with Us'}/>
            <ContactButton title={'Join the Team'} isSpecial={true}/>

        </div>
    </div>
  )
}