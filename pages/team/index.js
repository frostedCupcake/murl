import { motion } from 'framer-motion';

import styles from '../../styles';
import React from 'react';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion';
import { TeamCard } from '../../components';
import { teamData } from '../../constants';

const page = () => {
  return (
    <>
      <Head>
        <title>Team</title>
      </Head>
      <section className={`${styles.paddings} relative z-10 `}>
        <div className="md:block hidden gradient-02 z-0" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col my-2`}
        >
          {/* <motion.h1
          variants={textVariant(0.5)}
          className="font-normal xl:text-[80px] sm:text-[40px] text-[30px]  uppercase text-white tracking-wide mb-[2rem]"
        >
          MURL TEAM
        </motion.h1> */}
          <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
            <motion.h1
              variants={textVariant(0.6)}
              className="font-thin xl:text-[40px] sm:text-[30px] text-[20px]  uppercase text-white tracking-widest mb-[2rem] text-center"
            >
              Principal Investigator
            </motion.h1>
            <TeamCard
              img={teamData[0].PI.img}
              name={teamData[0].PI.name}
              currentDesignation={teamData[0].PI.currentDesignation}
              prevDesignation={teamData[0].PI.prevDesignation}
            />
          </motion.div>
          <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
            <motion.h1
              variants={textVariant(1.2)}
              className="font-thin xl:text-[40px] sm:text-[30px] text-[20px]  uppercase text-white tracking-widest mb-[2rem] text-center"
            >
              Doctoral Fellows
            </motion.h1>
            {teamData[1].DOC.map((item, i) => (
              <TeamCard
                img={item.img}
                name={item.name}
                currentDesignation={item.currentDesignation}
                prevDesignation={item.prevDesignation}
                email={item.email}
                key={item.name}
                expertise={item.expertise}
                linkedin={item.linkedin}
              />
            ))}
          </motion.div>
          <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
            <motion.h1
              variants={textVariant(1.2)}
              className="font-thin xl:text-[40px] sm:text-[30px] text-[20px]  uppercase text-white tracking-widest mb-[2rem] text-center"
            >
              Masters students
            </motion.h1>
            {teamData[2].MASTERS.map((item, i) => (
              <TeamCard
                img={item.img}
                name={item.name}
                currentDesignation={item.currentDesignation}
                prevDesignation={item.prevDesignation}
                email={item.email}
                key={item.name}
                expertise={item.expertise}
                linkedin={item.linkedin}
              />
            ))}
          </motion.div>
          <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
            <motion.h1
              variants={textVariant(1.2)}
              className="font-thin xl:text-[40px] sm:text-[30px] text-[20px]  uppercase text-white tracking-widest mb-[2rem] text-center"
            >
              Staff
            </motion.h1>
            {console.log(teamData[2])}
            {teamData[3].STAFF.map((item, i) => (
              <TeamCard
                img={item.img}
                name={item.name}
                currentDesignation={item.currentDesignation}
                prevDesignation={item.prevDesignation}
                email={item.email}
                key={item.name}
                expertise={item.expertise}
                linkedin={item.linkedin}
              />
            ))}
          </motion.div>
          <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}>
            <motion.h1
              variants={textVariant(1.2)}
              className=" xl:text-[40px] sm:text-[30px] text-[20px]  uppercase text-white tracking-widest mb-[2rem] text-center"
            >
              Alumni
              <span className="font-thin text-xl block">
                Post Doctoral Researchers
              </span>
            </motion.h1>
            {console.log(teamData[2])}
            {teamData[4].RESEARCH.map((item, i) => (
              <TeamCard
                img={item.img}
                name={item.name}
                currentDesignation={item.currentDesignation}
                prevDesignation={item.prevDesignation}
                email={item.email}
                key={item.name}
                expertise={item.expertise}
                linkedin={item.linkedin}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default page;
