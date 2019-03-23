import React from 'react'

interface IProps {
    description: string;
}


const CardBackFacing = (props: IProps) => {
    return (
        <div className="back-facing">
            <p>
                {props.description}
            </p>
        </div>
    )
}

export default CardBackFacing