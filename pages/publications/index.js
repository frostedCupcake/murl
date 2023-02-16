import { motion } from 'framer-motion';

import styles from '../../styles';
import React from 'react';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion';
import PublicationCard from '../../components/PublicationCard';
import { publicationData } from '../../constants';

const page = () => {
  return (
    <section className={`${styles.paddings} relative z-10 `}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col my-2`}
      >
        <motion.h1
          variants={textVariant(1.1)}
          className="font-normal xl:text-[80px] sm:text-[40px] text-[30px]  uppercase text-white tracking-wide mb-[2rem]"
        >
          PUBLICATIONS
        </motion.h1>
        <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
          {publicationData.map((item, i) => (
            <PublicationCard
              name={item.name}
              disc={item.disc}
              date={item.date}
              key={i}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default page;
