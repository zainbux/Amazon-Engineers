import React from 'react';
import { FaCheck } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";

type Props = {};

const History = (props: Props) => {
  return (
    <div className='relative h-auto bg-slate-200 flex flex-col justify-center items-center py-48 px-20'>
      <h1 className='text-black text-3xl md:text-5xl font-bold text-center mb-10'>Why Choose Us?</h1>

      <div className='flex flex-col md:flex-row items-center justify-center gap-5 relative'>
        
        <div className='py-5 w-full md:w-[40vw] lg:w-[30vw] bg-indigo-600 flex flex-col justify-center items-center text-center rounded-xl shadow-xl mb-5 md:mb-0 relative z-10'>
          <h1 className='p-5 text-white text-2xl md:text-4xl font-bold text-center mb-10'>Why Choose Us?</h1>
          <div className='text-white pb-5 p-5'>
            <div className='flex items-center gap-4 text-sm md:text-2xl py-2 '>
              <FaCheck className='size-' /><p>High Quality & Converting traffic</p>
            </div>
            <div className='flex items-center gap-4 text-sm md:text-2xl py-2'>
              <FaCheck className='size-' /><p>Backed by a Worldwide UGC Team
</p>
            </div>
            <div className='flex items-center gap-4 text-sm md:text-2xl py-2'>
              <FaCheck className='size-' /><p>Unlimited Scalability
</p>
            </div>
          </div>
        </div>

        <div className='absolute top-1/2 transform -translate-y-1/2 z-20'>
          <div className='hidden bg-gradient-to-br from-pink-500 to-indigo-600 text-white rounded-full w-20 h-20 md:flex items-center justify-center text-3xl font-bold drop-shadow shadow-2xl'>
            VS
          </div>
        </div>

        <div className='py-5 w-full md:w-[40vw] lg:w-[30vw] bg-slate-50 flex flex-col justify-center items-center text-center rounded-xl relative z-10'>
          <h1 className='p-5 text-black text-2xl md:text-4xl font-bold text-center mb-10'>Competitors</h1>
          <div className='px-10 pb-5 p-5'>
            <div className='flex items-center gap-1 text-sm md:text-2xl py-2 '>
              <FiXCircle className='size-' /><p className=''>Low Quality traffic & bots</p>
            </div>
            <div className='flex items-center gap-1 text-sm md:text-2xl py-2'>
              <FiXCircle className='size-' /><p>Using stolen content</p>
            </div>
            <div className='flex items-center gap-1 text-sm md:text-2xl py-2'>
              <FiXCircle className='size-' /><p>Limited Scalability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
