import React from 'react'
import WorkWithUs from '../components/WorkWithUs'
import Booking from '../components/Booking'

const page = () => {
  return (
    <div className=" bg-slate-950 bg-repeat ">
      <div className='p-10'>
        <WorkWithUs/>

        <Booking />

      </div>
    </div>
  )
}

export default page