'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { staggerContainer, textVariant } from '../utils/motion';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';

// import required modules
import {
  EffectCube,
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
  FreeMode,
} from 'swiper';
import { equipments } from '../constants';

const Slider = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mx-auto "
    >
      <motion.h1
        variants={textVariant(1.1)}
        className="font-normal lg:text-[70px] sm:text-[45px] text-[35px]  uppercase text-white tracking-wide mx-auto text-center"
      >
        Equipments
      </motion.h1>
      <motion.div
        variants={textVariant(1.1)}
        className="flex justify-center items-center md:w-[35rem] lg:w-[75rem] w-[10rem] h-[12rem] sm:w-[30rem] sm:h-[20rem] lg:h-[27rem] sliderShadow mx-auto mt-[3rem] "
      >
        <Swiper
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
          // grabCursor={true}
          // navigation={true}
          // loop={true}
          // effect={'coverflow'}
          // slidesPerView={'auto'}
          // centeredSlides={true}
          // height={'auto'}
          // breakpoints={{
          //   600: {
          //     slidesPerView: '2',
          //     centeredSlides: true,
          //   },
          // }}
          // coverflowEffect={{
          //   slideShadows: false,
          //   rotate: 20,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 1,
          // }}
          // pagination={{ clickable: true }}
          // spaceBetween={0}
          // modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          // className="py-[3rem]"

          centeredSlides={true}
          loop={true}
          height={'auto'}
          effect={'cube'}
          grabCursor={true}
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: true,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: true,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
              centeredSlides: true,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
              centeredSlides: true,
            },
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper md:w-[52rem] w-[20rem] sm:w-[30rem] md:h-[18rem] h-[18rem]"
        >
          {equipments.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                src={item}
                className={'overlfow-hidden rounded-sm  h-[15rem]  '}
                alt={`equipment ${i}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Slider;
