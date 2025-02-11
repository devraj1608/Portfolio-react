import { useState } from 'react'
import Navbar from './Components/Navbar'
import Content from './Components/Content'
import Resume from './Components/Resume'
import Skills from './Components/Skills'
import About from './Components/About'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Components/Contact'




function App() {
 

  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Content/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path='/myskills' element={<Skills/>}></Route>
      <Route path='/Skills' element={<Skills/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>

    
     
    </>
  )
}

export default App
