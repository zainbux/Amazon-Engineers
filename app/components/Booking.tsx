import React from 'react'

const Booking = () => {
  return (
    <div>
        <section id="booking" className='pt-8'>
          <h1 className='text-6xl font-semibold text-center mt-10 p-6 text-white'>Booking</h1>
          <p className='px-10 text-xl text-center md:text-2xl pb-10 text-white'>please select an available time slot and fill in the required details</p>
          <div className='md:px-10 bg-white rounded-lg'>
            {/* <!-- Google Calendar Appointment Scheduling begin --> */}
              <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2QHSf8C5QLRYn4B_NNvNmLUQBxubAqZJgqXr_D2jNBhgF_37XwmUY3GN1en8n4iskFhctuynpw?gv=true" width="100%" height="600" ></iframe>
            {/* <!-- end Google Calendar Appointment Scheduling -->        */}
          </div>
        </section> 
    </div>
  )
}

export default Booking