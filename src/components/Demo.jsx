import React, { useState } from 'react'

function getData(data){
    console.log(data)
}
const Demo = () => {
    const[text,setText] = useState(0)
  return (
    <div className='w-96 h-96 gap-5 border border-black relative top-16 m-5 flex flex-col'>
      <input type="number" autoFocus value={text} onChange={(e)=>{
        setText(e.target.value)
        getData(text)
        }}  className="border p-2 outline-none border-black"  />
      <span className="">hello</span>
    </div>
  )
}

export default Demo
