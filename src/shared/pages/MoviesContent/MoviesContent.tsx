import React, { useEffect } from 'react';
import * as ReactRedux from 'react-redux';

import { getMovies } from '../../../redux/reducers/moviesReducer';
import MoviesList from '../../organisms/MoviesList/MoviesList';

const MoviesContent = (props: any) => {
    const Styles = {
        width: "80%"
    };
    useEffect(() => {
        props.getMovies("");
    }, []);
    return (
        <section className={`card-container MoviesContent`} style={Styles}>
            <MoviesList surprise={true} style={Styles} />
        </section>
    );
};

const mapStateToProps = null;

const mapDispatchToProps = {
    getMovies
};

const connectToRedux = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export default connectToRedux(MoviesContent);
