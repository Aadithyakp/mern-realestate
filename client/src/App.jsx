import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import About from './pages/About'
export default function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/sign-in' element={<SignIn />}/>
          <Route path='/sign-up' element={<Signup />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </BrowserRouter>
    
  )
}
