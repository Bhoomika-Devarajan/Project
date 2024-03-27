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






export default function CustomizedInputBase() {
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
        <li><Button color="inherit"component={RouterLink} to="/pro">About Us</Button></li>
        <li><Button color="inherit"component={RouterLink} to="/ab">Premium</Button></li>
        <li><Button color="inherit"component={RouterLink} to="/con">Contact</Button></li>
    </ul>
    <div className="grid1">
        <div class="g"></div>
        <div className="grid2">
            <h1 className="hhh">What we Do?</h1><br></br>
        <h3 >
All our food comes straight from our network of farms to your fork: We have our local farm based in Faridabad, Haryana where we grow seasonal vegetables.

We salso source from certified farmers we know and trust, and who share in our commitment to quality and sustainability. You can visit our farms to see for yourself how our
 where our delicious vegetables are grown and how our mouth-watering food is produced.</h3>


        </div>
    </div>

    
    <div className="grid11">
        <div className="grid22">
            <h1 className="hhh">Why EcoGrove?</h1><br></br>
        <h3 >
        Why choose Organic?
We’re dedicated to growing, producing and cooking seasonal, organic food. It must be fresh, and full of flavour, packed with the many vitamins and minerals that come from natural food, picked and eaten at its peak.

As part of a mission to reverse the industrialisation of our food and the pollution of the land that nurtures it, our suppliers practise organic, sustainable farming with far fewer pesticides and herbicides on our crops.</h3>


        </div>
        <div class="gg"></div>
    </div>

    
   
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
              We are Ecogrove company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
              Email: ecogrove@example.com
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