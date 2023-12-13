import React from 'react';
import landing2 from '../../assets/images/laptop-landing-2.png';

export const Users = () => {
  return (
    <div className='flex flex-col gap-6 justify-center justify-items-center max-w-[1600px] mx-auto my-40'>
      <div className='text-base text-black-52 text-center'>
        Loved by <span className='text-blue-111'>20,000+</span> users around the world
      </div>
      <div className='flex justify-center'>
        <img src={landing2} alt='users' className='w-[336px]' />
      </div>
    </div>
  )
};