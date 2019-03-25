import React, { useState } from "react";
import "./MovieItem.css";
import CardFacing from "../../atoms/CardFacing/CardFacing";

interface IProps {
    title: string;
    description: string;
    releaseDate: string;
}

export default function MovieItem(props: IProps) {
    const [style, setStyle] = useState({});
    const [showDetails, setShowDetails] = useState(false);

    const changeCard = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="movieItem" onClick={changeCard} style={style}>
            <CardFacing
                showDetails={showDetails}
                title={props.title}
                releaseDate={props.releaseDate}
                description={props.description}
            />
        </div>
    );
}
