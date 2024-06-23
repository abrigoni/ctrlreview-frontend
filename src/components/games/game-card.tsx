import React from 'react'
import { IoGameController, IoHeart } from "react-icons/io5";

export interface Props {
  imageUrl: string;
  plays: number;
  likes: number;
}

const GameCard = ({imageUrl, plays, likes}: Props) => {
  return (
    <div
      className="bg-cover bg-center h-60 w-40 rounded-md border-[1px] border-[#FFFFFF16] px-5 py-5 hover:border-pink-500 relative group"
      style={{backgroundImage: `url(${imageUrl})`}}
    >
      <div className="h-full flex flex-col justify-center bg-[#000000DD] px-4 py-4 rounded-md gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="flex flex-col justify-center items-center">
          <IoGameController size={50} className="text-yellow-500" />
          <p className="text-lg">{plays}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <IoHeart size={50} className="text-red-500" />
          <p className="text-lg">{likes}</p>
        </div>
      </div>
    </div>
  )
};

export default GameCard;
