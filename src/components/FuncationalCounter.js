import React, { useState } from 'react'

export default function FuncationalCounter() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () =>{
        console.log('the buttion is clicked.')
        setCounter(counter+1)
    }
    const handleDecrement = ()=>{
        setCounter(counter -1)
    }
    return (
    <div>
      <h1>Counter Value is: {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

    </div>
  )
}
