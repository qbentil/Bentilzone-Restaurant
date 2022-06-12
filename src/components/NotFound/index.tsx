import React from 'react'
import { NotFoundImg } from '../Assets'

const NotFound = ({text}: {text:string}) => {
  return (
    <div className='w-full p-5 flex flex-col items-center gap-4 justify-center'>
        <img className='h-[340px]' src={NotFoundImg} alt='empty cart' />
        <p className="text-textColor  font-semibold">{text}</p>
    </div>
  )
}

export default NotFound