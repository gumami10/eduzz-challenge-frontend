import React, { useState, useEffect } from "react";

interface IProps {
    title: string;
    releaseDate: string;
    description: string;
    showDetails: boolean;
}

const CardFacing = (props: IProps) => {
    // useEffect(() => {
    //     Flag
    //     ? setConditionalComponent(
    //         <>
    //             <span className="release-date">{props.releaseDate}</span>
    //             <p>
    //                 {props.description}
    //             </p>
    //         </>
    //     )
    //     : setConditionalComponent(<></>)
    // }, [Flag])

    const Details = () => {
        return (
            <>
                <span className="release-date">{props.releaseDate}</span>
                <p>{props.description}</p>
            </>
        );
    };

    return (
        <div className="card-facing">
            <h1 className="title">{props.title}</h1>
            {props.showDetails ? <Details /> : null}
        </div>
    );
};

export default CardFacing;
