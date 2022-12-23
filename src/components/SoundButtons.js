import React from 'react'
import { useRef, useEffect } from 'react'

const audioSrcQ = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
const audioSrcW = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
const audioSrcE = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
const audioSrcA = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
const audioSrcS = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
const audioSrcD = 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
const audioSrcZ = 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
const audioSrcX = 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
const audioSrcC = 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'

const SoundButtons = ({ setDisplay }) => {
  const refQ = useRef(null)
  const refW = useRef(null)
  const refE = useRef(null)
  const refA = useRef(null)
  const refS = useRef(null)
  const refD = useRef(null)
  const refZ = useRef(null)
  const refX = useRef(null)
  const refC = useRef(null)

  const refAnimationQ = useRef(null)
  const refAnimationW = useRef(null)
  const refAnimationE = useRef(null)
  const refAnimationA = useRef(null)
  const refAnimationS = useRef(null)
  const refAnimationD = useRef(null)
  const refAnimationZ = useRef(null)
  const refAnimationX = useRef(null)
  const refAnimationC = useRef(null)

  useEffect(() => {
    const elementRefQ = refQ.current
    const elementRefW = refW.current
    const elementRefE = refE.current
    const elementRefA = refA.current
    const elementRefS = refS.current
    const elementRefD = refD.current
    const elementRefZ = refZ.current
    const elementRefX = refX.current
    const elementRefC = refC.current

    const elementRefAnimationQ = refAnimationQ.current
    const elementRefAnimationW = refAnimationW.current
    const elementRefAnimationE = refAnimationE.current
    const elementRefAnimationA = refAnimationA.current
    const elementRefAnimationS = refAnimationS.current
    const elementRefAnimationD = refAnimationD.current
    const elementRefAnimationZ = refAnimationZ.current
    const elementRefAnimationX = refAnimationX.current
    const elementRefAnimationC = refAnimationC.current

    const handleClick = (e) => {
      const keyCodes = [81, 87, 69, 65, 83, 68, 90, 88, 67]

      const isKeyQ = e.target.id === 'drum_pad_Q' || e.keyCode === keyCodes[0]
      const isKeyW = e.target.id === 'drum_pad_W' || e.keyCode === keyCodes[1]
      const isKeyE = e.target.id === 'drum_pad_E' || e.keyCode === keyCodes[2]
      const isKeyA = e.target.id === 'drum_pad_A' || e.keyCode === keyCodes[3]
      const isKeyS = e.target.id === 'drum_pad_S' || e.keyCode === keyCodes[4]
      const isKeyD = e.target.id === 'drum_pad_D' || e.keyCode === keyCodes[5]
      const isKeyZ = e.target.id === 'drum_pad_Z' || e.keyCode === keyCodes[6]
      const isKeyX = e.target.id === 'drum_pad_X' || e.keyCode === keyCodes[7]
      const isKeyC = e.target.id === 'drum_pad_C' || e.keyCode === keyCodes[8]

      const btnAnimation = (refAni) => {
        refAni.classList.add('drum-pad-animation')
      }

      if (isKeyQ) {
        setDisplay('Heater 1')

        elementRefQ.currentTime = 0
        elementRefQ.play().catch(() => console.clear())
        btnAnimation(elementRefAnimationQ)
      }

      if (isKeyW) {
        setDisplay('Heater 2')

        elementRefW.currentTime = 0
        elementRefW.play().catch(() => console.clear())
        btnAnimation(elementRefAnimationW)
      }

      if (isKeyE) {
        setDisplay('Heater 3')

        elementRefE.currentTime = 0
        elementRefE.play().catch(() => console.clear())
        btnAnimation(elementRefAnimationE)
      }

      if (isKeyA) {
        setDisplay('Heater 4')

        elementRefA.currentTime = 0
        elementRefA.play().catch(() => console.clear())
        btnAnimation(elementRefAnimationA)
      }

      if (isKeyS) {
        setDisplay('Clap')

        elementRefS.currentTime = 0
        elementRefS.play().catch(() => console.clear())
        btnAnimation(elementRefAnimationS)
      }

      if (isKeyD) {
        setDisplay('Open-HH')

        elementRefD.currentTime = 0
        elementRefD.play().catch(() => console.clear())
        btnAnimation(elementRefAnimationD)
      }

      if (isKeyZ) {
        setDisplay("Kick-n'-Hat")

        elementRefZ.currentTime = 0
        elementRefZ.play().catch(() => console.clear())
        btnAnimation(elementRefAnimationZ)
      }

      if (isKeyX) {
        setDisplay('Kick')

        elementRefX.currentTime = 0
        elementRefX.play().catch(() => console.clear())
        btnAnimation(elementRefAnimationX)
      }

      if (isKeyC) {
        setDisplay('Closed-HH')

        elementRefC.currentTime = 0
        elementRefC.play().catch(() => console.clear())
        btnAnimation(elementRefAnimationC)
      }
    }

    const setDisplayDefault = setTimeout(() => {
      setDisplay('Drum Machine')
    }, 1000)

    const setAnimation = setTimeout(() => {
      elementRefAnimationQ.classList.remove('drum-pad-animation')
      elementRefAnimationW.classList.remove('drum-pad-animation')
      elementRefAnimationE.classList.remove('drum-pad-animation')
      elementRefAnimationA.classList.remove('drum-pad-animation')
      elementRefAnimationS.classList.remove('drum-pad-animation')
      elementRefAnimationD.classList.remove('drum-pad-animation')
      elementRefAnimationZ.classList.remove('drum-pad-animation')
      elementRefAnimationX.classList.remove('drum-pad-animation')
      elementRefAnimationC.classList.remove('drum-pad-animation')
    }, 150)

    window.addEventListener('keyup', handleClick)
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('keyup', handleClick)
      window.removeEventListener('click', handleClick)

      clearTimeout(setDisplayDefault)
      clearTimeout(setAnimation)
    }
  }, [setDisplay])

  return (
    <div className='drum-pad-box'>
      <div className='drum-pad' id='drum_pad_Q' ref={refAnimationQ}>
        Q <audio src={audioSrcQ} className='clip' id='Q' ref={refQ}></audio>
      </div>
      <div className='drum-pad' id='drum_pad_W' ref={refAnimationW}>
        W <audio src={audioSrcW} className='clip' id='W' ref={refW}></audio>
      </div>
      <div className='drum-pad' id='drum_pad_E' ref={refAnimationE}>
        E <audio src={audioSrcE} className='clip' id='E' ref={refE}></audio>
      </div>
      <div className='drum-pad' id='drum_pad_A' ref={refAnimationA}>
        A <audio src={audioSrcA} className='clip' id='A' ref={refA}></audio>
      </div>
      <div className='drum-pad' id='drum_pad_S' ref={refAnimationS}>
        S <audio src={audioSrcS} className='clip' id='S' ref={refS}></audio>
      </div>
      <div className='drum-pad' id='drum_pad_D' ref={refAnimationD}>
        D <audio src={audioSrcD} className='clip' id='D' ref={refD}></audio>
      </div>
      <div className='drum-pad' id='drum_pad_Z' ref={refAnimationZ}>
        Z <audio src={audioSrcZ} className='clip' id='Z' ref={refZ}></audio>
      </div>
      <div className='drum-pad' id='drum_pad_X' ref={refAnimationX}>
        X <audio src={audioSrcX} className='clip' id='X' ref={refX}></audio>
      </div>
      <div className='drum-pad' id='drum_pad_C' ref={refAnimationC}>
        C <audio src={audioSrcC} className='clip' id='C' ref={refC}></audio>
      </div>
    </div>
  )
}

export default SoundButtons
