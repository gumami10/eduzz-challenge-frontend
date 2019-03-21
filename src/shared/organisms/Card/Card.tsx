import React, { useState, useEffect } from 'react'
import Input from '../../atoms/Input/Input'
import './Card.css'
import Select from '../../atoms/Select/Select';

const Card = () => {

    // const [buttonPressed, setButton] = useState(false)
    const [style, setStyle] = useState({})
    
    function changeBackground () {
        setStyle({
            "display": "none"
        })
    }
    
    return (
        <form className="card-input" style={style}>
            <Input
                placeholder="E-mail" 
                className="item"
            />
            {/* <Select /> */}
            <Input 
                type="password"
                placeholder="Senha" 
                className="item"
            />

            <button 
                className="button -container"
                type="button"
                onClick={changeBackground}
            >
                Salvar
            </button>
        </form>
    )
}

export default Card