import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import * as React from 'react';

import Grid from '@mui/material/Unstable_Grid2';



import Container from "@mui/material/Container";

import Link from "@mui/material/Link";

import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';


import { useContext } from 'react';
import { Context } from '../App';


export default function CustomizedInputBase() {
  const hello=useContext(Context);
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
            ECOGROVE {hello}
          </Typography>
          <Button color="inherit" href="/pro1">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <ul className='grid' style={{listStyle:"none"}}>
        <li><Button color="inherit" component={RouterLink} to="/h">Home</Button></li>
        <li><Button color="inherit" component={RouterLink} to="/pro">About Us</Button></li>
        <li><Button color="inherit"  component={RouterLink} to="/ab">Premium</Button></li>
        <li><Button color="inherit"component={RouterLink} to="/con">Contact</Button></li>
        </ul>
    
    <div class="se">
    <Paper 
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',position:"static" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for your items here"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 30, m: 0.5 }} orientation="vertical" />
      
    </Paper>
    </div>
    <br></br>
    <Card sx={{ maxWidth: 1500 }}>
      <CardActionArea>
        <CardMedia
          
          height="140"
          
        />
        <CardContent>
            <div class="co">
          <Typography gutterBottom variant="h5" component="div" style={{fontFamily:'Roboto'}}>
                  FRESH    ||    ORGANIC    ||    WHOLSESOME    ||    DELIVERED DIRECT FROM FARMS  ||  EXPLORE FARM FRESH ORGANIC ITEMS NOW!  
          </Typography></div>
          
        </CardContent>
      </CardActionArea>
    </Card>
    <br></br>
   




    
 
    
    
          <div class="bor">
            
            <div className='txt' style={{position: "absolute", left: "20", top:"170"}}>
                 <h1><p>Authentic Organic Fruits</p>
                 <p>&</p> 
                 <p>Vegetables</p> 
                  <p>Farm to your doorstep</p></h1>
                  </div>
          
          </div>
        <div class="back">
        <div class="or"></div>
          <div class="or2"><h4>Organic is something we can all partake of and benefit from. When we demand organic, we are demanding poison-free food.</h4> </div>
          
      </div>
  
    
   
    <Container maxWidth="md" sx={{ mt: 10 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 190,
              height: 200,
            },
          }}
        >
          <Paper elevation={8}>
            <div className='fruits'>
                <p style={{ position: "absolute", bottom: -500,left: 390}}><a href="/f">FRUITS</a></p>

            </div>
            </Paper>
          <Paper elevation={8}>
            <div className='veg'>
            <p style={{ position: "absolute", bottom: -500,left: 570}}><a href="/v">VEGETABLES</a></p>

            </div>
            </Paper>
          <Paper elevation={8}>
            <div className='exotic'>
            <p style={{ position: "absolute", bottom: -500,left: 790}}><a href="/e">EXOTIC</a></p>

            </div>
            </Paper>
          <Paper elevation={8}>
            <div className='other'>
            <p style={{ position: "absolute", bottom: -500,left: 950}}><a href="/o">OTHER GROCERIES</a></p>

            </div>
            </Paper>
        </Box>
      </Container>
            <br></br>
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