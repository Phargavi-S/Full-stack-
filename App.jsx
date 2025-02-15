import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let name="PHARGAVI S"
  const details={
    name:"PHARGAVI S",
    age:19,
    roll:14
  }
  alert("Hi Welcome ")
 console.log('My name is ',details.name)


  return (
    <>
      <h2 style={{textAlign:"center"}}>Inline css</h2>
      <h1 style={{textAlign:"center",color:"Blue"}}>PHARGAVI S</h1><br></br>
      <h2 style={{textAlign:'center'}}>External css</h2>
      <p className='info'>Name : {details.name}</p>
    
    </>
  )
}
