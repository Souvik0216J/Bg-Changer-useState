import { useState } from 'react'
import './App.css'

function App() {
  // UseState help to change or set value of any variable.
  const [BgColor, setBgColor] = useState("black")


  return (
    <>
      <div className='w-full h-screen duration-400 ' style={{ backgroundColor: BgColor }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
          <div className='flex flex-wrap justify-center gap-3  bg-white px-2 py-2 rounded-3xl'>
            <button className='bg-red-500 rounded-xl px-4 py-2 m-2 text-white font-medium cursor-pointer hover:bg-red-600' onClick={() => setBgColor("red")}>Red</button>
            <button className='bg-green-500 rounded-xl px-4 py-2 m-2 text-white font-medium cursor-pointer hover:bg-green-600' onClick={() => setBgColor("green")}>Green</button>
            <button className='bg-blue-500 rounded-xl px-4 py-2 m-2 text-white font-medium cursor-pointer hover:bg-blue-600' onClick={() => setBgColor("blue")}>Blue</button>
            <button className='bg-cyan-500 rounded-xl px-4 py-2 m-2 text-white font-medium cursor-pointer hover:bg-cyan-600' onClick={() => setBgColor("cyan")}>Cyan</button>
            <button className='bg-orange-500 rounded-xl px-4 py-2 m-2 text-white font-medium cursor-pointer hover:bg-orange-600' onClick={() => setBgColor("orange")}>Orange</button>
            <button className='bg-purple-500 rounded-xl px-4 py-2 m-2 text-white font-medium cursor-pointer hover:bg-purple-600' onClick={() => setBgColor("purple")}>Purple</button>
            <button className='bg-yellow-400 rounded-xl px-4 py-2 m-2 text-white font-medium cursor-pointer hover:bg-yellow-600' onClick={() => setBgColor("yellow")}>Yellow</button>
          </div>
        </div>
      </div>
    </>
  )
}


export default App
