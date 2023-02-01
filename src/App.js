import React, { useState, useRef, useEffect } from 'react'
import './styles/_app.scss'
import SoundButtons from './components/SoundButtons'

const App = () => {
  const drumpad = [
    // Q W E
    {
      id: 1,
      divId: 'drum_pad_Q',
      text: 'Q',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      instrument: 'Heater-1',
      audioRef: useRef(null),
    },
    {
      id: 2,
      divId: 'drum_pad_W',
      text: 'W',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      instrument: 'Heater-2',
      audioRef: useRef(null),
    },
    {
      id: 3,
      divId: 'drum_pad_E',
      text: 'E',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      instrument: 'Heater-3',
      audioRef: useRef(null),
    },
    // A S D
    {
      id: 4,
      divId: 'drum_pad_A',
      text: 'A',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      instrument: 'Heater-4',
      audioRef: useRef(null),
    },
    {
      id: 5,
      divId: 'drum_pad_S',
      text: 'S',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      instrument: 'Heater-6',
      audioRef: useRef(null),
    },
    {
      id: 6,
      divId: 'drum_pad_D',
      text: 'D',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      instrument: 'Dsc_Oh',
      audioRef: useRef(null),
    },
    // Z X C
    {
      id: 7,
      divId: 'drum_pad_Z',
      text: 'Z',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      instrument: 'Kick_n_Hat',
      audioRef: useRef(null),
    },
    {
      id: 8,
      divId: 'drum_pad_X',
      text: 'X',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      instrument: 'RP4_KICK_1',
      audioRef: useRef(null),
    },
    {
      id: 9,
      divId: 'drum_pad_C',
      text: 'C',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      instrument: 'Cev_H2',
      audioRef: useRef(null),
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

  useEffect(() => {
    const displayTimer = setTimeout(() => {
      const DRUM_MACHINE_DISPLAY = 'Drum Machine'

      if (display !== DRUM_MACHINE_DISPLAY) {
        setDisplay(DRUM_MACHINE_DISPLAY)
      }
    }, 800)

    window.addEventListener('keyup', (e) => {
      handleClick(e.key.toUpperCase())
    })

    return () => {
      window.removeEventListener('keyup', (e) => {
        handleClick(e.key.toUpperCase())
      })

      clearTimeout(displayTimer)
    }
  }, [display])

  return (
    <div id='drum-machine'>
      <div id='display'>{display}</div>
      <div className='drum-pad-box'>
        {drumpad.map(({ id, divId, text, audioSrc, instrument }) => (
          <SoundButtons
            key={id}
            setDisplay={setDisplay}
            divId={divId}
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
