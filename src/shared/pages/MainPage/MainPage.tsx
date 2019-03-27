import { useState } from 'react';
import React from 'react';

import Card from '../../organisms/Card/Card';
import MoviesList from '../../organisms/MoviesList/MoviesList';

const MainPage = () => {
    const [Value, setValue] = useState("");

    const changeComponent = (childValue: string) => {
        setValue(childValue);
    };

    return (
        <div className="App">
            <section className="App-section">
                <Card />
                <MoviesList />
            </section>
        </div>
    );
};

export default MainPage;
