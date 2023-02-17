import React from 'react'

export default function FunctionEvent() {
  // function handleClick(){
  //   console.log('button is clicked.')
  // }

  const handleClick =() =>{
    console.log('button is clicked.')
  }
  return (
    <div>
      Functional components<br></br>
      <button onClick={handleClick}>Click Here</button>
    </div>
  )
}
