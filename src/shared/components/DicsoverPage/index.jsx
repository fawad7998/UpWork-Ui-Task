'use client';
import {Fragment, useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import {services} from '@/shared/Constants/ServicesArray';

const DiscoverPage = () => {
 const navigationPrevRef = useRef(null);
 const navigationNextRef = useRef(null);

 return (
  <Fragment>
   <div className="flex items-center justify-center m-[70px] space-x-2">
    <div className="w-3 h-3 bg-[#CBEC5E] rounded-sm" />
    <h2 className="relative text-3xl font-bold text-black">
     DISCOVER
     <span className="absolute right-0 bottom-0 w-2/5 h-1 bg-[#CBEC5E]"></span>
    </h2>
   </div>
   <div className="relative">
    <Swiper
     modules={[Navigation]}
     navigation={{
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
     }}
     onBeforeInit={(swiper) => {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
     }}
     spaceBetween={24}
     slidesPerView={1}
     breakpoints={{
      640: {slidesPerView: 2},
      768: {slidesPerView: 3},
      1024: {slidesPerView: 4},
     }}
     className="!pb-16" 
    >
     {services.map((service) => (
      <SwiperSlide key={service.id}>
       <div className="space-y-3 mx-auto w-[223px]">
        <div className="relative h-[262px] w-full overflow-hidden">
         <Image
          src={service.image || '/placeholder.svg'}
          alt={service.title}
          fill
          className="object-cover"
          priority={service.id <= 4}
         />
        </div>

        <div className="bg-white rounded-4xl w-full flex justify-between items-center p-4 shadow-md">
         <h4 className="font-bold text-black">{service.title}</h4>
         <Link
          href={service.url}
          className="bg-[#CBEC5E] rounded-full p-2 text-white hover:bg-green-600 transition"
         >
          <Image
           src={'/images/arrow.svg'}
           alt={service.title}
           width={30}
           height={30}
           className="object-cover"
           priority={service.id <= 4}
          />
         </Link>
        </div>
       </div>
      </SwiperSlide>
     ))}
    </Swiper>

    <div className="flex justify-center gap-4 ">
     <button
      ref={navigationPrevRef}
      className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
      aria-label="Previous"
     >
      <ChevronLeft className="w-6 h-6 text-gray-700" />
     </button>
     <button
      ref={navigationNextRef}
      className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
      aria-label="Next"
     >
      <ChevronRight className="w-6 h-6 text-gray-700" />
     </button>
    </div>
   </div>
  </Fragment>
 );
};

export default DiscoverPage;
