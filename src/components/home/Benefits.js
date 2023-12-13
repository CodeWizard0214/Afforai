import React from "react";
import landing4 from "../../assets/images/laptop-landing-4.png";
import { ReactComponent as Tick } from "../../assets/images/check-circle.svg";

export const Benefits = () => {
  return (
    <div className="flex md:flex-row flex-col max-w-[1600px] gap-6 md:w-3/4 mx-auto items-center">
      <div className="flex flex-col gap-6 justify-start md:w-1/2 w-2/3 md:pl-12 pl-0">
        <div className="text-black-22 font-semibold text-4xl md:mr-8">
          Say goodbye to long, tiresome documents
        </div>
        <div className="text-black-52 text-base md:mr-16 pr-8 ">
          Afforai seamlessly translates documents, files, spreadsheets & websites, filtering out what you don’t need & answering your specific questions within seconds.
        </div>
        <div className="flex flex-col gap-4 font-medium text-green-500 ">
          <div className="flex gap-4">
            <Tick /><span className="text-base">A whip smart research assistant</span>
          </div>
          <div className="flex gap-4">
            <Tick /><span className="text-base">We speak every language</span>
          </div>
          <div className="flex gap-4">
            <Tick /><span className="text-base">Reliable data citation for answers</span>
          </div>
          <div className="flex gap-4">
            <Tick /><span className="text-base">Fort-Knox level data security</span>
          </div>
        </div>
      </div>
      <div className="flex px-3 mt-8 md:w-3/5">
        <img src={landing4} alt="Afforai masters the documents you upload" className="w-full" />
      </div>
    </div>
  )
};