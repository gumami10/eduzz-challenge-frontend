import React from 'react'
import Input from '../../atoms/Input/Input'

const Card = () => {
    return (
        <div className="card animate Red">
            <Input
                placeholder="Titulo" 
                className="card-title"
            />

            <Input 
                placeholder="Descrição" 
                className="card-description"
            />

            <button type="button">Salvar</button>
        </div>
    )
}

export default Card