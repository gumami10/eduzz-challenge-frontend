import React from 'react'
import Input from '../../atoms/Input/Input'
import './Card.css'
import Select from '../../atoms/Select/Select';

const Card = () => {
    return (
        <form className="card-input">
            <Input
                placeholder="Titulo" 
                className="item"
            />
            <Select />
            {/* <Input 
                type="checkbox"
                placeholder="Descrição" 
                className="item"
            /> */}

            <button className="button -container"type="button">Salvar</button>
        </form>
    )
}

export default Card