import React from "react";
import landing17 from "../../assets/images/laptop-landing-17.png";
import landing18 from "../../assets/images/laptop-landing-18.png";
import landing19 from "../../assets/images/laptop-landing-19.png";

const ImageBox = (props) => {
  return (
  <div className="flex flex-col border-solid border rounded-[16px] overflow-hidden w-full">
    <div className="border-b w-full bg-white-555">
      <img src={props.image} alt={props.alt} className="w-full h-auto" />
    </div>
    <div className="flex-col px-4 pt-2 py-6">
      <div className="text-base font-medium text-black-222">
        {props.title}
      </div>
      <div className="text-xs align-middle text-black-52">
        {props.text}
      </div>
    </div>
  </div>
  )
}

export const Unquestionable = () => {
  return (
    <div className="flex flex-col gap-6 max-w-[1600px] w-full md:4/5 justify-center items-center mx-auto my-40">
      <div className="flex flex-col gap-6 md:items-center w-3/4 md:w-full ">
        <div className="font-semibold text-4xl text-black-222 ">
          Unquestionable accuracy & reliability
        </div>
        <div className="max-w-[500px] text-base text-black-52 font-normal flex md:justify-center md:text-center">
          We pride ourselves on the quality of our chatbot’s responses, and go the extra mile to ensure the accuracy & reliability of our answers.
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-4 w-full md:w-4/5 justify-center items-center md:p-0 pr-3 pl-3">
        <ImageBox image={landing17} alt="Security, Reliable, and Trustworthy" title="Trusted by users all over the World" text="Afforai is used all around the World, saving thousands of people time and money with our speed & accuracy" />
        <ImageBox image={landing18} alt="Afforai gives out the best answer with most accurate citations" title="Information filtering" text="Afforai gives you the highest quality answers, and filters out any irrelevant information." />
        <ImageBox image={landing19} alt="Afforai AI comprehends documents, not repeating them" title="Built in Comprehension Model" text="Our powerful comprehension model increases the power of our data retrieval." />
      </div>
    </div>
  )
};