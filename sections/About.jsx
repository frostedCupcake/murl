'use client';
import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col my-2`}
    >
      <TypingText title="ABOUT" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[25px] text-[16px] text-left text-secondary-white"
      >
        <span className="font-extrabold text-white">MURL</span> is focused on
        the intersection of basic engineering, biology, and medicine, combined
        with clinical trials. MURL develops smart therapeutic & diagnostic
        ultrasound techniques for broad clinical themes including cancer,
        maternal/fetal, and musculoskeletal applications. Our vision is to
        develop and translate medical ultrasound techniques and devices to the
        clinic, leading to improved patient care.
      </motion.p>
      {/* <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      /> */}
    </motion.div>
  </section>
);

export default About;
