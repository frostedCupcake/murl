import Link from 'next/link';
import React from 'react';
import {
  AiFillLinkedin,
  AiOutlineLinkedin,
  AiOutlineMail,
} from 'react-icons/ai';

import styles from '../styles';

const TeamCard = ({
  img,
  name,
  currentDesignation = ['', ''],
  prevDesignation = ['', ''],
  email,
  expertise = '',
  linkedin = '',
}) => (
  <div className="flex md:flex-row flex-col md:gap-20 lg:gap-1 gap-5 my-20 z-100 items-center justify-center w-[20rem] md:w-[50rem] lg:w-[70rem] text-left mx-auto">
    <div className="flex flex-col gap-3 w-full justify-center items-center">
      <img
        src={img}
        alt={name}
        className=" w-60 h-[16rem]  rounded-md shadow-lg"
      />
      {/* <img
        src={
          'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg'
        }
        alt={name}
        className=" w-60 h-[16rem]  rounded-md shadow-lg"
      /> */}
      <div
        className="flex flex-row gap-10 items-center text-white text-base md:text-[1.2rem] 
      lg:text-[1.7rem] font-bold "
      >
        {linkedin !== 1 ? (
          <Link href={linkedin}>
            <a>
              <AiOutlineLinkedin />
            </a>
          </Link>
        ) : (
          ''
        )}

        <Link href={'mailto:jaswanthbeere@gmail'}>
          <a>
            <AiOutlineMail />
          </a>
        </Link>
      </div>
    </div>
    <div className="flex flex-col gap-3 w-[100%]">
      <h3 className={styles.teamDisc}>
        <span className="font-bold">{name}</span>
      </h3>
      <h4 className={styles.teamDisc}>
        {currentDesignation[0]}
        {/* {', '} */}
        <span className="font-bold block">{currentDesignation[1]}</span>
      </h4>
      {prevDesignation[0] !== '' ? (
        <h4 className={styles.teamDisc}>
          {prevDesignation[0]}
          {/* {', '} */}
          <span className="font-bold block">{prevDesignation[1]}</span>
        </h4>
      ) : (
        ''
      )}
      {expertise !== '' ? (
        <h4 className={styles.teamDisc}>
          <span className="font-bold">Expertise: </span> {expertise}
        </h4>
      ) : (
        ''
      )}
    </div>
  </div>
);

export default TeamCard;
