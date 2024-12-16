import React from 'react'
import Navbar from './Navbar'

function Project() {
  return (
    <>
    <Navbar/>
    <div className='relative top-28 '>
      <div className='h-[150px] w-[300px] border border-4 border-red-500 rounded p-5'>
        <h3>1. Know your weather based on your city</h3>
        <a href="https://weather-travel-byabhi.vercel.app/" className='underline text-blue-500'>click here for live viewing the project</a>
      </div>
      <div className='h-[150px] w-[300px] border border-4 border-red-500 rounded p-5 mt-5' >
        <h3>2. Play Drum kit game</h3>
        <a href="https://drum-kit-game-iota.vercel.app/" className='underline text-blue-500'>click here for live viewing the project</a>
      </div>
    </div>
    </>
  )
}

export default Project;
