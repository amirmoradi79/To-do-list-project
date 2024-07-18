import { useState } from 'react'

import './App.css'
import { TodoContainer } from './components/main/todoContainer'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <TodoContainer />
  
    </>
  )
 
}

export default App
