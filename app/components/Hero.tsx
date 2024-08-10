import React from 'react';
import ContactButton from './ContactButton';
import Link from 'next/link';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className='py-20 px-5 md:px-20 lg:px-36 h-screen flex flex-col lg:flex-row items-center justify-center gap-14'>
        <div>

        </div>
            <div className='mb-20 lg:mb-0 lg:flex-1 text-center lg:text-left'>
                <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold'>A-Z Growth for</h1>
                <span className='block text-4xl md:text-5xl lg:text-5xl text-slate-500 font-bold'>FBA Wholesale Stores</span>  
                <p className='my-5 text-base md:text-lg lg:text-xl lg:pr-16'>At Amazon Engineers we are all about giving the best margins possible.</p>
                <div className=' mt-10'>
                    <Link 
                        className={'bg-black text-white py-3 px-5 rounded-full mt-6 hover:opacity-75 transition hover:cursor-pointer md:text-3xl '} 
                        href='mailto:buxincorporated@gmail.com'
                        >
                        Work with Us
                    </Link>  
                </div>        
            </div>
            

            <div className='lg:flex-1 text-center'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-10'>Revenue Generated by us</h1>
                <div className='flex flex-col md:flex-row gap-8 text-center'>
                <div className='w-full md:w-1/3'>
                    <div className='text-5xl md:text-6xl font-bold'>
                    <span>25</span><span className='text-slate-500'>+</span>
                    </div>
                    <p className='text-sm md:text-lg px-2 md:px-5 mt-4'>Clients Served</p>                        
                </div>
                <div className='w-full md:w-1/3'>
                    <div className='text-5xl md:text-6xl font-bold'>
                    <span>10</span><span className='text-slate-500'>+</span>
                    </div>
                    <p className='text-sm md:text-lg px-2 md:px-5 mt-4'>Distributer Connections</p>                        
                </div>
                <div className='w-full md:w-1/3'>
                    <div className='text-5xl md:text-6xl font-bold'>
                    <span>1</span><span className='text-slate-500'>M+</span>
                    </div>
                    <p className='text-sm md:text-lg px-2 md:px-5 mt-4'>In Revenue Per Year</p>                        
                </div>
                </div>

            </div>

    </div>
  );
};

export default Hero;
