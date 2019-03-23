import React from 'react'

interface IProps {
    title: string;
    releaseDate: string;
}

const CardFrontFacing = (props: IProps) => {
    return (
        <div className="front-facing">
                <h1 className="title">{props.title}</h1>
                <span className="release-date">{props.releaseDate}</span>
        </div>
    )
}

export default CardFrontFacing