import React from 'react';

import styles from '../styles';

const TeamCard = ({
  img,
  name,
  currentDesignation = ['', ''],
  prevDesignation = ['', ''],
  email,
}) => (
  <div className="flex md:flex-row flex-col md:gap-20 gap-5 my-20 z-100 items-center justify-center w-[20rem] md:w-[50rem] text-left mx-auto">
    <img
      src={
        'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg'
      }
      alt={name}
      className=" w-60 h-[16rem]  rounded-md shadow-lg"
    />
    <div className="flex flex-col gap-3 w-[90%]">
      <h3 className={styles.teamDisc}>
        <span className="font-bold">{name}</span>
      </h3>
      <h4 className={styles.teamDisc}>
        {currentDesignation[0]}
        {', '}
        <span className="font-bold">{currentDesignation[1]}</span>
      </h4>
      {prevDesignation[0] !== '' ? (
        <h4 className={styles.teamDisc}>
          {prevDesignation[0]}
          {', '}
          <span className="font-bold">{prevDesignation[1]}</span>
        </h4>
      ) : (
        ''
      )}
      <h4 className={styles.teamDisc}>
        <span className="font-bold">Email Id: </span> {email}
      </h4>
    </div>
  </div>
);

export default TeamCard;
