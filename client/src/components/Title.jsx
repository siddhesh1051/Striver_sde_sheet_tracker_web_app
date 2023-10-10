import React from 'react'

const Title = ({question}) => {
    return (
        <h1 className="text-start pr-4" style={{ gridColumn: "2", marginLeft: '2rem' }}>
            {question.title}
        </h1>
    )
}

export default Title
