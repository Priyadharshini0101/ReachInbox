import React from 'react'

function Activity({step,img,detail}) {
  return (
    <div className='flex gap-[25px] px-[8px]'>
    <img src="/src/assets/mail.svg"></img>
    <div className='flex flex-col gap-[10px]'>
      <h1 className='font-semibold text-[13px] text-white'>{'Step ' + step + ': Email'}</h1>
      <p className='text-[10px] text-[#b9b9b9] flex gap-[5px]'><img src={img}></img>{detail}</p>
    </div>
    </div>
  )
}

export default Activity