import { Button } from 'react-bootstrap'
import React from 'react';
import Comp1 from './Comp1';
import { Route } from 'react-router-dom';


import Mainrouter from './componets/Mainrouter';
import { Routes } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';

function App() {
  // const nav = useNavigate()
  return (
    <div className="App main ">
      
    {/* <Button onClick={()=>nav('/home')}  className='bg-danger'>home</Button>
<Link to='/login'>login</Link> */}
        

      <Mainrouter/>
    
    </div>
  );
}

export default App;
