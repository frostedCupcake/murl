import { motion } from 'framer-motion';

import styles from '../../styles';
import React from 'react';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion';
import { researchData } from '../../constants';

const page = () => {
  return (
    <section className={`${styles.paddings} relative z-10 `}>
      <div className="md:block hidden gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col my-2`}
      >
        <motion.h1
          variants={textVariant(1.1)}
          className="font-normal xl:text-[80px] text-[35px]  uppercase text-white tracking-wide mb-[2rem]"
        >
          RESEARCH
        </motion.h1>
        <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
          {researchData.map((item) => (
            <div className="flex lg:flex-row flex-col lg:gap-10 gap-5 my-10 md:w-[30rem] w-[20rem] lg:w-[60rem] items-center justify-center lg:items-start mx-auto lg:mb-[1rem] mb-[2rem] ">
              <img
                src={
                  item.img === ''
                    ? 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1671083250/ecell/MURL/microscope-bacteria-microorganisms-microbes-wallpaper-preview_io0xsp.jpg'
                    : item.img
                }
                alt={item.name}
                className=" w-[22rem] rounded-sm shadow-lg"
              />
              <div className="flex flex-col gap-5 text-center lg:text-left">
                <h3 className="text-white font-bold text-sm tracking-wide pt-1 md:text-xl ">
                  {item.name}
                </h3>
                <p className="text-[.8rem] pt-1 md:text-[1.2rem] text-[#eee] font-thin">
                  {item.disc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default page;
