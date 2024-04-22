import React, { useContext, useEffect } from 'react'
import "./home.css"
import { data } from './Mainrouter'

const Home = () => {
  // const hello = 'jjjj'
  // localStorage.setItem('hii',"hello")
  // const dataaa = localStorage.getItem('hii')
  // useEffect(() => {
  //     localStorage.removeItem('hii')
     
  //   },[])
  //   console.log(localStorage)

  const {input}=useContext(data)
  
  return (
    <div className='div1' >

      <div className='div2' >
        <div><h1 className='welcome' >WELCOME</h1></div>
        <div className='space' ></div>
        <div><h1 className='name' > {input.name}</h1></div>
      </div>
      
    

    </div>
  )
}

export default Home