import React, { useState } from 'react';

export const FAQCard = (props) => {
  const { title, description } = props;

  const [isOpened, setIsOpened] = useState(false);

  return (
    <div class="flex flex-col px-6 pt-6 pb-3 border border-solid border-black-e6 rounded-xl cursor-pointer" onClick={() => setIsOpened(!isOpened)}>
      <div className='flex flex-row items-center justify-between gap-3'>
        <div className='pb-3 text-black-52 font-normal text-base'>{ title }</div>
        {
          isOpened
          ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path></svg>
          : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
        }
      </div>
      {
        isOpened
          ? <div className='mt-3 text-black-52 font-normal text-base'>
            {description}
          </div>
          : null
      }
    </div>
  )
};