import './Surprise.css';

import React, { useEffect, useState } from 'react';

interface IProps {
    getAction: () => void;
    description: string;
    className: string;
    isSurprise: boolean;
}

export default function Surprise(props: IProps) {
    const [styles, setStyles] = useState({});
    useEffect(() => {
        setStyles({
            opacity: 0.88
        });
    });

    return (
        <button
            style={styles}
            className={props.className}
            onClick={props.getAction}
        >
            {props.description}
        </button>
    );
}
