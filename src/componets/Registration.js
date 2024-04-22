import React, { useContext } from 'react'
import './Reg.css'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { data  } from './Mainrouter';


import Toast from 'react-bootstrap/Toast';

function BasicExample() {
  return (
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
  );
}





const Registration = () => {

    const {input,setinput}=useContext(data)

const nav = useNavigate()

const inputname=(n)=>{
  setinput({...input,name:n.target.value});
}



const inputid=(id)=>{
  setinput({...input,id:id.target.value});
}

const inputdata=(p)=>{
  setinput({...input,pass:p.target.value});
}

const inputcp=(cp)=>{
  setinput({...input,cpass:cp.target.value});
}

  console.log(input)

  const handlesubmit= (e)=>{
    e.preventDefault();
  }

  return (


    <div className='MainDiv'>

    <video>
      <source src='https://youtu.be/4mL4RdY9BsQ?si=sY7oY2XBRChY-dEx' type='video/mp4' />
    </video>
   
      <div  className='subdiv'>
      <form onSubmit={handlesubmit} >
     
       <div className='container heading' >
       <h1  >Sign up</h1>
       </div>
          <div className='container namediv ' >
        <input className='inputbox' type='name' placeholder='Enter your name'   onChange={(n)=>{inputname(n) }} />
        </div>
        <div className='container namediv ' >
        <input className='inputbox'  type='username' name='Email adress' placeholder='Enter Email adress'  onChange={(id)=>{inputid(id) }} />
       </div>
        <div className='container namediv ' >
        <input className='inputbox' type='password'  name='password' placeholder='Password' onChange={(p)=>{inputdata(p) }} />
        </div>
        <div className='container namediv' >
        <input className='inputbox' type='password' name='confpassword' placeholder='Confirm Password'  onChange={(cp)=>{inputcp(cp) }}  />
        </div>
        

        <div className='container namediv'  >
        <Button className='signbtn ' onClick={()=>{
          if(input.pass===input.cpass){
            if(input.pass.length>4){
            nav('./login')
          }
          else{  
            alert("passsword must be 5 digit")
          }
          }
          else{
            alert("password does not match")
          }
        }} >submit</Button>
        </div>
        </form>
        </div> 
    </div>

   
   
  )
}

export default Registration