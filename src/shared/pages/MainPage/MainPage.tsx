import React from 'react';
import * as ReactRedux from 'react-redux';

import { getMovies } from '../../../redux/reducers/moviesReducer';
import Surprise from '../../atoms/Surprise/Surprise';
import Card from '../../organisms/Card/Card';
import MoviesContent from '../MoviesContent/MoviesContent';

const MainPage = () => {
    return (
        <div className="App">
            <section className="App-section">
                <Surprise />
                <Card />
                <MoviesContent />
            </section>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    moviesReducer: state.movies
});

const mapDispatchToProps = {
    getMovies
};

const connectToRedux = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export default connectToRedux(MainPage);
