import { useState,useEffect } from 'react'
import React from 'react'
import './App.css'
import { Theamprovider } from './Context/Theam'
import TheamButton from './Components/TheamButton'
import Card from './Components/Card'

function App() {
  const [theamMode, setTheamMode] = useState();
  const lightTheam = () => {
    setTheamMode("light")
  }
  const darkTheam = () => {
    setTheamMode("dark")
  }

  // Actual change in theam 
  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(theamMode)
  }, [theamMode]);
  return (
    <Theamprovider value={{theamMode,lightTheam,darkTheam}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <TheamButton/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </Theamprovider>

  )
}

export default App
