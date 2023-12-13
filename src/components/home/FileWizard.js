import React from "react";
import { TextBadge } from "../TextBadge";
import landingImg from "../../assets/images/laptop-landing-14.png";

export const FileWizard = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:my-40 my-20">
      <div className="flex flex-col md:flex-row-reverse">
        <div className="md:w-[41.667%] md:mr-[5.55%]">
          <div className="flex flex-col px-4 md:pe-12 max-w-[640px] mx-auto gap-6 mb-6">
            <TextBadge text="Get more out of your files"></TextBadge>
            <h3 className="md:pe-12 text-black-22 font-semibold text-4xl leading-[1.3] ">
              File Wizard - a game changing new feature
            </h3>
            <p className="md:pe-4 text-black-52 font-normal text-base leading-[1.3]">
              Convert your files with less effort than ever. Afforai’s File
              Wizard feature allows you to transform your files, in limitless
              different ways. We can translate, summarize, or explain your
              upload in no time.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:w-[41.667%] md:mx-[5.555%] justify-center items-center px-4">
          <img src={landingImg} className="w-full"></img>
        </div>
      </div>
    </div>
  );
};
