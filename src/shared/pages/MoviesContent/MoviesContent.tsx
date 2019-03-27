import React from 'react';

import MoviesList from '../../organisms/MoviesList/MoviesList';

const MoviesContent = () => {
    const Styles = {
        width: "80%"
    };
    return (
        <section className={`card-container MoviesContent`} style={Styles}>
            <MoviesList isSearch={false} />
        </section>
    );
};

export default MoviesContent;
