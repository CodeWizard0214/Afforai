import React from "react";
import { TextBadge } from "../TextBadge";
import landingImg from "../../assets/images/laptop-landing-13.png";
import mobileLandingImg from "../../assets/images/mobile-landing-13.png";

export const MultiLanguage = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:my-40 my-20">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-center md:w-[41.667%] md:ml-[8.333%]">
          <div className="flex flex-col px-4 md:pe-12 max-w-[640px] mx-auto gap-6 mb-6">
            <TextBadge text="Multiple Language Supported"></TextBadge>
            <h3 className="md:pe-12 text-black-22 font-semibold text-4xl leading-[1.3] ">
              Regardless of where you are from, Afforai is for you
            </h3>
            <p className="md:pe-4 text-black-52 font-normal text-base leading-[1.3]">
              We support more than 100 Languages, meaning you can seamlessly use
              our services regardless of where you are from. Our Cross Language
              Querying feature also allows flawless translation of documents.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:w-[50%] px-4 md:pr-8">
          <img src={landingImg} className="w-full hidden md:block "></img>
          <img src={mobileLandingImg} className="w-full md:hidden "></img>
        </div>
      </div>
    </div>
  );
};
