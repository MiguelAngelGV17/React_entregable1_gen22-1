import React from 'react'
import ButtonBox from './ButtonBox'

const QuoteBox = ({ quoteRandom, handleClick, colorRandom }) => {

  return (
    <article style = {{color: colorRandom}} className='box'>
      <i className='bx bxs-quote-left'></i>
      <p className='box__paragraph'>{quoteRandom.quote}</p>
      <div className='box__quote'>
      <h1>{quoteRandom.author}</h1>
      <ButtonBox 
      colorRandom = {colorRandom}
      handleClick = {handleClick}
      />
      </div>
    </article>
  )
}

export default QuoteBox