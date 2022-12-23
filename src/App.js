import React, { useState } from 'react'
import './App.css'
import SoundButtons from './components/SoundButtons'

const App = () => {
  const [display, setDisplay] = useState('Drum Machine')


  return (
    <div id='drum-machine'>
      <div id='display'>{display}</div>
      <SoundButtons setDisplay={(param) => {setDisplay(param)}} />
    </div>
  )
}

export default App
