import './Surprise.css';

import React from 'react';

interface IProps {
    getAction: () => void;
    description: string;
    className: string;
}

export default function Surprise(props: IProps) {
    return (
        <button className={props.className} onClick={props.getAction}>
            {props.description}
        </button>
    );
}
