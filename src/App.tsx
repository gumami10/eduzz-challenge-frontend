import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './shared/organisms/Card/Card'
import Surprise from './shared/atoms/Surprise/Surprise';
import MoviesList from './shared/organisms/MoviesList/MoviesList';
import MoviesContent from './shared/organisms/MoviesList/MoviesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Surprise />
          <Card />
          <MoviesContent />
        </header>
      </div>
    );
  }
}

export default App;
