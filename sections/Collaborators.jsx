'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import React from 'react';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import { colaboratorsData } from '../constants';

const Collaborators = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
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
          className="font-normal lg:text-[70px] sm:text-[45px] text-[35px]  uppercase text-white tracking-wide mb-[3rem] lg:mb-[4rem]"
        >
          Collaborators
        </motion.h1>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-[3.5rem]"
          variants={fadeIn('up', 'tween', 0.2, 1)}
        >
          {/* {colaboratorsData.map((item) => (
            <div className="lg:w-[12rem w-40 rounded-md hover:scale-[1.05] transition-all ">
              <img
                key={item.heading}
                src={item.img}
                alt={item.heading}
                className="object-cover rounded-md"
              />
            </div>
          ))} */}
          <div className="infinite flex gap-5 w-fit">
            {colaboratorsData.map((item, i) => (
              <div>
                <div className="lg:w-[15rem] lg:h-[14rem] h-40 w-40 rounded-md">
                  <img
                    key={item.heading}
                    src={item.img}
                    alt={item.heading}
                    className="object-cover lg:w-[15rem] lg:h-[14rem] h-40 w-40 rounded-md"
                  />
                </div>
              </div>
            ))}
            {colaboratorsData.map((item, i) => (
              <div>
                <div className="lg:w-[15rem] lg:h-[14rem] h-40 w-40 rounded-md">
                  <img
                    key={item.heading + i}
                    src={item.img}
                    alt={item.heading}
                    className="object-cover lg:w-[15rem] lg:h-[14rem] h-40 w-40 rounded-md"
                  />
                </div>
              </div>
            ))}
            {colaboratorsData.map((item, i) => (
              <div>
                <div className="lg:w-[15rem] lg:h-[14rem] h-40 w-40 rounded-md">
                  <img
                    key={item.heading + i + i}
                    src={item.img}
                    alt={item.heading}
                    className="object-cover lg:w-[15rem] lg:h-[14rem] h-40 w-40 rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Collaborators;
