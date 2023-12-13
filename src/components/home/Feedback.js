import { useRef, useEffect } from 'react';
import Marquee from "react-marquee-slider";

const ItemCard = (description, name, avatar) => {
  return (
    <div className='flex p-8 border rounded ml-4 flex-col max-w-[350px] md:max-w-[600px] min-h-64'>
      <div className='flex-1 text-base whitespace-normal border-b text-start text-black-22 pb-6'>
        {description}
      </div>
      <div className='flex justify-between items-center pt-6'>
        <div className='flex items-center gap-2'>
          <img className='w-[32px]' src={avatar} alt='' />
          <div className='text-black-52 text-sm'>{name}</div>
        </div>
        <a href='https://www.producthunt.com/products/afforai/'>
          <div class="flex items-center gap-1">
            <img src="https://afforai.com/img/icons/producthunt.svg" alt="Product Hunt logo" height="16" />
            <span style={{ fontSize: '12px', fontWeight: 500 }}>View on Product Hunt</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export const Feedback = () => {

  const feedbackList = [
    {
      description: "The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.",
      name: "Henry Sipchen, Marketing Coordinator",
      avatar: 'https://afforai.com/img/testimonials/0-2.webp'
    },
    {
      description: "The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.",
      name: "Henry Sipchen, Marketing Coordinator",
      avatar: 'https://afforai.com/img/testimonials/0-2.webp'
    },
    {
      description: "The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.",
      name: "Henry Sipchen, Marketing Coordinator",
      avatar: 'https://afforai.com/img/testimonials/0-2.webp'
    },
    {
      description: "The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.",
      name: "Henry Sipchen, Marketing Coordinator",
      avatar: 'https://afforai.com/img/testimonials/0-2.webp'
    }
  ];

  return (
    <div className=" text-center">
      <div className="flex justify-center">
        <img width={170} src="https://afforai.com/img/graphics/ph-review.webp" alt="Product Hunt Review 4.9/5" />
      </div>
      <div className="text-[rgb(34, 34, 34)] font-semibold text-4xl leading-[130%] mb-2 text-black-22">See what our users say</div>
      <div className="text-[rgb(82, 82, 82)] text-base leading-[130%] mb-8 text-black-52">Loved by thousands, all around the world</div>
      <div className='flex flex-col gap-4 infinite-loop relative'>
        <Marquee
          velocity={40}
          minScale={0.7}
          maxScale={1.5}
          direction="rtl"
          className="marquee-container"
        >
          {feedbackList.map((feedback, idx) => (
            ItemCard(feedback.description, feedback.name, feedback.avatar)
          ))}
        </Marquee>

        <Marquee
          velocity={40}
          minScale={0.7}
          maxScale={1.5}
          direction="ltr"
          className="marquee-container"
        >
          {feedbackList.map((feedback, idx) => (
            ItemCard(feedback.description, feedback.name, feedback.avatar)
          ))}
        </Marquee>
      </div>
    </div>
  )
};