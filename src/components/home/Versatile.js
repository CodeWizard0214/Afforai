import React from "react";
import { TextBadge } from "../TextBadge";
import { AfforaiButton } from "../AfforaiButton";
import landingImg from "../../assets/images/laptop-landing-11.png";
import mobileLandingImg from "../../assets/images/mobile-landing-11.png";

export const Versatile = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:my-40 my-20">
      <div className="flex flex-col md:flex-row">
        <div className="px-0 md:pe-12 flex flex-col justify-center md:w-[41.667%] md:ml-[8.333%]">
          <div className="flex flex-col px-12 md:px-4 md:pe-12 max-w-[640px] mx-auto gap-6 mb-6">
            <TextBadge text="Most versatile"></TextBadge>
            <h3 className="md:pe-12 text-black-22 font-semibold text-4xl leading-[1.3] ">
              Create multiple chatbots for different purposes
            </h3>
            <p className="md:pe-4 text-black-52 font-normal text-base leading-[1.3]">
              Legal documents? Summarising a book? Extracting data from a
              website? We allow you to create multiple chatbots at one time, so
              you can use Afforai for a whole range of purposes.
            </p>
            <div className="flex-row gap-6 hidden md:flex">
              <AfforaiButton text="Get Started" />
              <button className="px-4 py-1 border border-solid border-gray-eee bg-white-555 rounded-lg text-sm font-medium text-black-555">
                View Pricing
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-0 md:w-[41.667%]">
          <img src={landingImg} className="w-full hidden md:block "></img>
          <img src={mobileLandingImg} className="w-full md:hidden "></img>
        </div>
      </div>
    </div>
  );
};
