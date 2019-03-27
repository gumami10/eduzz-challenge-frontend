import { useState } from 'react';
import React from 'react';

import Card from '../../organisms/Card/Card';
import MoviesList from '../../organisms/MoviesList/MoviesList';

const MainPage = () => {
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
