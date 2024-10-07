import React from 'react'

export interface Props {
  statName: string;
  statNumber: number;
}

const OverallGameStatsCard = ({statName, statNumber}: Props) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-lg">+{statNumber}</p>
      <p className="text-center text-xs">{statName}</p>
    </div>
  )
}

export default OverallGameStatsCard;
