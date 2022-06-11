import React from 'react'
import { EmptyCartImg } from '../Assets'

const EmptyCart = () => {
  return (
    <div className='w-full p-5 flex items-center justify-center'>
        <img className='md:w-1/2 w-[90%] h-auto' src={EmptyCartImg} alt='empty cart' />
    </div>
  )
}

export default EmptyCart