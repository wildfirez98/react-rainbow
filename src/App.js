import React, { useState } from 'react'
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';
import '../src/App.css';
import HeaderText from './Header';

function App(){
    let [colors, setColors] = useState([
      'violet', 'blue',
      'lightblue', 'green', 
      'greenyellow', 'yellow', 
      'orange', 'red'
    ])
  
    let colorMap = colors.map((color, i) => {
      return (
        <ColorBlock color={color} />
      )
    })

    const addColor = (newColor) => {
      setColors([...colors, newColor])
    }

    return (
        <div className="App">
          <HeaderText />
          {colors.map((color, i) => 
            <ColorBlock key={i} color={color} />
          )}
          <ColorForm addColor={addColor} />
        </div>
    )
}

export default App;
