'use client'
import React, { useEffect } from 'react';
import ContactButton from './ContactButton';
import Link from 'next/link';

type Props = {};

const Hero = (props: Props) => {
  
  // Function to animate the value count-up
  function animateValue(id: string, start: number, end: number, duration: number): void {
    const obj = document.getElementById(id);
    if (!obj) return;

    const range = end - start;
    const minTimer = 50;
    const stepTime = Math.max(Math.floor(duration / range), minTimer);
    let startTime: number | null = null;

    const formatNumber = (num: number): string => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const step = (timestamp: number): void => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = Math.floor(progress * range + start);
        obj.innerText = formatNumber(current);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
}


  
  useEffect(() => {
    // Trigger the animation when the component is mounted
    animateValue("clients-served", 0, 30, 2000);
    animateValue("wholesale-leads", 0, 50, 2000);
    animateValue("revenue",  2173020, 2173320, 2000);
  }, []);

  return (
<div className='py-40 px-5 md:px-20 lg:px-36 flex flex-col lg:flex-row items-center justify-center gap-14 pb-40 sm:pt-40 md:pt-64'>

<div className=' lg:mb-0 lg:flex-1 text-center lg:text-left animate-fade-in-bottom'>
    <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-white animate-pulse'>A-Z Amazon FBA Agency</h1>
    <span className='block text-2xl md:text-5xl lg:text-5xl text-slate-500 font-bold mt-2'>Your one stop solution to everything Amazon FBA</span>  
    <p className="my-5 text-base md:text-lg lg:text-xl lg:pr-16 text-white">
        At Amazon Engineers we are all about giving the best margins possible.
    </p>
    <div className='mt-10'>
        <Link 
            className={"bg-black text-white py-3 px-5 rounded-2xl mt-6 hover:opacity-75 transition hover:cursor-pointer md:text-3xl border border-white"} 
            href='/workwithus'
        >
            Scale Now
        </Link>  
    </div>        
</div>

<div className='lg:flex-1 text-center'>
    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-white'>Revenue Generated by Us</h1>
    <div className='w-full md:w-1/3 mx-auto'>
            <div className='text-5xl md:text-6xl font-bold animate-fade-in-bottom text-white flex items-center justify-center'>
               <span className='text-slate-500'>$</span> <span id="revenue">0</span> 
            </div>
            <p className='text-sm md:text-lg px-2 md:px-5 mt-4 text-white'>In Revenue Per Year</p>                        
    </div>
    <div className='flex flex-col md:flex-row gap-8 text-center justify-center py-5'>
        <div className='w-full md:w-1/3'>
            <div className='text-5xl md:text-6xl font-bold animate-fade-in-bottom text-white'>
                <span id="clients-served">0</span><span className='text-slate-500'>+</span>
            </div>
            <p className='text-sm md:text-lg px-2 md:px-5 mt-4 text-white'>Clients Served</p>                        
        </div>
        <div className='w-full md:w-1/3'>
            <div className='text-5xl md:text-6xl font-bold animate-fade-in-bottom text-white'>
                <span id="wholesale-leads">0</span><span className='text-slate-500'>+</span>
            </div>
            <p className='text-sm md:text-lg px-2 md:px-5 mt-4 text-white'>Wholesale Leads</p>                        
        </div>

    </div>

</div>
</div>

  );
};

export default Hero;

