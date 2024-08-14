import React from 'react'

function Details({title, data}) {
  return (
    <div className='flex justify-between'>
    <h1 className='text-[12px] text-white'>{title}</h1>
    <p className='text-[#B9B9B9] text-[14px]'>{data}</p>
  </div>
  )
}

export default Details