import React, {useState, useEffect} from 'react'

export default function Select () {
    const [value, setValue] = useState('')

    useEffect(() => {
        console.log(value);
    })
    
    return (
        <select name="" value={value} onChange={e => setValue(e.target.value)}>
            <option value="teste1">teste1</option>
            <option value="teste2">teste2</option>
            <option value="teste3">teste3</option>
        </select>
    )
}