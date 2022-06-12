import React from 'react'
import { EmptyCartImg } from '../Assets'

const EmptyCart = () => {
  return (
    <div className='w-full p-5 flex flex-col items-center gap-4 justify-center'>
        <img className='h-[340px]' src={EmptyCartImg} alt='empty cart' />
        <p className="text-textColor  font-semibold">Cart is empty</p>
    </div>
  )
}

export default EmptyCart