'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src={
            'https://res.cloudinary.com/dbmw0xoar/image/upload/v1671092063/ecell/MURL/avinash_on3net.png'
          }
          alt="get-started"
          className="w-[80%] h-[80%] md:w-[60%] md:h-[60%] lg:w-[80%] lg:h-[80%] object-contain rounded-sm shadow-md"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="PRINCIPAL INVESTIGATOR" />
        <p className="mt-[8px] font-normal sm:text-[20px] text-[16px] text-left text-secondary-white">
          Our lab is led by{' '}
          <span className="font-bold text-white">Dr. Avinash Eranki</span>
          , Assistant Professor within the Department of Biomedical Engineering
          at Indian Institute of Technology, Hyderabad.
          <br /> <br /> Dr.Eranki worked with Prof.Chrit. T.W. Moonen, and
          Dr.Mario Ries at University Medical Center Utrecht, Netherlands,
          Dr.Bradford J.Wood at the Clinical Center, National Institutes of
          Health, and Dr.Peter C.W. Kim at Children's National Medical Center on
          developing novel therapeutic ultrasound techniques for cancer therapy.
          <br /> <br />
          <span className="font-bold text-white">
            He was also part of the a team to first treat children with bone
            tumors
          </span>
          . His recent work on therapeutic ultrasound and immunotherapy is
          currently being translated to a clinical trial to treat patients with
          Breast Cancer and Neuroblastoma.
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
