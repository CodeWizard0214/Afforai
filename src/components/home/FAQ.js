import React from "react";
import { FAQCard } from "./FAQCard";

const FAQ_ARRAY = [
  {
    title: "Is Afforai free?",
    description: "Yes, Afforai is free for all new users. Upon signing up, users are given 50 permanent credits",
  },
  {
    title: "What are subscription credits versus permanent credits?",
    description: "Subscription credits come from monthly payments, while permanent credits come from top ups. Subscription credits will be used before permanent credits, and subscription credits expire every month while permanent credits stay.",
  },
  {
    title: "Does Afforai support documents storing on the cloud like Google Drive, One Drive, or Drop Box?",
    description: "Currently Afforai only support uploading local documents and websites, in the near future we will integrate these cloud solutions. Sign up with us to get updated.",
  },
  {
    title: "Does Afforai support uploading images and video?",
    description: "Currently Afforai supports OCR for scanned PDF, but not via image file directly. Afforai currently working on working with video and audio transcript.",
  },
  {
    title: "Does Afforai support collaboration between accounts?",
    description: "Currently Afforai is working on a solution to allow users to share chatbots and files. Sign up with us to get updated when this feature roll out.",
  },
  {
    title: "Is my data secured?",
    description: "Yes your data is secured with Afforai. We don't store your conversation with the AI, and the files you uploaded on the system is stored on the cloud using Microsoft Azure and MongoDB with their standard security. LLM calls are made using OpenAI Azure with their security measures.",
  }
];

export const FAQs = () => {
  return (
    <div className="w-full flex justify-center py-40">
      <div className="max-w-[1600px] w-full md:px-24 px-3 flex flex-col gap-12 items-center">
        <div className="w-full flex flex-col gap-4 items-center">
          <div className="text-black-22 font-semibold text-4xl">FAQs</div>
          <div className="font-normal text-base text-black-52 text-center">For more information, check out our <a href="https://help.afforai.com" className="underline text-afforai-purple">Help Center</a>.</div>
        </div>
        <div className="w-full flex flex-col gap-3">
          {
            FAQ_ARRAY.map((item, index) => (
              <FAQCard key={index} title={item.title} description={item.description} />
            ))
          }
        </div>
      </div>
    </div>
  )
};