import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 15
  const addValue = () =>{
    counter = counter + 1;
  }

  return (
    <>
        <h1>Hello Vita</h1>
        <h2>Counter Value : {counter}</h2>

        <button 
        onClick={addValue}
        > Add value</button>
        <br/>
        <button> Remove value</button>
    </>
  )
}

export default App
