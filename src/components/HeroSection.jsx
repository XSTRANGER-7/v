import React from 'react';
import img from "../assets/d.jpg";
import Bubbles from "./Bubbles";
import { Link } from "react-router-dom";
 

const HeroSection = () => {
  return (
    <div className='' style={{background: "linear-gradient(90deg, rgba(1,0,20,1) 4%, rgba(21,0,99,1) 43%, rgba(36,0,69,1) 100%)"}}> 
    <Bubbles/>
      <div className='justify-center tracking-wide items-center text-cyan-50 font-bold flex flex-col md:flex-row lg:pl-20 lg:pr-20 gap-2'>
        <div className='lg:w-[70%] w-full h-screen flex flex-col p-5 mt-40 '>
          <h1 className='text-3xl text-left md:text-3xl font-bold leading-none p-2'>
            CONNECT
          </h1>
          <h1 className='text-3xl text-left md:text-3xl font-bold leading-none p-2'>
            COLLABORATE
          </h1>
          <h1 className='text-3xl md:text-3xl font-bold leading-tight p-2 mb-2 flex gap-2 flex-nowrap text-start'>
            START{' '}
            <span className='bg-gradient2 border-[1px] border-[#0D7A9F] rounded-lg pt-0.5 pb-0.5 pr-1 pl-1 mb-'>
              CONFERENCE
            </span>
          </h1>

          {/* paragraph */}
          <div>
            <p className='text-16 text-slate-100 md:text-md text-start Normal leading-5 px-3 font-poppins'>
              Start your next video call with a single click. No download,
              plug-in, or login is required. Just get straight to talking,
              messaging, and sharing your screen.
            </p>
          </div>

          {/* buttons */}
          <div className='flex gap-4 mt-3 m-2 md:gap-6 md:m-2 md:mt-3 justify-start'>
            <Link to = "/login">
            <button
              className='text-lg text-white md:text-md px-5 py-3 rounded-lg'
              style={{ backgroundColor: '#1489F6' }}>
              Sign In
            </button>
            </Link>
            <Link to = "/register">
            <button
              className='text-lg text-white md:text-md px-5 py-3 rounded-lg'
              style={{ backgroundColor: '#1489F6' }}>
              Sign Up
            </button>
            </Link>
          </div>
        </div>

        {/* image div */}
        <div className='w-full flex justify-center p-5 object-contain '>
          {/* <svg
            width='229'
            height='249'
            viewBox='0 0 229 249'
            className='lg:top-0 absolute lg:block hidden z-0 mr-[41vw]'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M3 1C62.0625 174.11 177.609 236.462 228 246'
              stroke='#408ACD'
              stroke-opacity='0.65'
              stroke-width='5'
            />
          </svg> */}
          <img src={img} alt='home' className='w-[580px] ml-14 mb-52 z-10 rounded' />
          <div
            className='mt-56 lg:w-[20vw] shadow-md shadow-black lg:top-1 w-[20vw] lg:h-[15vw] z-0 h-[100px] absolute shadow-[rgba(0, 0, 0, 0.25)] shadow-[0px 4px 4px] rounded-[10px] border-[1px] lg:block hidden border-[#0D7A9F] border-[solid] ml-[25vw] opacity-50'
            style={{
              background: 'rgb(7,153,200)',
              background: 
                'linear-gradient(216deg, rgba(7,153,200,1) 0%, rgba(17,63,81,0.3086484593837535) 91%)',
            }}></div>
        </div>
      </div>
      <div>
        {/* <JoinWithCode /> */}
      </div>
    </div>
  );
};

export default HeroSection;
















