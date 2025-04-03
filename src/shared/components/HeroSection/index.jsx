"use client"

import Image from "next/image"
import { Search, ChevronDown } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden px-4 sm:px-6 md:px-8 py-6 ">
      <div className="relative h-full min-h-[90vh] flex flex-col">
        <div className="relative w-full mt-4 sm:mt-6 md:mt-8">
          <Image
            src="/images/Mask.svg"
            alt="Background with person"
            width={1200}  
            height={800}  
            priority
            className="w-full h-auto" 
          />

          <div className="md:hidden absolute bottom-0 left-0 right-0 flex flex-col items-center pb-6">
            <div className="flex space-x-1 mb-3 sm:mb-4">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full ${i === 0 ? "bg-[#c5ff00]" : "bg-white/50"}`}
                />
              ))}
            </div>

            <div className="bg-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-md">
              <p className="text-black font-semibold text-xs sm:text-base">EDUCATION AND TUTORING</p>
            </div>
          </div>
        </div>

        <div className="w-full md:absolute md:inset-0 flex flex-col md:justify-between md:py-16 md:px-8">
          <div className="hidden md:flex md:justify-between w-full">
            <Image
              src="/images/Group.svg"
              alt="Left group"
              width={380}
              height={380}
              priority
              className="object-cover rounded-3xl"
            />

            <Image
              src="/images/Group2.svg"
              alt="Right group"
              width={300}
              height={300}
              priority
              className="object-cover rounded-3xl mt-9"
            />
          </div>

          <div className="flex flex-col items-center gap-4 mt-4 md:hidden">
            <Image
              src="/images/Group.svg"
              alt="Left group"
              width={380}
              height={380}
              priority
              className="object-cover rounded-3xl w-full max-w-[320px]"
            />

            <Image
              src="/images/Group2.svg"
              alt="Right group"
              width={300}
              height={300}
              priority
              className="object-cover rounded-3xl w-full max-w-[280px]"
            />
          </div>

          <div className="w-full max-w-[90%] mx-auto md:max-w-xl mt-6 md:mt-auto">
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
                <span className="text-gray-700 text-xs sm:text-sm whitespace-nowrap">Talent</span>
                <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 text-gray-700 ml-1" />
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center mt-6 mb-4 md:mb-0">
            <div className="flex space-x-1 mb-3 sm:mb-4">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full ${i === 0 ? "bg-[#c5ff00]" : "bg-white/50"}`}
                />
              ))}
            </div>

            <div className="bg-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-md">
              <p className="text-black font-semibold text-xs sm:text-base">EDUCATION AND TUTORING</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}