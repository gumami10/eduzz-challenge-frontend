import './MoviesList.css';

import React, { Component, useEffect } from 'react';
import * as ReactRedux from 'react-redux';

import MovieItem from '../../molecules/MovieItem/MovieItem';

interface IProps {
    moviesReducer: {
        movies: any;
        isLoading: boolean;
        errors: boolean;
    };
    surprise?: boolean;
}

class MoviesList extends Component<IProps | any> {
    render() {
        console.log(this.props);
        const movies = this.props.moviesReducer.movies.movies || [];
        return (
            <ul className="MoviesList">
                {this.props.surprise === true ? (
                    <h1 style={{ textAlign: "center" }}>Enjoy the darkside</h1>
                ) : movies.length === 0 ? (
                    <h1 style={{ textAlign: "center" }}>
                        Type something we can search for!
                    </h1>
                ) : (
                    <h1 style={{ textAlign: "center" }}>Star Wars Movies</h1>
                )}

                {movies.map((sample: any) => {
                    return (
                        <MovieItem
                            key={sample.episode_id}
                            title={sample.title}
                            releaseDate={sample.release_date}
                            description={sample.opening_crawl}
                        />
                    );
                })}
            </ul>
        );
    }
}

const mapStateToProps = (state: any) => ({
    moviesReducer: state
});

const mapDispatchToProps = null;

const connectToRedux = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export default connectToRedux(MoviesList);
