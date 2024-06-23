import React from 'react';
import { IconType } from 'react-icons';

export interface Props {
  feature: string;
  Icon: IconType
}

const FeaturesCard = ({feature, Icon}: Props) => {
  return (
    <div className="bg-gradient-to-r from-[#ffffff11] to-[#d9d9d910] backdrop-blur-sm rounded-lg p-4 flex items-start space-x-3">
      <Icon className="w-6 h-6 flex-shrink-0 text-gray-300" />
      <p className="text-gray-300">
        {feature}
      </p>
      </div>
  )
}

export default FeaturesCard;
