import React from "react";
import { TextBadge } from "../TextBadge";
import landingImg from "../../assets/images/laptop-landing-15.png";

export const Integration = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:my-40 my-20">
      <div className="flex flex-row md:mb-20 mb-10">
        <div className="flex flex-col md:items-center justify-center max-w-xl gap-6 mx-auto px-6">
          <TextBadge text="Seamless Integrations - Coming Soon"></TextBadge>
          <h3 className="max-w-[636px] md:text-center text-black-22 font-semibold text-4xl leading-[130%] ">
            Upload Files directly from Google Drive, One Drive & Dropbox
          </h3>
          <p className="md:text-center max-w-[636px] text-black-555 font-normal text-base leading-[150%]">
            Afforai allows you to upload files directly from Google Drive, One
            Drive & Dropbox, meaning your experience will be smooth sailing
            regardless of your preferred
          </p>
        </div>
      </div>
      <div className="flex flex-row -mx-4">
        <div className="mx-auto my-0 md:w-3/4 max-w-xl">
          <img src={landingImg} className="w-full"></img>
        </div>
      </div>
    </div>
  );
};
