import React, { useState } from 'react';

import { AfforaiButton } from './AfforaiButton';

import Logo from "../assets/images/logo.webp";

export const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <div>
      <nav className='fixed w-full md:px-12 p-0 md:py-6 flex justify-center z-10'>
        <div className='w-full max-w-max-cont md:px-6 px-4 md:py-2 py-4 flex flex-col md:rounded-2xl rounded-none md:border border-b border-solid border-gray-300 bg-white bg-opacity-50 backdrop-blur-lg'>
          <div className='w-full flex flex-row items-center justify-between'>
            <a href="/" className='flex flex-row items-center gap-2'>
              <img src={Logo} alt="Afforai Logo" height="24px" width="24px" />
              <div className='font-medium text-lg leading-6 text-black-11'>Afforai</div>
            </a>
            <div className='hidden md:flex flex-row items-center gap-8'>
              <a href="https://afforai.getrewardful.com/signup" target="_blank" class="py-2 text-black-11 text-sm font-medium">
                Affiliate
              </a>
              <a href="/pricing" target="_blank" class="py-2 text-black-11 text-sm font-medium">
                Pricing
              </a>
              <a href="#testimonial" target="_blank" class="py-2 text-black-11 text-sm font-medium">
                Testimonials
              </a>
              <a href="https://help.afforai.com" target="_blank" class="py-2 text-black-11 text-sm font-medium">
                Help Center
              </a>
            </div>
            <div class="flex flex-row items-center gap-2">
              <button className='px-4 py-1 border border-solid border-gray-eee bg-white-555 rounded-lg text-sm font-medium text-black-52'>
                Log in
              </button>
              <AfforaiButton text="Try for free" onClick={() => console.log("Try for free")} />
              <div
                className={`md:hidden block text-3xl rounded-md border border-solid ${isMobileMenu ? "border-afforai-purple" : "border-black border-opacity-50"}`}
                onClick={() => setIsMobileMenu(!isMobileMenu)}
              >
                <svg stroke={`${isMobileMenu ? "#8036ff" : "#000000"}`} fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 256h320M96 176h320M96 336h320"></path></svg>
              </div>
            </div>
          </div>
          { isMobileMenu
            ? <div className='md:hidden flex flex-col px-2 gap-4 py-2'>
                <a href="https://afforai.getrewardful.com/signup" target="_blank" class="text-black-11 text-sm font-medium">
                  Affiliate
                </a>
                <a href="/pricing" target="_blank" class="text-black-11 text-sm font-medium">
                  Pricing
                </a>
                <a href="#testimonial" target="_blank" class="text-black-11 text-sm font-medium">
                  Testimonials
                </a>
                <a href="https://help.afforai.com" target="_blank" class="text-black-11 text-sm font-medium">
                  Help Center
                </a>
              </div>
            : null
          }
        </div>
      </nav>
    </div>
  )
}