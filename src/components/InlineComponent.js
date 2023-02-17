import React from 'react'

const header ={
    color:'blue',
    fontSize: '40px',
    textAlign: 'center'
};

export default function InlineComponent() {
  return (
    <div>
      <h1 style={header}>this is inline component.</h1>
    </div>
  )
}
