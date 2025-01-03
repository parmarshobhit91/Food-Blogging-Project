import { useState } from 'react'
import './App.css'
// import '../components/Navbar' 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <h1 className='text-3xl font-bold underline'>This is our first heading</h1>
        
      </div>
    </>
  )
}

export default App
