import React from 'react';

export const Footer = () => {
  return (
    <div className='w-full  pt-12 mb-12 px-4'>
      <div className='mx-auto flex-col gap-8 lg:flex-row flex p-8 justify-between rounded-2xl max-w-[1264px] border-black-e6 border'>
        <div className='flex flex-col gap-6 basis-[360px] mb-6'>
          <div className="flex flex-col gap-6">
            <div className="flex gap-2 mb-md-0">
              <div className='text-black-11 font-medium text-lg '>Afforai</div>
            </div>
            <div className='text-black-52 text-[13px]'>Afforai is your research tool in to damn near anything. Helping you summarise, translate, and withdraw data from documents.</div>
            <div className='text-black-52 text-[13px]'>Copyright © 2023 Afforai Inc. All rights reserved.</div>
          </div>

          <a href="https://www.producthunt.com/posts/afforai?utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_souce=badge-afforai" target="_blank">
            <img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=403202&amp;theme=light&amp;period=daily" alt="Afforai - Summarize, interact, translate your documents with AI | Product Hunt" width="195" height="42" />
          </a>
          <div className="flex flex-col gap-2">
            <div className='text-black-11 font-medium text-base'>Backed by</div>
            <img src="https://afforai.com/img/logos/sputnikatx.png" height="46" width="137" alt="Sputnik ATX VC" />
          </div>
        </div>
        <div className='flex justify-between flex-1 flex-col md:flex-row'>
          <div className='flex justify-around flex-1 flex-col sm:flex-row'>
            <div className='flex flex-col gap-4 basis-[160px] mb-4 flex-1'>
              <div className='text-black-11 font-medium text-base'>Company</div>
              <a href="/our_story">
                <div className='text-black-52 text-xs'>Our Story</div>
              </a>
              <a href="https://afforai.getrewardful.com/signup" target="_blank">
                <div className='text-black-52 text-xs'>Affiliate</div>
              </a>
              <a href="/security" className="policy">
                <div className='text-black-52 text-xs'>Security</div>
              </a>
              <a href="https://trello.com/b/98yNMfwA/afforai-roadmap" target="_blank">
                <div className='text-black-52 text-xs'>Roadmap</div>
              </a>
              <a href="/contact">
                <div className='text-black-52 text-xs'>Contact Us</div>
              </a>

            </div>
            <div className='flex flex-col gap-4 basis-[160px] mb-4 flex-1'>
              <div className='text-black-11 font-medium text-base'>Resources</div>
              <a href="/our_story">
                <div className='text-black-52 text-xs'>Help Center</div>
              </a>
              <a href="https://afforai.getrewardful.com/signup" target="_blank">
                <div className='text-black-52 text-xs'>API Docs</div>
              </a>
              <a href="/security" className="policy">
                <div className='text-black-52 text-xs'>Terms of Use</div>
              </a>
              <a href="https://trello.com/b/98yNMfwA/afforai-roadmap" target="_blank">
                <div className='text-black-52 text-xs'>Privacy Policy</div>
              </a>
            </div>
          </div>
          <div className='flex justify-around flex-1 flex-col sm:flex-row'>
            <div className='flex flex-col gap-4 md:basis-[160px] mb-4 flex-1'>
              <div className='text-black-11 font-medium text-base'>Follow Us</div>
              <a href="/our_story">
                <div className='text-black-52 text-xs'>Facebook Group</div>
              </a>
              <a href="https://afforai.getrewardful.com/signup" target="_blank">
                <div className='text-black-52 text-xs'>Linkedin</div>
              </a>
              <a href="/security" className="policy">
                <div className='text-black-52 text-xs'>Twitter</div>
              </a>
              <a href="https://trello.com/b/98yNMfwA/afforai-roadmap" target="_blank">
                <div className='text-black-52 text-xs'>Medium Blog</div>
              </a>
            </div>
            <div className='flex flex-col gap-4 md:basis-[160px] mb-4 flex-1'>
              <div className='text-black-11 font-medium text-base'>Language</div>
              <a href="/our_story">
                <div className='text-[#6004ff] text-xs'>English</div>
              </a>
              <a href="https://afforai.getrewardful.com/signup" target="_blank">
                <div className='text-black-52 text-xs'>Vietnamese</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}