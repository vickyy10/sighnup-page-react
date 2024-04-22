import React, { createContext, useState } from 'react'
import Home from './Home'
import Login from './Login'
import video from '../componets/assets/movie.mp4'
import Registration from './Registration'
import { Route, Routes } from 'react-router-dom'
import './main.css'

export const data=createContext()

const Mainrouter = () => {


  const [input,setinput]=useState({
    name:'',
    id:'',
    pass:'',
    cpass:''
  })




  return (
    <div className='mmain' >

    

<video className='bg-video' src={video} autoPlay loop muted />
        
        <data.Provider value={{input,setinput}}>  
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Registration/>}/> 
        </Routes>
        </data.Provider>
      
    </div>
  )
}

export default Mainrouter
