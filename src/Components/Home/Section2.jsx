import React from 'react'
import story from "../../image/slove.jpg"
import side from "../../image/side.jpg"
import "../Home/Section.css"

const Section2 = () => {
  return (
    <div className='section2'>
      <div className='cap'>
       <img src={story} alt="" className='sectimg' />
       <button className='cap-btn'>our story</button>
       </div>
       <div className='cap'>
       <img src={side} alt="" className='sectim' />
        <button className='cap-b'>our blog</button>
        </div>
    </div>
  )
}

export default Section2