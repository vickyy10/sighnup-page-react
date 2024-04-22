import React, { useContext, useEffect, useRef, useState } from 'react'
import"./login.css"
import { data } from './Mainrouter'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';


const Login = () => {
  
const nav = useNavigate()

  const {input,setinput}=useContext(data)


 const [input2,setinput2]=useState({
  logid:'',
  logpass:''
 })

  const loginid=(iid)=>{
    setinput2({...input2,logid:iid.target.value})
  }
  
  const loginpss=(pss)=>{
    setinput2({...input2,logpass:pss.target.value})
  }
  console.log(input2);

  console.log("login page");
  
 
 

  const handlesubmit= (e)=>{
    e.preventDefault();
  }
  

 

  


 


  return (
    <div className='MainDiv'>
    
    <div className=' container subbdiv' >
    <div  >
      <h1 className='heading'  >Login</h1>
      </div>

      <div className='container namediv ' >
      <input className='inputbox' type='email or number' placeholder='Enter your email adress' onChange={(iid)=>{loginid(iid)}} />
       </div>
       <div className='container namediv ' >
       <input className='inputbox' type='password' placeholder='Password'  onChange={(pss)=>{loginpss(pss)}} />
     </div>

      <div className=' container namediv ' >
      <Button className='loginbtn' onClick={()=>{
        if(input.pass===input2.logpass && input.id=== input2.logid){
        nav('/home')
      }
      else{
        alert("incorrect Email or password")
      }
      }}  >LOGIN</Button>
      
      </div>
     
  </div>
 </div>
  )
}

export default Login