import React from "react";
import { TextBadge } from "../TextBadge";
import landingImg from "../../assets/images/laptop-landing-12.png";
import mobileLandingImg from "../../assets/images/mobile-landing-12.png";
import fastForwardIcon from "../../assets/images/fast-forward.svg";
import powerOffIcon from "../../assets/images/power-off.svg";
import searchPlusIcon from "../../assets/images/search-plus.svg";

const MODES_ITEMS = [
  {
    icon: fastForwardIcon,
    credits: 1,
    title: "Fast Mode (default)",
    text: "Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search).",
  },
  {
    icon: powerOffIcon,
    credits: 4,
    title: "Powerful Mode",
    text: "Get answers of extra high quality from the AI. This mode is most suited for applications that require inferences as well as the full documents to be scanned (ex. Textual Data Analysis, Search with Inference, Report Generation).",
  },
  {
    icon: searchPlusIcon,
    credits: 5,
    title: "Google Mode",
    text: "Supplement your answers with the top 3 results from Google Search. This adds extra reliability to back up our already incredibly accurate answers.).",
  },
];

const ModesItem = ({ icon, title, credits, text }) => {
  return (
    <div className="flex items-start gap-4">
      <img src={icon} className="h-6"></img>
      <div className="flex flex-col gap-2">
        <div className="inline-flex gap-4 items-center">
          <h4 className="text-base font-medium text-[#3A0299]">{title}</h4>
          <div className="flex items-center px-2 py-1 rounded-full bg-[#efe6ff] text-[#6004ff] text-[14px] font-medium h-[18px]">
            {credits + " credits"}
          </div>
        </div>
        <div className="text-[14px] text-[#260266]">{text}</div>
      </div>
    </div>
  );
};
export const Modes = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:my-40 my-20">
      <div className="flex-row hidden md:flex">
        <div className="flex items-center md:w-1/3 md:ml-[8.333%]">
          <img src={landingImg} className="w-full"></img>
        </div>
        <div className="md:w-1/2 md:ml-[8.333%]">
          <div className="flex flex-col max-w-[640px] mx-auto mb-6 items-start gap-6">
            <TextBadge text="Different Modes Available"></TextBadge>
            <h3 className="md:pe-12 md:me-6 text-black-22 font-semibold text-4xl leading-[1.3] ">
              Customize your assistant with a range of different modes
            </h3>
            <p className="md:pe-12 md:me-4 text-black-52 font-normal text-base leading-[1.3]">
              Further power your questions with additional modes. Afforai allows
              you to switch between three different modes, each which have
              unique ways of utilising our AI tools to answer your question(s).
            </p>
            <div className="flex flex-col md:pe-12 md:me-4 gap-6">
              {MODES_ITEMS.map((item) => (
                <ModesItem
                  icon={item.icon}
                  title={item.title}
                  credits={item.credits}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:hidden">
        <div className="flex flex-col items-start max-w-[640px] mx-4 gap-6 mb-6">
          <TextBadge text="Different Modes Available"></TextBadge>
          <h3 className="md:pe-12 md:me-6 text-black-22 font-semibold text-4xl leading-[1.3] ">
            Customize your assistant with a range of different modes
          </h3>
          <p className="md:pe-12 md:me-4 text-black-52 font-normal text-base leading-[1.3]">
            Further power your questions with additional modes. Afforai allows
            you to switch between three different modes, each which have unique
            ways of utilising our AI tools to answer your question(s).
          </p>
        </div>
        <div className="flex items-center md:w-1/3 md:ml-[8.333%]">
          <img src={mobileLandingImg} className="w-full"></img>
        </div>
        <div className="flex flex-col mx-4 gap-6">
          {MODES_ITEMS.map((item) => (
            <ModesItem
              icon={item.icon}
              title={item.title}
              credits={item.credits}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
