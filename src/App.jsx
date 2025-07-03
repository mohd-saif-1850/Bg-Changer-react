import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive");



  return (
    <>
      <div className='w-full h-screen flex justify-center flex-wrap duration-300'
      style={{backgroundColor : color}}
      >
        <div className='flex flex-wrap fixed bottom-12 gap-3 bg-amber-300 p-3 rounded-full'>
          <button
          onClick={() => setColor("red")}
          className='bg-red-500 px-3 py-2 rounded-full text-white'>Red</button>
          <button
          onClick={() => setColor("blue")}
          className='bg-blue-500 px-3 py-2 rounded-full text-white'>Blue</button>
          <button
          onClick={() => setColor("yellow")}
          className='bg-yellow-500 px-3 py-2 rounded-full text-white'>Yellow</button>
          <button
          onClick={() => setColor("green")}
          className='bg-green-500 px-3 py-2 rounded-full text-white'>Green</button>
          <button
          onClick={() => setColor("black")}
          className='bg-black px-3 py-2 rounded-full text-white'>Black</button>
          <button
          onClick={() => setColor("white")}
          className='bg-white px-3 py-2 rounded-full text-black'>White</button>
          <button
          onClick={() => setColor("teal")}
          className='bg-teal-500 px-3 py-2 rounded-full text-white'>Teal</button>
          <button
          onClick={() => setColor("pink")}
          className='bg-pink-500 px-3 py-2 rounded-full text-white'>Pink</button>
        </div>

      </div>
    </>
  )
}

export default App
