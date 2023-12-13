import React from "react";
import Marquee from "react-marquee-slider";
import { AfforaiButton } from '../AfforaiButton';

const CheckButton = (text) => {
  return (
    <div className="flex items-center gap-1 p-1 rounded border border-gray-eee bg-[#fafafa] ml-8 md:ml-0">
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="check"><path id="check_2" d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z" fill="#525252"></path></g></svg>
      {text}
    </div>
  )
}

export const Intro = () => {
  return (
    <div className="max-w-[1600px] mx-auto py-6 px-4 md:px-14 mt-24">
      <div className="flex flex-col gap-24 relative">
        <div className="flex flex-col items-center gap-8 z-[2]">
          <div className="flex items-center gap-8 rounded-xl border-2 border-[#333333] text-[#333333] text-sm font-semibold bg-gradient-Now">
            <img src="https://afforai.com/img/icons/appsumo.png" alt="App Sumo" width={26} height={20} />
            <span>Now on AppSumo</span>
            <a href="https://appsumo.8odi.net/3eR3xn" target="_blank" className="flex items-center justify-center rounded-md" style={{ padding: '6px 2px 6px 6px', gap: '2px', border: '1px solid rgb(51, 51, 51)', background: 'linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50.04%, rgba(255, 255, 255, 0.5) 50.85%)' }}>
              <span>Get Lifetime Deal</span>
              <div style={{ lineHeight: 0, transform: 'rotate(-90deg)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="angle-down"><path id="angle-up-small_2" d="M5.3338 5.99981C5.50446 5.99981 5.67515 6.06512 5.80515 6.19512L8.00046 8.39044L10.1958 6.19512C10.4564 5.93446 10.8778 5.93446 11.1385 6.19512C11.3992 6.45579 11.3992 6.87717 11.1385 7.13783L8.47182 9.8045C8.21115 10.0652 7.78978 10.0652 7.52911 9.8045L4.86244 7.13783C4.60178 6.87717 4.60178 6.45579 4.86244 6.19512C4.99244 6.06512 5.16313 5.99981 5.3338 5.99981Z" fill="#333"></path></g></svg></div>
            </a>
          </div>
          <div className=" text-left md:text-center text-black-22 font-semibold text-4xl md:text-5xl leading-[130%] max-w-2xl">Your second brain for maximizing productivity</div>
          <div className="text-left md:text-center text-black-52 text-base leading-[150%] max-w-2xl" >
            Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract the key findings you need.
          </div>
          <div className="hidden md:flex justify-between text-black-52 text-sm gap-8">
            {CheckButton('Summarize')}
            {CheckButton('Compare Between Documents')}
            {CheckButton('Search For Answers')}
            {CheckButton('Ask in Any Language')}
          </div>
          <div className="flex md:hidden justify-between text-black-52 text-sm gap-8">
            <Marquee
              velocity={40}
              minScale={0.7}
              maxScale={1.5}
              direction="rtl"
              className="marquee-container"
            >
              {CheckButton('Summarize')}
              {CheckButton('Compare Between Documents')}
              {CheckButton('Search For Answers')}
              {CheckButton('Ask in Any Language')}
            </Marquee>
          </div>
          <div className="flex justify-between gap-6 ">
            <AfforaiButton text="Get started" onClick={() => console.log("Try for free")} />
            <button className='px-4 py-1 border border-solid border-gray-eee bg-white-555 rounded-lg text-sm font-medium text-black-52'>
              View pricing
            </button>
          </div>
        </div>
        <div className=" z-[2] mx-16 hidden md:block">
          <img src="https://afforai.com/img/graphics/laptop-landing-1.png" class="img-fluid" width="100%" />
        </div>
        <div className=" absolute z-[1] bottom-72 w-full rounded-3xl overflow-hidden  hidden md:block" >
          <img src="https://afforai.com/img/graphics/laptop-landing-3.png" class="img-fluid" width="100%" />
        </div>
      </div>
    </div >
  )
};