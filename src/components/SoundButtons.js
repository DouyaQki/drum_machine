import React from 'react'

const SoundButtons = ({
  setDisplay,
  divId,
  text,
  audioSrc,
  instrument,
  handleClick,
}) => {
  return (
    <div className='drum-pad' id={divId} onClick={() => handleClick(text)}>
      {text}
      <audio src={audioSrc} className='clip' id={text} />
    </div>
  )
}

export default SoundButtons
