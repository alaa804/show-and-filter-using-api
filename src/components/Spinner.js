import React from 'react'
import spinner from '../img/image.gif'

const Spinner = () => {
  return (
    <div>
      <img src={spinner} 
      alt="...."
      style={{ display:'block' , width : '80px' , margin : 'auto' }} />
    </div>
  )
}


export default Spinner
