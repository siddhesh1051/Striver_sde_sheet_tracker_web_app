import { Progress } from '@nextui-org/react'
import React from 'react'

const ProgressBar = ({doneCount,revisitCount}) => {
  return (
    <div className="flex py-4 px-2" >
                <Progress 
                label="Questions Solved"
                
                size="md"
                    value={doneCount}
                    maxValue={180}
                    color="warning"
                    showValueLabel={true}
                    valueLabel = {`${doneCount}/180`}
                    className="max-w-md px-4 "
                />
                <Progress
                label="Questions Marked for Revisit"
                
                size="md"
                value={revisitCount}
                maxValue={180}
                color="warning"
                showValueLabel={true}
                valueLabel = {`${revisitCount}/180`}
                className="max-w-md px-4"
                />
                <Progress
                label="Total Questions Solved"
                
                size="md"
                value={revisitCount + doneCount}
                maxValue={180}
                color="warning"
                showValueLabel={true}
                valueLabel = {`${revisitCount + doneCount}/180`}
                className="max-w-md px-4"
                />
                
                </div>
  )
}

export default ProgressBar
