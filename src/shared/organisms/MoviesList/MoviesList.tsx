import React from 'react'
import rawData from './data.mock.json'

export default function MoviesList () {
    const data = rawData.results.map((obj) => {
        return {title: obj.title, description: obj.opening_crawl}
    })
    console.log(data)
    return (
        <ul className="MoviesList">
           {data.forEach}
        </ul>
    )
}