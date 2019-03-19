import React from 'react'
import Input from '../../atoms/Input/Input'
import './Card.css'

const Card = () => {
    return (
        <div className="card-input">
            <Input
                placeholder="Titulo" 
                className="item"
            />

            <Input 
                placeholder="Descrição" 
                className="item"
            />

            <button className="button -container"type="button">Salvar</button>
        </div>
    )
}

export default Card