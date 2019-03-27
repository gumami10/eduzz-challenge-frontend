import './MoviesList.css';

import React, { Component, useEffect } from 'react';
import * as ReactRedux from 'react-redux';

import { getMovies } from '../../../redux/reducers/moviesReducer';
import MovieItem from '../../molecules/MovieItem/MovieItem';

interface IProps {
    moviesReducer: {
        movies: {
            results: {
                title: string;
                opening_crawl: string;
                release_date: string;
            }[];
        };
        isLoading: boolean;
        errors: boolean;
    };
    getMovies: (valueSearch?: string) => void;
    isSearch?: boolean;
    valueSearch?: string;
}

interface IState {
    movies: {
        results: {
            title: string;
            opening_crawl: string;
            release_date: string;
        };
    };
}

class MoviesList extends Component<IProps | any, IState> {
    state: IState = {
        movies: {
            results: {
                title: "",
                opening_crawl: "",
                release_date: ""
            }
        }
    };

    componentDidMount() {
        if (this.props.isSearch) {
            this.props.getMovies(this.props.valueSearch);
            console.log("ok");
        } else this.props.getMovies();
    }
    render() {
        const movies = this.props.moviesReducer.movies.results || [];
        console.log(movies);
        return (
            <ul className="MoviesList">
                <h1>All Star Wars movies</h1>
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
    moviesReducer: state.movies
});

const mapDispatchToProps = {
    getMovies
};

const connectToRedux = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export default connectToRedux(MoviesList);
