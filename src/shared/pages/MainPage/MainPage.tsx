import { useState } from 'react';
import React from 'react';

import Card from '../../organisms/Card/Card';
import MoviesList from '../../organisms/MoviesList/MoviesList';

const MainPage = () => {
    const [Value, setValue] = useState("");
    const [Flag, setFlag] = useState(false);

    const changeComponent = (childValue: string) => {
        setValue(childValue);
    };

    const getAction = () => {
        setFlag(true);
        const SearchMoviesList = (
            <MoviesList isSearch={true} valueSearch={Value} />
        );
    };

    return (
        <div className="App">
            <section className="App-section">
                <Card getData={changeComponent} getAction={getAction} />
                {Flag ? <MoviesList isSearch={true} valueSearch={Value} /> : ""}
            </section>
        </div>
    );
};

export default MainPage;
