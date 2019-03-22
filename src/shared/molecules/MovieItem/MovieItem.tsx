import React from 'react'
import './MovieItem.css'

interface IProps {
    title: string,
    description: string
}

export default function MovieItem (props: IProps) {

    return (
        <li className="MovieItem">
            {props.title}
            <br></br>
            {props.description}
        </li>
        
    )

}