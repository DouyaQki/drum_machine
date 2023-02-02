import React, { useState, useEffect } from 'react'
import './styles/_app.scss'
import SoundButtons from './components/SoundButtons'

const App = () => {
  const drumpad = [
    // Q W E
    {
      id: 1,
      buttonId: 'drum_pad_Q',
      text: 'Q',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      instrument: 'Heater-1',
    },
    {
      id: 2,
      buttonId: 'drum_pad_W',
      text: 'W',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      instrument: 'Heater-2',
    },
    {
      id: 3,
      buttonId: 'drum_pad_E',
      text: 'E',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      instrument: 'Heater-3',
    },
    // A S D
    {
      id: 4,
      buttonId: 'drum_pad_A',
      text: 'A',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      instrument: 'Heater-4',
    },
    {
      id: 5,
      buttonId: 'drum_pad_S',
      text: 'S',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      instrument: 'Heater-6',
    },
    {
      id: 6,
      buttonId: 'drum_pad_D',
      text: 'D',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      instrument: 'Dsc_Oh',
    },
    // Z X C
    {
      id: 7,
      buttonId: 'drum_pad_Z',
      text: 'Z',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      instrument: 'Kick_n_Hat',
    },
    {
      id: 8,
      buttonId: 'drum_pad_X',
      text: 'X',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      instrument: 'RP4_KICK_1',
    },
    {
      id: 9,
      buttonId: 'drum_pad_C',
      text: 'C',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      instrument: 'Cev_H2',
    },
  ]
  const [display, setDisplay] = useState('Drum Machine')

  const handleClick = (letter) => {
    const audio = document.getElementById(letter)

    const DRUM_Q_CLASS = `drum_pad_${letter}`
    const DRUM_ANIMATION = 'drum-pad-animation'
    const drumButton = document.getElementById(DRUM_Q_CLASS)

    if (drumButton) {
      drumButton.classList.add(DRUM_ANIMATION)

      setTimeout(() => {
        if (drumButton.className.includes(DRUM_ANIMATION)) {
          drumButton.classList.remove(DRUM_ANIMATION)
        }
      }, 150)
    }

    if (audio) {
      const { instrument } = drumButton.dataset

      setDisplay(instrument)

      audio.currentTime = 0
      audio.play()
    }
  }

  //* Key sounds and drum display ----------------------->
  const keyboardSounds = () => {
    const displayTimer = setTimeout(() => {
      const DRUM_MACHINE_DISPLAY = 'Drum Machine'

      if (display !== DRUM_MACHINE_DISPLAY) {
        setDisplay(DRUM_MACHINE_DISPLAY)
      }
    }, 800)

    const addEventKeyupCallback = (e) => {
      handleClick(e.key.toUpperCase())
    }

    window.addEventListener('keyup', addEventKeyupCallback)

    return () => {
      window.removeEventListener('keyup', addEventKeyupCallback)

      clearTimeout(displayTimer)
    }
  }

  useEffect(keyboardSounds, [display])

  return (
    <div id='drum-machine'>
      <h1 id='display'>{display}</h1>
      <div className='drum-pad-box'>
        {drumpad.map(({ id, buttonId, text, audioSrc, instrument }) => (
          <SoundButtons
            key={id}
            setDisplay={setDisplay}
            buttonId={buttonId}
            text={text}
            audioSrc={audioSrc}
            instrument={instrument}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  )
}

export default App
