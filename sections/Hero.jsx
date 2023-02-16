'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          MURL
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-col justify-center items-center"
        >
          <h1 className={styles.heroSText}>Medical ultrasound </h1>
          <h1 className={`${styles.heroSText} lg:mb-5`}>
            RESEARCH LABORATORY{' '}
          </h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px] hidden lg:block"
      >
        <div className="absolute w-full h-[300px] hero-gradient z-[0] rounded-tl-md rounded-tr-md -top-[30px]" />

        <img
          src={
            'https://res.cloudinary.com/dbmw0xoar/image/upload/v1671083484/ecell/MURL/abstraction-bacteria-blue-wallpaper-preview_tzkolm.jpg'
          }
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover z-10 rounded-bl-md rounded-br-md  relative"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
