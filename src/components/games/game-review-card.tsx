import React, { HTMLAttributes } from 'react'
import { IoStar } from 'react-icons/io5';

export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  username: string;
  rating: number;
  game: string;
  imageUrl: string;
}

const GameCard = ({username, rating, game, imageUrl, className, ...rest}: Props) => {
  return (
    <div
      className={`flex flex-col bg-[#00000040] backdrop-blur-md rounded-md border-[1px] border-[#FFFFFF16] px-3 py-4 ${className}`}
      {...rest}
    >
      <img
        src={imageUrl}
        alt="gamecard-image"
        className="w-64 h-80 object-cover border-[1px] border-[#FFFFFF16] rounded-md"
      />
      <div className="mt-2 flex flex-col">
        <p>{game}</p>
        <div className="flex flex-row items-center gap-2">
          <img src="https://picsum.photos/id/1/15/15" alt="user-avatar-1" className="rounded-lg" />
          <p className="flex-1">{username}</p>
          <div className="flex flex-row items-center gap-1">
            <p>{rating}</p>
            <IoStar size={18} className="text-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameCard;