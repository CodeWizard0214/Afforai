import React from "react";
import { TextBadge } from "../TextBadge";
import ProductImage from "../../assets/images/productivity.png";
import MobileProductImage from "../../assets/images/mobile-productivity.png";

export const Productivity = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-40">
      <div className="flex flex-col mb-[64px] justify-center items-center container gap-6">
        <TextBadge text="10x your productivity"></TextBadge>
        <h3 className="max-w-[556px] text-center text-black-22 font-semibold text-4xl leading-none">
          Save yourself from stress & streamline your workflow
        </h3>
        <p className="max-w-[556px] text-center text-black-52 font-normal text-base leading-none">
          The average worker spends 9 hours per week looking through & gathering information from thick stacks of documents. With Afforai, you can save yourself 8 hours per week (plus a lot of headaches).
        </p>
        <img src={ProductImage} className="md:block hidden mt-20" />
        <img src={MobileProductImage} className="md:hidden block mt-10" />
      </div>
    </div>
  )
};