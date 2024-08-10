import React from 'react';

type Props = {};

const History = (props: Props) => {
  return (
    <div className='h-auto bg-indigo-600 flex flex-col justify-center items-center py-48 px-20'>
      <h1 className='text-white text-3xl md:text-5xl font-bold text-center mb-10'>Prime GBG's Past</h1>

      <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
        <div className='lg:h-80 w-full md:w-[40vw] lg:w-[30vw] bg-slate-50 flex flex-col justify-center items-center text-center rounded-xl shadow-xl mb-5 md:mb-0'>
          <h1 className='text-3xl md:text-6xl pb-5 font-bold text-indigo-700 py-5'>2017</h1>
          <p className='p-5 md:px-10'>It all started in 2017 with Facebook ads. Through a year of trial and error, we developed strong media buying skills to send high-quality traffic to our partnered networks.</p>
        </div>

        <div className='lg:h-80 w-full md:w-[40vw] lg:w-[30vw]  bg-slate-50 flex flex-col justify-center items-center text-center rounded-xl shadow-xl'>
          <h1 className='text-3xl md:text-6xl pb-5 font-bold text-indigo-700 py-5'>2021</h1>
          <p className='p-5 md:px-10'>Between 2017 & 2021, we've built a team of strong media buyers that specialize in Facebook, TikTok, Google & Snapchat ads. Ever since, we've worked with more search feed arbitrage companies like Bodis, Tonic & Sedo.</p>
        </div>
      </div>
    </div>
  );
};

export default History;
