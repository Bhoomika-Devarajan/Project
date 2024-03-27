
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useState} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
  export default function  FormPropsTextFields() {
    const navigate=useNavigate();
    const [name,setName]=useState();
    const [pass,setpass]=useState();
    const [data,setData]=useState({});
    // const [p,setp]=useState();
    const [success,setSuccess]=useState(false);
    const [error,setError]=useState(false);
    // const navigate=useNavigate();
    // const navigate=useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent default form submission
      try{
        const res = await axios.get('http://localhost:8084/users')
        setData(res.data);
        const email=data.find((e)=>{
          return e.email===name
        })
        if(email.email===name){
          if(email.password===pass){
            navigate('/h')
            
          }
          else{
            console.log("Failed")
          }
        
          
        }
        else{
          console.log("Failed")
        }
        
        

      }
      catch(err){
        console.log(err)
      }
      
    };
  return (
    <body>
      <div className='login'>

    
    <Box className='aa'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div className='icon'>
        <AccountCircleIcon sx={{fontSize:"80px",color:''}} />
        <h3>Sign In</h3>
        </div>
      <div id="a">
      <form onSubmit={handleSubmit}>
        <TextField
        required
        id="outlined-required"
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        label="Username or Email Id" 
        />
        <br/>
        <TextField
        required
          id="outlined-password-input"
          label="Password"
          value={pass}
         onChange={(e)=>{setpass(e.target.value)}}
          type="password"
          autoComplete="current-password"
          />
          <br/>
   
          {error&&<p>Invalid UserName or Password</p>}
          
          <Button variant="contained" color='inherit' className='abc' type='submit'>Sign In</Button>
           
          <br></br><br></br>
            <h4>Dont have an Account ? 
            <Link to='/registration'>Create New Account</Link>  
            </h4>
    </form>
      </div>
    </Box>
    </div>
          </body>
  );
}
