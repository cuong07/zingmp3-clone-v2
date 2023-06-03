import { useState } from 'react'
import Public from './layouts/Public'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='max-h-screen bg-slate-500 overflow-hidden'>
        <Public />
      </div>
    </>
  )
}

export default App
