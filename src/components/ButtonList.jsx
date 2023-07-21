import React from 'react'

const ButtonList = () => {
  return (
    <div className='hideScroll flex gap-3 overflow-scroll  '>
      <Button name={'All'}/>
      <Button name={'Computer programming'}/>
      <Button name={'Website'}/>
      <Button name={'Music'}/>
      <Button name={'Gaming'}/>
      <Button name={'Live'}/>
      <Button name={'Sales'}/>
      <Button name={'Podcasts'}/>
      <Button name={'Stocks'}/>
      <Button name={'Vlogs'}/>
      <Button name={'Tourism'}/>
      <Button name={'Gadgets'}/>
      <Button name={'Podcasts'}/>
      <Button name={'Stocks'}/>
      <Button name={'Vlogs'}/>
      <Button name={'Tourism'}/>
      <Button name={'Gadgets'}/>
      <Button name={'Podcasts'}/>
      <Button name={'Stocks'}/>
      <Button name={'Vlogs'}/>
      <Button name={'Tourism'}/>
      <Button name={'Gadgets'}/>
    </div>
  )
}
const Button = ({name})=>{
    return(
        <button className="px-4 py-1.5 text-sm rounded-md bg-gray-200 whitespace-nowrap">
            {name}
        </button>
    )
}

export default ButtonList
