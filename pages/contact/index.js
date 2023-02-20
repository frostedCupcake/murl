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
        className="flex flex-col justify-center items-center border-white lg:px-[10rem] px-[2rem] py-[3rem] mx-auto lg:w-[80rem] w-[90%]"
        variants={fadeIn('up', 'tween', 0.2, 1)}
      >
        <div className="flex flex-col gap-5">
          <h1 className="text-center mx-auto text-white text-4xl font-bold mb-[1rem]">
            Contact Us
          </h1>
          <ul className="text-left mx-auto text-[.8rem] text-white leading-relaxed md:text-base tracking-wider flex flex-col gap-2">
            <li>
              MURL is currently looking for highly motivated students with
              4-year Bachelors or Masters degree to pursue a PhD or work on
              sponsored projects.
            </li>
            <li>
              We are looking for interns and project students to work on 2 - 6
              months capstone projects on the spectrum of themes available in
              our lab.
            </li>
            <li>
              Students with their own fellowships (CSIR/DBT/ICMR/equivalent) are
              strongly encouraged to apply for the PhD and capstone programs.
            </li>
            <li>
              Interested applicants can send their application to Dr Avinash
              Eranki through the form. We will let you know of any updates.
            </li>
          </ul>
          <div className="flex flex-col md:flex-row justify-between md:gap-10 gap-1">
            <div className="flex flex-col w-full gap-1">
              <label for="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <label for="email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:gap-10 gap-1">
            <div className="flex flex-col w-full gap-1">
              <label for="degree" className="leading-7 text-sm text-gray-400">
                Degree
              </label>
              <input
                type="text"
                id="degree"
                name="degree"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <label for="number" className="leading-7 text-sm text-gray-400">
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                name="number"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-1">
            <label for="message" className="leading-7 text-sm text-gray-400">
              Query/SoP
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default index;
