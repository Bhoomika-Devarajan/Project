import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';

export default function Register() {
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [pass,setpass]=useState();
  
  const handleSubmit = async (e) => {
    // await axios.post('http://localhost:3001/users',{"name":name,"pass":pass});
    // console.log("skdkdkdkkkdkd");
    e.preventDefault()
    try{
      await axios.post('http://localhost:8084/users',{name:name,email:email,password:pass})
      window.location.reload();
      return ("Registered")

    }
    catch(err){
      return "err";
    }
    
  }

  return (
    <body>
      <div className='REG'>
    <Box className='aa'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
        <div className='icon'>
        <h1>Registration Page</h1>
        </div>
      <div id="a">
        <TextField
        required
        id="outlined-required"
        label="Username"
        onChange={(e)=>{setName(e.target.value)}}
        />
        <br/>
        <TextField
        required
        id="outlined-required"
        label="Email Id"
        onChange={(e)=>setEmail(e.target.value)}
        />
        <br/>
        <TextField
        required
        id="outlined-password-input"
        label="Password"
        onChange={(e)=>{setpass(e.target.value)}}
        type="password"
          autoComplete="current-password"
          />
          <br/>
        {/* <TextField
        required
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          />
          <br/>
          <br/> */}
          
          
            
          <Button onClick={handleSubmit} variant='contained' color='inherit' className='abc'>Register</Button>
          
          <br></br><br></br>
            <h4>Already have an Account  
            <Link to='/pro1'>Sign In</Link>
            
            </h4>
       
      </div>
    </Box>
    </div>
          </body>
  );
}