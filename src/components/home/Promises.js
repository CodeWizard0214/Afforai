import React from "react";
import landing20 from "../../assets/images/laptop-landing-20.png";

export const Promises = () => {
  return (
    <div className="max-w-[1600px] flex md:flex-row flex-col gap-12 justify-center m-auto md:w-4/5 f-full my-40">
      <div className="flex flex-col gap-6 pl-4 md:w-1/2 px-4 w-3/4 mx-auto md:mx-0">
        <div className="flex justify-center justify-items-start px-4 py-1.5 border-2 border-solid border-blue-111 rounded-lg text-blue-111 max-w-max ">
          My promise to you
        </div>
        <div className="text-black-22 text-4xl font-semibold pr-12">
          100% money back guaranteed if you are not satisfied
        </div>
        <div className="text-black-52 text-base font-normal">
          We crafted Afforai with total belief in our ability to make a chatbot that is not only powerful and reliable, but able to maximise your satisfaction as a user. This is why we have implemented a money back guarantee if you find yourself not satisfied with the capabilities of Afforai.
        </div>
      </div>
      <div className="md:w-[30%] w-2/3 p-4 md:p-0">
      <img src={landing20} alt="100% money back guarantee" className="w-full" />
      </div>
    </div>
  )
};