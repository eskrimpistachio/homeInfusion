'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SlideButton from './SlideButton'
import { Pagination, Navigation} from 'swiper';
import Image from 'next/image';

const Testimoni = () => {
  return (
    <div className="bg-testi-bg bg-cover pt-8 pb-16 text-white">
      <h1 className="font-bold text-4xl text-center py-16">Testimoni</h1>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: '.button-next-slide',
          prevEl: '.button-prev-slide',
        }}
      >
        <div>
          <SwiperSlide className="">
            <Image
              src="/assets/testimoni-mobile1.png"
              alt="profile"
              className="mx-auto"
              width={300}
              height={550}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              src="/assets/testimoni-mobile2.png"
              alt="profile"
              className="mx-auto"
              width={300}
              height={550}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              src="/assets/testimoni-mobile3.png"
              alt="profile"
              className="mx-auto"
              width={300}
              height={550}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              src="/assets/testimoni-mobile4.png"
              alt="profile"
              className="mx-auto"
              width={300}
              height={550}
            />
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="flex flex-row cursor-pointer transition-all duration-300 justify-center items-center mt-16 gap-8">
        <div className="button-prev-slide">
          <SlideButton props={`rotate-0`}/>
        </div>
        <div className="button-next-slide">
          <SlideButton props={`rotate-180`}/>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
