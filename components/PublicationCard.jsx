import React from 'react';
import { AiOutlineBook } from 'react-icons/ai';

const PublicationCard = ({ name, disc, date }) => (
  <div className="flex flex-col md:items-start items-center justify-center mx-auto">
    <div className="flex flex-col justify-center md:flex-row md:my-[1.2rem] my-[1rem] gap-5 ">
      <div className="image md:block hidden text-white font-thin text-[8rem]">
        <AiOutlineBook />
      </div>
      <div className="content flex flex-col lg:md:w-[45rem] md:w-[35rem] w-[20rem] mx-auto">
        <h5 className="text-white font-bold">{name}</h5>
        <p className="text-white font-normal text-[.8rem] pt-1 md:text-[.9rem]">
          {disc}
        </p>
        <h6 className="text-white font-bold py-1">{date}</h6>
      </div>
    </div>
  </div>
);

export default PublicationCard;
