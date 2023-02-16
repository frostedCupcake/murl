'use strict';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion';
import styles from '../../styles';

const index = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col my-2`}
    >
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-[3.5rem]"
        variants={fadeIn('up', 'tween', 0.2, 1)}
      >
        <div className="flex flex-col justify-center items-center gap-10 border-white px-[10rem] py-[3rem] mx-auto md:w-[80rem] ">
          <h1 className="text-center mx-auto text-white text-4xl font-bold">
            Contact Us
          </h1>
          <p className=" text-center mx-auto text-white leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <label for="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <label for="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <label for="message" className="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          />

          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default index;
