import React, { useState } from 'react'

function ColorForm(props) {
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addColor(input)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter a color name' 
                    onChange={ (e) => setInput(e.target.value)}
                    onFocus={ (e) => (e.target.value='')} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ColorForm