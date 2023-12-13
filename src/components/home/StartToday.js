import React from "react";
import { AfforaiButton } from '../AfforaiButton';
export const StartToday = () => {
  return (
    <div className="w-full flex justify-center py-40">
      <div className="max-w-[1600px] w-full md:px-24 px-4 flex flex-col gap-12 items-center relative">
        <div className="pb-60 z-2">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col items-center container gap-6">
              <div className="text-gray-900 text-center font-semibold text-3xl leading-none">
                Start saving time today!
              </div>
              <div className="text-gray-500 text-center font-normal text-base leading-none">
                Join an ever-growing community, and get with Afforai started free of charge!
              </div>
              <AfforaiButton text="Get Started for Free" />
            </div>
          </div>
        </div>
        <div className="absolute z-1 bottom-0 w-full overflow-hidden xl:px-60 md:px-14 px-3">
          <div className="w-full rounded-3xl overflow-hidden">
            <img src="https://afforai.com/img/graphics/laptop-landing-16.png" className="rounded-3xl" alt="landing" />
          </div>
        </div>
      </div>
    </div>
  )
};