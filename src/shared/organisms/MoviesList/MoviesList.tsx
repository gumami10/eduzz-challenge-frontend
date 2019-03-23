import React from 'react'
import rawData from './data.mock.json'
import MovieItem from '../../molecules/MovieItem/MovieItem'
import './MoviesList.css'

export default function MoviesList () {

    const data = rawData.results.map((obj) => {
        return {
            title: obj.title,
            description: obj.opening_crawl,
            releaseDate: obj.release_date
        }
    })

    console.log(data)
    return (
        <ul className="MoviesList">
           {data.map((sample) => {
               return (
                   <MovieItem 
                        title={sample.title} 
                        releaseDate={sample.releaseDate}
                        description={sample.description}
                    />
               )
           })}
        </ul>
    )
}