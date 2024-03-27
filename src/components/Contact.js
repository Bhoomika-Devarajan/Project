import IconButton from '@mui/material/IconButton';

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import * as React from 'react';

import Grid from '@mui/material/Unstable_Grid2';



import Container from "@mui/material/Container";

import Link from "@mui/material/Link";

import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';


import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {TextField

} from "@mui/material";

function linked()
{
  window.alert("Thanks for your feedback,Your response is recorded");
}


export default function CustomizedInputBase() {
  const galleryBoxStyle = {
    
    marginBottom: '20px',
    padding: '40px',
    textAlign:'center',
    color:'black',
    fontSize:'30px',
    backgroundColor:'white',
    maxWidth: '100%',
  

  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    alert('Form submitted!');
  };
  return (
<div class="all">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  color="success">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
            
          </IconButton>

          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
           ECOGROVE
          </Typography>
          <Button color="inherit" component={RouterLink} to="/login">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <ul className='grid' style={{listStyle:"none"}}>
        <li><Button color="inherit" component={RouterLink} to="/h">Home</Button></li>
        <li><Button color="inherit" component={RouterLink} to="/pro">About Us</Button></li>
        <li><Button color="inherit"component={RouterLink} to="/ab">Premium</Button></li>
        <li><Button color="inherit"component={RouterLink} to="/con">Contact</Button></li>
    </ul>
   
   
            <br></br>
            

     <Container style={{marginTop:"40px"}}> 
        <Grid container spacing={9}>
          {/* Box 1 */}
          <Grid item xs={12} md={6} >
            <Box sx={galleryBoxStyle}>
           
   
          <Typography variant="h5" color="text.primary" gutterBottom>
          <h2>GET IN TOUCH WITH US</h2>
          </Typography>
          <Typography color="text.secondary">
           <p style={{fontSize:"19px"}}> 123 RajNagar Street, Coimbatore, India.
           <br></br>
            Email:  EcoGrove@gmail.com
        
            </p>
          </Typography>
          <br></br>
          <Typography>
            <p>We want to hear from you! Questions, comments or feedbacks on your orders placed. Shoot us an email @ support@greenstation.co</p>
          </Typography>
          <br></br>
          <Typography>
            <p style={{fontSize:"19px",textAlign:"left"}}>
            Contact: <br></br>
            +91 9701 111 633
            </p>
          </Typography>
        
          <br></br>
          <Typography>
            <p style={{fontSize:"15px",textAlign:"left"}}>
            If you have questions or comments, please get a hold of us in whichever way is most convenient.</p>
          </Typography>
        
          <br></br>
          <Typography>
            <p style={{fontSize:"15px",textAlign:"left"}}>
            For any partnerships, Business or collaboration enquiry please mail us at info@greenstation.co </p>
          </Typography>
         <br></br>
          <InstagramIcon />
        <TwitterIcon />
        <YouTubeIcon />
            </Box>
           
          </Grid>
          {/* Box 2 */}
          <Grid item xs={12} md={6}>
            <Box sx={galleryBoxStyle}>
            <Container maxWidth="md" sx={{ mt: 10 }}>
            <Typography>
            <p style={{fontSize:"15px",textAlign:"left"}}>
          SHARE YOUR FEEDBACK HERE</p>
          </Typography>
    
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        type="email"
        required
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} onClick={linked}>
        Submit
      </Button>
    </form>
    </Container>
      </Box>
          </Grid>
          
        </Grid>
      
      </Container>
    
 
   <div class="bo">
   <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
   
      <Container maxWidth="lg" color="success">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are EcoGrove company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
              Email: EcoGrove@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
    
   </div>
      </div>
  );
}