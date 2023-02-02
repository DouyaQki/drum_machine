import React from 'react'

const SoundButtons = ({ buttonId, text, audioSrc, instrument, handleClick }) => {
  return (
    <button
      className='drum-pad'
      id={buttonId}
      data-instrument={instrument}
      onClick={() => handleClick(text)}
    >
      {text}
      <audio src={audioSrc} preload='metadata' className='clip' id={text} />
    </button>
  )
}

export default SoundButtons
