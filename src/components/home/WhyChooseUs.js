import React from "react";
import { TextBadge } from "../TextBadge";
import landingImg1 from "../../assets/images/laptop-landing-6.png";
import landingImg2 from "../../assets/images/laptop-landing-7.png";
import landingImg3 from "../../assets/images/laptop-landing-8.png";
import landingImg4 from "../../assets/images/laptop-landing-9.png";
import landingImg5 from "../../assets/images/laptop-landing-10.png";

const ReasonItem = ({ imgSrc, title, text, badge = null, more = null }) => {
  return (
    <div className="flex flex-col rounded-2xl border-gray-eee overflow-hidden border border-solid h-full">
      <div className="border-gray-eee border-b border-solid bg-white-555">
        <img src={imgSrc} className="w-full"></img>
      </div>
      <div className="flex-grow flex flex-col px-4 pt-2 pb-6">
        <div className="flex flex-row items-center gap-2">
          <h4 className="text-base font-medium text-black-22">{title}</h4>
          {badge && (
            <div className="flex items-center px-2 py-1 rounded-full bg-[#efe6ff] text-[#6004ff] text-[9px] font-medium h-4">
              {badge}
            </div>
          )}
        </div>
        <div className="text-xs text-black-52">{text} {more && <a className="cursor-pointer text-[#0D6EFD]">{more}</a>}</div>
      </div>
    </div>
  );
};
export const WhyChooseUS = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-40">
      <div className="flex flex-col mb-[64px] justify-center items-center container gap-6">
        <TextBadge text="Why choose us?"></TextBadge>
        <h3 className="text-center text-black-22 font-semibold text-4xl leading-none">
          Built for the user
        </h3>
        <p className="text-center max-w-[417px] text-black-52 font-normal text-base leading-none">
          Afforai is where exceptional customer focus meets exceptional
          technology.
        </p>
      </div>
      <div className="flex-row pb-2 hidden md:flex">
        <div className="md:w-[35%] pr-2 md:ml-[8.333%]">
          <ReasonItem
            imgSrc={landingImg1}
            title="Cross Language Querying"
            text="Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help."
            badge="NEW"
          />
        </div>
        <div className="md:w-[50%] pl-2">
          <ReasonItem
            imgSrc={landingImg2}
            title="Multiple file types supported"
            text="Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX & XLSX, as well as your own text & links from Websites. The possibilities are limitless!"
          />
        </div>
      </div>
      <div className="hidden md:flex flex-row pt-2 pb-2">
        <div className="flex flex-col pr-2 md:ml-[8.333%] md:w-[48.333%] gap-4">
          <ReasonItem
            imgSrc={landingImg3}
            title="Valuable Data Citation"
            text="Afforai is able to show exactly where your data has been extracted from & highlight it for you, so you never loose your time validating information again"
          />
          <ReasonItem
            imgSrc={landingImg5}
            title="Built in Document Viewer"
            text="Never Switch tabs again. Afforai’s document viewer means that you can have your uploaded files right next to your chatbot, giving you the ability to search the file, and refer to it for data citations."
            badge="NEW"
          />
        </div>
        <div className="flex md:w-[35%] pl-2">
          <ReasonItem
            imgSrc={landingImg4}
            title="Unbreakable Security"
            text="Afforai uses Azure Server & Azure OpenAI API. In other words, your data is more than safe with us."
            more="Learn more."
          />
        </div>
      </div>
      <div className="flex md:hidden flex-col px-4">
        <ReasonItem
          imgSrc={landingImg1}
          title="Cross Language Querying"
          text="Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help."
          badge="NEW"
        />
        <ReasonItem
          imgSrc={landingImg2}
          title="Multiple file types supported"
          text="Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX & XLSX, as well as your own text & links from Websites. The possibilities are limitless!"
        />
        <ReasonItem
          imgSrc={landingImg3}
          title="Valuable Data Citation"
          text="Afforai is able to show exactly where your data has been extracted from & highlight it for you, so you never loose your time validating information again"
        />
        <ReasonItem
          imgSrc={landingImg5}
          title="Built in Document Viewer"
          text="Never Switch tabs again. Afforai’s document viewer means that you can have your uploaded files right next to your chatbot, giving you the ability to search the file, and refer to it for data citations."
          badge="NEW"
        />
        <ReasonItem
          imgSrc={landingImg4}
          title="Unbreakable Security"
          text="Afforai uses Azure Server & Azure OpenAI API. In other words, your data is more than safe with us."
          more="Learn more."
        />
      </div>
    </div>
  );
};
