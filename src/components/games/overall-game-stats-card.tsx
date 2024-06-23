import React from 'react'

export interface Props {
  statName: string;
  statNumber: number;
}

const OverallGameStatsCard = ({statName, statNumber}: Props) => {
  return (
    <div className="flex flex-col items-center min-w-36">
      <p>{statNumber}</p>
      <p>{statName}</p>
    </div>
  )
}

export default OverallGameStatsCard;
