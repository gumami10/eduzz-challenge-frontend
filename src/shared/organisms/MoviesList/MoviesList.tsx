import React from 'react'
import rawData from './data.mock.json'
import MovieItem from '../../molecules/MovieItem/MovieItem'
import './MoviesList.css'

export default function MoviesList () {
    const data = rawData.results.map((obj) => {
        return {title: obj.title, description: obj.opening_crawl}
    })
    console.log(data)
    return (
        <ul className="MoviesList">
           {data.map((sample) => {
               return (
                   <MovieItem 
                        title={sample.title} 
                        description={sample.description}
                    />
               )
           })}
        </ul>
    )
}