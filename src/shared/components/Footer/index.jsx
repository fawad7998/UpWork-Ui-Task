'use client';

import {ChevronDown,  Search, UserRound} from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
 return (
  <div className="w-full font-sans bg-white">
   <div className="py-12 px-6 text-center">
    <h2 className="text-3xl font-bold text-[#18470D] w-[364px] mb-2 mx-auto text-center">
     Subscribe now and be the first to know!
    </h2>
    <div className="md:hidden flex flex-col items-center gap-4 px-4">
     <div className="relative flex items-center bg-white rounded-full px-2 sm:px-4 py-2 sm:py-3 shadow-lg">
      <div className="flex-shrink-0 flex items-center bg-black rounded-full p-1.5 sm:p-2 mr-2">
       <Search className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
      </div>
      <input
       type="text"
       placeholder="Find a job, talent or service"
       className="flex-1 min-w-0 outline-none bg-transparent text-black placeholder-gray-500 text-xs sm:text-sm md:text-base"
      />
      <div className="flex-shrink-0 flex items-center pl-1 sm:pl-2 border-l border-gray-300 ml-1 sm:ml-2">
       <span className="text-gray-700 text-xs sm:text-sm whitespace-nowrap">
        Talent
       </span>
       <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 text-gray-700 ml-1" />
      </div>
     </div>

     <div className="w-full max-w-[80%] mx-auto md:max-w-xl mt-6 md:mt-auto">
      <div className="relative flex items-center bg-white rounded-full px-2 sm:px-4 py-2 sm:py-3 shadow-lg">
       <div className="flex-shrink-0 flex items-center bg-black rounded-full p-1.5 sm:p-2 mr-2">
        <UserRound className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
       </div>
       <input
        type="text"
        placeholder="Find a job, talent or service"
        className="flex-1 min-w-0 outline-none bg-transparent text-black placeholder-gray-500 text-xs sm:text-sm md:text-base"
       />
      </div>
     </div>
     <button className="bg-[#CBEC5E] text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition font-medium shadow-lg">
      Subscribe
     </button>
    </div>

    <div className="hidden md:flex max-w-4xl mx-auto gap-4 items-center justify-center">
     <div className="w-full max-w-[80%] mx-auto md:max-w-xl mt-6 md:mt-auto">
      <div className="relative flex items-center bg-white rounded-full px-2 sm:px-4 py-2 sm:py-3 shadow-lg">
       <div className="flex-shrink-0 flex items-center bg-black rounded-full p-1.5 sm:p-2 mr-2">
        <Search className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
       </div>
       <input
        type="text"
        placeholder="Find a job, talent or service"
        className="flex-1 min-w-0 outline-none bg-transparent text-black placeholder-gray-500 text-xs sm:text-sm md:text-base"
       />
       <div className="flex-shrink-0 flex items-center pl-1 sm:pl-2 border-l border-gray-300 ml-1 sm:ml-2">
        <span className="text-gray-700 text-xs sm:text-sm whitespace-nowrap">
         Talent
        </span>
        <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 text-gray-700 ml-1" />
       </div>
      </div>
     </div>
     <div className="w-full max-w-[80%] mx-auto md:max-w-xl mt-6 md:mt-auto">
      <div className="relative flex items-center bg-white rounded-full px-2 sm:px-4 py-2 sm:py-3 shadow-lg">
       <div className="flex-shrink-0 flex items-center bg-black rounded-full p-1.5 sm:p-2 mr-2">
        <UserRound className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
       </div>
       <input
        type="text"
        placeholder="Find a job, talent or service"
        className="flex-1 min-w-0 outline-none bg-transparent text-black placeholder-gray-500 text-xs sm:text-sm md:text-base"
       />
      </div>
     </div>

     <button className="bg-[#CBEC5E] text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition font-medium shadow-lg">
      Subscribe
     </button>
    </div>
   </div>

   <div className="relative pt-16 pb-8">
    <div className="absolute inset-0">
     <Image
      src="/images/footer.svg"
      alt="Footer background"
      width={1200}
      height={1200}
      className="object-cover md:object-contain opacity-10" 
      style={{filter: 'drop-shadow(0 0 25px rgba(0,0,0,0.5))'}}
     />
    </div>

    <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
     <div className="space-y-4">
      <Image
       src="/images/mainFooter.svg"
       alt="Left group"
       width={160}
       height={160}
       priority
       className="object-cover rounded-3xl"
      />
      <p className="text-gray-400">support@Jobwhae.com</p>
      <div className="flex items-center justify-center text-black hover:text-gray-300 px-4 py-1.5 border border-black rounded-full w-auto inline-flex">
       <Image
        src="/images/uk.svg"
        alt="UK Flag"
        width={16}
        height={16}
        priority
        className="object-cover rounded-2xl mr-2 w-4 h-4"
       />
       <span>EN</span>
      </div>
     </div>

     {[
      {title: 'About Us', links: ['FAQ', 'Steps of Success']},
      {title: 'Platform', links: ['Contracts', 'Advantages']},
      {title: 'Services', links: ['Top Talents']},
     ].map((section, i) => (
      <div key={i} className="space-y-4">
       <h4 className="font-bold text-lg">{section.title}</h4>
       <ul className="space-y-3 text-gray-400">
        {section.links.map((link, j) => (
         <li key={j} className="hover:text-white cursor-pointer">
          {link}
         </li>
        ))}
       </ul>
      </div>
     ))}
    </div>

    <div className="relative mt-16 pt-6">
     <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
      <p className="text-gray-500 text-sm order-2 md:order-1">
       © 2025 Jobwhae All rights reserved.
      </p>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 order-1 md:order-2">
       <a href="#" className="text-gray-500 hover:text-white text-sm">
        Terms of service
       </a>
       <a href="#" className="text-gray-500 hover:text-white text-sm">
        Privacy Policy
       </a>
       <a href="#" className="text-gray-500 hover:text-white text-sm">
        Cookies
       </a>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
