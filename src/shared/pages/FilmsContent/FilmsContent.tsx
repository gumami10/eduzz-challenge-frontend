import React from 'react'
import MoviesList from '../../organisms/MoviesList/MoviesList';

const FilmsContent = () => {
     
    const Styles = {
        "width": "80%",
    }
    return (
        <section className="card-container FilmsContent" style={Styles}>
            <MoviesList />  
        </section>
    )
}

export default FilmsContent