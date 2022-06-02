import React, { useState } from 'react'
import IndividualLamp from './components/IndividualLamp'
import './App.css'
import GlobalLamp from './components/GlobalLamp'


function App() {

  const [count, setCount] = useState(0)


  return (
    
    <div className='App'>
      <IndividualLamp />
      <GlobalLamp />
    </div>
   
  
  )
}

export default App