import React from 'react'
import './MovieItem.css'
import CardFrontFacing from '../../atoms/CardFrontFacing/CardFrontFacing';
import CardBackFacing from '../../atoms/CardBackFacing/CardBackFacing';

interface IProps {
    title: string,
    description: string,
    releaseDate: string
}



export default function MovieItem (props: IProps) {

    return (
        <div className="movie-card">

            <CardFrontFacing title={props.title} releaseDate={props.releaseDate}/>
            <CardBackFacing description={props.description}/>

	    </div>        
    )

}