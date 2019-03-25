import React, { useState, useEffect } from 'react'
import Input from '../../atoms/Input/Input'
import './Card.css'
import Select from '../../atoms/Select/Select';

const Card = () => {

    // const [buttonPressed, setButton] = useState(false)
    const [Component, setComponent] = useState(false)
    // const [Style, setStyle] = useState({})


    const Form = () => {
        return (
            <button
                className="button -container"
                type="button"
                onClick={changeComponent}
            >
                Show me some action!
            </button>
        )
    }
    function changeComponent () {
        setComponent(true)
    }

    return (
        <form className="card-container">

            <Input
                placeholder="Type the best Star Wars movie!"
                className="item"
            />

            {
                Component === true
                ? "<FilmsContent />"
                : <Form />
            }

        </form>
    )
}

export default Card
