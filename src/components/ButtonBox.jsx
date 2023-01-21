import React from 'react'

const ButtonBox = ({colorRandom, handleClick}) => {
  return (
    <button 
    style = {{background: colorRandom}} 
    onClick = {handleClick}
    className = 'box__btn'
    > &#62;</button>
  )
}

export default ButtonBox